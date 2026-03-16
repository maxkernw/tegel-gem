import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/tegel-gem/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Tegel-Gem Booking',
        short_name: 'Tegel-Gem',
        description: 'The Ultimate Synthwave Booking App',
        theme_color: '#0d0221',
        display: 'standalone',
        display_override: ['window-controls-overlay', 'minimal-ui'],
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: 'tegel-desktop.png',
            sizes: '947x1133',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Desktop View'
          },
          {
            src: 'tegel-mobile.png',
            sizes: '1420x2820',
            type: 'image/png',
            label: 'Mobile View'
          }
        ],
        protocol_handlers: [
          {
            protocol: 'web+tegel',
            url: '/tegel-gem/?booking=%s'
          }
        ]
      }
    })
  ],
  build: {
    outDir: 'dist',
  }
})
