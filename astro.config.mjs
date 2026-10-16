import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change this to your real domain before you deploy.
export default defineConfig({
  site: 'https://stacknotes.example.com',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
