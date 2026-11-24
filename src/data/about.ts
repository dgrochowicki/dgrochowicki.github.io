import type { L10n } from '../lib/i18n';

export const intro: L10n<{ hero: string; lead: string; bio: string[] }> = {
  pl: {
    hero: 'Cześć, jestem Dominik.\nProjektuję złożone produkty tak,\nby były proste w\u00A0użyciu.',
    lead: 'Ponad 5 lat pracowałem jako Product Designer w Tidio, w czterech zespołach: od chatbotów (Flows), przez analitykę i inbox, po Lyro, agenta AI do obsługi klienta, którego projektowałem od pierwszej wersji. Wcześniej projektowałem produkty SaaS, platformy fintech i grafikę do gier mobilnych, a od 2017 roku prowadzę własne studio Deque (UI/UX i branding). Z wykształcenia jestem informatykiem.',
    bio: [
      'Jestem Product Designerem z wieloletnim doświadczeniem w projektowaniu interfejsów i komunikacji wizualnej. Zaczynałem od tworzenia grafiki i animacji do gier na palmtopy i telefony komórkowe, a potem zająłem się brandingiem oraz projektowaniem stron i aplikacji.',
      'Przez ostatnie pięć lat w Tidio projektowałem produkty cyfrowe, w tym rozwiązania AI, łącząc projektowanie UX/UI z badaniami i analizą danych. Koordynowałem też prace nad design systemem.',
      'Z wykształcenia jestem informatykiem, więc projektuję w realnych ograniczeniach technicznych i dobrze współpracuję z developerami.',
    ],
  },
  en: {
    hero: "Hi, I'm Dominik.\nI design complex products\nso they're simple to\u00A0use.",
    lead: "I spent over 5 years as a Product Designer at Tidio, across four teams: from chatbots (Flows), through analytics and the inbox, to Lyro, an AI customer service agent I designed from its very first version. Before that, I designed SaaS products, fintech platforms and graphics for mobile games, and since 2017 I've run my own studio, Deque (UI/UX and branding). I have a degree in computer science.",
    bio: [
      'I am a Product Designer with many years of experience in interface design and visual communication. I started out creating graphics and animation for games on PDAs and mobile phones, then moved into branding and web and app design.',
      'For the past five years at Tidio, I designed digital products, including AI solutions, combining UX/UI design with research and data analysis. I also coordinated work on the design system.',
      "I have a degree in computer science, so I design within real technical constraints and work well with developers.",
    ],
  },
};

/** short: krótsza wartość na telefon (opcjonalna) */
export const stats: L10n<{ value: string; short?: string; label: string }[]> = {
  pl: [
    { value: '20+ lat', label: 'w projektowaniu interfejsów i grafiki' },
    { value: '5+ lat', label: 'jako Product Designer w Tidio, 4 zespoły' },
    { value: '3+ lata', label: 'przy Lyro i produktach AI, od pierwszej wersji' },
    { value: 'mgr informatyki', short: 'mgr inf.', label: 'rozumiem, jak działa to, co projektuję' },
  ],
  en: [
    { value: '20+ yrs', label: 'in interface and graphic design' },
    { value: '5+ yrs', label: 'as a Product Designer at Tidio, 4 teams' },
    { value: '3+ yrs', label: 'on Lyro and AI products, from v1' },
    { value: 'MSc in CS', short: 'MSc', label: 'I know how what I design is built' },
  ],
};

export const principles: L10n<{ title: string; text: string }[]> = {
  pl: [
    {
      title: 'Całość, nie pojedyncze ekrany',
      text: 'Projektuję user flows, modele konfiguracji i design system tak, żeby produkt dało się rozwijać bez chaosu.',
    },
    {
      title: 'Prototyp jako narzędzie decyzji',
      text: 'Buduję klikalne prototypy (kiedyś w Figmie, dziś także w Claude Design jako HTML), żeby szybko testować pomysły i uzgadniać je z zespołem przed developmentem.',
    },
    {
      title: 'Rozumiem, jak to działa pod spodem',
      text: 'Zaplecze inżynierskie pozwala mi projektować w realnych ograniczeniach i rozmawiać z developerami o architekturze.',
    },
  ],
  en: [
    {
      title: 'Systems, not single screens',
      text: 'I design user flows, configuration models and the design system so the product can grow without chaos.',
    },
    {
      title: 'Prototypes drive decisions',
      text: 'I build clickable prototypes (in Figma, and now also in Claude Design as HTML) to test ideas quickly and align the team before development.',
    },
    {
      title: 'I know how it works underneath',
      text: 'An engineering background lets me design within real constraints and discuss architecture with developers.',
    },
  ],
};

