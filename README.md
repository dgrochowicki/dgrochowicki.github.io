# Portfolio — Dominik Grochowicki

Statyczna strona (Astro) publikowana na GitHub Pages. Wersje: polska (`/`) i angielska (`/en/`).

## Praca lokalnie

```bash
npm install      # raz
npm run dev      # podgląd na http://localhost:4321 (odświeża się na żywo)
npm run build    # produkcyjny build do dist/
```

## Gdzie co jest

| Co zmienić | Plik |
|---|---|
| E-mail, LinkedIn, plik CV, ukrycie przed Google | `src/data/site.ts` |
| O mnie, doświadczenie, umiejętności, edukacja, nagrody | `src/data/about.ts` |
| Case studies Tidio (PL + EN) | `src/data/cases.ts` |
| Wcześniejsze projekty (opisy, kategorie) | `src/data/projects.ts` |
| Napisy interfejsu (przyciski, menu) | `src/lib/i18n.ts` |
| CV do pobrania | `public/cv/dominik-grochowicki-cv.pdf` |
| Kolory, fonty | `src/styles/global.css` |

## Obrazy — `src/img/`

Obrazy są wycięte z PDF-ów. Żeby podmienić: wrzuć nowy plik **pod tą samą nazwą** (rozszerzenie może być inne —
`png`, `jpg`, `webp`) i usuń stary. Zalecana szerokość: ok. **2400 px** (2× szerokość treści strony, 1200 px).
Astro samo zmniejsza i konwertuje obrazy do WebP przy buildzie.

- `about/photo` — zdjęcie na stronie „O mnie” (kadr 4:5)
- `tidio/` — obrazy ogólne Tidio (`hero` = kolaż na stronie Portfolio)
- `audiences/`, `onboarding/`, `agent-profile/`, `knowledge/` — case studies (nazwy plików użyte w `src/data/cases.ts`)
- `projects/<slug>/1.jpg, 2.jpg…` — wcześniejsze projekty; wszystkie pliki z folderu pokazują się po kolei,
  pierwszy jest okładką. Możesz dodawać kolejne (`3.jpg`, `4.png`…) bez zmian w kodzie.

## Publikacja na GitHub Pages

1. Utwórz repozytorium na GitHubie, np. `portfolio` (albo `<twój-login>.github.io`, wtedy adres będzie krótszy).
2. Wypchnij kod:
   ```bash
   git remote add origin https://github.com/<login>/<repo>.git
   git push -u origin main
   ```
3. Na GitHubie: **Settings → Pages → Source: GitHub Actions**.
4. Każdy push do `main` publikuje stronę automatycznie (zakładka **Actions**). Adres:
   `https://<login>.github.io/<repo>/` lub `https://<login>.github.io/`.
