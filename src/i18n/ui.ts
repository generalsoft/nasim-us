// UI translation dictionary — add all user-facing strings here.
// Keys use English as the canonical form; Arabic values are translations.

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.blog': 'Blog',
    'nav.hobby': 'Hobby',
    'nav.about': 'About',
    'nav.menu': 'Menu',

    'home.title': 'Home | Abid Nasim',
    'home.hero': 'Hello, my name is Abid Nasim',
    'home.tagline': 'I am a full stack Platform Engineer.',
    'home.roles.dev': 'Developer',
    'home.roles.writer': 'Writer',
    'home.roles.mentor': 'Mentor',
    'home.selectedWork': 'Selected Work',
    'home.workDesc': 'Take a look below at some of my featured work for clients from the past few years.',
    'home.viewAll': 'View All',

    'work.title': 'My Work | Abid Nasim',
    'work.heading': 'My Work',
    'work.desc': "Learn about Nasim's most recent projects",
    'work.tagline': 'See my most recent projects below to get an idea of my past experience.',

    'blog.title': 'Blog | Abid Nasim',
    'blog.desc': "Read Nasim's latest blog posts",
    'blog.heading': 'Blog',
    'blog.tagline': 'Thoughts, experiments, and practical write-ups on AI and engineering.',

    'hobby.title': 'Hobby | Abid Nasim',
    'hobby.desc': 'Personal hobby projects and tinkering',
    'hobby.heading': 'Hobby',
    'hobby.tagline': 'Side projects and experiments built for curiosity and fun.',

    'about.title': 'About | Abid Nasim',
    'about.desc': 'About Abid Nasim',
    'about.heading': 'About',
    'about.tagline': 'Let me introduce myself.',
    'about.background': 'Background',
    'about.education': 'Education',
    'about.certifications': 'Certifications',
    'about.abilities': 'Abilities',

    '404.title': 'Not Found',
    '404.desc': '404 Error — this page was not found',
    '404.heading': 'Page Not Found',
    '404.tagline': 'Not found',

    'footer.copyright': 'Copyrights: Abid Nasim',
    'footer.powered': 'powered by Generalsoft',

    'lang.switch': 'العربية',
    'lang.code': 'ar',
  },

  ar: {
    'nav.home': 'الرئيسية',
    'nav.work': 'الأعمال',
    'nav.blog': 'المدونة',
    'nav.hobby': 'الهوايات',
    'nav.about': 'حول',
    'nav.menu': 'القائمة',

    'home.title': 'الرئيسية | عابد نسيم',
    'home.hero': 'مرحباً، اسمي عابد نسيم',
    'home.tagline': 'مهندس منصات متكامل.',
    'home.roles.dev': 'مطور',
    'home.roles.writer': 'كاتب',
    'home.roles.mentor': 'مرشد',
    'home.selectedWork': 'أعمال مختارة',
    'home.workDesc': 'ألق نظرة أدناه على بعض أبرز أعمالي للعملاء خلال السنوات الماضية.',
    'home.viewAll': 'عرض الكل',

    'work.title': 'أعمالي | عابد نسيم',
    'work.heading': 'أعمالي',
    'work.desc': 'تعرّف على أحدث مشاريع نسيم',
    'work.tagline': 'شاهد أحدث مشاريعي أدناه للتعرف على خبراتي السابقة.',

    'blog.title': 'المدونة | عابد نسيم',
    'blog.desc': 'اقرأ أحدث مقالات نسيم',
    'blog.heading': 'المدونة',
    'blog.tagline': 'أفكار، تجارب، وكتابات عملية حول الذكاء الاصطناعي والهندسة.',

    'hobby.title': 'الهوايات | عابد نسيم',
    'hobby.desc': 'مشاريع وهوايات شخصية',
    'hobby.heading': 'الهوايات',
    'hobby.tagline': 'مشاريع جانبية وتجارب بدافع الفضول والمتعة.',

    'about.title': 'حول | عابد نسيم',
    'about.desc': 'نبذة عن عابد نسيم',
    'about.heading': 'حول',
    'about.tagline': 'اسمح لي بتقديم نفسي.',
    'about.background': 'الخلفية',
    'about.education': 'التعليم',
    'about.certifications': 'الشهادات',
    'about.abilities': 'القدرات',

    '404.title': 'غير موجود',
    '404.desc': 'خطأ 404 — الصفحة غير موجودة',
    '404.heading': 'الصفحة غير موجودة',
    '404.tagline': 'غير موجود',

    'footer.copyright': 'حقوق النشر: عابد نسيم',
    'footer.powered': 'بدعم من Generalsoft',

    'lang.switch': 'English',
    'lang.code': 'en',
  },
} as const;

export type Locale = keyof typeof ui;
export type TranslationKey = keyof typeof ui['en'];

export const locales: Locale[] = ['en', 'ar'];
export const defaultLocale: Locale = 'en';
