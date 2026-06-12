import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

export type CoreMessages = {
  navLabels: Record<string, string>;
  actions: {
    home: string;
    search: string;
    profile: string;
    language: string;
    openNavigation: string;
    closeNavigation: string;
  };
  footer: {
    description: string;
    bottom: string;
    groups: Record<string, string>;
  };
  legal: {
    disclaimer: string;
    privacy: string;
    privacyPolicy: string;
    terms: string;
    termsOfService: string;
    fullDisclaimer: string;
  };
  disclaimerGate: {
    eyebrow: string;
    title: string;
    versionLabel: string;
    storageNote: string;
    checkbox: string;
    decline: string;
    accept: string;
  };
};

type MessageOverride = {
  navLabels?: Record<string, string>;
  actions?: Partial<CoreMessages["actions"]>;
  footer?: Partial<Omit<CoreMessages["footer"], "groups">> & { groups?: Record<string, string> };
  legal?: Partial<CoreMessages["legal"]>;
  disclaimerGate?: Partial<CoreMessages["disclaimerGate"]>;
};

export const englishMessages: CoreMessages = {
  navLabels: {
    Dashboard: "Dashboard",
    Education: "Education",
    Principles: "Principles",
    Workouts: "Workouts",
    Nutrition: "Nutrition",
    Recovery: "Recovery",
    Community: "Community",
    Media: "Media",
    Discover: "Discover",
    "Training Principles": "Training Principles",
    "Training & Nutrition Principles": "Training & Nutrition Principles",
    "Adaptive Fitness": "Adaptive Fitness",
    Exercises: "Exercises",
    "Exercise Library": "Exercise Library",
    Routines: "Routines",
    "Routine Library": "Routine Library",
    Groups: "Groups",
    "Workout Builder": "Workout Builder",
    "Injured Athlete": "Injured Athlete",
    Yoga: "Yoga",
    Pilates: "Pilates",
    "Tai Chi": "Tai Chi",
    Transformations: "Transformations",
    Leaderboards: "Leaderboards",
    Profile: "Profile",
    Pets: "Pets",
    Challenges: "Challenges",
    Achievements: "Achievements",
    "Community Hub": "Community Hub",
    Blog: "Blog",
    Chat: "Chat",
    Disclaimer: "Disclaimer",
    "Privacy Policy": "Privacy Policy",
    "Terms of Service": "Terms of Service"
  },
  actions: {
    home: "Home",
    search: "Search",
    profile: "Profile",
    language: "Language",
    openNavigation: "Open navigation",
    closeNavigation: "Close navigation"
  },
  footer: {
    description:
      "The education companion for Every Routine Fitness: the website teaches body education, training, nutrition, recovery, and habits while the app tracks progress.",
    bottom: "Every Routine Fitness education platform. Billing is intentionally inactive.",
    groups: {
      Train: "Train",
      Recover: "Recover",
      Community: "Community",
      Legal: "Legal"
    }
  },
  legal: {
    disclaimer: "Disclaimer",
    privacy: "Privacy",
    privacyPolicy: "Privacy Policy",
    terms: "Terms",
    termsOfService: "Terms of Service",
    fullDisclaimer: "Full Disclaimer"
  },
  disclaimerGate: {
    eyebrow: "E.R. Fitness Disclaimer",
    title: "Read and acknowledge before continuing.",
    versionLabel: "Version",
    storageNote:
      "This acknowledgment is stored on this device now and is ready to be saved to Supabase later with user ID, disclaimer version, accepted timestamp, source page, and hashed request metadata.",
    checkbox: "I have read and understand this disclaimer.",
    decline: "Decline",
    accept: "Accept and Continue"
  }
};

