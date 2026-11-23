import type { L10n } from '../lib/i18n';

/** Esej „Czego nauczyło mnie projektowanie agenta AI”. Strona: /portfolio/ai-agent-lessons */
/** images: klucze z src/img/ (opcjonalne), captions: podpisy w tej samej kolejności */
/** cases: slugi powiązanych case studies (linki w obie strony) */
export type Lesson = { title: string; situation: string; decision: string[]; why: string; images?: string[]; captions?: string[]; cases?: string[]; diagram?: 'handoff' };
export type EssayContent = {
  label: string;
  title: string;
  summary: string;
  intro: string;
  lessons: Lesson[];
  closingTitle: string;
  closing: string[];
};

export const essay: { slug: string; content: L10n<EssayContent> } = {
  slug: 'ai-agent-lessons',
  content: {
    pl: {
      label: 'Lyro AI Agent · Esej',
      title: 'Czego nauczyło mnie projektowanie agenta AI',
      summary: 'Sześć lekcji z ponad trzech lat pracy nad Lyro: o granicach wiedzy, przekazywaniu rozmów ludziom, zaufaniu i upraszczaniu modelu produktu.',
      intro:
        'Przez ponad trzy lata projektowałem Lyro, agenta AI, który samodzielnie rozmawia z klientami firm korzystających z Tidio. Agent AI to nie jest zwykła funkcja w produkcie. Mówi w imieniu firmy, a jego zachowania nie da się do końca przewidzieć. Poniżej sześć lekcji z tej pracy. Każda to konkretna sytuacja, decyzja i powód, dla którego ją podjęliśmy.',
      lessons: [
        {
          title: 'Agent nie może mówić wszystkiego każdemu',
          situation:
            'Lyro korzystało z jednej bazy wiedzy dla wszystkich odwiedzających. Więksi klienci potrzebowali, żeby agent inaczej odpowiadał klientom z innego kraju, klientom VIP albo osobom na konkretnej stronie.',
          decision: [
            'Zamiast osobnych baz wiedzy zaprojektowałem Audiences: grupy odwiedzających budowane z kanałów i warunków. Baza wiedzy zostaje jedna, a grupy tylko zawężają, kto widzi dane źródło. Domyślnie wszystko jest dla wszystkich, więc wdrożenie niczego nie psuło.',
          ],
          why: 'Kilka baz to kilka kopii tych samych treści do utrzymania. Prosty, wspólny mechanizm okazał się ważniejszy niż sama funkcja: Audiences trafiły później do Guidance, Procedures, Actions i do wykluczania grup z rozmów z Lyro.',
          cases: ['lyro-audiences'],
          images: ['audiences/add-audience'],
          captions: ['Audience: kanały i warunki, jedna baza wiedzy'],
        },
        {
          title: '„Oddaj człowiekowi” to nie jeden przycisk',
          situation:
            'Lyro oddawało rozmowę konsultantowi, gdy klient poprosił o człowieka. Ale co, jeśli jest 3 w nocy i nikogo nie ma? Prośba o człowieka, gdy zespół jest offline, to zupełnie inna sytuacja niż w godzinach pracy.',
          decision: [
            'Podzieliliśmy handoff na dwie warstwy. Pierwsza to domyślne zachowanie zależne od tego, czy zespół jest online, czy offline: użytkownik ustawia raz, co Lyro ma wtedy zrobić. Druga to sytuacje szczególne opisane zwykłym językiem w Procedures i Guidance, np. „gdy klient jest zdenerwowany, zaproponuj rozmowę z konsultantem”.',
            'Do tego dla każdego kanału można było ustawić, czy Lyro odpowiada zawsze, czy tylko wtedy, gdy zespół jest offline.',
          ],
          why: 'Nie da się przewidzieć wszystkich sytuacji w jednym formularzu. Proste ustawienia domyślne działają od pierwszego dnia, a elastyczne reguły obsługują wyjątki.',
          diagram: 'handoff',
          images: ['agent-profile/handoff'],
          captions: ['Domyślne reguły handoffu (online / offline) i lista handoff guidance dla sytuacji szczególnych'],
        },
        {
          title: 'Zaufanie trzeba zbudować, zanim agent porozmawia z pierwszym klientem',
          situation:
            'To były początki popularnych dziś modeli językowych. Klienci bali się AI i mu nie ufali. Nie chcieli, żeby agent powiedział coś niewłaściwego ich klientom, zanim w ogóle zobaczą, jak działa.',
          decision: [
            'Zaufanie budowaliśmy na dwa sposoby. Pierwszy to Playground, który Lyro miało od początku: miejsce do przetestowania wiedzy i zachowania agenta przed uruchomieniem. Użytkownik dostawał kilka gotowych pytań albo wpisywał własne. Zaprojektowałem go w dwóch wersjach, dla live chatu i dla e-maila, bo odpowiedzi w tych kanałach wyglądają inaczej i użytkownik chciał zobaczyć dokładnie to, co dostanie jego klient.',
            'Drugi to Copilot: prostszy agent, który korzystał z tej samej wiedzy co Lyro, ale nie odpowiadał klientom sam. Podpowiadał odpowiedzi konsultantom, na żywo w trakcie rozmowy albo na żądanie. Człowiek sprawdzał odpowiedź i decydował, czy ją wysłać.',
          ],
          why: 'Przy AI pierwszą barierą nie jest konfiguracja, tylko zaufanie. Playground pozwalał zobaczyć, jak agent odpowiada, zanim zrobi to naprawdę. Copilot szedł krok dalej: zespół na co dzień weryfikował odpowiedzi AI, oszczędzał czas i sam przekonywał się, że warto przejść na w pełni autonomicznego agenta. Zamiast przekonywać do AI, daliśmy ludziom możliwość przekonania się samemu.',
        },
        {
          title: 'Pytania bez odpowiedzi to najlepsze źródło wiedzy',
          situation:
            'Na początku było niewiele sposobów dodawania wiedzy. Użytkownicy dodawali to, co mieli, ale wiedza była niepełna i wiele pytań klientów zostawało bez odpowiedzi.',
          decision: [
            'Zamiast traktować te pytania jako porażkę agenta, zrobiliśmy z nich miejsce do uzupełniania wiedzy: Suggestions. Ponieważ te same pytania się powtarzały, dodaliśmy grupowanie i podział na tematy, z którymi przychodzili klienci. Użytkownik widział, w której kategorii i które pytanie wraca najczęściej.',
          ],
          why: 'Agent sam pokazuje, czego mu brakuje. Wystarczy uporządkować te luki tak, żeby było jasne, od czego zacząć.',
        },
        {
          title: 'Agent to członek zespołu, nie strona ustawień',
          situation:
            'Wraz z kolejnymi funkcjami ustawienia agenta rozlewały się po produkcie. Część trafiała do Configure, część do Behavior, a opcje handoffu były w kilku miejscach naraz. Ze zgłoszeń do supportu wiedzieliśmy, że użytkownicy gubili się w tym, gdzie co ustawić.',
          decision: [
            'Onboarding przebudowałem tak, że agent przedstawia się w pierwszej osobie: „I’m joining your team. Set me up in a few minutes.” Zaproponowałem też profil agenta: jedno miejsce z jego tożsamością, sposobem mówienia i tym, jak pracuje z ludzkim zespołem, z podglądem rozmowy obok ustawień. Profil nie został wdrożony przed moim odejściem z Tidio.',
          ],
          why: 'Ludzie łatwiej rozumieją agenta jako nowego współpracownika niż jako zestaw przełączników. Ten model od razu mówi, co i gdzie można ustawić.',
          cases: ['lyro-onboarding', 'lyro-agent-profile'],
          images: ['onboarding/setup', 'agent-profile/profile'],
          captions: ['Setup: agent przedstawia się w pierwszej osobie', 'Propozycja profilu agenta z podglądem rozmowy'],
        },
        {
          title: 'Gdy funkcji przybywa, upraszczaj model, a nie interfejs',
          situation:
            'Guidance, Handoff i Procedures wyglądały i działały podobnie, różniły się kilkoma detalami. Użytkownicy nie wiedzieli, gdzie i jakie instrukcje wpisywać. Podobnie w bazie wiedzy: pięć „typów źródeł” było w praktyce tym samym.',
          decision: [
            'Zaproponowałem połączenie trzech sekcji w jedną, z oznaczeniem typu instrukcji i jednym edytorem, żeby tworząc instrukcję, użytkownik od razu wiedział, czy dotyczy handoffu, czy innego zachowania agenta. W bazie wiedzy zaproponowałem prostszy model: każda pozycja to Q&A, a plik czy strona to tylko miejsce, z którego pochodzi. Obie propozycje nie zostały wdrożone przed moim odejściem, ale lekcja zostaje.',
          ],
          why: 'Gdy użytkownik widzi pięć rzeczy tam, gdzie jest jedna, poprawki w UI nie pomogą. Trzeba uprościć model, a wtedy upraszcza się wszystko, co na nim powstaje.',
          cases: ['lyro-knowledge'],
          images: ['knowledge/before', 'knowledge/after'],
          captions: ['Przed: osobne typy źródeł i filtry', 'Po (propozycja): każda pozycja to Q&A, typ to tylko pochodzenie'],
        },
      ],
      closingTitle: 'Co mnie najbardziej zaskoczyło',
      closing: [
        'Dwie rzeczy. Po pierwsze, bardzo dużo zależy od zespołu ML, który rozwija część po stronie modeli językowych. Projektowanie agenta to stała koordynacja kilku zespołów, a nie tylko praca nad interfejsem.',
        'Po drugie, tempo. Modele językowe zmieniały się tak szybko, że rozwiązania sprzed roku zaczynały nam przeszkadzać. Dało się je zrobić lepiej i bardziej uniwersalnie, ale wcześniej modele po prostu tego nie potrafiły. Dlatego dziś, projektując dla AI, zakładam, że część decyzji trzeba będzie wkrótce przemyśleć od nowa, i staram się, żeby model produktu to wytrzymał.',
      ],
    },
    en: {
      label: 'Lyro AI Agent · Essay',
      title: 'What designing an AI agent taught me',
      summary: 'Six lessons from over three years of work on Lyro: knowledge boundaries, handing conversations to humans, trust, and simplifying the product model.',
      intro:
        'For over three years I designed Lyro, an AI agent that talks to customers on its own on behalf of businesses using Tidio. An AI agent isn’t just another feature. It speaks for the company, and its behaviour can’t be fully predicted. Below are six lessons from that work. Each one is a specific situation, a decision, and the reason we made it.',
      lessons: [
        {
          title: 'An agent shouldn’t tell everything to everyone',
          situation:
            'Lyro used a single knowledge base for every visitor. Larger customers needed the agent to answer differently for customers from another country, VIP customers, or people on a specific page.',
          decision: [
            'Instead of separate knowledge bases, I designed Audiences: visitor groups built from channels and conditions. There is still one knowledge base, and groups only narrow down who sees a given source. By default everything is for everyone, so rolling it out broke nothing.',
          ],
          why: 'Several bases mean several copies of the same content to maintain. A simple, shared mechanism turned out to matter more than the feature itself: Audiences later powered Guidance, Procedures, Actions and excluding groups from Lyro conversations.',
          cases: ['lyro-audiences'],
          images: ['audiences/add-audience'],
          captions: ['An audience: channels and conditions, one knowledge base'],
        },
        {
          title: '“Hand over to a human” isn’t a single button',
          situation:
            'Lyro handed the conversation to a support agent when a customer asked for a human. But what if it’s 3 a.m. and nobody is there? Asking for a human when the team is offline is a completely different situation than during working hours.',
          decision: [
            'We split handoff into two layers. The first is default behaviour that depends on whether the team is online or offline: the user sets once what Lyro should do. The second is special situations described in plain language in Procedures and Guidance, e.g. “if the customer is upset, offer to talk to a teammate”.',
            'On top of that, each channel could be set so that Lyro responds always or only when the team is offline.',
          ],
          why: 'You can’t predict every situation in a single form. Simple defaults work from day one, and flexible rules handle the exceptions.',
          diagram: 'handoff',
          images: ['agent-profile/handoff'],
          captions: ['Default handoff rules (online / offline) and handoff guidance for special situations'],
        },
        {
          title: 'Trust has to be built before the agent talks to its first customer',
          situation:
            'These were the early days of today’s popular language models. Customers were afraid of AI and didn’t trust it. They didn’t want the agent to say something wrong to their customers before they had even seen how it works.',
          decision: [
            'We built trust in two ways. The first was Playground, which Lyro had from the start: a place to test the agent’s knowledge and behaviour before going live. Users got a few ready-made questions or typed their own. I designed it in two versions, for live chat and for email, because answers look different in each channel and users wanted to see exactly what their customers would get.',
            'The second was Copilot: a simpler agent that used the same knowledge as Lyro but didn’t answer customers on its own. It suggested replies to support agents, live during a conversation or on demand. A human checked the reply and decided whether to send it.',
          ],
          why: 'With AI, the first barrier isn’t configuration, it’s trust. Playground let users see how the agent answers before it does so for real. Copilot went a step further: the team verified AI answers every day, saved time, and convinced themselves it was worth moving to a fully autonomous agent. Instead of persuading people to use AI, we let them see for themselves.',
        },
        {
          title: 'Unanswered questions are the best source of knowledge',
          situation:
            'At first there were few ways to add knowledge. Users added what they had, but the knowledge was incomplete and many customer questions went unanswered.',
          decision: [
            'Instead of treating those questions as the agent’s failure, we turned them into a place to fill in the knowledge: Suggestions. Since the same questions kept repeating, we added grouping and split them into the topics customers came with. Users could see which category and which question came up most often.',
          ],
          why: 'The agent shows what it’s missing by itself. You only need to organise those gaps so it’s clear where to start.',
        },
        {
          title: 'An agent is a teammate, not a settings page',
          situation:
            'With every new feature, agent settings spread across the product. Some ended up in Configure, some in Behavior, and handoff options lived in several places at once. Support tickets told us users got lost looking for where to set things.',
          decision: [
            'I redesigned onboarding so the agent introduces itself in the first person: “I’m joining your team. Set me up in a few minutes.” I also proposed an agent profile: one place with its identity, the way it speaks and how it works with the human team, with a conversation preview next to the settings. The profile wasn’t shipped before I left Tidio.',
          ],
          why: 'People understand an agent more easily as a new co-worker than as a set of toggles. This model tells them right away what they can set and where.',
          cases: ['lyro-onboarding', 'lyro-agent-profile'],
          images: ['onboarding/setup', 'agent-profile/profile'],
          captions: ['Setup: the agent introduces itself in the first person', 'Proposed agent profile with conversation preview'],
        },
        {
          title: 'When features pile up, simplify the model, not the UI',
          situation:
            'Guidance, Handoff and Procedures looked and worked alike, differing only in a few details. Users didn’t know where to write which instructions. The same happened in the knowledge base: five “source types” were in practice the same thing.',
          decision: [
            'I proposed merging the three sections into one, with an instruction type and a single editor, so that while writing an instruction users would know right away whether it’s about handoff or another agent behaviour. For the knowledge base I proposed a simpler model: every item is a Q&A, and a file or page is just where it came from. Neither proposal was shipped before I left, but the lesson stands.',
          ],
          why: 'When users see five things where there is one, UI tweaks won’t help. You have to simplify the model, and then everything built on top of it gets simpler too.',
          cases: ['lyro-knowledge'],
          images: ['knowledge/before', 'knowledge/after'],
          captions: ['Before: separate source types and filters', 'After (proposal): every item is a Q&A, type is only the origin'],
        },
      ],
      closingTitle: 'What surprised me most',
      closing: [
        'Two things. First, a lot depends on the ML team that develops the language model side. Designing an agent means constant coordination across several teams, not just interface work.',
        'Second, the pace. Language models changed so fast that solutions from a year earlier started getting in our way. They could be done better and more universally, but before, the models simply couldn’t do it. So today, when designing for AI, I assume some decisions will soon need rethinking, and I try to make the product model able to handle that.',
      ],
    },
  },
};

/** Szacowany czas czytania w minutach (ok. 200 słów na minutę). */
export function readingMinutes(lang: 'pl' | 'en'): number {
  const c = essay.content[lang];
  const text = [c.intro, ...c.lessons.flatMap((l) => [l.title, l.situation, ...l.decision, l.why]), ...c.closing].join(' ');
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}
