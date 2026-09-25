export interface Translation {
  nav: {
    products: string;
    solutions: string;
    resources: string;
    company: string;
    pricing: string;
    login: string;
    getStarted: string;
  };

  language: {
    title: string;
    subtitle: string;
    search: string;
  };

  hero: {
    badge: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };

  common: {
    learnMore: string;
    explore: string;
    viewAll: string;
  };
}

const english: Translation = {
  nav: {
    products: "Products",
    solutions: "Solutions",
    resources: "Resources",
    company: "Company",
    pricing: "Pricing",
    login: "Login",
    getStarted: "Get Started",
  },

  language: {
    title: "Choose your language",
    subtitle: "Change the language of TechWrap",
    search: "Search language...",
  },

  hero: {
    badge: "Technology for what's next",
    title: "Build. Integrate. Scale.",
    description:
      "Build modern digital products with powerful technology, AI and scalable engineering.",
    primaryButton: "Get Started",
    secondaryButton: "Explore Solutions",
  },

  common: {
    learnMore: "Learn More",
    explore: "Explore",
    viewAll: "View All",
  },
};

export const translations: Record<string, Translation> = {
  en: english,

  zh: {
    nav: {
      products: "产品",
      solutions: "解决方案",
      resources: "资源",
      company: "公司",
      pricing: "价格",
      login: "登录",
      getStarted: "开始使用",
    },
    language: {
      title: "选择您的语言",
      subtitle: "更改 TechWrap 的语言",
      search: "搜索语言...",
    },
    hero: {
      badge: "面向未来的技术",
      title: "构建 · 集成 · 扩展",
      description: "使用强大的技术、人工智能和可扩展工程构建现代数字产品。",
      primaryButton: "开始使用",
      secondaryButton: "探索解决方案",
    },
    common: {
      learnMore: "了解更多",
      explore: "探索",
      viewAll: "查看全部",
    },
  },

  hi: {
    nav: {
      products: "उत्पाद",
      solutions: "समाधान",
      resources: "संसाधन",
      company: "कंपनी",
      pricing: "मूल्य निर्धारण",
      login: "लॉग इन",
      getStarted: "शुरू करें",
    },
    language: {
      title: "अपनी भाषा चुनें",
      subtitle: "TechWrap की भाषा बदलें",
      search: "भाषा खोजें...",
    },
    hero: {
      badge: "भविष्य के लिए तकनीक",
      title: "बनाएं। एकीकृत करें। विस्तार करें।",
      description:
        "शक्तिशाली तकनीक, AI और स्केलेबल इंजीनियरिंग के साथ आधुनिक डिजिटल उत्पाद बनाएं।",
      primaryButton: "शुरू करें",
      secondaryButton: "समाधान देखें",
    },
    common: {
      learnMore: "और जानें",
      explore: "एक्सप्लोर करें",
      viewAll: "सभी देखें",
    },
  },

  es: {
    nav: {
      products: "Productos",
      solutions: "Soluciones",
      resources: "Recursos",
      company: "Empresa",
      pricing: "Precios",
      login: "Iniciar sesión",
      getStarted: "Comenzar",
    },
    language: {
      title: "Elige tu idioma",
      subtitle: "Cambia el idioma de TechWrap",
      search: "Buscar idioma...",
    },
    hero: {
      badge: "Tecnología para lo que viene",
      title: "Construye. Integra. Escala.",
      description:
        "Crea productos digitales modernos con tecnología avanzada, IA e ingeniería escalable.",
      primaryButton: "Comenzar",
      secondaryButton: "Explorar soluciones",
    },
    common: {
      learnMore: "Más información",
      explore: "Explorar",
      viewAll: "Ver todo",
    },
  },

  ar: {
    nav: {
      products: "المنتجات",
      solutions: "الحلول",
      resources: "الموارد",
      company: "الشركة",
      pricing: "الأسعار",
      login: "تسجيل الدخول",
      getStarted: "ابدأ الآن",
    },
    language: {
      title: "اختر لغتك",
      subtitle: "غيّر لغة TechWrap",
      search: "ابحث عن لغة...",
    },
    hero: {
      badge: "تقنية للمستقبل",
      title: "ابنِ. تكامل. توسّع.",
      description:
        "أنشئ منتجات رقمية حديثة باستخدام التكنولوجيا والذكاء الاصطناعي والهندسة القابلة للتوسع.",
      primaryButton: "ابدأ الآن",
      secondaryButton: "استكشف الحلول",
    },
    common: {
      learnMore: "اعرف المزيد",
      explore: "استكشف",
      viewAll: "عرض الكل",
    },
  },

  fr: {
    nav: {
      products: "Produits",
      solutions: "Solutions",
      resources: "Ressources",
      company: "Entreprise",
      pricing: "Tarifs",
      login: "Connexion",
      getStarted: "Commencer",
    },
    language: {
      title: "Choisissez votre langue",
      subtitle: "Changer la langue de TechWrap",
      search: "Rechercher une langue...",
    },
    hero: {
      badge: "La technologie pour demain",
      title: "Construisez. Intégrez. Développez.",
      description:
        "Créez des produits numériques modernes grâce à la technologie, à l'IA et à une ingénierie évolutive.",
      primaryButton: "Commencer",
      secondaryButton: "Explorer les solutions",
    },
    common: {
      learnMore: "En savoir plus",
      explore: "Explorer",
      viewAll: "Voir tout",
    },
  },

  pt: {
    nav: {
      products: "Produtos",
      solutions: "Soluções",
      resources: "Recursos",
      company: "Empresa",
      pricing: "Preços",
      login: "Entrar",
      getStarted: "Começar",
    },
    language: {
      title: "Escolha seu idioma",
      subtitle: "Altere o idioma do TechWrap",
      search: "Pesquisar idioma...",
    },
    hero: {
      badge: "Tecnologia para o futuro",
      title: "Crie. Integre. Escale.",
      description:
        "Crie produtos digitais modernos com tecnologia avançada, IA e engenharia escalável.",
      primaryButton: "Começar",
      secondaryButton: "Explorar soluções",
    },
    common: {
      learnMore: "Saiba mais",
      explore: "Explorar",
      viewAll: "Ver tudo",
    },
  },

  bn: {
    nav: {
      products: "পণ্য",
      solutions: "সমাধান",
      resources: "রিসোর্স",
      company: "কোম্পানি",
      pricing: "মূল্য",
      login: "লগইন",
      getStarted: "শুরু করুন",
    },
    language: {
      title: "আপনার ভাষা নির্বাচন করুন",
      subtitle: "TechWrap-এর ভাষা পরিবর্তন করুন",
      search: "ভাষা খুঁজুন...",
    },
    hero: {
      badge: "ভবিষ্যতের প্রযুক্তি",
      title: "তৈরি করুন। সংযুক্ত করুন। বৃদ্ধি করুন।",
      description:
        "শক্তিশালী প্রযুক্তি, AI এবং স্কেলযোগ্য ইঞ্জিনিয়ারিং দিয়ে আধুনিক ডিজিটাল পণ্য তৈরি করুন।",
      primaryButton: "শুরু করুন",
      secondaryButton: "সমাধান দেখুন",
    },
    common: {
      learnMore: "আরও জানুন",
      explore: "এক্সপ্লোর করুন",
      viewAll: "সব দেখুন",
    },
  },

  sw: {
    nav: {
      products: "Bidhaa",
      solutions: "Suluhisho",
      resources: "Rasilimali",
      company: "Kampuni",
      pricing: "Bei",
      login: "Ingia",
      getStarted: "Anza",
    },
    language: {
      title: "Chagua lugha yako",
      subtitle: "Badilisha lugha ya TechWrap",
      search: "Tafuta lugha...",
    },
    hero: {
      badge: "Teknolojia kwa ajili ya kesho",
      title: "Jenga. Unganisha. Panua.",
      description:
        "Jenga bidhaa za kisasa za kidijitali kwa kutumia teknolojia, AI na uhandisi unaoweza kukua.",
      primaryButton: "Anza",
      secondaryButton: "Chunguza suluhisho",
    },
    common: {
      learnMore: "Jifunze zaidi",
      explore: "Chunguza",
      viewAll: "Tazama zote",
    },
  },

  ta: {
    nav: {
      products: "தயாரிப்புகள்",
      solutions: "தீர்வுகள்",
      resources: "வளங்கள்",
      company: "நிறுவனம்",
      pricing: "விலை",
      login: "உள்நுழை",
      getStarted: "தொடங்குங்கள்",
    },
    language: {
      title: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
      subtitle: "TechWrap மொழியை மாற்றவும்",
      search: "மொழியைத் தேடுங்கள்...",
    },
    hero: {
      badge: "எதிர்காலத்திற்கான தொழில்நுட்பம்",
      title: "உருவாக்குங்கள். ஒருங்கிணையுங்கள். வளருங்கள்.",
      description:
        "சக்திவாய்ந்த தொழில்நுட்பம், AI மற்றும் அளவிடக்கூடிய பொறியியலுடன் நவீன டிஜிட்டல் தயாரிப்புகளை உருவாக்குங்கள்.",
      primaryButton: "தொடங்குங்கள்",
      secondaryButton: "தீர்வுகளை ஆராயுங்கள்",
    },
    common: {
      learnMore: "மேலும் அறிக",
      explore: "ஆராயுங்கள்",
      viewAll: "அனைத்தையும் காண்க",
    },
  },

  te: {
    nav: {
      products: "ఉత్పత్తులు",
      solutions: "పరిష్కారాలు",
      resources: "వనరులు",
      company: "కంపెనీ",
      pricing: "ధరలు",
      login: "లాగిన్",
      getStarted: "ప్రారంభించండి",
    },
    language: {
      title: "మీ భాషను ఎంచుకోండి",
      subtitle: "TechWrap భాషను మార్చండి",
      search: "భాషను వెతకండి...",
    },
    hero: {
      badge: "భవిష్యత్తు కోసం సాంకేతికత",
      title: "నిర్మించండి. సమీకరించండి. విస్తరించండి.",
      description:
        "శక్తివంతమైన సాంకేతికత, AI మరియు స్కేలబుల్ ఇంజినీరింగ్‌తో ఆధునిక డిజిటల్ ఉత్పత్తులను నిర్మించండి.",
      primaryButton: "ప్రారంభించండి",
      secondaryButton: "పరిష్కారాలను అన్వేషించండి",
    },
    common: {
      learnMore: "మరింత తెలుసుకోండి",
      explore: "అన్వేషించండి",
      viewAll: "అన్నీ చూడండి",
    },
  },

  ml: {
    nav: {
      products: "ഉൽപ്പന്നങ്ങൾ",
      solutions: "പരിഹാരങ്ങൾ",
      resources: "വിഭവങ്ങൾ",
      company: "കമ്പനി",
      pricing: "വില",
      login: "ലോഗിൻ",
      getStarted: "ആരംഭിക്കുക",
    },
    language: {
      title: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
      subtitle: "TechWrap ഭാഷ മാറ്റുക",
      search: "ഭാഷ തിരയുക...",
    },
    hero: {
      badge: "ഭാവിക്കായുള്ള സാങ്കേതികവിദ്യ",
      title: "നിർമ്മിക്കുക. സംയോജിപ്പിക്കുക. വളർത്തുക.",
      description:
        "ശക്തമായ സാങ്കേതികവിദ്യ, AI, സ്കെയിലബിൾ എഞ്ചിനീയറിംഗ് എന്നിവ ഉപയോഗിച്ച് ആധുനിക ഡിജിറ്റൽ ഉൽപ്പന്നങ്ങൾ നിർമ്മിക്കുക.",
      primaryButton: "ആരംഭിക്കുക",
      secondaryButton: "പരിഹാരങ്ങൾ കാണുക",
    },
    common: {
      learnMore: "കൂടുതൽ അറിയുക",
      explore: "പര്യവേക്ഷണം ചെയ്യുക",
      viewAll: "എല്ലാം കാണുക",
    },
  },

  kn: {
    nav: {
      products: "ಉತ್ಪನ್ನಗಳು",
      solutions: "ಪರಿಹಾರಗಳು",
      resources: "ಸಂಪನ್ಮೂಲಗಳು",
      company: "ಕಂಪನಿ",
      pricing: "ಬೆಲೆ",
      login: "ಲಾಗಿನ್",
      getStarted: "ಪ್ರಾರಂಭಿಸಿ",
    },
    language: {
      title: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      subtitle: "TechWrap ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಿ",
      search: "ಭಾಷೆ ಹುಡುಕಿ...",
    },
    hero: {
      badge: "ಭವಿಷ್ಯಕ್ಕಾಗಿ ತಂತ್ರಜ್ಞಾನ",
      title: "ನಿರ್ಮಿಸಿ. ಸಂಯೋಜಿಸಿ. ವಿಸ್ತರಿಸಿ.",
      description:
        "ಶಕ್ತಿಯುತ ತಂತ್ರಜ್ಞಾನ, AI ಮತ್ತು ಸ್ಕೇಲೆಬಲ್ ಎಂಜಿನಿಯರಿಂಗ್‌ನೊಂದಿಗೆ ಆಧುನಿಕ ಡಿಜಿಟಲ್ ಉತ್ಪನ್ನಗಳನ್ನು ನಿರ್ಮಿಸಿ.",
      primaryButton: "ಪ್ರಾರಂಭಿಸಿ",
      secondaryButton: "ಪರಿಹಾರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    },
    common: {
      learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
      explore: "ಅನ್ವೇಷಿಸಿ",
      viewAll: "ಎಲ್ಲವನ್ನೂ ನೋಡಿ",
    },
  },
};