export type Job = { company: string; role: string; years: string; text?: string; bullets?: string[] };

export const experience: L10n<Job[]> = {
  pl: [
    {
      company: 'Tidio',
      role: 'Product Designer',
      years: '2021-2026',
      text: 'Produkty: Lyro AI Agent (konwersacyjny agent AI do obsługi klienta), Copilot (asystent AI dla konsultantów), Flows (wizualny edytor chatbotów), Analytics, Inbox.',
      bullets: [
        'Koncepcje, user flows, prototypy i docelowe interfejsy dla nowych funkcji i zmian w produkcie',
        'Research, projektowanie i rozwój produktów AI: Lyro AI Agent, Copilot, Ask (AI panel agent)',
        'Budowa i rozwój Flows, narzędzia do automatyzacji rozmów w edytorze graficznym',
        'Testy użyteczności prototypów i testy korytarzowe',
        'Dashboardy analityczne i analiza użycia funkcji w Amplitude',
        'Analiza rozmów użytkowników w celu identyfikowania problemów i potrzeb',
        'Koordynacja zmian i prac zespołu odpowiedzialnego za design system',
        'Przeniesienie design systemu z Figmy do Claude Design',
      ],
    },
    {
      company: 'Deque Dominik Grochowicki',
      role: 'Projektant UI/UX i grafik, właściciel',
      years: 'od 2017',
      text: 'UI/UX, branding, identyfikacja wizualna i materiały do druku. Klienci m.in.: inProjects, Werin, Teonite, Browar Rockmill, Salvada, Enterprise Logistics.',
    },
    {
      company: 'Omnicorp',
      role: 'Product Designer / UI/UX Designer',
      years: '2019-2021',
      text: 'Kompletny panel użytkownika (UI/UX) dla Coresender, platformy do wysyłania i monitorowania maili transakcyjnych i marketingowych przez SMTP i API.',
    },
    {
      company: 'Lemon Demon Sp. z o.o.',
      role: 'Graphic Designer / UI/UX Designer',
      years: '2012-2019',
      text: 'Interfejsy platform gamingowych, tradingowych, płatniczych i loterii online, portfel kryptowalutowy, panele użytkownika. Strony www, landing pages, identyfikacje wizualne i materiały marketingowe.',
    },
    {
      company: 'Deepline s.c.',
      role: 'Graphic Designer, UI/UX Designer',
      years: '2009-2012',
      text: 'Strony internetowe, identyfikacje wizualne, materiały marketingowe i do druku, grafika do gier mobilnych.',
    },
    {
      company: 'Gameleons, Cubezn New Media, InterActive Vision, Mind Beacon',
      role: 'Game Graphic Artist / UI Designer',
      years: '2001-2009',
      text: 'Grafika, animacje i interfejsy do gier na urządzenia mobilne.',
    },
  ],
  en: [
    {
      company: 'Tidio',
      role: 'Product Designer',
      years: '2021-2026',
      text: 'Products: Lyro AI Agent (conversational AI agent for customer service), Copilot (AI assistant for support agents), Flows (visual chatbot builder), Analytics, Inbox.',
      bullets: [
        'Concepts, user flows, prototypes and final UI for new features and product changes',
        'Research, design and development of AI products: Lyro AI Agent, Copilot, Ask (AI agent panel)',
        'Building and growing Flows, a visual editor for conversation automation',
        'Usability testing of prototypes and guerrilla testing',
        'Analytics dashboards and feature usage analysis in Amplitude',
        'Analysing user conversations to identify problems and needs',
        'Coordinating changes and the work of the design system team',
        'Migrating the design system from Figma to Claude Design',
      ],
    },
    {
      company: 'Deque Dominik Grochowicki',
      role: 'UI/UX & Graphic Designer, owner',
      years: 'since 2017',
      text: 'UI/UX, branding, visual identity and print. Clients include inProjects, Werin, Teonite, Rockmill Brewery, Salvada and Enterprise Logistics.',
    },
    {
      company: 'Omnicorp',
      role: 'Product Designer / UI/UX Designer',
      years: '2019-2021',
      text: 'Designed the complete user dashboard (UI/UX) for Coresender, a platform for sending and monitoring transactional and marketing email via SMTP and API.',
    },
    {
      company: 'Lemon Demon Sp. z o.o.',
      role: 'Graphic Designer / UI/UX Designer',
      years: '2012-2019',
      text: 'Interfaces for gaming, trading, payment and online lottery platforms, a crypto wallet and user dashboards. Websites, landing pages, visual identities and marketing materials.',
    },
    {
      company: 'Deepline s.c.',
      role: 'Graphic Designer, UI/UX Designer',
      years: '2009-2012',
      text: 'Websites, visual identities, marketing and print materials, graphics for mobile games.',
    },
    {
      company: 'Gameleons, Cubezn New Media, InterActive Vision, Mind Beacon',
      role: 'Game Graphic Artist / UI Designer',
      years: '2001-2009',
      text: 'Graphics, animation and interfaces for mobile games.',
    },
  ],
};

