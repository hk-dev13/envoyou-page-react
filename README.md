# 🚀 Envoyou - Global Environmental Data API Landing Page

A modern, high-performance React landing page for the Envoyou environmental data verification API, built with Vite and optimized for production with **full FastAPI backend integration**.

## ✨ Features

### 🎯 **Core Features**
- **Modern React 19** with Vite for lightning-fast development
- **Tailwind CSS v4** for beautiful, responsive design
- **AOS (Animate On Scroll)** for smooth scroll animations
- **Chart.js Integration** for data visualizations
- **React Router** for seamless navigation
- **🔄 Full Backend Integration** - Connected to FastAPI backend with real data
- **🔑 Demo API Key System** - Instant access to real environmental data
- **📊 Real-time API Testing** - Built-in API tester with connection monitoring

### ⚡ **Performance Optimizations**
- **Lazy Loading** - Components load only when needed
- **Code Splitting** - Optimized bundle chunks for better caching
- **Error Boundaries** - Graceful error handling with user-friendly UI
- **Optimized Build** - Production-ready with source maps

### 🔍 **SEO & Accessibility**
- **Structured Data (JSON-LD)** for rich search results
- **Open Graph & Twitter Cards** for social sharing
- **ARIA Labels & Keyboard Navigation** for accessibility
- **Canonical URLs** and meta tags for SEO
- **DNS Prefetching** for faster resource loading

### 📊 **Analytics Ready**
- **Google Analytics 4** integration
- **Custom Event Tracking** setup
- **Performance Monitoring** configuration

### 🌐 **Backend Integration Features**
- **🔍 CEVS Score Lookup** - Real company environmental scores
- **📈 Emissions Data** - EPA power plant data with filtering
- **🌍 Global ISO Certifications** - ISO 14001 environmental certifications
- **🎯 Demo API Keys** - Instant access without registration
- **📡 Connection Status** - Real-time backend monitoring
- **🔧 API Testing Tools** - Built-in endpoint testing interface

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hk-dev13/ENVOYou-page.git
   cd envoyou-page-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Start FastAPI Backend** (Required for full functionality)
   ```bash
   # Make sure FastAPI backend is running on http://localhost:8000
   # Backend should have the demo API key endpoint: /admin/request-demo-key
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:5173
   ```

7. **Get Demo API Key**
   - Click the floating API status button (bottom-right)
   - Use "Get Demo API Key" to access real data
   - Test all endpoints with real environmental data

## 📁 Project Structure

```
src/
├── components/
│   ├── ErrorBoundary.jsx         # Error handling component
│   ├── Header.jsx               # Navigation header
│   ├── Footer.jsx               # Site footer
│   ├── HeroSection.jsx          # Hero/landing section
│   ├── FeaturesSection.jsx      # Features showcase
│   ├── PricingSection.jsx       # Pricing plans
│   ├── CodeExampleSection.jsx   # API examples
│   ├── VisualizationsSection.jsx # Data charts
│   ├── CevsLookupSection.jsx    # CEVS lookup tool (connected to backend)
│   ├── APITester.jsx            # Real-time API testing interface
│   ├── DemoKeyManager.jsx       # Demo API key management
│   ├── ScrollToTop.jsx          # Auto scroll-to-top on navigation
│   └── BackToTop.jsx            # Back to top button
├── pages/
│   ├── HomePage.jsx             # Main landing page
│   ├── DocumentationPage.jsx    # API documentation
│   ├── AboutPage.jsx            # About us page
│   ├── ContactPage.jsx          # Contact page
│   └── FreeAPIKeyPage.jsx       # API key registration
├── services/
│   └── apiService.js            # Backend API integration service
├── App.jsx                      # Main app component
└── main.jsx                     # App entry point
```

## � Backend Integration

### Features
- **🔄 Real-time Data**: Connected to FastAPI backend with live environmental data
- **🎯 Demo API Keys**: Get instant access without registration
- **📊 Connection Monitor**: Real-time backend status indicator
- **🧪 API Testing**: Built-in testing interface for all endpoints

### API Endpoints Available
- **Health Check**: `/health` - No authentication required
- **CEVS Data**: `/global/cevs/{company_name}` - Company environmental scores
- **Emissions**: `/global/emissions` - EPA power plant emissions data
- **ISO Certifications**: `/global/iso` - Global ISO 14001 certificates
- **Demo Keys**: `/admin/request-demo-key` - Get temporary API access

### Getting Started with API
1. **Start the application** - Frontend connects automatically
2. **Click API status button** - Green circle in bottom-right corner
3. **Get Demo API Key** - Click "Get Demo API Key" button
4. **Test endpoints** - Use built-in testing interface
5. **Try CEVS lookup** - Search real company data on homepage

### API Response Examples

