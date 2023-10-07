import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), sitemap()],
  site: 'https://www.preezeo.fr',
  build: {
    trailingSlash: 'always',
    inlineStylesheets: `never`
  }
});