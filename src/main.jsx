import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { optimizePerformance } from './utils/performance.js'

// Initialize performance optimizations
optimizePerformance();

// Initialize AOS
AOS.init({
  duration: 1200,
  once: true,
  offset: 100,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
