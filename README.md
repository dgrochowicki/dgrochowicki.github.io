# Dominik Grochowicki · Portfolio

Portfolio i CV Product Designera (UX/UI). Strona jest w dwóch wersjach językowych, polskiej i angielskiej.

**Strona:** https://dgrochowicki.github.io/

## Co jest na stronie

- **Strona główna:** kim jestem, najważniejsze liczby, wybrane case studies i sposób pracy.
- **Portfolio**
  - **Tidio (2021-2026):** praca nad Lyro, agentem AI do obsługi klienta, oraz 4 case studies:
    - Audiences: różne odpowiedzi dla różnych klientów
    - Onboarding: agent gotowy w kilka minut
    - Profil agenta zamiast zakładek ustawień
    - Knowledge: uproszczony model źródeł wiedzy
  - **Wcześniejsze projekty (2012-2021):** 21 projektów, czyli aplikacje mobilne, produkty SaaS, fintech i strony www, z filtrem kategorii.
- **O mnie:** doświadczenie, umiejętności, edukacja, nagrody, języki i wolontariat.
- **CV w PDF** do pobrania, osobno po polsku i po angielsku.

## Technologia

- [Astro](https://astro.build/), czyli statyczna strona bez backendu
- Font IBM Plex Sans, jasny i ciemny motyw zależnie od ustawień systemu
- Obrazy są automatycznie zmniejszane i konwertowane do WebP przy buildzie
- Hosting na GitHub Pages: każdy push do `main` publikuje stronę przez GitHub Actions (`.github/workflows/deploy.yml`)

## Struktura

| Co | Gdzie |
|---|---|
| E-mail, LinkedIn, plik CV, widoczność w Google | `src/data/site.ts` |
| Tekst na stronie głównej, O mnie, doświadczenie, umiejętności | `src/data/about.ts` |
| Case studies Tidio (PL i EN) | `src/data/cases.ts` |
| Wcześniejsze projekty (opisy, kategorie) | `src/data/projects.ts` |
| Napisy interfejsu (menu, przyciski) | `src/lib/i18n.ts` |
| Widoki stron | `src/views/` |
| Komponenty (kafelki, zrzuty, kontakt) | `src/components/` |
| Kolory i fonty | `src/styles/global.css` |
| CV do pobrania (PL i EN) | `public/cv/dominik-grochowicki-cv_pl.pdf`, `public/cv/dominik-grochowicki-cv_en.pdf` |
| Favicona | `public/favicon.svg` |

## Obrazy (`src/img/`)

| Folder | Gdzie na stronie |
|---|---|
| `about/` | zdjęcie na stronie O mnie |
| `tidio/` | sekcja Tidio w Portfolio (`hero` to kolaż) |
| `audiences/`, `onboarding/`, `agent-profile/`, `knowledge/` | case studies, nazwy plików są w `src/data/cases.ts` |
| `projects/<projekt>/` | wcześniejsze projekty: wszystkie pliki z folderu po kolei, pierwszy jest okładką |

Żeby podmienić obraz, wrzuć nowy plik **pod tą samą nazwą** i usuń stary. Rozszerzenie może być inne (`png`, `jpg`, `webp`). Najlepiej ok. 2400 px szerokości. Do projektów w `projects/` można dodawać kolejne pliki (`2.jpg`, `3.jpg`…) bez zmian w kodzie.

Oryginalne zrzuty ekranu i PDF-y są w folderze `docs/`, który nie trafia do repozytorium.

## Praca lokalnie

```bash
npm install      # raz
npm run dev      # podgląd na http://localhost:4321
npm run build    # build produkcyjny do dist/
```
