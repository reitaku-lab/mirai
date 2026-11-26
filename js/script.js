document.addEventListener('DOMContentLoaded', () => {
    

    document.documentElement.classList.add("light-theme");

    const translations = {
        ja: {
            'meta.title': '私たちの未来ホームページ',
            'nav.details': 'イベント内容',
            'nav.program': 'プログラム',
            'nav.registration': 'お申し込み',
            'nav.access': 'アクセス',
            'nav.topAlt': 'トップ',
            'nav.menuLabel': 'メニューを開く',
            'hero.subtitleTop': '石黒浩教授とともに考える',
            'hero.title': '私たちの未来',
            'hero.video': '動画を見る',
            'hero.videoLead': 'イベント当日の映像を公開中',
            'hero.videoNote': '本編・ドキュメンタリー版',
            'archive.heading': '映像で振り返る、私たちの未来。',
            'archive.pending': '公開準備中',
            'archive.editedTitle': 'イベント本編',
            'archive.editedDescription': '2026年7月20日、高島市民会館で開催された「石黒浩教授とともに考える『私たちの未来』」。<br><br>50年後の未来について考え、語り合った当日のイベントの模様を、全編にわたってお届けします。<br><br>撮影・編集は、学生が手がけました。',
            'archive.fullTitle': 'ドキュメンタリー版',
            'archive.youtube': 'YouTubeで見る',
            'archive.fullDescription': 'The Pen and the Voice<br><br>高島に生きるアート作家が描く、50年後の未来とは——。<br><br>松戸の大学生ラッパーとロボット研究者・石黒浩教授が、アートやテクノロジーを通して、これからの社会と人間のあり方を考えるトークドキュメンタリー。',
            'hero.tagline': '50年後の未来は、<span class="text-m">「どこか」</span>ではなく、<span class="text-m">「ここ」</span>から始まる',
            'hero.date': '2026年7月20日（月・祝）開催',
            'hero.venue': '滋賀県・高島市民会館',
            'details.heading': 'イベント内容',
            'details.intro': '<strong><a href="https://www.city.takashima.lg.jp/soshiki/kanmin/mirai/1/3/13269.html" target="_blank" rel="noopener noreferrer">高島市と麗澤大学の包括連携協定締結</a></strong>を記念し、<br>高島市出身で世界的に活躍する<br>ロボット研究者・石黒浩教授が登壇し',
            'details.introHeading': '未来を語り合う対話型<br>イベントを開催します',
            'details.themeLead': 'テーマは',
            'details.theme': '「人間らしさ」や「テクノロジー」<br>「地域の未来」',
            'details.model': '高島市をモデルとしながら、',
            'details.question': 'これからの社会について<br>一緒に考えてみませんか？',
            'video.intro': '高島市の市長と対話ロボットとの特別対談動画を、4本のタブで切り替えてご覧いただけます。',
            'video.tab1': '第1話',
            'video.tab2': '第2話',
            'video.tab3': '第3話',
            'video.tab4': '第4話',
            'program.heading': 'プログラム',
            'program.talk': '<strong>●石黒浩教授によるトーク</strong><br>　テーマ「いのちの未来」',
            'program.presentation': '<strong>●中高大生プレゼンテーション</strong><br>　テーマ「50年後の地域未来」',
            'program.panel': '<strong>●パネルトーク</strong><br>　テーマ：高島から考える50 年後の未来 ― 地域・自然・文化、そして「人」のつながり　<br>　パネリスト：石黒浩教授、今城克啓 高島市長、高島市高校生、麗澤大学生<br>　モデレーター：黒須里美（麗澤大学）',
            'program.lobby': '<strong>●ロビーイベント</strong><br>　対話型ロボットの展示・体験<br>　お子様も一緒にご参加いただけます。<br>　<span class="program-note" style="font-size:0.85em; opacity:0.8;"></span>',
            'speaker.imageAlt': '石黒浩教授',
            'speaker.intro': '高島市出身で世界的に活躍する',
            'speaker.name': 'ロボット研究者 石黒浩 教授',
            'speaker.outro': 'が登壇。',
            'speaker.summary': '経歴を見る',
            'speaker.bio': '石黒浩／いしぐろひろし（ロボット学者），滋賀県生まれ<br>大阪大学大学院基礎工学研究科教授（大阪大学栄誉教授）<br>ATR石黒浩特別研究所客員所長（ATRフェロー）<br>ムーンショット型研究開発制度プロジェクトマネージャー<br>大阪関西万博EXPO2025テーマ事業プロデューサー<br>AVITA株式会社CEO代表取締役<br>遠隔操作ロボット（アバター）や知能ロボットの研究開発に従事<br>人間酷似型ロボット（アンドロイド）研究の第一人者．<br><br>2011年：大阪文化賞受賞<br>2015年：文部科学大臣表彰受賞およびシェイク・ムハンマド・ビン・ラーシド・アール・マクトゥーム知識賞受賞<br>2020年：立石賞受賞<br>2023年：市村学術賞功績賞受賞<br>麗澤大学特別招聘教授',
            'registration.heading': 'お申し込み',
            'registration.period': '<strong>申込期間：</strong>6月1日（月）～ 7月10日（金）',
            'registration.desc': '定員は650名（先着順）です。',
            'registration.webHeading': 'WEBからのお申し込み',
            'registration.closed': '<p class="registration-closed-status">会場参加受付終了</p><p class="registration-closed-lead">地域未来プロジェクト『石黒浩教授とともに考える「私たちの未来」』は、多くの皆さまからお申し込みをいただき、会場参加が定員に達しました。</p><p>たくさんのお申し込みをいただき、誠にありがとうございます。</p><p>このたび、ご来場が叶わない皆さまにも本イベントをご覧いただけるよう、ライブ配信を実施することとなりました。</p><p>会場での参加受付は終了しておりますが、ぜひライブ配信を通じて、未来の地域社会やテクノロジーについて考える機会としてご参加ください。</p><a class="live-stream-button" href="https://www.youtube.com/live/qEwOIGF_aI0" target="_blank" rel="noopener noreferrer">ライブ配信を視聴する</a>',
            'registration.notesHeading': '注意事項 <span>※必ずお読みください</span>',
            'registration.notes': '<li><strong>会場内での写真撮影、動画撮影および録音はご遠慮ください。</strong></li><li>本イベントでは、記録、広報および学生の事後学習を目的として、<br><strong>主催者による写真および動画の撮影を行います。</strong><br>撮影した写真・映像は、主催者の広報媒体（ホームページ、SNS、刊行物等）への掲載・使用ならびに学生の事後学習等に活用させていただく場合がございます。 参加申し込みをもって、上記内容についてご同意いただいたものとさせていただきます。 何卒ご理解とご協力を賜りますようお願いいたします。</li><li>ご記入いただいた個人情報は、<br><strong>本イベントの運営（参加者管理、連絡等）の目的にのみ使用し、主催者において適切に管理いたします。</strong><br>法令に基づく場合を除き、ご本人の同意なく第三者に提供することはありません。</li><li>荒天によりイベントを中止、又は内容を変更する場合があります。</li>',
            'access.heading': 'アクセス',
            'access.venue': '会場：高島市民会館',
            'access.address': '住所：滋賀県高島市今津町中沼1-3-1',
            'access.byCar': '<strong>【お車でお越しの場合】</strong>',
            'access.parkingIntro': '・駐車場について<br>お車でお越しの方は、下記の駐車場をご利用ください。<br>イベント参加者用の駐車場として、以下の2か所をご利用いただけます。<br>いずれも<strong>駐車料金は無料</strong>です。',
            'access.parkingDetails': '<br><strong><a href="https://maps.app.goo.gl/43fuvQzL6xvFoyfZ7">①高島市民会館駐車場</a></strong><br>会場隣接地にある駐車場です。<br>会場に最も近い駐車場のため、混雑が予想されます。<br><br><strong><a href="https://maps.app.goo.gl/okXeY8EeM6yvv7E8A">②今津駐車場</a></strong><br>会場から徒歩約10分の駐車場です。<br>会場隣接駐車場が混雑している場合は、こちらのご利用にご協力ください。<br><br>※駐車場には限りがあります。できるだけ公共交通機関の利用や乗り合わせにご協力ください。<br>※近隣施設・道路・私有地への駐車はご遠慮ください。',
            'access.publicTransport': '<strong>【公共交通機関をご利用の場合】</strong>',
            'access.train': 'JR湖西線 近江今津駅より徒歩5分',
            'contact.heading': 'お問い合わせ',
            'contact.faq': 'よくあるご質問は、<strong><a href="https://tayori.com/faq/80dd614a06215250dd0284c9f050dc1548723f98/">こちら</a></strong>をご確認ください。',
            'contact.form': 'その他のお問い合わせは、<strong><a href="https://tayori.com/form/d3dc8d7b5d060dbd209c7605bc4f23163b62b13f">こちらのお問い合わせフォーム</a></strong>からお願いいたします。',
            'footer.organizers': '共催：高島市／高島市教育委員会／麗澤大学／公益財団法人モラロジー道徳教育財団<br>後援：麗澤大学麗澤会',
            'scroll.cta': 'お申し込み'
        },
        en: {
            'meta.title': 'Our Future Official Website',
            'nav.details': 'Event',
            'nav.program': 'Program',
            'nav.registration': 'Register',
            'nav.access': 'Access',
            'nav.topAlt': 'Back to top',
            'nav.menuLabel': 'Open menu',
            'hero.subtitleTop': 'Thinking with Professor Hiroshi Ishiguro',
            'hero.title': 'Our Future',
            'hero.video': 'Watch the video',
            'hero.videoLead': 'Watch footage from the event',
            'hero.videoNote': 'Main event / documentary',
            'archive.heading': 'Revisit Our Future through film.',
            'archive.pending': 'Coming soon',
            'archive.editedTitle': 'Main event',
            'archive.editedDescription': 'On July 20, 2026, Takashima Civic Hall hosted Our Future: Thinking with Professor Hiroshi Ishiguro.<br><br>Watch the complete event, where participants explored and discussed the future 50 years from now.<br><br>Filmed and edited by students.',
            'archive.fullTitle': 'Documentary',
            'archive.youtube': 'Watch on YouTube',
            'archive.fullDescription': 'The Pen and the Voice<br><br>What will the future look like in 50 years, as envisioned by an artist living in Takashima?<br><br>A university student rapper from Matsudo and robotics researcher Professor Hiroshi Ishiguro explore the future of society and what it means to be human through art and technology in this conversation documentary.',
            'hero.tagline': '<span class="text-s">The future 50 years from now begins not </span><span class="text-m">somewhere else</span><span class="text-s">, but </span><span class="text-m">right here</span><span class="text-s">.</span>',
            'hero.date': 'Held on July 20, 2026 (Mon., national holiday)',
            'hero.venue': 'Takashima Civic Hall, Shiga',
            'details.heading': 'Event',
            'details.intro': 'To commemorate the <strong><a href="https://www.city.takashima.lg.jp/soshiki/kanmin/mirai/1/3/13269.html" target="_blank" rel="noopener noreferrer">comprehensive partnership agreement between Takashima City and Reitaku University</a></strong>,<br>Professor Hiroshi Ishiguro, a globally active robotics researcher from Takashima,<br>will join us as a featured speaker.',
            'details.introHeading': 'A dialogue-based event<br>to imagine the future together',
            'details.themeLead': 'Themes include',
            'details.theme': '“Human likeness,” “technology,”<br>and “the future of local communities.”',
            'details.model': 'Using Takashima City as a model,',
            'details.question': 'shall we think together<br>about the society ahead?',
            'video.intro': 'Watch four special dialogue videos featuring Takashima City’s mayor and a conversational robot, switched by tabs.',
            'video.tab1': 'Video 1',
            'video.tab2': 'Video 2',
            'video.tab3': 'Video 3',
            'video.tab4': 'Video 4',
            'program.heading': 'Program',
            'program.talk': '<strong>● Talk by Professor Hiroshi Ishiguro</strong><br>Theme: “The Future of Life”',
            'program.presentation': '<strong>● Presentations by junior high, high school, and university students</strong><br>Theme: “The Local Future 50 Years from Now”',
            'program.panel': '<strong>● Panel Talk</strong><br>Theme: Imagining the Future 50 Years from Now from Takashima: Community, Nature, Culture, and Human Connections<br>Panelists: Professor Hiroshi Ishiguro, Takashima Mayor Katsuhiro Imajo, Takashima high school students, and Reitaku University students<br>Moderator: Satomi Kurosu (Reitaku University)',
            'program.lobby': '<strong>● Lobby Event</strong><br>Exhibition and hands-on experience with interactive robots<br>Children are welcome to participate.<br><span class="program-note" style="font-size:0.85em; opacity:0.8;"></span>',
            'speaker.imageAlt': 'Professor Hiroshi Ishiguro',
            'speaker.intro': 'A globally active robotics researcher from Takashima',
            'speaker.name': 'Professor Hiroshi Ishiguro',
            'speaker.outro': 'will speak at the event.',
            'speaker.summary': 'View Profile',
            'speaker.bio': 'Hiroshi Ishiguro, roboticist, born in Shiga Prefecture<br>Professor, Graduate School of Engineering Science, Osaka University (Distinguished Professor of Osaka University)<br>Visiting Director, Hiroshi Ishiguro Laboratories, ATR (ATR Fellow)<br>Project Manager, Moonshot Research and Development Program<br>Producer, Signature Pavilion Project, Expo 2025 Osaka, Kansai, Japan<br>CEO and Representative Director, AVITA, Inc.<br>Engaged in research and development of remotely operated robots (avatars) and intelligent robots<br>A leading researcher in humanlike android robots.<br><br>2011: Osaka Cultural Award<br>2015: Commendation by the Minister of Education, Culture, Sports, Science and Technology; Mohammed bin Rashid Al Maktoum Knowledge Award<br>2020: Tateisi Award<br>2023: Ichimura Prize for Science Achievement Award<br>Specially Appointed Professor, Reitaku University',
            'registration.heading': 'Register',
            'registration.period': '<strong>Registration period:</strong> Monday, June 1-Friday, July 10',
            'registration.desc': 'Capacity is limited to 650 people, accepted on a first-come, first-served basis.',
            'registration.webHeading': 'Register Online',
            'registration.closed': '<p class="registration-closed-status">Registration Closed</p><p class="registration-closed-lead">Registration for this event has closed because capacity has been reached.</p><p>Thank you very much for the many applications we received.<br>We are not currently accepting waitlist requests.</p><p>We apologize to those who were considering attending and appreciate your understanding.</p>',
            'registration.notesHeading': 'Notes <span>*Please read carefully</span>',
            'registration.notes': '<li><strong>Please refrain from taking photos, recording video, or recording audio inside the venue.</strong></li><li>For the purposes of event records, public relations, and student follow-up learning,<br><strong>the organizers will take photos and videos during this event.</strong><br>These photos and videos may be posted or used in organizers’ public relations media, including websites, social media, and publications, and may also be used for student follow-up learning. By registering for the event, you are deemed to have agreed to the above. Thank you for your understanding and cooperation.</li><li>Personal information provided during registration will be used only for event operation purposes, including participant management and communication, and will be appropriately managed by the organizers.<br><strong>Except where required by law, it will not be provided to third parties without your consent.</strong></li><li>The event may be canceled or the program may be changed in the event of severe weather.</li>',
            'access.heading': 'Access',
            'access.venue': 'Venue: Takashima Civic Hall',
            'access.address': 'Address: 1-3-1 Nakanuma, Imazu-cho, Takashima, Shiga',
            'access.byCar': '<strong>By Car</strong>',
            'access.parkingIntro': 'Parking information<br>If you are coming by car, please use one of the parking areas below.<br>The following two parking areas are available for event participants.<br><strong>Parking is free</strong> at both locations.',
            'access.parkingDetails': '<br><strong><a href="https://maps.app.goo.gl/43fuvQzL6xvFoyfZ7">1. Takashima Civic Hall Parking Lot</a></strong><br>This parking lot is adjacent to the venue.<br>Because it is the closest parking lot, it is expected to be crowded.<br><br><strong><a href="https://maps.app.goo.gl/okXeY8EeM6yvv7E8A">2. Imazu Parking Lot</a></strong><br>This parking lot is about a 10-minute walk from the venue.<br>If the adjacent venue parking lot is crowded, please consider using this lot.<br><br>*Parking spaces are limited. Please use public transportation or carpool whenever possible.<br>*Please do not park at nearby facilities, on roads, or on private property.',
            'access.publicTransport': '<strong>By Public Transportation</strong>',
            'access.train': '5-minute walk from Omi-Imazu Station on the JR Kosei Line',
            'contact.heading': 'Contact',
            'contact.faq': 'For frequently asked questions, please check <strong><a href="https://tayori.com/faq/80dd614a06215250dd0284c9f050dc1548723f98/">here</a></strong>.',
            'contact.form': 'For other inquiries, please use <strong><a href="https://tayori.com/form/d3dc8d7b5d060dbd209c7605bc4f23163b62b13f">this contact form</a></strong>.',
            'footer.organizers': 'Co-hosted by: Takashima City / Takashima City Board of Education / Reitaku University / The Moralogy Foundation<br>Supported by: Reitaku University Reitakukai',
            'scroll.cta': 'Register'
        }
    };

    const languageBtn = document.getElementById('language-toggle');
    const youtubeTabs = document.querySelectorAll('.youtube-tab');
    const youtubePlayer = document.getElementById('youtube-player');
    let currentLanguage = localStorage.getItem('siteLanguage') || 'ja';

    const applyLanguage = (language) => {
        currentLanguage = translations[language] ? language : 'ja';
        const strings = translations[currentLanguage];

        document.documentElement.lang = currentLanguage;
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.dataset.i18n;
            if (strings[key]) {
                element.innerHTML = strings[key];
            }
        });

        document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
            element.dataset.i18nAttr.split(',').forEach((pair) => {
                const [attr, key] = pair.split(':').map((part) => part.trim());
                if (attr && strings[key]) {
                    element.setAttribute(attr, strings[key]);
                }
            });
        });

        document.title = strings['meta.title'];
        localStorage.setItem('siteLanguage', currentLanguage);

        if (languageBtn) {
            languageBtn.setAttribute('aria-label', currentLanguage === 'ja' ? 'Switch to English' : '日本語に切り替え');
            languageBtn.setAttribute('aria-pressed', currentLanguage === 'en' ? 'true' : 'false');
            languageBtn.innerHTML = currentLanguage === 'ja'
                ? '<span class="language-toggle-current">JP</span><span class="language-toggle-divider">/</span><span>EN</span>'
                : '<span>JP</span><span class="language-toggle-divider">/</span><span class="language-toggle-current">EN</span>';
        }


        youtubeTabs.forEach((tab) => {
            const labelKey = tab.dataset.i18n;
            if (labelKey && strings[labelKey]) {
                tab.textContent = strings[labelKey];
            }
        });
    };

    if (languageBtn) {
        languageBtn.addEventListener('click', () => {
            applyLanguage(currentLanguage === 'ja' ? 'en' : 'ja');
        });
    }

    applyLanguage(currentLanguage);

    if (youtubeTabs.length && youtubePlayer) {
        const setActiveVideo = (tab) => {
            youtubeTabs.forEach((button) => {
                const isActive = button === tab;
                button.classList.toggle('is-active', isActive);
                button.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            const nextSrc = tab.dataset.videoSrc;
            if (nextSrc && youtubePlayer.getAttribute('src') !== nextSrc) {
                youtubePlayer.setAttribute('src', nextSrc);
            }
        };

        youtubeTabs.forEach((tab) => {
            tab.addEventListener('click', () => setActiveVideo(tab));
        });

        setActiveVideo(youtubeTabs[0]);
    }

    // --- 白黒テーマ切り替え機能 ---
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    if (themeBtn && themeIcon) {
        themeBtn.addEventListener('click', () => {
            // :root に .light-theme クラスをトグル
            document.documentElement.classList.toggle('light-theme');
            
            // アイコンの切り替え（太陽 ⇔ 月）
            if (document.documentElement.classList.contains('light-theme')) {
                // 月のアイコン（ダークモードへ戻す用）
                themeIcon.innerHTML = `
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                `;
            } else {
                // 太陽のアイコン（ライトモードへにする用）
                themeIcon.innerHTML = `
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                `;
            }
        });
    }

    // --- ハンバーガーメニュー（ARIA対応） ---
    const hamburger = document.getElementById('hamburger');
    const topNav = document.getElementById('top-nav');
    if (hamburger && topNav) {
        // 初期ARIA状態
        hamburger.setAttribute('aria-expanded', 'false');
        topNav.setAttribute('aria-hidden', 'true');

        const toggleNav = () => {
            const isActive = topNav.classList.toggle('active');
            hamburger.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            topNav.setAttribute('aria-hidden', isActive ? 'false' : 'true');

            // bodyのスクロールを制御
            document.body.classList.toggle('nav-open', isActive);
        };

        hamburger.addEventListener('click', toggleNav);
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleNav();
            }
        });

        // ナビリンククリック時に自動で閉じる
        topNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (topNav.classList.contains('active')) {
                    toggleNav();
                }
            });
        });
    }

    // --- 設定（ここでスプラッシュ画面の秒数を調整できます） ---
    // ----------------------------------------------------------
    // Intersection Observerによるスクロールアニメーション
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // 一度表示されたら監視を解除する
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // アニメーション対象の要素を取得して監視を開始
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    // パララックス風スクロール効果の追加
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // スクロール時に上部タブナビゲーションを表示
        const topNav = document.getElementById('top-nav');
        const hamburger = document.getElementById('hamburger');
        if (topNav) {
            // 一定以上（今回は100px）スクロールしたらメニューを表示させる
            if (scrolled > 100) {
                topNav.classList.add('is-scrolled');
            } else {
                topNav.classList.remove('is-scrolled');
            }
        }
        // ハンバーガーメニューも同じようにスクロール時に表示
        if (hamburger) {
            if (scrolled > 100) {
                hamburger.classList.add('is-scrolled');
            } else {
                hamburger.classList.remove('is-scrolled');
            }
        }
        
    });


});
document.addEventListener('DOMContentLoaded', () => {
    const syncHeaderControls = () => document.body.classList.toggle('has-scrolled', window.scrollY > 100);
    window.addEventListener('scroll', syncHeaderControls, { passive: true });
    syncHeaderControls();
});


document.addEventListener('DOMContentLoaded', () => {
    const navigation = document.getElementById('top-nav');
    if (!navigation) return;
    const syncNavigationAccessibility = () => {
        const visible = window.matchMedia('(min-width: 769px)').matches
            ? window.scrollY > 100
            : navigation.classList.contains('active');
        navigation.setAttribute('aria-hidden', String(!visible));
    };
    window.addEventListener('scroll', syncNavigationAccessibility, { passive: true });
    window.addEventListener('resize', syncNavigationAccessibility);
    syncNavigationAccessibility();
});








