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
import CookieConsent from './components/CookieConsent';
import { ToastProvider } from './components/Toast';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const DocumentationPage = lazy(() => import('./pages/DocumentationPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FreeAPIKeyPage = lazy(() => import('./pages/FreeAPIKeyPage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const DashboardUsage = lazy(() => import('./pages/DashboardUsage'));
const APIKeysSettingsPage = lazy(() => import('./pages/settings/APIKeysSettingsPage'));
const ProfileSettingsPage = lazy(() => import('./pages/settings/ProfileSettingsPage'));
const SecuritySettingsPage = lazy(() => import('./pages/settings/SecuritySettingsPage'));
const TermsOfServicePage = lazy(() => import('./pages/legal/TermsOfServicePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/legal/PrivacyPolicyPage'));

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
      <ToastProvider>
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
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/free-api-key" element={<FreeAPIKeyPage />} />
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/api-keys" element={<APIKeysSettingsPage />} />
                    <Route path="/dashboard/usage" element={<DashboardUsage />} />
                    <Route path="/dashboard/settings" element={<ProfileSettingsPage />} />
                    <Route path="/settings" element={<ProfileSettingsPage />} />
                    <Route path="/settings/api-keys" element={<APIKeysSettingsPage />} />
                    <Route path="/settings/profile" element={<ProfileSettingsPage />} />
                    <Route path="/settings/security" element={<SecuritySettingsPage />} />
                    <Route path="/legal/terms" element={<TermsOfServicePage />} />
                    <Route path="/legal/privacy" element={<PrivacyPolicyPage />} />
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
        </AuthProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;