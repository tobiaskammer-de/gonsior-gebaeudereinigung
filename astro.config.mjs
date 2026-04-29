import { defineConfig } from 'astro/config';

// HINWEIS:
// Production-Build (GitHub Actions) bekommt site/base ueber ENV-Vars
// (ASTRO_SITE / ASTRO_BASE), die der actions/configure-pages-Step setzt.
// Lokal lassen wir base leer, damit `npm run dev` einfach unter
// http://localhost:5173/ laeuft.

const isProd = process.env.ASTRO_BASE !== undefined;

export default defineConfig({
  site: process.env.ASTRO_SITE,
  base: isProd ? process.env.ASTRO_BASE : '/',
  trailingSlash: 'ignore',
  build: {
    assets: '_astro',
  },
  compressHTML: true,
});
