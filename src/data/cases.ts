import type { L10n } from '../lib/i18n';

/**
 * Case studies. Obrazy to ścieżki w src/img/ (bez rozszerzenia).
 * Sekcja może mieć: text (akapity), list (punkty), steps (numerowane decyzje),
 * images (obrazy pod sekcją), compare (przed/po), note (wyróżniona notka).
 */
export type Step = { title: string; text: string; rejected?: string };
export type Section = {
  title: string;
  text?: string[];
  list?: string[];
  steps?: Step[];
  images?: string[];
  captions?: string[];
  compare?: { before: { list: string[]; images: string[] }; after: { list: string[]; images: string[] } };
  note?: string;
};
export type CaseContent = {
  label: string;
  title: string;
  summary: string;
  /** Rola (kolumna „Rola” w rzędzie meta) */
  role: string;
  /** Zakres pracy (lista w kolumnie „Zakres”) */
  scope: string[];
  /** Skład zespołu (lista) */
  team: string[];
  /** Rok (kolumna „Rok”, pokazywana, gdy uzupełniona) */
  year?: string;
  /** Efekt: wyróżniony blok po sekcji „Rozwiązanie” */
  effect: string;
  /** Miniatury materiałów roboczych (otwierają się w lightboxie) */
  processImages: string[];
  processCaptions: string[];
  sections: Section[];
  lesson: string;
};
export type CaseStudy = { slug: string; cover: string; content: L10n<CaseContent> };

export const tidioIntro: L10n<{ title: string; text: string[]; areas: { name: string; text: string }[] }> = {
  pl: {
    title: 'Tidio · Product Designer · 2021-2026',
    text: [
      'W Tidio projektowałem narzędzia do obsługi klienta: od chatbotów, analityki i inboxa, przez automatyzację rozmów, po funkcje AI wspierające konsultantów. Koordynowałem też prace nad design systemem.',
      'Ostatnie lata poświęciłem Lyro, pierwszemu konwersacyjnemu agentowi AI w Tidio i najszybciej rosnącemu produktowi w historii firmy. Projektowałem od początku produkty AI: Lyro, AI Panel Agent (Ask) i Copilota. Tidio używa ponad 300 tys. firm.',
      'Poniżej cztery wybrane case studies z Lyro.',
    ],
    areas: [
      { name: 'Lyro AI Agent', text: 'Pierwszy konwersacyjny agent AI w Tidio.' },
      { name: 'Copilot', text: 'Asystent konsultantów, który sam proponuje odpowiedzi.' },
      { name: 'Ask', text: 'Wewnętrzny agent wspierający zarządzanie wiedzą Lyro.' },
      { name: 'Flows', text: 'Chatboty budowane wg scenariusza w edytorze graficznym.' },
      { name: 'Inbox', text: 'Integracja koszyka Shopify w inboxie, widok rozmów Lyro i podgląd źródeł, z których agent zbudował odpowiedź.' },
      { name: 'Analityka', text: 'Projektowałem strukturę i wygląd analityki w panelu Tidio.' },
      { name: 'Design system', text: 'Koordynowałem utrzymanie design systemu i współpracę z frontendem. Przeprowadziłem migrację biblioteki z Figmy do Claude Design. Praca na design systemie to podstawa, a ta migracja pozwoliła całemu zespołowi designu, a także PM-om, tworzyć prototypy, szybciej sprawdzać własne pomysły i łatwiej pokazywać je zespołowi.' },
    ],
  },
  en: {
    title: 'Tidio · Product Designer · 2021-2026',
    text: [
      'At Tidio I designed customer service tools: from chatbots, analytics and the inbox, through conversation automation, to AI features that support human agents. I also coordinated work on the design system.',
      "I spent the last few years on Lyro, Tidio's first conversational AI agent and the fastest-growing product in the company's history. I designed the AI products from the start: Lyro, the AI Panel Agent (Ask) and Copilot. Tidio is used by 300K+ businesses.",
      'Below are four selected case studies from Lyro.',
    ],
    areas: [
      { name: 'Lyro AI Agent', text: "Tidio's first conversational AI agent." },
      { name: 'Copilot', text: 'An assistant that drafts replies for support agents.' },
      { name: 'Ask', text: "An internal agent that helps manage Lyro's knowledge." },
      { name: 'Flows', text: 'Scenario-based chatbots built in a visual editor.' },
      { name: 'Inbox', text: 'Shopify cart integration in the inbox, a view of Lyro conversations and a preview of the sources the agent used to build its answer.' },
      { name: 'Analytics', text: 'I designed the structure and look of analytics in the Tidio panel.' },
      { name: 'Design system', text: 'I coordinated design system upkeep and collaboration with frontend, and migrated the library from Figma to Claude Design. Working from the design system is the foundation, and this move let the whole design team, and PMs too, build prototypes, test their own ideas faster and show them to the team more easily.' },
    ],
  },
};

