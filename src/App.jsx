import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceWorkerManager from './components/ServiceWorkerManager';
import PushNotificationManager from './components/PushNotificationManager';
import NetworkStatus from './components/NetworkStatus';
import BackToTop from './components/BackToTop';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const DocumentationPage = lazy(() => import('./pages/DocumentationPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

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
  console.log('🚀 EnvoyOU - Full App with Auth & Error Boundary');
  
  return (
    <ErrorBoundary>
      <AuthProvider>
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
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <ServiceWorkerManager />
            <PushNotificationManager />
            <NetworkStatus />
            <BackToTop />
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;