export const skills: L10n<{ title: string; items: string[] }[]> = {
  pl: [
    {
      title: 'Projektowanie produktu',
      items: ['UX/UI', 'projektowanie produktów AI', 'architektura informacji', 'przepływy użytkownika', 'prototypowanie (Figma i Claude)', 'design systems'],
    },
    {
      title: 'Badania i dane',
      items: ['testy użyteczności', 'analiza rozmów użytkowników', 'analityka produktowa', 'analiza potrzeb użytkowników'],
    },
    {
      title: 'Narzędzia',
      items: ['Figma', 'Claude (prototypowanie, design systems)', 'Amplitude', 'HTML, CSS'],
    },
    {
      title: 'Dodatkowo',
      items: ['branding i identyfikacja wizualna', 'projektowanie stron internetowych', 'Photoshop', 'Illustrator', 'InDesign', 'DTP'],
    },
  ],
  en: [
    {
      title: 'Product design',
      items: ['UX/UI design', 'AI product design (AI agents, assistants)', 'information architecture', 'user flows', 'prototyping (Figma and code with Claude)', 'design systems'],
    },
    {
      title: 'Research and data',
      items: ['usability testing', 'user conversation analysis', 'product analytics', 'user needs analysis'],
    },
    {
      title: 'Tools',
      items: ['Figma', 'Claude (prototyping, design systems)', 'Amplitude', 'HTML, CSS'],
    },
    {
      title: 'Also',
      items: ['branding and visual identity', 'web design', 'Photoshop', 'Illustrator', 'InDesign', 'DTP'],
    },
  ],
};

type Entry = { title: string; sub: string; years: string };

export const education: L10n<Entry[]> = {
  pl: [
    {
      title: 'Politechnika Szczecińska, Wydział Informatyki',
      sub: 'Studia magisterskie, informatyka, specjalizacja: techniki multimedialne',
      years: '1998-2003',
    },
    { title: 'Sztuka projektowania', sub: 'Kurs designu pod patronatem Karola Śliwki, I edycja, Gdańsk', years: '2018-2019' },
  ],
  en: [
    {
      title: 'Szczecin University of Technology, Faculty of Computer Science',
      sub: "Master's degree in Computer Science, specialisation: multimedia technologies",
      years: '1998-2003',
    },
    { title: 'Sztuka projektowania (The Art of Design)', sub: 'Design course under Karol Śliwka, 1st edition, Gdańsk', years: '2018-2019' },
  ],
};

export const awards: L10n<Entry[]> = {
  pl: [
    { title: '1. miejsce: „Golden Pixel”, etykieta dla Browaru Rockmill', sub: 'ART of PACKAGING 2020 PROFESSIONAL', years: '2020' },
    { title: '3. miejsce: DemonBrew, etykieta piwa kraftowego', sub: 'I konkurs domowych etykiet piwnych', years: '2013' },
  ],
  en: [
    { title: '1st place: “Golden Pixel”, label for Rockmill Brewery', sub: 'ART of PACKAGING 2020 PROFESSIONAL', years: '2020' },
    { title: '3rd place: DemonBrew, craft beer label', sub: '1st Homebrew Beer Label Contest', years: '2013' },
  ],
};

export const volunteering: L10n<string[]> = {
  pl: [
    'World Usability Day Szczecin 2020: branding, identyfikacja',
    'NASA Space Apps Challenge Szczecin: branding, identyfikacja',
    'Mentoring na Startup Weekend Szczecin',
    'Rowerowy Szczecin',
    'Idee przez miasto',
  ],
  en: [
    'World Usability Day Szczecin 2020: branding, visual identity',
    'NASA Space Apps Challenge Szczecin: branding, visual identity',
    'Mentoring at Startup Weekend Szczecin',
    'Rowerowy Szczecin (cycling advocacy)',
    'Idee przez miasto (urban initiatives)',
  ],
};

export const languages: L10n<string[]> = {
  pl: ['Polski: ojczysty', 'Angielski: B1'],
  en: ['Polish: native', 'English: B1'],
};
