# 🚀 Envoyou - Global Environmental Data API Landing Page

A modern, high-performance React landing page for the Envoyou environmental data verification API, built with Vite and optimized for production.

## ✨ Features

### 🎯 **Core Features**
- **Modern React 19** with Vite for lightning-fast development
- **Tailwind CSS v4** for beautiful, responsive design
- **AOS (Animate On Scroll)** for smooth scroll animations
- **Chart.js Integration** for data visualizations
- **React Router** for seamless navigation

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

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ErrorBoundary.jsx      # Error handling component
│   ├── Header.jsx            # Navigation header
│   ├── Footer.jsx            # Site footer
│   ├── HeroSection.jsx       # Hero/landing section
│   ├── FeaturesSection.jsx   # Features showcase
│   ├── PricingSection.jsx    # Pricing plans
│   ├── CodeExampleSection.jsx # API examples
│   ├── VisualizationsSection.jsx # Data charts
│   └── CevsLookupSection.jsx # CEVS lookup tool
├── pages/
│   └── HomePage.jsx          # Main landing page
├── App.jsx                   # Main app component
└── main.jsx                  # App entry point
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

Create a `.env` file with:

```env
# API Configuration
VITE_API_BASE_URL=https://api.envoyou.com
VITE_API_VERSION=v1

# Analytics
VITE_GA_TRACKING_ID=G-YOUR-GA4-ID

# App Settings
VITE_APP_NAME=Envoyou
VITE_APP_DESCRIPTION=Global Environmental Data API
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

## 📞 Support

- **Email**: support@envoyou.com
- **GitHub Issues**: For bug reports and feature requests
- **Documentation**: [API Docs](https://api.envoyou.com/docs)

---

**Built with ❤️ for environmental data transparency and sustainability**
