import type { L10n } from '../lib/i18n';

/**
 * Wcześniejsze projekty. Obrazy: wszystkie pliki z src/img/projects/<slug>/ (kolejność wg nazwy: 1, 2, 3...).
 * Opisy to szkic na podstawie zrzutów, popraw je, jeśli coś się nie zgadza.
 */
export type Category = 'product' | 'fintech' | 'web';
export type Project = { slug: string; title: string; category: Category; content: L10n<{ summary: string; text: string }> };

export const categories: Record<Category, L10n> = {
  product: { pl: 'Produkty / SaaS', en: 'Products / SaaS' },
  fintech: { pl: 'Fintech / gaming', en: 'Fintech / gaming' },
  web: { pl: 'Strony www', en: 'Websites' },
};

export const projects: Project[] = [
  {
    slug: 'coresender',
    title: 'Coresender',
    category: 'product',
    content: {
      pl: {
        summary: 'Panel do wysyłki i monitorowania maili transakcyjnych i marketingowych.',
        text: 'Kompletny panel użytkownika (UI/UX) dla platformy do wysyłania i monitorowania wiadomości e-mail przez SMTP i API: statystyki dostarczalności, aktywność, subskrybenci, import, konta wysyłkowe. Do tego design system i landing page. Omnicorp, 2019-2021.',
      },
      en: {
        summary: 'A dashboard for sending and monitoring transactional and marketing email.',
        text: 'The complete user dashboard (UI/UX) for a platform that sends and monitors email via SMTP and API: deliverability stats, activity, subscribers, imports, sending accounts. Plus the design system and landing page. Omnicorp, 2019-2021.',
      },
    },
  },
  {
    slug: 'sendria',
    title: 'Sendria',
    category: 'product',
    content: {
      pl: {
        summary: 'Fake SMTP dla zespołów deweloperskich.',
        text: 'Usługa do testowania, podglądu i udostępniania maili wysyłanych ze środowisk developerskich i stagingowych. Interfejs aplikacji w wersji jasnej i ciemnej, kolory i typografia.',
      },
      en: {
        summary: 'A fake SMTP service for development teams.',
        text: 'A service to test, view and share emails sent from development and staging environments. App UI in light and dark mode, colour and type system.',
      },
    },
  },
  {
    slug: 'isup',
    title: 'isup',
    category: 'product',
    content: {
      pl: {
        summary: 'Strona statusu usług.',
        text: 'Status page: dostępność API, aplikacji i serwerów SMTP, historia uptime, incydenty oraz czas dostarczenia wiadomości do skrzynek popularnych dostawców.',
      },
      en: {
        summary: 'A service status page.',
        text: 'A status page: API, web app and SMTP server availability, uptime history, incidents and time-to-inbox for popular mailbox providers.',
      },
    },
  },
  {
    slug: 'aurora-now',
    title: 'Aurora Now',
    category: 'product',
    content: {
      pl: {
        summary: 'Aplikacja do prognozowania zorzy polarnej.',
        text: 'Projekt, który powstał z własnej potrzeby: aplikacja śledząca warunki do obserwacji zorzy z dowolnego miejsca na Ziemi: aktywność zorzy, magnetometr, indeks Kp, wiatr słoneczny, zachmurzenie i jasność nieba.',
      },
      en: {
        summary: 'An app for forecasting the northern lights.',
        text: 'A side project born out of a personal need: an app that tracks aurora viewing conditions from anywhere on Earth: aurora activity, magnetometer, Kp index, solar wind, cloud cover and sky brightness.',
      },
    },
  },
  {
    slug: 'cashflow',
    title: 'CashFlow',
    category: 'product',
    content: {
      pl: { summary: 'Prognozowanie i analiza przepływów pieniężnych firmy.', text: 'Landing page i widoki aplikacji do prognozowania i analizy cash flow online.' },
      en: { summary: 'Company cash flow forecasting and analysis.', text: 'Landing page and app views for forecasting and analysing cash flow online.' },
    },
  },
  {
    slug: 'child-reward',
    title: 'Child Reward',
    category: 'product',
    content: {
      pl: { summary: 'Aplikacja mobilna: zadania i nagrody dla dzieci.', text: 'Aplikacja dla rodzin: rodzic dodaje zadania, dziecko zbiera punkty i wymienia je na nagrody. Lekka, kolorowa stylistyka i ilustracje.' },
      en: { summary: 'A mobile app: tasks and rewards for kids.', text: 'An app for families: parents add tasks, kids collect points and exchange them for rewards. Light, colourful style with illustrations.' },
    },
  },
  {
    slug: 'trading',
    title: 'Trading platform',
    category: 'fintech',
    content: {
      pl: { summary: 'Platforma tradingowa: wykresy, zlecenia, konto, landing pages.', text: 'Interfejs platformy opcji binarnych i kryptowalut: wykres z panelem zlecenia, historia, konto użytkownika, logowanie oraz strony marketingowe. Lemon Demon.' },
      en: { summary: 'A trading platform: charts, orders, account, landing pages.', text: 'UI for a binary options and crypto trading platform: chart with order panel, history, user account, sign-in and marketing pages. Lemon Demon.' },
    },
  },
  {
    slug: 'cryptowallet',
    title: 'CryptoWallet',
    category: 'fintech',
    content: {
      pl: { summary: 'Mobilny portfel kryptowalut.', text: 'Saldo, wykresy kursów, historia transakcji, lista monet, logowanie, reset hasła i weryfikacja kodem.' },
      en: { summary: 'A mobile crypto wallet.', text: 'Balance, price charts, transaction history, coin list, sign-in, password reset and code verification.' },
    },
  },
  {
    slug: 'chainx',
    title: 'ChainX',
    category: 'fintech',
    content: {
      pl: { summary: 'Giełda kryptowalut.', text: 'Widok tradingowy z arkuszem zleceń i wykresem, ekran logowania i ustawienia konta.' },
      en: { summary: 'A cryptocurrency exchange.', text: 'Trading view with order book and chart, sign-in screen and account settings.' },
    },
  },
  {
    slug: 'coinfix',
    title: 'Coinfix',
    category: 'fintech',
    content: {
      pl: { summary: 'Bramka płatności kryptowalutowych.', text: 'Ścieżka płatności: kwota w BTC, adres i kod QR, licznik czasu, częściowa płatność, zwrot i potwierdzenie.' },
      en: { summary: 'A crypto payment gateway.', text: 'Payment flow: BTC amount, address and QR code, countdown, partial payment, refund and confirmation.' },
    },
  },
  {
    slug: 'lotto-planet',
    title: 'Lottery platform',
    category: 'fintech',
    content: {
      pl: { summary: 'Serwis loterii online.', text: 'Strona główna z ofertą loterii, panel użytkownika (bilety, zakupy, promocje) i zestaw elementów UI.' },
      en: { summary: 'An online lottery service.', text: 'Home page with lottery offers, user account (tickets, purchases, promotions) and a UI kit.' },
    },
  },
  {
    slug: 'lotto-fun',
    title: 'Lottery landing',
    category: 'fintech',
    content: {
      pl: { summary: 'Strona loterii online.', text: 'Strona marketingowa loterii online z wynikami losowań i programem lojalnościowym.' },
      en: { summary: 'An online lottery website.', text: 'Marketing website for an online lottery with draw results and a loyalty programme.' },
    },
  },
  {
    slug: 'news-portal',
    title: 'News portal',
    category: 'web',
    content: {
      pl: { summary: 'Portal informacyjny.', text: 'Strona główna i układ artykułów serwisu informacyjnego.' },
      en: { summary: 'A news website.', text: 'Home page and article layout for a news website.' },
    },
  },
  {
    slug: 'inprojects',
    title: 'inProjects',
    category: 'web',
    content: {
      pl: { summary: 'Strona firmy z branży telekomunikacyjnej.', text: 'Strona firmy budującej sieci telekomunikacyjne: oferta, realizacje, kariera, aktualności.' },
      en: { summary: 'A telecom company website.', text: 'Website for a telecom network construction company: services, projects, careers, news.' },
    },
  },
  {
    slug: 'salvada',
    title: 'Salvada',
    category: 'web',
    content: {
      pl: { summary: 'Strona dostawcy ogrodzeń tymczasowych.', text: 'Strona firmy oferującej sprzedaż, wynajem i montaż ogrodzeń tymczasowych.' },
      en: { summary: 'A temporary fencing supplier website.', text: 'Website for a company that sells, rents and installs temporary fencing.' },
    },
  },
  {
    slug: 'winosfera',
    title: 'Winosfera',
    category: 'web',
    content: {
      pl: { summary: 'Strona sklepu z winami.', text: 'Katalog win i karta produktu z opisem, regionem i parametrami.' },
      en: { summary: 'A wine shop website.', text: 'Wine catalogue and product page with description, region and details.' },
    },
  },
  {
    slug: 'invest-code',
    title: 'Invest Code',
    category: 'web',
    content: {
      pl: { summary: 'Wyszukiwarka doradców finansowych.', text: 'Serwis do znajdowania doradcy finansowego: wyszukiwarka, mapa, profile i oceny doradców.' },
      en: { summary: 'A financial advisor finder.', text: 'A service for finding a financial advisor: search, map, profiles and ratings.' },
    },
  },
  {
    slug: 'violet-earl',
    title: 'Violet Earl',
    category: 'web',
    content: {
      pl: { summary: 'Strona firmy zarządzającej aktywami.', text: 'Strona firmy asset management: oferta, strategie, wyniki.' },
      en: { summary: 'An asset management company website.', text: 'Website for an asset management firm: services, strategies, performance.' },
    },
  },
  {
    slug: 'wiszniewski',
    title: 'Kancelaria Wiszniewski',
    category: 'web',
    content: {
      pl: { summary: 'Strona kancelarii radcy prawnego.', text: 'Strona kancelarii: specjalizacje, branże, zespół i kontakt.' },
      en: { summary: 'A law firm website.', text: 'Website for a legal counsel’s office: practice areas, industries, team and contact.' },
    },
  },
  {
    slug: 'klinika',
    title: 'Klinika urody',
    category: 'web',
    content: {
      pl: { summary: 'Strona kliniki medycyny estetycznej.', text: 'Oferta zabiegów dla kobiet i mężczyzn, lekarze, opinie pacjentów.' },
      en: { summary: 'An aesthetic medicine clinic website.', text: 'Treatments for women and men, doctors, patient testimonials.' },
    },
  },
];
