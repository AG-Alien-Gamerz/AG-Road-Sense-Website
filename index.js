/* ============================================================
   AG RoadSense — Download Page Scripts
   - Bilingual toggle (Urdu RTL default / English LTR)
   - Dark / Light theme toggle (Dark default)
   - Reveal-on-scroll animations
   - Download link configuration
   ============================================================ */

(function () {
  'use strict';

  /* ---------- CONFIG ---------- */
  const CONFIG = {
    // ⬇️ Apna actual installer link yahan lagao:
    downloadUrl: 'https://github.com/your-user/AG-RoadSense/releases/latest/download/AG-RoadSense-Setup.exe',
    defaultLang: 'ur',      // 'ur' | 'en'
    defaultTheme: 'dark'    // 'dark' | 'light'
  };

  /* ---------- TRANSLATIONS ---------- */
  const I18N = {
    ur: {
      'brand.tag': 'آف لائن ڈیسک ٹاپ ایپ',
      'nav.features': 'خصوصیات',
      'nav.download': 'ڈاؤن لوڈ',
      'nav.requirements': 'سسٹم کی ضروریات',

      'hero.badge': 'ونڈوز 10/11 • ورژن 1.0.0 • مفت',
      'hero.title': 'اپنی گاڑی کے فیصلے، اب زیادہ سمارٹ',
      'hero.sub': 'AG RoadSense ایک مکمل آف لائن ڈیسک ٹاپ ایپلیکیشن ہے جو ٹائر سائز کا موازنہ، الیکٹرک رینج، چارجنگ ٹائم، ایفی شنسی، بریکنگ فاصلہ اور مینٹیننس ریکارڈ — سب ایک ہی جگہ سنبھالتی ہے۔',
      'hero.download': 'ونڈوز کے لیے ڈاؤن لوڈ کریں',
      'hero.secondary': 'خصوصیات دیکھیں',
      'hero.meta1': '100% آف لائن',
      'hero.meta2': 'کوئی اکاؤنٹ یا سائن اپ نہیں',
      'hero.meta3': 'ڈیٹا صرف آپ کے کمپیوٹر پر',

      'features.title': 'ایک ایپ، تمام ضروری حسابات',
      'features.sub': 'گاڑی کے روزمرہ کے حسابات اور ریکارڈ کی دیکھ بھال — ایک سادہ، تیز اور مکمل آف لائن انٹرفیس میں۔',

      'f1.title': 'ٹائر سائز کا موازنہ',
      'f1.desc': 'دو ٹائر سائز کا ساتھ ساتھ موازنہ، فرق کو واضح کرنے والے بصری خاکے کے ساتھ۔',
      'f2.title': 'الیکٹرک رینج کا تخمینہ',
      'f2.desc': 'بیٹری کی صلاحیت، کھپت اور ڈرائیونگ حالات کی بنیاد پر ممکنہ رینج کا اندازہ لگائیں۔',
      'f3.title': 'چارجنگ ٹائم کا حساب',
      'f3.desc': 'چارجر کی پاور اور بیٹری لیول کے مطابق تخمینی چارجنگ وقت معلوم کریں۔',
      'f4.title': 'ایفی شنسی کیلکولیشن',
      'f4.desc': 'ایندھن یا بجلی کی کھپت اور فی کلومیٹر لاگت کا درست حساب لگائیں۔',
      'f5.title': 'بریکنگ و اسٹاپنگ فاصلہ',
      'f5.desc': 'رفتار، ردِعمل کے وقت اور سڑک کی حالت کے مطابق توقف کے فاصلے کا بصری خاکہ۔',
      'f6.title': 'مینٹیننس ٹریکنگ',
      'f6.desc': 'مینٹیننس کے اندراجات محفوظ کریں اور CSV یا JSON میں ایکسپورٹ کریں۔',

      'dl.title': 'ڈاؤن لوڈ کریں',
      'dl.sub': 'تازہ ترین ورژن ڈاؤن لوڈ کریں اور فوراً استعمال شروع کریں۔',
      'dl.win.title': 'ونڈوز',
      'dl.win.desc': 'ونڈوز 10 اور 11 (64-bit) کے لیے انسٹالر',
      'dl.win.button': 'ڈاؤن لوڈ کریں (.exe)',
      'dl.win.note': 'نوٹ: انسٹالر پر اینٹی وائرس کی وارننگ آ سکتی ہے — یہ نئے انسٹالرز کے ساتھ عام بات ہے۔',
      'dl.mac.title': 'macOS',
      'dl.mac.desc': 'ایپل سلکان اور انٹیل میک کے لیے',
      'dl.linux.title': 'لینکس',
      'dl.linux.desc': 'AppImage اور .deb پیکجز',
      'dl.soon': 'جلد آ رہا ہے',
      'dl.spec.version': 'ورژن',
      'dl.spec.size': 'سائز',
      'dl.spec.type': 'فائل',

      'req.title': 'سسٹم کی ضروریات',
      'req.sub': 'چلانے کے لیے بس اتنا ہی درکار ہے — کوئی اضافی سیٹ اپ نہیں۔',
      'req.os': 'آپریٹنگ سسٹم',
      'req.osv': 'ونڈوز 10 یا 11 (64-bit)',
      'req.ram': 'ریم',
      'req.ramv': '4 GB یا اس سے زیادہ',
      'req.disk': 'ڈسک اسپیس',
      'req.diskv': '200 MB خالی جگہ',
      'req.net': 'انٹرنیٹ',
      'req.netv': 'ضروری نہیں — ایپ مکمل آف لائن چلتی ہے',
      'req.other': 'دیگر',
      'req.otherv': 'Python انسٹال کرنے کی ضرورت نہیں — سب کچھ شامل ہے',

      'footer.offline': 'آف لائن',
      'footer.private': 'نجی',
      'footer.fast': 'تیز',
      'footer.rights': 'جملہ حقوق محفوظ ہیں۔'
    },

    en: {
      'brand.tag': 'Offline desktop app',
      'nav.features': 'Features',
      'nav.download': 'Download',
      'nav.requirements': 'Requirements',

      'hero.badge': 'Windows 10/11 • Version 1.0.0 • Free',
      'hero.title': 'Smarter decisions for your vehicle',
      'hero.sub': 'AG RoadSense is a fully offline desktop app that handles tyre size comparison, EV range, charging time, efficiency, braking distance and maintenance records — all in one place.',
      'hero.download': 'Download for Windows',
      'hero.secondary': 'View features',
      'hero.meta1': '100% offline',
      'hero.meta2': 'No account or sign-up',
      'hero.meta3': 'Data stays on your PC',

      'features.title': 'One app, every essential calculation',
      'features.sub': 'Everyday vehicle calculations and record-keeping — in a simple, fast and fully offline interface.',

      'f1.title': 'Tyre size comparison',
      'f1.desc': 'Compare two tyre sizes side by side with a clear visual overlay of the difference.',
      'f2.title': 'EV range estimate',
      'f2.desc': 'Estimate potential range based on battery capacity, consumption and driving conditions.',
      'f3.title': 'Charging time calculator',
      'f3.desc': 'Find estimated charging time from charger power and current battery level.',
      'f4.title': 'Efficiency calculation',
      'f4.desc': 'Calculate fuel or electricity consumption and accurate cost per kilometre.',
      'f5.title': 'Braking & stopping distance',
      'f5.desc': 'A visual breakdown of stopping distance by speed, reaction time and road condition.',
      'f6.title': 'Maintenance tracking',
      'f6.desc': 'Save maintenance entries and export them to CSV or JSON.',

      'dl.title': 'Download',
      'dl.sub': 'Get the latest version and start using it right away.',
      'dl.win.title': 'Windows',
      'dl.win.desc': 'Installer for Windows 10 and 11 (64-bit)',
      'dl.win.button': 'Download (.exe)',
      'dl.win.note': 'Note: your antivirus may warn about this installer — that is common for newer installers.',
      'dl.mac.title': 'macOS',
      'dl.mac.desc': 'For Apple Silicon and Intel Macs',
      'dl.linux.title': 'Linux',
      'dl.linux.desc': 'AppImage and .deb packages',
      'dl.soon': 'Coming soon',
      'dl.spec.version': 'Version',
      'dl.spec.size': 'Size',
      'dl.spec.type': 'File',

      'req.title': 'System requirements',
      'req.sub': 'That is all you need to run it — no extra setup.',
      'req.os': 'Operating system',
      'req.osv': 'Windows 10 or 11 (64-bit)',
      'req.ram': 'RAM',
      'req.ramv': '4 GB or more',
      'req.disk': 'Disk space',
      'req.diskv': '200 MB free space',
      'req.net': 'Internet',
      'req.netv': 'Not required — the app runs fully offline',
      'req.other': 'Other',
      'req.otherv': 'No Python installation required — everything is bundled',

      'footer.offline': 'Offline',
      'footer.private': 'Private',
      'footer.fast': 'Fast',
      'footer.rights': 'All rights reserved.'
    }
  };

  /* ---------- HELPERS ---------- */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- LANGUAGE ---------- */
  function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.ur;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';

    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // Button label shows the *other* language
    const langLabel = $('#langLabel');
    if (langLabel) langLabel.textContent = lang === 'ur' ? 'English' : 'اردو';

    try { localStorage.setItem('agrs-lang', lang); } catch (e) {}
  }

  /* ---------- THEME ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('agrs-theme', theme); } catch (e) {}
  }

  /* ---------- REVEAL ON SCROLL ---------- */
  function initReveal() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = (Array.from(el.parentElement.children).indexOf(el) % 6) * 70;
          setTimeout(() => el.classList.add('in'), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => io.observe(el));
  }

  /* ---------- DOWNLOAD LINKS ---------- */
  function initDownloadLinks() {
    $$('[data-dl-link]').forEach(link => {
      link.setAttribute('href', CONFIG.downloadUrl);
      link.setAttribute('rel', 'noopener');
    });
  }

  /* ---------- INIT ---------- */
  function init() {
    // Restore preferences
    let savedLang = CONFIG.defaultLang;
    let savedTheme = CONFIG.defaultTheme;
    try {
      savedLang  = localStorage.getItem('agrs-lang')  || CONFIG.defaultLang;
      savedTheme = localStorage.getItem('agrs-theme') || CONFIG.defaultTheme;
    } catch (e) {}

    applyLanguage(savedLang);
    applyTheme(savedTheme);

    // Toggle buttons
    const langToggle = $('#langToggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        const current = document.documentElement.lang === 'ur' ? 'ur' : 'en';
        applyLanguage(current === 'ur' ? 'en' : 'ur');
      });
    }

    const themeToggle = $('#themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    // Year in footer
    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initDownloadLinks();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();