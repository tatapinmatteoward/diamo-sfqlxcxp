import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://diamonds-and-bases.pages.dev',
  build: {
    format: 'directory'
  }
});
