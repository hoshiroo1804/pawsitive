// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Konfigurasi lainnya...

  server: {
    proxy: {
      '/api': {
        target: 'https://apis.server05.my.id',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