export const cases: CaseStudy[] = [
  // ───────────────────────────── 01 AUDIENCES
  {
    slug: 'lyro-audiences',
    cover: 'audiences/example-modal',
    content: {
      pl: {
        label: 'Lyro AI Agent · Case study 01',
        title: 'Audiences: różne odpowiedzi dla różnych klientów',
        summary: 'Jak jeden prosty mechanizm grup odwiedzających zastąpił osobne bazy wiedzy i stał się wspólnym językiem całego agenta.',
        role: 'Product Designer',
        scope: ['Research', 'Model konfiguracji', 'User flows', 'UI', 'Testy z użytkownikami'],
        team: ['PM', 'EM', 'QA', '2-3 BE', '2-4 FE'],
        effect: 'Funkcja dla większych firm. Ten sam mechanizm trafił później do Guidance, Procedures, Actions i wykluczania grup z rozmów z Lyro.',
        processImages: ['audiences/process-1', 'audiences/process-2'],
        processCaptions: ['Mapa hipotez i researchu: od zgłoszeń większych klientów do modelu grup', 'User flows: filtrowanie, akcje zbiorcze i przypisywanie audiences'],
        sections: [
          {
            title: 'Problem',
            text: [
              'Lyro korzystał z jednej bazy wiedzy dla wszystkich odwiedzających. Więksi klienci zgłaszali potrzebę wydzielenia części wiedzy agenta tak, by nie mówił wszystkiego każdemu, tylko odpowiadał inaczej różnym grupom. Na przykład:',
            ],
            list: [
              'inne treści dla klientów z innego kraju lub w innym języku',
              'osobne informacje dla klientów VIP',
              'odpowiedzi zależne od strony, na której jest klient',
            ],
          },
          {
            title: 'Kontekst i ograniczenia',
            text: [
              'W Knowledge / Data sources użytkownicy dodawali treści, z których Lyro budował odpowiedzi. Każde źródło było dostępne w każdej rozmowie.',
            ],
          },
          {
            title: 'Rozwiązanie',
            text: ['Audiences: grupy odwiedzających budowane z kanałów i warunków, przypisywane do źródeł wiedzy. Domyślnie: Everyone.'],
          },
          {
            title: 'Kluczowe decyzje',
            steps: [
              {
                title: 'Grupy zamiast osobnych baz wiedzy',
                text: 'Kilka baz to kilka kopii tych samych treści do utrzymania. Audiences zostawiają jedną bazę i tylko zawężają, kto widzi dane źródło.',
                rejected: 'osobna baza wiedzy dla każdej grupy',
              },
              {
                title: 'Prosty, addytywny model',
                text: 'Klient może należeć do kilku grup naraz, bez priorytetów i konfliktów. Domyślnie wszystko jest dla Everyone, więc wdrożenie niczego nie psuje. Rozmowy można sprawdzić w inboxie, w folderze Lyro.',
              },
              {
                title: 'Jeden mechanizm dla całego agenta',
                text: 'Audiences to osobny prymityw, a nie „funkcja Knowledge”. Dzięki temu trafiły do Guidance, Procedures, Actions i wykluczania z rozmów z Lyro.',
              },
              {
                title: 'Istniejący komponent zamiast nowego',
                text: 'Do budowania warunków użyliśmy komponentu „smart views” z inboxa. Bez nowych komponentów czas implementacji był znacznie krótszy.',
              },
            ],
            images: ['audiences/configure', 'audiences/add-audience'],
            captions: ['Lista audiences w Configure', 'Dodawanie audience: kanały i warunki'],
          },
          {
            title: 'Przykład: audience „English users”',
            steps: [
              { title: 'Kanały', text: 'Gdzie grupa w ogóle obowiązuje: All channels, Live chat lub Messenger.' },
              { title: 'Warunki', text: 'Bloki warunków: AND w bloku, OR między blokami. Np. język przeglądarki = English AND konkretny URL.' },
              {
                title: 'Przypisanie',
                text: 'Audience przypisany do źródła wiedzy, np. dedykowanego PDF-a. Agent użyje go tylko w rozmowach z tą grupą. Reszta źródeł zostaje dla Everyone.',
              },
            ],
            images: ['audiences/example-modal', 'audiences/example-source'],
            captions: ['Definicja audience', 'Przypisanie audience do pojedynczego Q&A'],
          },
        ],
        lesson: 'Prosty prymityw zamiast łatki: zaczął od jednego PDF-a, skończył jako wspólny język całego agenta.',
      },
      en: {
        label: 'Lyro AI Agent · Case study 01',
        title: 'Audiences: different answers for different customers',
        summary: 'How one simple visitor-group mechanism replaced separate knowledge bases and became a shared language across the whole agent.',
        role: 'Product Designer',
        scope: ['Research', 'Configuration model', 'User flows', 'UI', 'User testing'],
        team: ['PM', 'EM', 'QA', '2-3 BE', '2-4 FE'],
        effect: 'A feature for larger companies. The same mechanism later powered Guidance, Procedures, Actions and excluding groups from Lyro conversations.',
        processImages: ['audiences/process-1', 'audiences/process-2'],
        processCaptions: ['Hypothesis and research map: from larger customers’ requests to a group model', 'User flows: filtering, bulk actions and assigning audiences'],
        sections: [
          {
            title: 'Problem',
            text: [
              'Lyro used a single knowledge base for all visitors. Larger customers asked to scope parts of the knowledge so the agent would answer different groups differently. For example:',
            ],
            list: [
              'different content for customers from another country or language',
              'separate information for VIP customers',
              'answers that depend on the page the customer is on',
            ],
          },
          {
            title: 'Context and constraints',
            text: [
              'In Knowledge / Data sources users added the content Lyro built its answers from. Every source was available in every conversation.',
            ],
          },
          {
            title: 'Solution',
            text: ['Audiences: visitor groups built from channels and conditions, assigned to knowledge sources. Default: Everyone.'],
          },
          {
            title: 'Key decisions',
            steps: [
              {
                title: 'Groups instead of separate knowledge bases',
                text: 'Several bases mean several copies of the same content to maintain. Audiences keep one base and only narrow down who sees a given source.',
                rejected: 'a separate knowledge base per group',
              },
              {
                title: 'A simple, additive model',
                text: 'A customer can belong to several groups at once, with no priorities and no conflicts. Everything defaults to Everyone, so rolling it out breaks nothing. Conversations can be reviewed in the inbox, in the Lyro folder.',
              },
              {
                title: 'One mechanism for the whole agent',
                text: 'Audiences are a standalone primitive, not a “Knowledge feature”. That is why they could be reused in Guidance, Procedures, Actions and conversation exclusions.',
              },
              {
                title: 'Reuse an existing component',
                text: 'Conditions are built with the inbox “smart views” component. No new components meant a much shorter implementation time.',
              },
            ],
            images: ['audiences/configure', 'audiences/add-audience'],
            captions: ['Audience list in Configure', 'Adding an audience: channels and conditions'],
          },
          {
            title: 'Example: the “English users” audience',
            steps: [
              { title: 'Channels', text: 'Where the group applies at all: All channels, Live chat or Messenger.' },
              { title: 'Conditions', text: 'Condition blocks: AND within a block, OR between blocks. E.g. browser language = English AND a specific URL.' },
              {
                title: 'Assignment',
                text: 'The audience is assigned to a knowledge source, e.g. a dedicated PDF. The agent uses it only with that group; all other sources stay with Everyone.',
              },
            ],
            images: ['audiences/example-modal', 'audiences/example-source'],
            captions: ['Audience definition', 'Assigning an audience to a single Q&A'],
          },
        ],
        lesson: 'A simple primitive instead of a patch: it started with a single PDF and ended up as a shared language for the whole agent.',
      },
    },
  },

  // ───────────────────────────── 02 ONBOARDING
  {
    slug: 'lyro-onboarding',
    cover: 'onboarding/setup',
    content: {
      pl: {
        label: 'Lyro AI Agent · Case study 02',
        title: 'Onboarding: agent gotowy w kilka minut',
        summary: 'Zamiast kolejnych punktów na liście „to do”: osobny ekran Setup, na którym agent przedstawia się jak nowy członek zespołu.',
        role: 'Product Designer',
        scope: ['Koncepcja', 'User flows', 'Wireframes', 'UI', 'Testy z użytkownikami', 'Analiza danych (Amplitude)'],
        team: ['PM', 'EM', 'QA', '2-3 BE', '2-4 FE'],
        effect: 'Jeden ekran setupu i jeden ekran overview. Wdrożone tuż po moim odejściu z Tidio (XI 2026), więc nie znam wyników. Miarą sukcesu miał być „Aha! moment”: przejście onboardingu, uruchomienie agenta i pierwsza rozmowa rozwiązana przez Lyro.',
        processImages: ['onboarding/process-1', 'onboarding/process-2'],
        processCaptions: ['Mapa hipotez i researchu: dlaczego lista „to do” przestała działać', 'Statusy, kroki i wireframes ekranu Setup'],
        sections: [
          {
            title: 'Problem',
            text: [
              'Wraz z rozwojem AI agenta rosła liczba jego funkcji. Ówczesna lista setupu nie spełniała już swojej roli. Dodanie kolejnych kroków było najprostszym rozwiązaniem deweloperskim, ale z punktu widzenia UX najsłabszym. Potrzebowaliśmy miejsca, w którym użytkownik skupi się na konkretnym zadaniu.',
            ],
          },
          {
            title: 'Rozwiązanie',
            text: ['Ekran Setup prowadzi przez konfigurację z perspektywy agenta („I’m joining your team”) w pięciu krokach:'],
            list: [
              'Who Lyro is: imię, kontekst firmy, język i ton',
              'What Lyro knows about your company: źródła wiedzy',
              'What Lyro knows about your products: katalog produktów',
              'How Lyro behaves: test odpowiedzi',
              'Where Lyro responds: kanały działania',
            ],
          },
          {
            title: 'Kluczowe decyzje',
            steps: [
              {
                title: 'Usunięcie listy „to do”',
                text: 'Lista kroków przestała wystarczać, a zajmowała miejsce na Hubie agenta (overview). Wydłużanie jej i poprawki UI nie miały uzasadnienia, dlatego zdecydowałem się na osobną, pośrednią stronę Setup.',
              },
              {
                title: 'Agent przedstawia się jak nowy członek zespołu',
                text: 'Setup mówi w pierwszej osobie: „I’m joining your team. Set me up in a few minutes.” To wdrożenie współpracownika, nie formularz. „You can change everything later” zdejmuje presję i pozwala szybko wystartować.',
              },
              {
                title: 'Nowa lista onboardingowa',
                text: 'Tylko najważniejsze kroki do pierwszego uruchomienia. Onboarding nie jest zamkniętym tourem. Przyciski CTA prowadzą do konkretnych miejsc w strukturze agenta, żeby użytkownik poznał jego budowę i wiedział, gdzie później szukać ustawień.',
              },
              {
                title: 'Aktywacja: co dalej z listą',
                text: 'Aktywacja na dowolnym kanale chowa stronę onboardingu. Agent zaczyna pracę, a użytkownik musi śledzić jego działanie, dlatego w miejscu Setupu pokazujemy Hub, a niewykonane kroki jako „recommended steps”. Sam Hub przebudowałem na podstawie danych: w Amplitude, gdzie śledziłem adopcję funkcji Lyro, było widać, że części jego elementów prawie nikt nie klikał, bo użytkownicy wchodzili w te same miejsca z menu.',
              },
            ],
            images: ['onboarding/setup', 'onboarding/hub'],
            captions: ['Setup: agent przedstawia się w pierwszej osobie', 'Hub po aktywacji z rekomendowanymi krokami'],
          },
          {
            title: 'Przed i po',
            compare: {
              before: {
                list: [
                  'Karta „Follow these steps to complete Lyro setup” na górze Huba: cztery kroki i licznik 1/4',
                  'Każda nowa funkcja to kolejny punkt na liście, bez kontekstu, czego dotyczy i dlaczego jest ważny',
                  'Lista nie mówiła nic o tym, kim jest agent i jak się zachowuje',
                ],
                images: ['onboarding/before'],
              },
              after: {
                list: [
                  'Pięć kroków ułożonych wokół pytań o agenta: kim jest, co wie, jak się zachowuje, gdzie odpowiada',
                  'Jeden aktywny krok naraz, ukończone kroki zwinięte',
                  'Po ukończeniu Setup zamienia się w Hub',
                ],
                images: ['onboarding/setup'],
              },
            },
          },
        ],
        lesson: 'Gdy produkt rośnie, onboarding nie może rosnąć razem z nim. Musi skupiać się na tym, co najważniejsze na starcie.',
      },
      en: {
        label: 'Lyro AI Agent · Case study 02',
        title: 'Onboarding: an agent ready in minutes',
        summary: 'Instead of more items on a to-do list: a dedicated Setup screen where the agent introduces itself like a new teammate.',
        role: 'Product Designer',
        scope: ['Concept', 'User flows', 'Wireframes', 'UI', 'User testing', 'Data analysis (Amplitude)'],
        team: ['PM', 'EM', 'QA', '2-3 BE', '2-4 FE'],
        effect: "One setup screen and one overview screen. Shipped right after I left Tidio (Nov 2026), so I haven't seen the results. Success was to be measured by the “Aha! moment”: completing onboarding, launching the agent and Lyro resolving its first conversation.",
        processImages: ['onboarding/process-1', 'onboarding/process-2'],
        processCaptions: ['Hypothesis and research map: why the to-do list stopped working', 'States, steps and wireframes for the Setup screen'],
        sections: [
          {
            title: 'Problem',
            text: [
              'As the AI agent evolved, the number of features grew. The setup checklist no longer served its purpose. Adding more steps was the easiest solution for development but the weakest for UX. We needed a place where users could focus on one specific task.',
            ],
          },
          {
            title: 'Solution',
            text: ['The Setup screen guides users through configuration from the agent’s point of view (“I’m joining your team”) in five steps:'],
            list: [
              'Who Lyro is: name, company context, language and tone',
              'What Lyro knows about your company: knowledge sources',
              'What Lyro knows about your products: product catalog',
              'How Lyro behaves: testing answers',
              'Where Lyro responds: channels',
            ],
          },
          {
            title: 'Key decisions',
            steps: [
              {
                title: 'Removing the to-do list',
                text: 'The checklist was no longer enough and it took up space on the agent Hub (overview). Extending it or polishing the UI had no justification, so I decided on a separate, intermediate Setup page.',
              },
              {
                title: 'The agent introduces itself like a new teammate',
                text: 'Setup speaks in the first person: “I’m joining your team. Set me up in a few minutes.” It’s onboarding a co-worker, not filling in a form. “You can change everything later” takes the pressure off and gets users started fast.',
              },
              {
                title: 'A new onboarding list',
                text: 'Only the steps essential for the first launch. Onboarding isn’t a closed tour. CTAs lead to specific places in the agent’s structure, so users learn how it’s built and where to find settings later.',
              },
              {
                title: 'Activation: what happens to the list',
                text: 'Activating any channel hides the onboarding page. The agent starts working and the user needs to monitor it, so the Hub replaces Setup and any skipped steps appear as “recommended steps”. I also redesigned the Hub itself based on data: Amplitude, where I tracked adoption of Lyro features, showed that some of its elements were barely clicked because users reached the same places from the menu.',
              },
            ],
            images: ['onboarding/setup', 'onboarding/hub'],
            captions: ['Setup: the agent introduces itself in the first person', 'Hub after activation with recommended steps'],
          },
          {
            title: 'Before and after',
            compare: {
              before: {
                list: [
                  'A “Follow these steps to complete Lyro setup” card at the top of the Hub: four steps and a 1/4 counter',
                  'Every new feature became another item on the list, with no context on what it was for or why it mattered',
                  'The list said nothing about who the agent is or how it behaves',
                ],
                images: ['onboarding/before'],
              },
              after: {
                list: [
                  'Five steps organised around questions about the agent: who it is, what it knows, how it behaves, where it responds',
                  'One active step at a time, completed steps collapsed',
                  'Once complete, Setup turns into the Hub',
                ],
                images: ['onboarding/setup'],
              },
            },
          },
        ],
        lesson: 'As a product grows, onboarding can’t grow with it. It has to focus on what matters most at the start.',
      },
    },
  },

  // ───────────────────────────── 03 AGENT PROFILE
  {
    slug: 'lyro-agent-profile',
    cover: 'agent-profile/profile',
    content: {
      pl: {
        label: 'Lyro AI Agent · Case study 03',
        title: 'Profil agenta zamiast zakładek ustawień',
        summary: 'Przebudowa modelu mentalnego Lyro i nawigacji: ustawienia ułożone wokół tego, kim jest agent i jak pracuje z zespołem.',
        role: 'Product Designer',
        scope: ['Analiza', 'Model nawigacji', 'Prototypy HTML', 'UI', 'Testy z użytkownikami'],
        team: ['PM', 'EM', 'QA', '2-3 BE', '2-4 FE'],
        effect: 'Koncepcja trafiła do dalszych planów, ale zakończyłem pracę w Tidio, zanim przyszła kolej na jej wdrożenie. Cel: mniej zgłoszeń do supportu o to, gdzie są ustawienia agenta.',
        processImages: ['agent-profile/process-1', 'agent-profile/process-2', 'agent-profile/process-3'],
        processCaptions: ['Mapa obecnej nawigacji: gdzie były rozproszone ustawienia agenta', 'Struktura nowego modelu: profil, praca z zespołem, ustawienia domyślne', 'Dokument roboczy: model agenta i nawigacji (wersja 17)'],
        sections: [
          {
            title: 'Problem',
            text: [
              'Lyro rósł funkcja po funkcji: część ustawień trafiała do Configure, inne do Behavior. Ze zgłoszeń do customer supportu Tidio wiedzieliśmy, że użytkownicy gubili się w tym, gdzie znajdują się ustawienia agenta. Behavior, Guidance, Handoff, Procedures, Actions, Audiences, kanały: każda funkcja dokładała własne miejsce w nawigacji, aż model produktu przestał być czytelny zarówno dla nowych, jak i obecnych klientów.',
              'Celem było uproszczenie struktury tak, żeby konfiguracja agenta była przewidywalna, bez przebudowy całego backendu.',
            ],
          },
          {
            title: 'Rozwiązanie',
            text: [
              'Nowy model ułożony z perspektywy użytkownika i onboardingu: profil agenta, który go przedstawia (nazwa, języki, ton), sposób, w jaki agent współpracuje z ludzkim zespołem, oraz podstawowe ustawienia domyślne, np. handoff. Kolejne wersje sprawdzaliśmy na klikalnych prototypach HTML.',
            ],
          },
          {
            title: 'Kluczowe decyzje',
            steps: [
              {
                title: 'Agent jako członek zespołu, nie strona ustawień',
                text: 'Zamiast zakładek jest profil: tożsamość, powitanie, kontekst firmy (generowany ze strony), język i ton. Copilot przeniesiony poza Lyro, bo to narzędzie dla konsultantów, a nie część agenta.',
              },
              {
                title: '„How Lyro works with your team” w jednym miejscu',
                text: 'Kiedy agent odpowiada, kogo pomija (wykluczone audiences) i jak przekazuje rozmowy. Wszystko w jednym miejscu, ale osobno dla live chatu i e-maili. Domyślny handoff działa, gdy klient prosi o człowieka.',
              },
              {
                title: 'Podgląd obok ustawień',
                text: 'Zmiana powitania, tonu czy języka jest od razu widoczna w podglądzie rozmowy. Użytkownik widzi efekt, zanim agent porozmawia z klientem.',
              },
            ],
            images: ['agent-profile/profile', 'agent-profile/profile-edit'],
            captions: ['Profil agenta z podglądem rozmowy', 'Edycja tożsamości agenta'],
          },
          {
            title: 'Przed i po',
            compare: {
              before: {
                list: [
                  'Configure z zakładkami General (tożsamość, opis firmy, język, dostęp do danych), Audiences i Copilot: ustawienia zupełnie różnej natury w jednym miejscu',
                  'To, jak i kiedy agent odpowiada oraz przekazuje rozmowy, było w innych miejscach: Handoff, Channels',
                ],
                images: ['agent-profile/configure', 'agent-profile/handoff'],
              },
              after: {
                list: [
                  'Kim jest: nazwa, tożsamość AI, powitanie i kontekst firmy generowany ze strony',
                  'Jak mówi: język domyślny, obsługiwane języki, ton',
                  'Jak pracuje z zespołem: kiedy odpowiada, wykluczone audiences i domyślny handoff, osobno dla live chatu i e-maili',
                  'Podgląd rozmowy obok ustawień',
                  'Copilot przeniesiony poza Lyro',
                ],
                images: ['agent-profile/profile-team'],
              },
            },
          },
        ],
        lesson: 'Nawigacja to nie lista funkcji, tylko model tego, jak użytkownik rozumie produkt. Warto go projektować od początku, zanim funkcji przybędzie.',
      },
      en: {
        label: 'Lyro AI Agent · Case study 03',
        title: 'An agent profile instead of settings tabs',
        summary: "Rebuilding Lyro's mental model and navigation: settings organised around who the agent is and how it works with the team.",
        role: 'Product Designer',
        scope: ['Analysis', 'Navigation model', 'HTML prototypes', 'UI', 'User testing'],
        team: ['PM', 'EM', 'QA', '2-3 BE', '2-4 FE'],
        effect: 'Planned for a later stage, but I left Tidio before it came up for implementation. Goal: fewer support tickets asking where agent settings live.',
        processImages: ['agent-profile/process-1', 'agent-profile/process-2', 'agent-profile/process-3'],
        processCaptions: ['Map of the current navigation: where agent settings were scattered', 'Structure of the new model: profile, working with the team, defaults', 'Working doc: agent and navigation model (version 17)'],
        sections: [
          {
            title: 'Problem',
            text: [
              "Lyro grew feature by feature: some settings landed in Configure, others in Behavior. Support tickets showed that users got lost looking for agent settings. Behavior, Guidance, Handoff, Procedures, Actions, Audiences, channels: each added its own place in the navigation until the product model was no longer clear to new or existing customers.",
              'The goal was to simplify the structure so configuring the agent became predictable, without rebuilding the entire backend.',
            ],
          },
          {
            title: 'Solution',
            text: [
              'A new model built from the user’s and onboarding perspective: an agent profile that introduces it (name, languages, tone), how the agent works with the human team, and core defaults such as handoff. We validated each version on clickable HTML prototypes.',
            ],
          },
          {
            title: 'Key decisions',
            steps: [
              {
                title: 'The agent as a teammate, not a settings page',
                text: 'Instead of tabs, a profile: identity, greeting, company context (generated from the website), language and tone. Copilot moved out of Lyro, because it is a tool for human agents, not part of the AI agent.',
              },
              {
                title: '“How Lyro works with your team” in one place',
                text: 'When the agent responds, whom it skips (excluded audiences) and how it hands over conversations. All in one place, but separately for live chat and email. Default handoff kicks in when a customer asks for a human.',
              },
              {
                title: 'Preview next to settings',
                text: 'Changing the greeting, tone or language is instantly visible in a conversation preview. Users see the result before the agent talks to a customer.',
              },
            ],
            images: ['agent-profile/profile', 'agent-profile/profile-edit'],
            captions: ['Agent profile with conversation preview', 'Editing the agent’s identity'],
          },
          {
            title: 'Before and after',
            compare: {
              before: {
                list: [
                  'Configure with General (identity, company description, language, data access), Audiences and Copilot tabs: settings of a completely different nature in one place',
                  'How and when the agent responds and hands over lived elsewhere: Handoff, Channels',
                ],
                images: ['agent-profile/configure', 'agent-profile/handoff'],
              },
              after: {
                list: [
                  'Who it is: name, AI identity, greeting and company context generated from the website',
                  'How it talks: default language, supported languages, tone',
                  'How it works with the team: when it responds, excluded audiences and default handoff, separately for live chat and email',
                  'Conversation preview next to the settings',
                  'Copilot moved out of Lyro',
                ],
                images: ['agent-profile/profile-team'],
              },
            },
          },
        ],
        lesson: 'Navigation isn’t a list of features. It’s a model of how users understand the product. Design it early, before the features pile up.',
      },
    },
  },

  // ───────────────────────────── 04 KNOWLEDGE
  {
    slug: 'lyro-knowledge',
    cover: 'knowledge/after',
    content: {
      pl: {
        label: 'Lyro AI Agent · Case study 04',
        title: 'Knowledge: uproszczony model źródeł wiedzy',
        summary: 'Pięć „typów źródeł”, które w praktyce były tym samym. Moja inicjatywa: każda pozycja to Q&A, a plik czy strona to tylko miejsce pochodzenia.',
        role: 'Product Designer, inicjatywa własna',
        scope: ['Analiza modelu danych', 'UI', 'Testy z użytkownikami'],
        team: ['PM', 'EM', 'QA', '2-3 BE', '2-4 FE', 'Drugi designer, który ze mną współpracował'],
        effect: 'Koncepcja trafiła do dalszych planów, ale zakończyłem pracę w Tidio, zanim przyszła kolej na jej wdrożenie. Cel: prostsza, bardziej zrozumiała lista źródeł, mniej filtrów i łatwiejsze dalsze funkcje na poziomie pojedynczego Q&A.',
        processImages: ['knowledge/process'],
        processCaptions: ['Mapa hipotez i researchu: obecna i nowa struktura źródeł wiedzy'],
        sections: [
          {
            title: 'Problem',
            text: [
              'W Data sources każde źródło miało osobny typ: Manual (Q&A dodawane ręcznie), Inbox (Q&A zapisane z inboxa), CSV, Website, PDF. W praktyce wszystkie były tym samym: zbiorem pytań i odpowiedzi, z których korzysta agent. Typ źródła mieszał się z typem treści: użytkownik widział pięć różnych rzeczy tam, gdzie była jedna.',
            ],
          },
          {
            title: 'Rozwiązanie',
            text: [
              'To był mój samodzielny pomysł: zauważyłem problem przy pracy nad Data sources i zaproponowałem zespołowi zmianę modelu. Każda pozycja w bazie wiedzy to Q&A, a plik CSV, strona czy PDF to tylko miejsce, z którego pochodzi.',
            ],
            images: ['knowledge/model-before', 'knowledge/model-after'],
            captions: ['Obecna struktura Data sources', 'Nowa struktura'],
          },
          {
            title: 'Kluczowe decyzje',
            steps: [
              {
                title: 'Każda pozycja to Q&A',
                text: 'Q&A w folderach przestały być oznaczane nazwą folderu („Website”, „CSV”, „PDF”). Wewnątrz pliku czy strony każda pozycja to po prostu Q&A.',
              },
              {
                title: 'Manual i Inbox to teraz „Q&A”',
                text: 'Inbox był martwym źródłem. Q&A z inboxa trafiały jako sugestie albo Q&A utworzone z rozmowy. Dla użytkownika nie ma znaczenia, skąd pytanie przyszło: to zawsze Q&A, więc dwa źródła zastąpiła jedna etykieta.',
              },
              {
                title: 'Source → Type',
                text: 'Source zmieniło się w Type (Q&A, Website, PDF, CSV), a jeden filtr Type zastąpił mylące „Show: Q&A / Folders” i osobny filtr Source. Lyro i Copilot dostały osobne kolumny.',
              },
            ],
          },
          {
            title: 'Przed i po',
            compare: {
              before: {
                list: [
                  'Osobne źródła Manual i Inbox (Inbox: tylko sugestie i Q&A z rozmów)',
                  'Q&A w folderach oznaczone nazwą folderu: Website, CSV, PDF',
                  'Lyro i Copilot jako chipy w jednej kolumnie „Used by”',
                  'Filtr „Show: All / Q&A / Folders”, w którym „Q&A” pokazywało tylko Manual i Inbox, choć strony i pliki też zawierały Q&A',
                ],
                images: ['knowledge/before'],
              },
              after: {
                list: [
                  'Kolumna Type zamiast Source: Q&A, Website, PDF, CSV',
                  'Ikona przy nazwie (strona albo plik) dla szybszego skanowania',
                  'Lyro i Copilot w osobnych kolumnach',
                  'Filtr Type + dodawanie kolejnych filtrów',
                ],
                images: ['knowledge/after'],
              },
            },
          },
          {
            title: 'Kierunek: foldery i Q&A',
            steps: [
              { title: 'Poziom 1: foldery', text: 'Wszystko, co dodałeś, to folder: Manual, strony, pliki. Jeden poziom, więc Type ma sens (Manual, Website, File).' },
              { title: 'Poziom 2: wejdź do środka', text: 'W folderze każda pozycja to po prostu Q&A. Globalna wyszukiwarka znajduje Q&A we wszystkich folderach.' },
              { title: 'Ustawienia na folderze', text: 'Audience, Lyro i Copilot ustawiasz na folderze; pojedyncze Q&A może je nadpisać („Custom”).' },
              { title: 'Inbox → Suggestions', text: 'Sugestie z rozmów czekają w kolejce do przejrzenia; po akceptacji Q&A trafia do folderu Manual.' },
            ],
            images: ['knowledge/after', 'knowledge/folder'],
            captions: ['Poziom 1: foldery', 'Poziom 2: Q&A wewnątrz folderu'],
            note: 'Ta koncepcja trafiła do dalszych planów, ale zakończyłem pracę w Tidio, zanim przyszła kolej na jej wdrożenie.',
          },
        ],
        lesson: 'Gdy użytkownik widzi pięć rzeczy tam, gdzie jest jedna, problemem nie jest UI, tylko model. Uproszczenie modelu upraszcza wszystko, co powstaje na nim później.',
      },
      en: {
        label: 'Lyro AI Agent · Case study 04',
        title: 'Knowledge: a simpler model of knowledge sources',
        summary: 'Five “source types” that were really the same thing. My own initiative: every item is a Q&A, and a file or page is just where it came from.',
        role: 'Product Designer, own initiative',
        scope: ['Data model analysis', 'UI', 'User testing'],
        team: ['PM', 'EM', 'QA', '2-3 BE', '2-4 FE', 'A second designer collaborating with me'],
        effect: 'Planned for a later stage, but I left Tidio before it came up for implementation. Goal: a simpler, clearer source list, fewer filters, and easier follow-up features at the single-Q&A level.',
        processImages: ['knowledge/process'],
        processCaptions: ['Hypothesis and research map: the current and new knowledge source structure'],
        sections: [
          {
            title: 'Problem',
            text: [
              'In Data sources each source had its own type: Manual (Q&As added by hand), Inbox (Q&As saved from the inbox), CSV, Website, PDF. In practice they were all the same: sets of questions and answers the agent uses. Source type got mixed up with content type: users saw five different things where there was only one.',
            ],
          },
          {
            title: 'Solution',
            text: [
              'This was my own idea: I noticed the issue while working on Data sources and proposed a model change to the team. Every item in the knowledge base is a Q&A, and a CSV file, web page or PDF is just where it comes from.',
            ],
            images: ['knowledge/model-before', 'knowledge/model-after'],
            captions: ['Current Data sources structure', 'New structure'],
          },
          {
            title: 'Key decisions',
            steps: [
              {
                title: 'Every item is a Q&A',
                text: 'Q&As in folders were no longer labelled with the folder name (“Website”, “CSV”, “PDF”). Inside a file or page, every item is simply a Q&A.',
              },
              {
                title: 'Manual and Inbox are now “Q&A”',
                text: 'Inbox was a dead source. Q&As from the inbox arrived as suggestions or Q&As created from conversations. Users don’t care where a question came from: it’s always a Q&A, so one label replaced two sources.',
              },
              {
                title: 'Source → Type',
                text: 'Source became Type (Q&A, Website, PDF, CSV), and a single Type filter replaced the confusing “Show: Q&A / Folders” and a separate Source filter. Lyro and Copilot got their own columns.',
              },
            ],
          },
          {
            title: 'Before and after',
            compare: {
              before: {
                list: [
                  'Separate Manual and Inbox sources (Inbox: only suggestions and Q&As from conversations)',
                  'Q&As in folders labelled with the folder name: Website, CSV, PDF',
                  'Lyro and Copilot as chips in a single “Used by” column',
                  '“Show: All / Q&A / Folders” filter, where “Q&A” only showed Manual and Inbox, even though pages and files also contained Q&As',
                ],
                images: ['knowledge/before'],
              },
              after: {
                list: [
                  'Type column instead of Source: Q&A, Website, PDF, CSV',
                  'An icon next to the name (page or file) for faster scanning',
                  'Lyro and Copilot in separate columns',
                  'Type filter + adding more filters',
                ],
                images: ['knowledge/after'],
              },
            },
          },
          {
            title: 'Direction: folders and Q&As',
            steps: [
              { title: 'Level 1: folders', text: 'Everything you add is a folder: Manual, pages, files. One level, so Type makes sense (Manual, Website, File).' },
              { title: 'Level 2: go inside', text: 'Inside a folder every item is just a Q&A. Global search finds Q&As across all folders.' },
              { title: 'Folder-level settings', text: 'Audience, Lyro and Copilot are set on the folder; a single Q&A can override them (“Custom”).' },
              { title: 'Inbox → Suggestions', text: 'Suggestions from conversations wait in a review queue; once accepted, the Q&A goes to the Manual folder.' },
            ],
            images: ['knowledge/after', 'knowledge/folder'],
            captions: ['Level 1: folders', 'Level 2: Q&As inside a folder'],
            note: 'This concept was planned for a later stage, but I left Tidio before it came up for implementation.',
          },
        ],
        lesson: 'When users see five things where there is one, the problem isn’t the UI. It’s the model. Simplifying the model simplifies everything built on top of it.',
      },
    },
  },
];
