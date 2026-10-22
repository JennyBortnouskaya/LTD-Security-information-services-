import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS
    ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''}/`
    : '/',
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 60 },
      pngquant: {
        quality: [0.55, 0.7],
        speed: 4,
        floyd: 0.5,
      },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs' },
        ],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['**/*.{png,jpg,jpeg,svg,webp,woff,woff2}'],
      manifest: false,
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,webp,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https?.*\.(?:png|jpg|jpeg|svg|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
  },
})
