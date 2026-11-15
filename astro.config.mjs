// @ts-check
import { defineConfig } from 'astro/config';

// BASE_PATH i SITE_URL ustawia workflow GitHub Actions (.github/workflows/deploy.yml).
// Lokalnie strona działa pod "/".
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
