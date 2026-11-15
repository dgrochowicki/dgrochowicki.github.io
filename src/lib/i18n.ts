export type Lang = 'pl' | 'en';
export type L10n<T = string> = { pl: T; en: T };

/** Ścieżka z uwzględnieniem base (GitHub Pages) i języka. */
export function href(path: string, lang: Lang = 'pl'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  const prefix = lang === 'en' ? '/en' : '';
  const full = `${base}${prefix}/${clean}`;
  return full.endsWith('/') || clean.includes('.') ? full : `${full}/`;
}

/** Plik statyczny z public/ (bez prefiksu języka). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export const routes = {
  home: { pl: '', en: '' },
  about: { pl: 'o-mnie', en: 'about' },
  portfolio: { pl: 'portfolio', en: 'portfolio' },
} satisfies Record<string, L10n>;

export const ui = {
  pl: {
    role: 'Product Designer · UX/UI',
    navPortfolio: 'Portfolio',
    navAbout: 'O mnie',
    navCv: 'CV (PDF)',
    otherLang: 'EN',
    otherLangLabel: 'English version',
    seeCases: 'Zobacz case studies',
    seeAll: 'Całe portfolio',
    write: 'Napisz do mnie',
    downloadCv: 'Pobierz CV',
    caseStudies: 'Case studies',
    caseStudiesLead: 'Tidio · Lyro AI Agent',
    otherProjects: 'Wcześniejsze projekty',
    otherProjectsLead: 'Aplikacje, produkty SaaS, fintech i strony www z lat 2012–2021.',
    howIWork: 'Jak pracuję',
    contactTitle: 'Porozmawiajmy',
    contactText: 'Szukam kolejnego zespołu produktowego. Najszybciej złapiesz mnie mailowo.',
    readCase: 'Czytaj case study',
    seeProject: 'Zobacz projekt',
    problem: 'Problem',
    solution: 'Rozwiązanie',
    effect: 'Efekt',
    lesson: 'Wniosek',
    before: 'Przed',
    after: 'Po',
    next: 'Następny',
    prev: 'Poprzedni',
    back: 'Wróć do portfolio',
    all: 'Wszystkie',
    footer: 'Strona zbudowana w Astro, hostowana na GitHub Pages.',
    close: 'Zamknij',
    myRole: 'Moja rola',
  },
  en: {
    role: 'Product Designer · UX/UI',
    navPortfolio: 'Portfolio',
    navAbout: 'About',
    navCv: 'CV (PDF)',
    otherLang: 'PL',
    otherLangLabel: 'Wersja polska',
    seeCases: 'See case studies',
    seeAll: 'Full portfolio',
    write: 'Get in touch',
    downloadCv: 'Download CV',
    caseStudies: 'Case studies',
    caseStudiesLead: 'Tidio · Lyro AI Agent',
    otherProjects: 'Earlier work',
    otherProjectsLead: 'Apps, SaaS products, fintech and websites from 2012–2021.',
    howIWork: 'How I work',
    contactTitle: "Let's talk",
    contactText: "I'm looking for my next product team. Email is the fastest way to reach me.",
    readCase: 'Read case study',
    seeProject: 'View project',
    problem: 'Problem',
    solution: 'Solution',
    effect: 'Outcome',
    lesson: 'Takeaway',
    before: 'Before',
    after: 'After',
    next: 'Next',
    prev: 'Previous',
    back: 'Back to portfolio',
    all: 'All',
    footer: 'Built with Astro, hosted on GitHub Pages.',
    close: 'Close',
    myRole: 'My role',
  },
} as const;
