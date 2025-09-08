import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable-icon.svg'],
      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30 // <== 30 days
              }
            }
          },
          // API caching for better performance
          {
            urlPattern: /^https:\/\/api\.envoyou\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 // <== 24 hours
              },
              cacheableResponse: {
                statuses: [0, 200]
              },
              networkTimeoutSeconds: 10,
            }
          },
          // Offline fallback
          {
            urlPattern: /.*/,
            handler: 'NetworkOnly',
            options: {
              cacheName: 'offline-fallback',
            }
          }
        ]
      },
      manifest: {
        name: 'Envoyou - Global Environmental Data Verification API',
        short_name: 'Envoyou',
        description: 'Unified API access to standardized global environmental datasets for ESG businesses, analysts, and investors.',
        theme_color: '#3b82f6',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'favicon_io/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon_io/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'favicon_io/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        screenshots: [
          {
            src: 'screenshots/screenshot-wide.png',
            sizes: '1280x720',
            type: 'image/png',
            form_factor: 'wide'
          },
          {
            src: 'screenshots/screenshot-narrow.png',
            sizes: '640x1136',
            type: 'image/png',
            form_factor: 'narrow'
          }
        ]
      }
    }),
    // Bundle analyzer - only active in analyze mode
    ...(process.env.ANALYZE === 'true' ? [visualizer({
      filename: 'dist/bundle-analysis.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })] : []),
  
  // Bundle analyzer - only active in analyze mode
  process.env.ANALYZE === 'true' && visualizer({
    filename: 'dist/bundle-analysis.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  }),
].filter(Boolean),

  resolve: {
      alias: {
      "@": path.resolve(__dirname, "./src"),
      },
  },
  
  // Build optimizations
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: process.env.NODE_ENV === 'development',
    
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          
          // Feature chunks
          legal: [
            './src/pages/legal/PrivacyPolicyPage.jsx',
            './src/pages/legal/TermsOfServicePage.jsx',
          ],
        },
        
        // Naming convention for chunks
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop().replace('.jsx', '')
            : 'chunk';
          return `assets/js/${facadeModuleId}-[hash].js`;
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    
    // Terser options for better minification
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production',
        pure_funcs: process.env.NODE_ENV === 'production' ? ['console.log'] : [],
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    
    // Asset optimization
    assetsInlineLimit: 4096, // 4kb
    cssCodeSplit: true,
    
    // Report bundle size
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000, // 1MB
  },
  
  // Development server optimization
  server: {
    host: true,
    port: 3000,
    open: true,
    cors: true,
    
    // Hot reload optimization
    hmr: {
      overlay: true,
    },
  },
  
  // Preview server (for production testing)
  preview: {
    host: true,
    port: 3000,
    open: true,
    cors: true,
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
    exclude: [
      // Exclude any problematic dependencies
    ],
  },
  
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  
  // CSS optimization
  css: {
    devSourcemap: process.env.NODE_ENV === 'development',
    postcss: {
      plugins: [
        // Additional PostCSS plugins can be added here
      ],
    },
  },
  
  // Environment variables
  envPrefix: 'VITE_',
  
  // Base URL for deployment
  base: process.env.VITE_BASE_URL || '/',
})
