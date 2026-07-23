import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { defineConfig } from 'vite';

function copyGalleryImages() {
  return {
    name: 'copy-gallery-images',
    async closeBundle() {
      const files = await readdir('.');
      const images = files.filter((file) => /^ishiguro-\d+\.jpg$/.test(file) || file === 'poster.png');
      await mkdir('dist', { recursive: true });
      await Promise.all(images.map((file) => copyFile(file, `dist/${file}`)));
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [copyGalleryImages()],
});
