import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
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
import HomePage from './pages/HomePage';
import DocumentationPage from './pages/DocumentationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FreeAPIKeyPage from './pages/FreeAPIKeyPage';

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
  </>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="documentation" element={<DocumentationPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="free-api-key" element={<FreeAPIKeyPage />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;