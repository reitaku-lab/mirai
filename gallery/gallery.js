const posterUrl = './poster.png';
const gallery = document.querySelector('#gallery');
const sentinel = document.querySelector('#stream-sentinel');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');

const firstViewPhotoNumbers = new Set([
  6, 46, 47, 49, 52, 56, 57, 58, 59, 60, 61, 62, 68,
  70, 74, 76, 77, 84, 87, 89, 90, 92, 94, 95, 98, 100,
]);

const photos = Array.from({ length: 105 }, (_, index) => ({
  number: index + 1,
  url: `./ishiguro-${index + 1}.jpg`,
  firstView: firstViewPhotoNumbers.has(index + 1),
}));

const bandPatterns = [
  { className: 'band-1', count: 4 },
  { className: 'band-2', count: 5 },
  { className: 'band-3', count: 6 },
  { className: 'band-4', count: 3 },
];

let queue = [];
let previousBand = -1;
let isAppending = false;
let lightboxItems = [];
let lightboxIndex = -1;
let lightboxTransition = 0;
let lightboxTimer;
let swipeStartX;
let swipeStartY;
let suppressLightboxClickUntil = 0;

const lightboxFadeDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 160;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function takePhotos(count) {
  while (queue.length < count) queue.push(...shuffle(photos));
  return queue.splice(0, count);
}

function createTile(photo, { eager = false, poster = false } = {}) {
  const button = document.createElement('button');
  const image = document.createElement('img');

  button.className = 'tile';
  if (poster) {
    button.classList.add('tile--poster');
  }
  button.type = 'button';
  button.setAttribute('aria-label', poster ? 'Open poster in fullscreen' : `Open photograph ${photo.number} in fullscreen`);
  image.src = photo.url;
  image.alt = '';
  image.decoding = 'async';
  image.loading = eager ? 'eager' : 'lazy';
  if (eager) image.fetchPriority = 'high';

  const reveal = () => image.classList.add('is-loaded');
  image.addEventListener('load', reveal, { once: true });
  if (image.complete) reveal();

  button.addEventListener('click', () => openLightbox(button));
  button.append(image);
  return button;
}

function createHero() {
  const section = document.createElement('section');
  const heroPhotos = shuffle(photos.filter((photo) => photo.firstView)).slice(0, 5);
  const heroPhotoNumbers = new Set(heroPhotos.map((photo) => photo.number));
  const poster = { url: posterUrl, number: 'poster' };

  queue = shuffle(photos.filter((photo) => !heroPhotoNumbers.has(photo.number)));

  section.className = 'mosaic mosaic--hero hero-poster-grid';
  section.setAttribute('aria-label', 'Opening photo mosaic');

  section.append(createTile(poster, { eager: true, poster: true }));
  heroPhotos.forEach((photo) => section.append(createTile(photo, { eager: true })));

  gallery.append(section);
}

function chooseBand() {
  let index;
  do index = Math.floor(Math.random() * bandPatterns.length);
  while (index === previousBand);
  previousBand = index;
  return bandPatterns[index];
}

function appendBand() {
  const pattern = chooseBand();
  const section = document.createElement('section');
  const height = Math.round(55 + Math.random() * 32);

  section.className = `mosaic ${pattern.className}`;
  section.style.setProperty('--mosaic-height', `${height}svh`);
  section.setAttribute('aria-label', 'Photo mosaic');
  takePhotos(pattern.count).forEach((photo) => section.append(createTile(photo)));
  gallery.append(section);
}

function appendBatch() {
  if (isAppending) return;
  isAppending = true;
  for (let i = 0; i < 3; i += 1) appendBand();
  requestAnimationFrame(() => { isAppending = false; });
}

function updateLightboxLabel() {
  lightbox.setAttribute(
    'aria-label',
    `Expanded image ${lightboxIndex + 1} of ${lightboxItems.length}. Use Left and Right Arrow keys to navigate.`,
  );
}

function buildLightboxSequence(tile) {
  const renderedUrls = Array.from(gallery.querySelectorAll('.tile img'), (image) => image.src);
  const allPhotoUrls = photos.map((photo) => new URL(photo.url, document.baseURI).href);
  const seen = new Set();
  const sequence = [];

  [...renderedUrls, ...shuffle(allPhotoUrls)].forEach((url) => {
    if (seen.has(url)) return;
    seen.add(url);
    sequence.push(url);
  });

  const selectedUrl = tile.querySelector('img').src;
  return { sequence, selectedIndex: sequence.indexOf(selectedUrl) };
}

function openLightbox(tile) {
  const { sequence, selectedIndex } = buildLightboxSequence(tile);
  lightboxItems = sequence;
  lightboxIndex = selectedIndex;
  lightboxImage.src = lightboxItems[lightboxIndex];
  lightboxImage.classList.remove('is-switching');
  updateLightboxLabel();
  lightbox.hidden = false;
  document.body.classList.add('lightbox-open');
  lightbox.focus({ preventScroll: true });
}

function navigateLightbox(direction) {
  if (lightbox.hidden || lightboxItems.length < 2) return;

  lightboxIndex = (lightboxIndex + direction + lightboxItems.length) % lightboxItems.length;
  updateLightboxLabel();

  const transition = ++lightboxTransition;
  const nextUrl = lightboxItems[lightboxIndex];
  clearTimeout(lightboxTimer);
  lightboxImage.classList.add('is-switching');

  lightboxTimer = window.setTimeout(() => {
    if (transition !== lightboxTransition) return;

    const reveal = () => {
      if (transition !== lightboxTransition) return;
      requestAnimationFrame(() => lightboxImage.classList.remove('is-switching'));
    };

    lightboxImage.addEventListener('load', reveal, { once: true });
    lightboxImage.src = nextUrl;
    if (lightboxImage.complete) reveal();
  }, lightboxFadeDuration);
}

function closeLightbox() {
  lightboxTransition += 1;
  clearTimeout(lightboxTimer);
  lightbox.hidden = true;
  lightboxImage.classList.remove('is-switching');
  lightboxImage.removeAttribute('src');
  lightboxItems = [];
  lightboxIndex = -1;
  document.body.classList.remove('lightbox-open');
}

lightbox.tabIndex = -1;
lightbox.addEventListener('pointerdown', (event) => {
  if (event.pointerType !== 'touch') return;
  swipeStartX = event.clientX;
  swipeStartY = event.clientY;
});
lightbox.addEventListener('pointerup', (event) => {
  if (event.pointerType !== 'touch' || swipeStartX === undefined) return;

  const deltaX = event.clientX - swipeStartX;
  const deltaY = event.clientY - swipeStartY;
  swipeStartX = undefined;
  swipeStartY = undefined;

  if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
  suppressLightboxClickUntil = Date.now() + 500;
  navigateLightbox(deltaX < 0 ? 1 : -1);
});
lightbox.addEventListener('pointercancel', () => {
  swipeStartX = undefined;
  swipeStartY = undefined;
});
lightbox.addEventListener('click', () => {
  if (Date.now() < suppressLightboxClickUntil) {
    suppressLightboxClickUntil = 0;
    return;
  }
  closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (lightbox.hidden) return;

  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') navigateLightbox(-1);
  if (event.key === 'ArrowRight') navigateLightbox(1);

  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') event.preventDefault();
});

createHero();
appendBatch();

const observer = new IntersectionObserver((entries) => {
  if (entries.some((entry) => entry.isIntersecting)) appendBatch();
}, { rootMargin: '1800px 0px' });

observer.observe(sentinel);
