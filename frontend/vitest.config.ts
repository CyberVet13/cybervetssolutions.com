// Vitest Configuration - Testing Framework
//
// What is Vitest?
// Vitest is a testing framework that:
// 1. Runs your tests
// 2. Shows which tests pass ✅ and which fail ❌
// 3. Measures code coverage (what % of code is tested)
//
// Usage: npm run test

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  test: {
    // Test environment (jsdom = browser-like environment)
    environment: 'jsdom',
    
    // Global test setup file
    globals: true,
    
    // What to look for (test files end with .test.ts or .spec.ts)
    include: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
    
    // Coverage settings
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
      ]
    },
    
    // Setup files (runs before tests)
    setupFiles: [],
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
});