const overrides: Record<Locale, MessageOverride> = {
  en: {},
  es: {
    navLabels: {
      Dashboard: "Panel",
      Education: "Educación",
      Principles: "Principios",
      Workouts: "Entrenamientos",
      Nutrition: "Nutrición",
      Recovery: "Recuperación",
      Community: "Comunidad",
      Media: "Multimedia",
      Discover: "Descubrir",
      "Training Principles": "Principios de entrenamiento",
      "Training & Nutrition Principles": "Principios de entrenamiento y nutrición",
      "Adaptive Fitness": "Fitness adaptativo",
      Exercises: "Ejercicios",
      "Exercise Library": "Biblioteca de ejercicios",
      Routines: "Rutinas",
      "Routine Library": "Biblioteca de rutinas",
      Groups: "Grupos",
      "Workout Builder": "Creador de entrenamientos",
      "Injured Athlete": "Atleta lesionado",
      Transformations: "Transformaciones",
      Leaderboards: "Clasificaciones",
      Profile: "Perfil",
      Pets: "Mascotas",
      Challenges: "Desafíos",
      Achievements: "Logros",
      "Community Hub": "Centro comunitario",
      Blog: "Blog",
      Chat: "Chat",
      Disclaimer: "Aviso legal",
      "Privacy Policy": "Política de privacidad",
      "Terms of Service": "Términos de servicio"
    },
    actions: { home: "Inicio", search: "Buscar", profile: "Perfil", language: "Idioma", openNavigation: "Abrir navegación", closeNavigation: "Cerrar navegación" },
    footer: { bottom: "Plataforma educativa Every Routine Fitness. La facturación está desactivada intencionalmente.", groups: { Train: "Entrenar", Recover: "Recuperar", Community: "Comunidad", Legal: "Legal" } },
    legal: { disclaimer: "Aviso legal", privacy: "Privacidad", privacyPolicy: "Política de privacidad", terms: "Términos", termsOfService: "Términos de servicio", fullDisclaimer: "Aviso legal completo" },
    disclaimerGate: { title: "Lee y acepta antes de continuar.", versionLabel: "Versión", checkbox: "He leído y entiendo este aviso legal.", decline: "Rechazar", accept: "Aceptar y continuar" }
  },
  fr: {
    navLabels: {
      Dashboard: "Tableau de bord",
      Education: "Éducation",
      Principles: "Principes",
      Workouts: "Entraînements",
      Nutrition: "Nutrition",
      Recovery: "Récupération",
      Community: "Communauté",
      Media: "Médias",
      Discover: "Découvrir",
      "Training & Nutrition Principles": "Principes d'entraînement et de nutrition",
      "Adaptive Fitness": "Fitness adapté",
      Exercises: "Exercices",
      "Exercise Library": "Bibliothèque d'exercices",
      Routines: "Routines",
      Groups: "Groupes",
      "Workout Builder": "Créateur d'entraînements",
      "Injured Athlete": "Athlète blessé",
      Transformations: "Transformations",
      Leaderboards: "Classements",
      Profile: "Profil",
      Pets: "Animaux",
      Challenges: "Défis",
      Achievements: "Réussites",
      Disclaimer: "Avertissement",
      "Privacy Policy": "Politique de confidentialité",
      "Terms of Service": "Conditions d'utilisation"
    },
    actions: { home: "Accueil", search: "Rechercher", profile: "Profil", language: "Langue", openNavigation: "Ouvrir la navigation", closeNavigation: "Fermer la navigation" },
    footer: { bottom: "Plateforme éducative Every Routine Fitness. La facturation est volontairement inactive.", groups: { Train: "S'entraîner", Recover: "Récupérer", Community: "Communauté", Legal: "Juridique" } },
    legal: { disclaimer: "Avertissement", privacy: "Confidentialité", privacyPolicy: "Politique de confidentialité", terms: "Conditions", termsOfService: "Conditions d'utilisation", fullDisclaimer: "Avertissement complet" },
    disclaimerGate: { title: "Lisez et acceptez avant de continuer.", versionLabel: "Version", checkbox: "J'ai lu et compris cet avertissement.", decline: "Refuser", accept: "Accepter et continuer" }
  },
  de: {
    navLabels: {
      Dashboard: "Dashboard",
      Education: "Bildung",
      Principles: "Prinzipien",
      Workouts: "Workouts",
      Nutrition: "Ernährung",
      Recovery: "Regeneration",
      Community: "Community",
      Media: "Medien",
      Discover: "Entdecken",
      "Training & Nutrition Principles": "Trainings- und Ernährungsprinzipien",
      "Adaptive Fitness": "Adaptives Training",
      Exercises: "Übungen",
      "Exercise Library": "Übungsbibliothek",
      Routines: "Routinen",
      Groups: "Gruppen",
      "Workout Builder": "Workout-Builder",
      "Injured Athlete": "Verletzte Athleten",
      Transformations: "Transformationen",
      Leaderboards: "Bestenlisten",
      Profile: "Profil",
      Challenges: "Herausforderungen",
      Achievements: "Erfolge",
      Disclaimer: "Haftungsausschluss",
      "Privacy Policy": "Datenschutzrichtlinie",
      "Terms of Service": "Nutzungsbedingungen"
    },
    actions: { home: "Start", search: "Suche", profile: "Profil", language: "Sprache", openNavigation: "Navigation öffnen", closeNavigation: "Navigation schließen" },
    footer: { bottom: "Every Routine Fitness Bildungsplattform. Abrechnung ist absichtlich deaktiviert.", groups: { Train: "Trainieren", Recover: "Regenerieren", Community: "Community", Legal: "Rechtliches" } },
    legal: { disclaimer: "Haftungsausschluss", privacy: "Datenschutz", privacyPolicy: "Datenschutzrichtlinie", terms: "Bedingungen", termsOfService: "Nutzungsbedingungen", fullDisclaimer: "Vollständiger Haftungsausschluss" },
    disclaimerGate: { title: "Bitte lesen und bestätigen, bevor Sie fortfahren.", versionLabel: "Version", checkbox: "Ich habe diesen Hinweis gelesen und verstanden.", decline: "Ablehnen", accept: "Akzeptieren und fortfahren" }
  },
  pt: {
    navLabels: {
      Dashboard: "Painel",
      Education: "Educação",
      Principles: "Princípios",
      Workouts: "Treinos",
      Nutrition: "Nutrição",
      Recovery: "Recuperação",
      Community: "Comunidade",
      Media: "Mídia",
      Discover: "Descobrir",
      "Training & Nutrition Principles": "Princípios de treino e nutrição",
      "Adaptive Fitness": "Fitness adaptativo",
      Exercises: "Exercícios",
      "Exercise Library": "Biblioteca de exercícios",
      Routines: "Rotinas",
      Groups: "Grupos",
      "Workout Builder": "Criador de treinos",
      "Injured Athlete": "Atleta lesionado",
      Transformations: "Transformações",
      Leaderboards: "Classificações",
      Profile: "Perfil",
      Challenges: "Desafios",
      Achievements: "Conquistas",
      Disclaimer: "Aviso legal",
      "Privacy Policy": "Política de privacidade",
      "Terms of Service": "Termos de serviço"
    },
    actions: { home: "Início", search: "Pesquisar", profile: "Perfil", language: "Idioma", openNavigation: "Abrir navegação", closeNavigation: "Fechar navegação" },
    footer: { bottom: "Plataforma educativa Every Routine Fitness. A cobrança está intencionalmente inativa.", groups: { Train: "Treinar", Recover: "Recuperar", Community: "Comunidade", Legal: "Legal" } },
    legal: { disclaimer: "Aviso legal", privacy: "Privacidade", privacyPolicy: "Política de privacidade", terms: "Termos", termsOfService: "Termos de serviço", fullDisclaimer: "Aviso legal completo" },
    disclaimerGate: { title: "Leia e confirme antes de continuar.", versionLabel: "Versão", checkbox: "Li e entendo este aviso legal.", decline: "Recusar", accept: "Aceitar e continuar" }
  },
  it: {
    navLabels: { Dashboard: "Dashboard", Education: "Educazione", Principles: "Principi", Workouts: "Allenamenti", Nutrition: "Nutrizione", Recovery: "Recupero", Community: "Comunità", Media: "Media", Discover: "Scopri", Exercises: "Esercizi", Routines: "Routine", Groups: "Gruppi", Profile: "Profilo", Challenges: "Sfide", Achievements: "Obiettivi", Disclaimer: "Avvertenza", "Privacy Policy": "Informativa sulla privacy", "Terms of Service": "Termini di servizio" },
    actions: { home: "Home", search: "Cerca", profile: "Profilo", language: "Lingua", openNavigation: "Apri navigazione", closeNavigation: "Chiudi navigazione" },
    footer: { bottom: "Piattaforma educativa Every Routine Fitness. La fatturazione è volutamente inattiva.", groups: { Train: "Allenati", Recover: "Recupera", Community: "Comunità", Legal: "Legale" } },
    legal: { disclaimer: "Avvertenza", privacy: "Privacy", privacyPolicy: "Informativa sulla privacy", terms: "Termini", termsOfService: "Termini di servizio", fullDisclaimer: "Avvertenza completa" },
    disclaimerGate: { title: "Leggi e conferma prima di continuare.", versionLabel: "Versione", checkbox: "Ho letto e compreso questa avvertenza.", decline: "Rifiuta", accept: "Accetta e continua" }
  },
  nl: {
    navLabels: { Dashboard: "Dashboard", Education: "Educatie", Principles: "Principes", Workouts: "Workouts", Nutrition: "Voeding", Recovery: "Herstel", Community: "Community", Media: "Media", Discover: "Ontdekken", Exercises: "Oefeningen", Routines: "Routines", Groups: "Groepen", Profile: "Profiel", Challenges: "Uitdagingen", Achievements: "Prestaties", Disclaimer: "Disclaimer", "Privacy Policy": "Privacybeleid", "Terms of Service": "Servicevoorwaarden" },
    actions: { home: "Home", search: "Zoeken", profile: "Profiel", language: "Taal", openNavigation: "Navigatie openen", closeNavigation: "Navigatie sluiten" },
    footer: { bottom: "Every Routine Fitness educatieplatform. Facturering is bewust uitgeschakeld.", groups: { Train: "Train", Recover: "Herstel", Community: "Community", Legal: "Juridisch" } },
    legal: { disclaimer: "Disclaimer", privacy: "Privacy", privacyPolicy: "Privacybeleid", terms: "Voorwaarden", termsOfService: "Servicevoorwaarden", fullDisclaimer: "Volledige disclaimer" },
    disclaimerGate: { title: "Lees en bevestig voordat je doorgaat.", versionLabel: "Versie", checkbox: "Ik heb deze disclaimer gelezen en begrepen.", decline: "Weigeren", accept: "Accepteren en doorgaan" }
  },
  pl: {
    navLabels: { Dashboard: "Panel", Education: "Edukacja", Principles: "Zasady", Workouts: "Treningi", Nutrition: "Odżywianie", Recovery: "Regeneracja", Community: "Społeczność", Media: "Media", Discover: "Odkryj", Exercises: "Ćwiczenia", Routines: "Rutyny", Groups: "Grupy", Profile: "Profil", Challenges: "Wyzwania", Achievements: "Osiągnięcia", Disclaimer: "Zastrzeżenie", "Privacy Policy": "Polityka prywatności", "Terms of Service": "Warunki korzystania" },
    actions: { home: "Strona główna", search: "Szukaj", profile: "Profil", language: "Język", openNavigation: "Otwórz nawigację", closeNavigation: "Zamknij nawigację" },
    footer: { bottom: "Platforma edukacyjna Every Routine Fitness. Płatności są celowo nieaktywne.", groups: { Train: "Trenuj", Recover: "Regeneruj", Community: "Społeczność", Legal: "Prawne" } },
    legal: { disclaimer: "Zastrzeżenie", privacy: "Prywatność", privacyPolicy: "Polityka prywatności", terms: "Warunki", termsOfService: "Warunki korzystania", fullDisclaimer: "Pełne zastrzeżenie" },
    disclaimerGate: { title: "Przeczytaj i potwierdź przed kontynuowaniem.", versionLabel: "Wersja", checkbox: "Przeczytałem i rozumiem to zastrzeżenie.", decline: "Odrzuć", accept: "Akceptuj i kontynuuj" }
  },
  uk: {
    navLabels: { Dashboard: "Панель", Education: "Освіта", Principles: "Принципи", Workouts: "Тренування", Nutrition: "Харчування", Recovery: "Відновлення", Community: "Спільнота", Media: "Медіа", Discover: "Відкрити", Exercises: "Вправи", Routines: "Рутини", Groups: "Групи", Profile: "Профіль", Challenges: "Виклики", Achievements: "Досягнення", Disclaimer: "Застереження", "Privacy Policy": "Політика конфіденційності", "Terms of Service": "Умови використання" },
    actions: { home: "Головна", search: "Пошук", profile: "Профіль", language: "Мова", openNavigation: "Відкрити навігацію", closeNavigation: "Закрити навігацію" },
    footer: { bottom: "Освітня платформа Every Routine Fitness. Оплата навмисно вимкнена.", groups: { Train: "Тренування", Recover: "Відновлення", Community: "Спільнота", Legal: "Правове" } },
    legal: { disclaimer: "Застереження", privacy: "Конфіденційність", privacyPolicy: "Політика конфіденційності", terms: "Умови", termsOfService: "Умови використання", fullDisclaimer: "Повне застереження" },
    disclaimerGate: { title: "Прочитайте й підтвердьте перед продовженням.", versionLabel: "Версія", checkbox: "Я прочитав і розумію це застереження.", decline: "Відхилити", accept: "Прийняти й продовжити" }
  },
  ar: {
    navLabels: { Dashboard: "لوحة التحكم", Education: "التعليم", Principles: "المبادئ", Workouts: "التمارين", Nutrition: "التغذية", Recovery: "التعافي", Community: "المجتمع", Media: "الوسائط", Discover: "استكشاف", Exercises: "التمارين", Routines: "الروتينات", Groups: "المجموعات", Profile: "الملف الشخصي", Challenges: "التحديات", Achievements: "الإنجازات", Disclaimer: "إخلاء المسؤولية", "Privacy Policy": "سياسة الخصوصية", "Terms of Service": "شروط الخدمة" },
    actions: { home: "الرئيسية", search: "بحث", profile: "الملف الشخصي", language: "اللغة", openNavigation: "فتح التنقل", closeNavigation: "إغلاق التنقل" },
    footer: { bottom: "منصة Every Routine Fitness التعليمية. الفوترة غير مفعلة عمدا.", groups: { Train: "تدريب", Recover: "تعاف", Community: "المجتمع", Legal: "قانوني" } },
    legal: { disclaimer: "إخلاء المسؤولية", privacy: "الخصوصية", privacyPolicy: "سياسة الخصوصية", terms: "الشروط", termsOfService: "شروط الخدمة", fullDisclaimer: "إخلاء المسؤولية الكامل" },
    disclaimerGate: { title: "اقرأ وأقر قبل المتابعة.", versionLabel: "الإصدار", checkbox: "لقد قرأت وفهمت إخلاء المسؤولية هذا.", decline: "رفض", accept: "قبول ومتابعة" }
  },
  hi: {
    navLabels: { Dashboard: "डैशबोर्ड", Education: "शिक्षा", Principles: "सिद्धांत", Workouts: "वर्कआउट", Nutrition: "पोषण", Recovery: "रिकवरी", Community: "समुदाय", Media: "मीडिया", Discover: "खोजें", Exercises: "व्यायाम", Routines: "रूटीन", Groups: "समूह", Profile: "प्रोफ़ाइल", Challenges: "चुनौतियां", Achievements: "उपलब्धियां", Disclaimer: "अस्वीकरण", "Privacy Policy": "गोपनीयता नीति", "Terms of Service": "सेवा की शर्तें" },
    actions: { home: "होम", search: "खोज", profile: "प्रोफ़ाइल", language: "भाषा", openNavigation: "नेविगेशन खोलें", closeNavigation: "नेविगेशन बंद करें" },
    footer: { bottom: "Every Routine Fitness शिक्षा प्लेटफ़ॉर्म. बिलिंग जानबूझकर निष्क्रिय है.", groups: { Train: "प्रशिक्षण", Recover: "रिकवरी", Community: "समुदाय", Legal: "कानूनी" } },
    legal: { disclaimer: "अस्वीकरण", privacy: "गोपनीयता", privacyPolicy: "गोपनीयता नीति", terms: "शर्तें", termsOfService: "सेवा की शर्तें", fullDisclaimer: "पूरा अस्वीकरण" },
    disclaimerGate: { title: "आगे बढ़ने से पहले पढ़ें और स्वीकार करें.", versionLabel: "संस्करण", checkbox: "मैंने इस अस्वीकरण को पढ़ा और समझा है.", decline: "अस्वीकार करें", accept: "स्वीकार करें और जारी रखें" }
  },
  zh: {
    navLabels: { Dashboard: "仪表板", Education: "教育", Principles: "原则", Workouts: "训练", Nutrition: "营养", Recovery: "恢复", Community: "社区", Media: "媒体", Discover: "发现", Exercises: "练习", Routines: "计划", Groups: "群组", Profile: "个人资料", Challenges: "挑战", Achievements: "成就", Disclaimer: "免责声明", "Privacy Policy": "隐私政策", "Terms of Service": "服务条款" },
    actions: { home: "首页", search: "搜索", profile: "个人资料", language: "语言", openNavigation: "打开导航", closeNavigation: "关闭导航" },
    footer: { bottom: "Every Routine Fitness 教育平台。计费功能已故意停用。", groups: { Train: "训练", Recover: "恢复", Community: "社区", Legal: "法律" } },
    legal: { disclaimer: "免责声明", privacy: "隐私", privacyPolicy: "隐私政策", terms: "条款", termsOfService: "服务条款", fullDisclaimer: "完整免责声明" },
    disclaimerGate: { title: "继续前请阅读并确认。", versionLabel: "版本", checkbox: "我已阅读并理解此免责声明。", decline: "拒绝", accept: "接受并继续" }
  },
  ja: {
    navLabels: { Dashboard: "ダッシュボード", Education: "教育", Principles: "原則", Workouts: "ワークアウト", Nutrition: "栄養", Recovery: "回復", Community: "コミュニティ", Media: "メディア", Discover: "探す", Exercises: "エクササイズ", Routines: "ルーティン", Groups: "グループ", Profile: "プロフィール", Challenges: "チャレンジ", Achievements: "実績", Disclaimer: "免責事項", "Privacy Policy": "プライバシーポリシー", "Terms of Service": "利用規約" },
    actions: { home: "ホーム", search: "検索", profile: "プロフィール", language: "言語", openNavigation: "ナビゲーションを開く", closeNavigation: "ナビゲーションを閉じる" },
    footer: { bottom: "Every Routine Fitness 教育プラットフォーム。課金は意図的に無効です。", groups: { Train: "トレーニング", Recover: "回復", Community: "コミュニティ", Legal: "法務" } },
    legal: { disclaimer: "免責事項", privacy: "プライバシー", privacyPolicy: "プライバシーポリシー", terms: "規約", termsOfService: "利用規約", fullDisclaimer: "完全な免責事項" },
    disclaimerGate: { title: "続行する前に読んで確認してください。", versionLabel: "バージョン", checkbox: "この免責事項を読み、理解しました。", decline: "拒否", accept: "同意して続行" }
  },
  ko: {
    navLabels: { Dashboard: "대시보드", Education: "교육", Principles: "원칙", Workouts: "운동", Nutrition: "영양", Recovery: "회복", Community: "커뮤니티", Media: "미디어", Discover: "탐색", Exercises: "운동 동작", Routines: "루틴", Groups: "그룹", Profile: "프로필", Challenges: "챌린지", Achievements: "업적", Disclaimer: "면책 고지", "Privacy Policy": "개인정보 처리방침", "Terms of Service": "서비스 약관" },
    actions: { home: "홈", search: "검색", profile: "프로필", language: "언어", openNavigation: "탐색 열기", closeNavigation: "탐색 닫기" },
    footer: { bottom: "Every Routine Fitness 교육 플랫폼. 결제는 의도적으로 비활성화되어 있습니다.", groups: { Train: "훈련", Recover: "회복", Community: "커뮤니티", Legal: "법률" } },
    legal: { disclaimer: "면책 고지", privacy: "개인정보", privacyPolicy: "개인정보 처리방침", terms: "약관", termsOfService: "서비스 약관", fullDisclaimer: "전체 면책 고지" },
    disclaimerGate: { title: "계속하기 전에 읽고 확인하세요.", versionLabel: "버전", checkbox: "이 면책 고지를 읽고 이해했습니다.", decline: "거부", accept: "동의하고 계속" }
  },
  vi: {
    navLabels: { Dashboard: "Bảng điều khiển", Education: "Giáo dục", Principles: "Nguyên tắc", Workouts: "Bài tập", Nutrition: "Dinh dưỡng", Recovery: "Phục hồi", Community: "Cộng đồng", Media: "Phương tiện", Discover: "Khám phá", Exercises: "Động tác", Routines: "Lịch tập", Groups: "Nhóm", Profile: "Hồ sơ", Challenges: "Thử thách", Achievements: "Thành tích", Disclaimer: "Tuyên bố miễn trừ", "Privacy Policy": "Chính sách quyền riêng tư", "Terms of Service": "Điều khoản dịch vụ" },
    actions: { home: "Trang chủ", search: "Tìm kiếm", profile: "Hồ sơ", language: "Ngôn ngữ", openNavigation: "Mở điều hướng", closeNavigation: "Đóng điều hướng" },
    footer: { bottom: "Nền tảng giáo dục Every Routine Fitness. Thanh toán đang được tắt có chủ ý.", groups: { Train: "Tập luyện", Recover: "Phục hồi", Community: "Cộng đồng", Legal: "Pháp lý" } },
    legal: { disclaimer: "Tuyên bố miễn trừ", privacy: "Quyền riêng tư", privacyPolicy: "Chính sách quyền riêng tư", terms: "Điều khoản", termsOfService: "Điều khoản dịch vụ", fullDisclaimer: "Tuyên bố miễn trừ đầy đủ" },
    disclaimerGate: { title: "Vui lòng đọc và xác nhận trước khi tiếp tục.", versionLabel: "Phiên bản", checkbox: "Tôi đã đọc và hiểu tuyên bố miễn trừ này.", decline: "Từ chối", accept: "Chấp nhận và tiếp tục" }
  },
  tl: {
    navLabels: { Dashboard: "Dashboard", Education: "Edukasyon", Principles: "Prinsipyo", Workouts: "Mga workout", Nutrition: "Nutrisyon", Recovery: "Recovery", Community: "Komunidad", Media: "Media", Discover: "Tuklasin", Exercises: "Ehersisyo", Routines: "Routine", Groups: "Mga grupo", Profile: "Profile", Challenges: "Hamon", Achievements: "Mga tagumpay", Disclaimer: "Paunawa", "Privacy Policy": "Patakaran sa privacy", "Terms of Service": "Mga tuntunin ng serbisyo" },
    actions: { home: "Home", search: "Maghanap", profile: "Profile", language: "Wika", openNavigation: "Buksan ang navigation", closeNavigation: "Isara ang navigation" },
    footer: { bottom: "Every Routine Fitness education platform. Sadyang hindi aktibo ang billing.", groups: { Train: "Training", Recover: "Recovery", Community: "Komunidad", Legal: "Legal" } },
    legal: { disclaimer: "Paunawa", privacy: "Privacy", privacyPolicy: "Patakaran sa privacy", terms: "Mga tuntunin", termsOfService: "Mga tuntunin ng serbisyo", fullDisclaimer: "Buong paunawa" },
    disclaimerGate: { title: "Basahin at kilalanin bago magpatuloy.", versionLabel: "Bersyon", checkbox: "Nabasa at nauunawaan ko ang paunawang ito.", decline: "Tanggihan", accept: "Tanggapin at magpatuloy" }
  },
  id: {
    navLabels: { Dashboard: "Dasbor", Education: "Edukasi", Principles: "Prinsip", Workouts: "Latihan", Nutrition: "Nutrisi", Recovery: "Pemulihan", Community: "Komunitas", Media: "Media", Discover: "Jelajahi", Exercises: "Gerakan", Routines: "Rutinitas", Groups: "Grup", Profile: "Profil", Challenges: "Tantangan", Achievements: "Pencapaian", Disclaimer: "Penafian", "Privacy Policy": "Kebijakan privasi", "Terms of Service": "Ketentuan layanan" },
    actions: { home: "Beranda", search: "Cari", profile: "Profil", language: "Bahasa", openNavigation: "Buka navigasi", closeNavigation: "Tutup navigasi" },
    footer: { bottom: "Platform edukasi Every Routine Fitness. Penagihan sengaja dinonaktifkan.", groups: { Train: "Latihan", Recover: "Pemulihan", Community: "Komunitas", Legal: "Legal" } },
    legal: { disclaimer: "Penafian", privacy: "Privasi", privacyPolicy: "Kebijakan privasi", terms: "Ketentuan", termsOfService: "Ketentuan layanan", fullDisclaimer: "Penafian lengkap" },
    disclaimerGate: { title: "Baca dan akui sebelum melanjutkan.", versionLabel: "Versi", checkbox: "Saya telah membaca dan memahami penafian ini.", decline: "Tolak", accept: "Terima dan lanjutkan" }
  },
  th: {
    navLabels: { Dashboard: "แดชบอร์ด", Education: "การศึกษา", Principles: "หลักการ", Workouts: "การออกกำลังกาย", Nutrition: "โภชนาการ", Recovery: "การฟื้นตัว", Community: "ชุมชน", Media: "สื่อ", Discover: "ค้นพบ", Exercises: "ท่าออกกำลังกาย", Routines: "รูทีน", Groups: "กลุ่ม", Profile: "โปรไฟล์", Challenges: "ความท้าทาย", Achievements: "ความสำเร็จ", Disclaimer: "ข้อจำกัดความรับผิด", "Privacy Policy": "นโยบายความเป็นส่วนตัว", "Terms of Service": "ข้อกำหนดการให้บริการ" },
    actions: { home: "หน้าแรก", search: "ค้นหา", profile: "โปรไฟล์", language: "ภาษา", openNavigation: "เปิดเมนูนำทาง", closeNavigation: "ปิดเมนูนำทาง" },
    footer: { bottom: "แพลตฟอร์มการศึกษา Every Routine Fitness ระบบเรียกเก็บเงินถูกปิดไว้โดยตั้งใจ", groups: { Train: "ฝึก", Recover: "ฟื้นตัว", Community: "ชุมชน", Legal: "กฎหมาย" } },
    legal: { disclaimer: "ข้อจำกัดความรับผิด", privacy: "ความเป็นส่วนตัว", privacyPolicy: "นโยบายความเป็นส่วนตัว", terms: "ข้อกำหนด", termsOfService: "ข้อกำหนดการให้บริการ", fullDisclaimer: "ข้อจำกัดความรับผิดฉบับเต็ม" },
    disclaimerGate: { title: "โปรดอ่านและยืนยันก่อนดำเนินการต่อ", versionLabel: "เวอร์ชัน", checkbox: "ฉันได้อ่านและเข้าใจข้อจำกัดความรับผิดนี้แล้ว", decline: "ปฏิเสธ", accept: "ยอมรับและดำเนินการต่อ" }
  },
  tr: {
    navLabels: { Dashboard: "Panel", Education: "Eğitim", Principles: "İlkeler", Workouts: "Antrenmanlar", Nutrition: "Beslenme", Recovery: "Toparlanma", Community: "Topluluk", Media: "Medya", Discover: "Keşfet", Exercises: "Egzersizler", Routines: "Rutinler", Groups: "Gruplar", Profile: "Profil", Challenges: "Meydan okumalar", Achievements: "Başarılar", Disclaimer: "Sorumluluk reddi", "Privacy Policy": "Gizlilik politikası", "Terms of Service": "Hizmet şartları" },
    actions: { home: "Ana sayfa", search: "Ara", profile: "Profil", language: "Dil", openNavigation: "Navigasyonu aç", closeNavigation: "Navigasyonu kapat" },
    footer: { bottom: "Every Routine Fitness eğitim platformu. Faturalandırma bilinçli olarak devre dışıdır.", groups: { Train: "Antrenman", Recover: "Toparlanma", Community: "Topluluk", Legal: "Yasal" } },
    legal: { disclaimer: "Sorumluluk reddi", privacy: "Gizlilik", privacyPolicy: "Gizlilik politikası", terms: "Şartlar", termsOfService: "Hizmet şartları", fullDisclaimer: "Tam sorumluluk reddi" },
    disclaimerGate: { title: "Devam etmeden önce okuyun ve onaylayın.", versionLabel: "Sürüm", checkbox: "Bu sorumluluk reddini okudum ve anladım.", decline: "Reddet", accept: "Kabul et ve devam et" }
  },
  ru: {
    navLabels: { Dashboard: "Панель", Education: "Обучение", Principles: "Принципы", Workouts: "Тренировки", Nutrition: "Питание", Recovery: "Восстановление", Community: "Сообщество", Media: "Медиа", Discover: "Обзор", Exercises: "Упражнения", Routines: "Программы", Groups: "Группы", Profile: "Профиль", Challenges: "Испытания", Achievements: "Достижения", Disclaimer: "Отказ от ответственности", "Privacy Policy": "Политика конфиденциальности", "Terms of Service": "Условия обслуживания" },
    actions: { home: "Главная", search: "Поиск", profile: "Профиль", language: "Язык", openNavigation: "Открыть навигацию", closeNavigation: "Закрыть навигацию" },
    footer: { bottom: "Образовательная платформа Every Routine Fitness. Платежи намеренно отключены.", groups: { Train: "Тренировки", Recover: "Восстановление", Community: "Сообщество", Legal: "Правовая информация" } },
    legal: { disclaimer: "Отказ от ответственности", privacy: "Конфиденциальность", privacyPolicy: "Политика конфиденциальности", terms: "Условия", termsOfService: "Условия обслуживания", fullDisclaimer: "Полный отказ от ответственности" },
    disclaimerGate: { title: "Прочитайте и подтвердите перед продолжением.", versionLabel: "Версия", checkbox: "Я прочитал и понимаю этот отказ от ответственности.", decline: "Отклонить", accept: "Принять и продолжить" }
  }
};

export function getMessages(locale: Locale): CoreMessages {
  const override = overrides[locale] ?? overrides[DEFAULT_LOCALE];

  return {
    navLabels: { ...englishMessages.navLabels, ...override.navLabels },
    actions: { ...englishMessages.actions, ...override.actions },
    footer: {
      ...englishMessages.footer,
      ...override.footer,
      groups: { ...englishMessages.footer.groups, ...override.footer?.groups }
    },
    legal: { ...englishMessages.legal, ...override.legal },
    disclaimerGate: { ...englishMessages.disclaimerGate, ...override.disclaimerGate }
  };
}

export function getNavLabel(label: string, locale: Locale) {
  return getMessages(locale).navLabels[label] ?? label;
}