#### CEVS Score Response
```json
{
  "status": "success",
  "company": "Shell",
  "score": 50.0,
  "components": {
    "base": 50.0,
    "iso_bonus": 0.0,
    "epa_penalty": 0.0,
    "renewables_bonus": 0.0
  },
  "sources": {
    "epa_matches": 0,
    "iso_count": 40
  }
}
```

#### Demo API Key Response
```json
{
  "status": "success",
  "data": {
    "api_key": "ae21b9776a23b7e7fa28856dd9810544",
    "client_name": "Demo User",
    "tier": "basic",
    "requests_per_minute": 30
  }
}
```

## �🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

Create a `.env` file with:

```env
# Backend API Configuration
VITE_API_URL=http://localhost:8000
VITE_API_KEY=your_production_api_key

# Analytics
VITE_GA_TRACKING_ID=G-YOUR-GA4-ID

# App Settings
VITE_APP_NAME=Envoyou
VITE_APP_DESCRIPTION=Global Environmental Data API
```

### Backend Integration

This frontend is designed to work with the FastAPI backend. Make sure:

1. **Backend Running**: FastAPI server at `http://localhost:8000`
2. **Demo Endpoint**: `/admin/request-demo-key` available
3. **CORS Enabled**: Frontend origin `http://localhost:5173` allowed
4. **All Endpoints**: Health, CEVS, Emissions, ISO data available

#### Quick Backend Test
```bash
# Test if backend is running
curl http://localhost:8000/health

# Test demo API key endpoint
curl -X POST http://localhost:8000/admin/request-demo-key \
  -H "Content-Type: application/json" \
  -d '{"client_name":"Test User"}'
```

### Google Analytics Setup

1. Replace `G-XXXXXXXXXX` in `index.html` with your GA4 ID
2. Update the tracking configuration as needed

## 🎨 Customization

### Colors & Branding
- Primary: Emerald (`emerald-500`)
- Background: Dark slate (`slate-900`)
- Accent: Sky blue (`sky-300`)

### Animations
- AOS library configured with:
  - Duration: 1200ms
  - Offset: 100px
  - Once: true (animations trigger once)

## 📈 Performance Features

### Lazy Loading
Components are lazy-loaded for better initial page load:
```jsx
const HeroSection = lazy(() => import('../components/HeroSection'));
```

### Error Boundaries
Graceful error handling prevents app crashes:
```jsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### Bundle Optimization
Automatic code splitting and chunk optimization for production builds.

## 🔍 SEO Features

### Structured Data
JSON-LD schema for better search engine understanding:
- SoftwareApplication schema
- Organization information
- Feature lists

### Meta Tags
Comprehensive meta tags for:
- Search engines
- Social media sharing
- Browser optimization

## ♿ Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Screen reader friendly

## 📊 Analytics & Monitoring

### Google Analytics 4
- Page view tracking
- Custom event tracking setup
- Performance monitoring

### Error Tracking
- Console error logging
- Development error details
- Production error boundaries

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Hosting
The `dist/` folder contains all files needed for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🚀 Deployment to Netlify

### Automatic Deployment

1. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18.17.0 (matches `.nvmrc`)

3. **Environment Variables** (Optional)
   - Add any variables from `.env.example` in Netlify dashboard

4. **Deploy**
   - Netlify will automatically build and deploy on git push
   - Your site will be live at `https://your-site-name.netlify.app`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   ```bash
   npx netlify-cli deploy --prod --dir=dist
   ```

### SEO & Performance Features

- ✅ **robots.txt** - Search engine crawling rules
- ✅ **sitemap.xml** - Site structure for search engines
- ✅ **_redirects** - SPA routing support
- ✅ **_headers** - Security headers and caching
- ✅ **netlify.toml** - Build configuration
- ✅ **Optimized chunks** - Better caching strategy
- ✅ **Gzip compression** - Faster loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## � Additional Documentation

- **[Backend Integration Guide](./BACKEND_INTEGRATION.md)** - Detailed integration setup
- **[PWA Features](./PWA_README.md)** - Progressive Web App functionality
- **API Documentation** - Available in the app at `/documentation`

## �📞 Support

- **Email**: support@envoyou.com
- **GitHub Issues**: For bug reports and feature requests
- **API Documentation**: Available at `/documentation` or `http://localhost:8000/docs`
- **Backend Status**: Real-time monitoring via floating status indicator

## 🎯 Quick Demo

1. **Start backend**: `FastAPI server on http://localhost:8000`
2. **Start frontend**: `npm run dev`
3. **Get demo key**: Click green button → "Get Demo API Key"
4. **Test CEVS lookup**: Search "Shell" or "Tesla" 
5. **Explore real data**: Company environmental scores with full breakdown

---

**Built with ❤️ for environmental data transparency and sustainability**
