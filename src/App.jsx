import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import InstallPrompt from './components/InstallPrompt';
import ServiceWorkerManager from './components/ServiceWorkerManager';
import NetworkStatus from './components/NetworkStatus';
import PWAStatus from './components/PWAStatus';
import PushNotificationManager from './components/PushNotificationManager';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import APITester from './components/APITester';
import HomePage from './pages/HomePage';
import DocumentationPage from './pages/DocumentationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FreeAPIKeyPage from './pages/FreeAPIKeyPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Dashboard from './pages/Dashboard';
import TermsOfServicePage from './pages/legal/TermsOfServicePage';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import ProfileSettingsPage from './pages/settings/ProfileSettingsPage';
import SecuritySettingsPage from './pages/settings/SecuritySettingsPage';
import APIKeysSettingsPage from './pages/settings/APIKeysSettingsPage';

// Komponen Layout ini akan memastikan Header dan Footer selalu ada
const AppLayout = () => (
  <>
    <Header />
    <main>
      <Outlet /> {/* Ini adalah tempat konten halaman akan ditampilkan */}
    </main>
    <Footer />
    <InstallPrompt />
    <ServiceWorkerManager />
    <NetworkStatus />
    <PWAStatus />
    <PushNotificationManager />
    <BackToTop />
    {/* API Tester for development - only show in dev mode */}
    {import.meta.env.DEV && <APITester />}
  </>
);

function App() {
  return (
    <AuthProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Public routes with layout */}
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="documentation" element={<DocumentationPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="free-api-key" element={<FreeAPIKeyPage />} />
              
              {/* Legal pages */}
              <Route path="legal/terms" element={<TermsOfServicePage />} />
              <Route path="legal/privacy" element={<PrivacyPolicyPage />} />
            </Route>

            {/* Auth routes (no layout) */}
            <Route path="/auth/login" element={
              <ProtectedRoute requireAuth={false}>
                <LoginPage />
              </ProtectedRoute>
            } />
            <Route path="/auth/register" element={
              <ProtectedRoute requireAuth={false}>
                <RegisterPage />
              </ProtectedRoute>
            } />

            {/* Protected dashboard routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute requireAuth={true}>
                <Dashboard />
              </ProtectedRoute>
            } />

            {/* Protected settings routes */}
            <Route path="/settings/profile" element={
              <ProtectedRoute requireAuth={true}>
                <ProfileSettingsPage />
              </ProtectedRoute>
            } />
            <Route path="/settings/security" element={
              <ProtectedRoute requireAuth={true}>
                <SecuritySettingsPage />
              </ProtectedRoute>
            } />
            <Route path="/settings/api-keys" element={
              <ProtectedRoute requireAuth={true}>
                <APIKeysSettingsPage />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </ErrorBoundary>
    </AuthProvider>
  );
}

export default App;