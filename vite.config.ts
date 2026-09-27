import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base must match the GitHub Pages project URL: https://<user>.github.io/muskanhaldankar-portfolio/
export default defineConfig({
  base: '/muskanhaldankar-portfolio/',
  plugins: [react()],
  build: {
    target: 'es2019',
    assetsInlineLimit: 4096,
  },
});
