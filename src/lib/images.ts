import type { ImageMetadata } from 'astro';

// Wszystkie obrazy z src/img/ są wyszukiwane po ścieżce BEZ rozszerzenia,
// więc np. src/img/tidio/hero.png możesz podmienić na hero.jpg / hero.webp.
const files = import.meta.glob<{ default: ImageMetadata }>('/src/img/**/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
});

const byKey = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const key = path.replace('/src/img/', '').replace(/\.[^.]+$/, '');
  byKey.set(key, mod.default);
}

export function img(key: string): ImageMetadata {
  const found = byKey.get(key.replace(/\.[^.]+$/, ''));
  if (!found) throw new Error(`Brak obrazu: src/img/${key}.(png|jpg|webp)`);
  return found;
}

/** Wszystkie obrazy w folderze, posortowane po nazwie (np. projects/coresender). */
export function folder(dir: string): ImageMetadata[] {
  return [...byKey.entries()]
    .filter(([k]) => k.startsWith(`${dir}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, v]) => v);
}
