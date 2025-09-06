import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Core Services Integration
import { APP_CONFIG } from './config';
import logger from './services/logger';
import { initializePerformanceMonitoring } from './services/performance';
import { initializeGlobalErrorHandler } from './services/errorHandler';

// --- Service Initialization ---
logger.info('Application starting...', { environment: APP_CONFIG.environment });

// Initialize Global Error Handler
initializeGlobalErrorHandler();
logger.info('Global error handler initialized.');

// Initialize Performance Monitoring
initializePerformanceMonitoring();
logger.info('Performance monitoring initialized.');

// Initialize AOS Animation Library
AOS.init({
  duration: 1200,
  once: true,
  offset: 100,
});
logger.info('AOS animation library initialized.');

// --- PWA Service Worker Registration ---
if ('serviceWorker' in navigator && (APP_CONFIG.isProduction || APP_CONFIG.isDevelopment)) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        logger.info('Service Worker registered successfully.', { scope: registration.scope });
      })
      .catch((registrationError) => {
        logger.warn('Service Worker registration failed (possibly incognito mode).', { error: registrationError });
        // Don't throw error, app should still work without service worker
      });
  });
}

// --- React App Rendering ---
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  logger.info('React application rendered successfully.');
} else {
  logger.error("Fatal: Root element with id 'root' not found in the document.");
}
