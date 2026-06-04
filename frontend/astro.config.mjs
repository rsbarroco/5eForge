// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rsbarroco.github.io',
  base: '/5EForge',
  vite: {
    plugins: [tailwindcss()]
  }
});