import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceWorkerManager from './components/ServiceWorkerManager';
import PushNotificationManager from './components/PushNotificationManager';
import NetworkStatus from './components/NetworkStatus';
import BackToTop from './components/BackToTop';
import CookieConsent from './components/CookieConsent';
import { ToastProvider } from './components/Toast';

// Lazy load pages for better performance
import HomePage from './pages/HomePage';
const DocumentationPage = lazy(() => import('./pages/DocumentationPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FreeAPIKeyPage = lazy(() => import('./pages/FreeAPIKeyPage'));
const TermsOfServicePage = lazy(() => import('./pages/legal/TermsOfServicePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/legal/PrivacyPolicyPage'));
const TestPage = lazy(() => import('./pages/TestPage'));

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400 mx-auto mb-4"></div>
      <p className="text-slate-300">Loading...</p>
    </div>
  </div>
);

function App() {
  console.log('EnvoyOU - Full App with Auth & Error Boundary');
  
  // Global error handler
  useEffect(() => {
    const handleError = (event) => {
      console.error('Global error caught:', event.error);
      // Display error on page
      const errorDiv = document.createElement('div');
      errorDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: red;
        color: white;
        padding: 20px;
        z-index: 9999;
        font-family: monospace;
        font-size: 14px;
        max-height: 200px;
        overflow-y: auto;
      `;
      errorDiv.innerHTML = `
        <strong>JavaScript Error:</strong><br>
        ${event.error?.message || 'Unknown error'}<br>
        <strong>Stack:</strong><br>
        <pre>${event.error?.stack || 'No stack trace'}</pre>
      `;
      document.body.appendChild(errorDiv);
      
      // Auto-remove after 10 seconds
      setTimeout(() => {
        if (errorDiv.parentNode) {
          errorDiv.parentNode.removeChild(errorDiv);
        }
      }, 10000);
    };

    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      const errorDiv = document.createElement('div');
      errorDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 0;
        right: 0;
        background: orange;
        color: black;
        padding: 20px;
        z-index: 9999;
        font-family: monospace;
        font-size: 14px;
        max-height: 150px;
        overflow-y: auto;
      `;
      errorDiv.innerHTML = `
        <strong>Unhandled Promise Rejection:</strong><br>
        ${event.reason?.message || event.reason || 'Unknown promise rejection'}
      `;
      document.body.appendChild(errorDiv);
      
      // Auto-remove after 10 seconds
      setTimeout(() => {
        if (errorDiv.parentNode) {
          errorDiv.parentNode.removeChild(errorDiv);
        }
      }, 10000);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
  
  return (
    <ErrorBoundary>
      <ToastProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-slate-900">
            <Header />
            <main className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/documentation" element={<DocumentationPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/free-api-key" element={<FreeAPIKeyPage />} />
                  
                  {/* Legal pages */}
                  <Route path="/legal/terms" element={<TermsOfServicePage />} />
                  <Route path="/legal/privacy" element={<PrivacyPolicyPage />} />
                  
                  {/* Test page */}
                  <Route path="/test" element={<TestPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <ServiceWorkerManager />
            <PushNotificationManager />
            <NetworkStatus />
            <BackToTop />
            <CookieConsent />
          </div>
        </Router>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default function AppWrapper() {
  try {
    return App();
  } catch (error) {
    console.error('App wrapper error:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Application Error</h1>
          <p className="text-red-400 mb-4">{error.message}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
}