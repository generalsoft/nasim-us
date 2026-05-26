import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
    site: 'https://nasim.us', // Replace with your actual site URL
    output: 'static',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ar'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    integrations: [sitemap({
    // You can add options here, e.g., filter pages or add custom entries
  })]
});

import { defineConfig } from 'astro/config';


