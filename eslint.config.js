import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist/**', 'dev-dist/**', 'node_modules/**', 'build/**', '.netlify/**', 'public/sw.js', 'public/workbox-*.js']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^[A-Z_]',
        argsIgnorePattern: '^_',
        caughtErrors: 'none'
      }],
      'react-refresh/only-export-components': 'off',
    },
  },
  // Configuration for Node.js files (config files, build scripts)
  {
    files: ['vite.config.js', 'eslint.config.js', '**/*.config.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  // Configuration for service files that need Node.js globals
  {
    files: ['src/services/**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  // Configuration for public files (Google Analytics, etc.)
  {
    files: ['public/**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        dataLayer: 'writable',
        gtag: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  // Configuration for service worker files
  {
    files: ['**/*.sw.js', '**/sw.js', '**/workbox-*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.serviceworker,
        importScripts: 'readonly',
        workbox: 'readonly',
        define: 'readonly',
        registration: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'no-undef': 'off', // Allow service worker globals
    },
  },
])
