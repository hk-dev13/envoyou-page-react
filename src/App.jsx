import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
const DocumentationPage = () => <div>Halaman Dokumentasi</div>;
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
  );
}

export default App;