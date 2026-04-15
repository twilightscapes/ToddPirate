// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// For project sites (e.g. user.github.io/reponame), BASE_PATH must be set
const base = process.env.BASE_PATH || undefined;

export default defineConfig({
  site: process.env.SITE_URL || 'https://twilightscapes.github.io',
  ...(base ? { base } : {}),
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'static',
  build: {
    assets: '_assets',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
