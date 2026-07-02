// Vite Configuration - Frontend Build Tool
//
// What is Vite?
// Vite is a build tool that:
// 1. Starts your dev server super fast
// 2. Hot-reloads when you save files (changes show instantly)
// 3. Bundles your code for production
//
// Think of it like: "npm start" on steroids

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  server: {
    // Development server settings
    port: 3000,
    open: true,  // Auto-open browser
    proxy: {
      // When frontend calls /api, forward to backend
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  
  build: {
    // Production build settings
    outDir: 'dist',  // Output folder
    sourcemap: true, // Include source maps for debugging
  },
  
  resolve: {
    // Path aliases (makes imports cleaner)
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@services': path.resolve(__dirname, './src/services'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    }
  }
});
