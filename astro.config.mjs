// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://clozurb.fr',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
  },
});
