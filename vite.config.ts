import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // strategies: 'generateSW',
      // registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      // injectRegister: 'script',
      manifest: {
        name: 'ef',
        short_name: 'ef',
        description:
          'Poznaj ef - graficzny i generyczny interfejs to budowania i analizy własnych formularzy internetowych!',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        lang: 'pl',
        icons: [
          {
            src: './android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: './android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: './src/assets/images/CozyCoffee.jpg',
            size: '1200x703',
            type: 'image/jpg',
          },
        ],
      },
      includeAssets: ['**/*'],
      workbox: {
        globPatterns: ['**/*.*'],
        runtimeCaching: [
          // {
          //   urlPattern: ({ url }) => {
          //     return true;
          //   },
          //   handler: 'CacheFirst' as const,
          //   options: {
          //     cacheName: 'static-cache',
          //     cacheableResponse: {
          //       statuses: [0, 200],
          //     },
          //   },
          // },
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith('/api');
            },
            handler: 'NetworkFirst' as const,
            options: {
              cacheName: 'api-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith('/auth');
            },
            handler: 'NetworkOnly' as const,
            options: {
              cacheName: 'api-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
  },
});
