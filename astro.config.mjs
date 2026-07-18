import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.twaynesafehaven.org',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
