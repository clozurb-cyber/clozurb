// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://clozurb-cyber.github.io',
  base: process.env.BASE_PATH || '/clozurb',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
  },
});
