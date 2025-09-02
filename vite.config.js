import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimize build
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          charts: ['chart.js', 'react-chartjs-2'],
          animations: ['aos']
        }
      }
    },
    // Enable source maps for production debugging
    sourcemap: false, // Disable for better performance
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification (using esbuild default)
    minify: true,
    // Optimize CSS
    cssCodeSplit: true,
    // Preload modules
    modulePreload: {
      polyfill: false
    }
  },
  // Enable gzip compression
  server: {
    compress: true
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
