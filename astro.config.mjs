import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [vue(), tailwind()],
    site: 'https://www.preezeo.fr',
    build: {
      format: 'directory',
      trailingSlash: 'always',
      inlineStylesheets: `never`,
    }
});