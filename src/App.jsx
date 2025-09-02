import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import DocumentationPage from './pages/DocumentationPage';
const ComingSoonPage = () => <div>Halaman Coming Soon</div>;

// Komponen Layout ini akan memastikan Header dan Footer selalu ada
const AppLayout = () => (
  <>
    <Header />
    <main>
      <Outlet /> {/* Ini adalah tempat konten halaman akan ditampilkan */}
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="documentation" element={<DocumentationPage />} />
            <Route path="coming-soon" element={<ComingSoonPage />} />
            {/* Tambahkan rute untuk halaman lain di sini jika ada */}
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;