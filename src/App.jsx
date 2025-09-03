import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DocumentationPage from './pages/DocumentationPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ServiceWorkerManager from './components/ServiceWorkerManager';
import PushNotificationManager from './components/PushNotificationManager';
import NetworkStatus from './components/NetworkStatus';
import BackToTop from './components/BackToTop';

function App() {
  console.log('🚀 EnvoyOU - Full App with Auth & Error Boundary');
  
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-slate-900">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/documentation" element={<DocumentationPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pricing" element={<PricingPage />} />
              </Routes>
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