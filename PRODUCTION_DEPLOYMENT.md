# 🚀 Production Deployment Guide

This guide covers deploying the Envoyou frontend with backend integration to production environments.

## 📋 Pre-deployment Checklist

### Frontend Preparation
- [ ] Update `VITE_API_URL` to production backend URL
- [ ] Set production `VITE_API_KEY` if using static keys
- [ ] Enable production analytics (GA4)
- [ ] Test all critical user flows
- [ ] Verify PWA functionality
- [ ] Check mobile responsiveness
- [ ] Run `npm run build` successfully

### Backend Requirements
- [ ] Production FastAPI server deployed and accessible
- [ ] HTTPS enabled for production backend
- [ ] CORS configured for production frontend domain
- [ ] Demo API key endpoint available at `/admin/request-demo-key`
- [ ] All required endpoints responding correctly
- [ ] Rate limiting configured appropriately
- [ ] Health check endpoint at `/health`

## 🌐 Environment Configuration

### Environment Variables
```env
# Production API Configuration
VITE_API_URL=https://api.envoyou.com
VITE_API_KEY=your_production_master_key

# Analytics
VITE_GA_TRACKING_ID=G-YOUR-PRODUCTION-GA4-ID

# App Metadata
VITE_APP_NAME=Envoyou
VITE_APP_DESCRIPTION=Global Environmental Data API
VITE_APP_URL=https://envoyou.com
```

### Build Configuration
```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview",
    "build:analyze": "vite build --mode analyze"
  }
}
```

## 🔄 Deployment Options

### Option 1: Netlify (Recommended)
1. **Connect Repository**
   ```bash
   # Build settings in Netlify dashboard
   Build command: npm run build
   Publish directory: dist
   Node version: 18.17.0
   ```

2. **Environment Variables**
   ```
   VITE_API_URL=https://api.envoyou.com
   VITE_GA_TRACKING_ID=G-YOUR-GA4-ID
   ```

3. **Deploy Settings**
   - Auto-deploy on git push
   - Branch: `main`
   - Domain: Custom or Netlify subdomain

### Option 2: Vercel
1. **Import Project** from GitHub
2. **Framework Preset**: Vite
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Environment Variables**: Add in Vercel dashboard

### Option 3: AWS S3 + CloudFront
1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **CloudFront Distribution**
   - Origin: S3 bucket
   - Default root object: `index.html`
   - Error pages: 404 → `/index.html` (SPA routing)

### Option 4: Docker
```dockerfile
# Multi-stage build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔧 Production Optimizations

### Bundle Analysis
```bash
# Analyze bundle size
npm run build:analyze
npx vite-bundle-analyzer
```

### Performance Checklist
- [ ] Lazy loading all routes
- [ ] Image optimization (WebP, responsive)
- [ ] Critical CSS inlined
- [ ] Service Worker active (PWA)
- [ ] Gzip/Brotli compression
- [ ] CDN for static assets
- [ ] Proper caching headers

### Security Headers
```nginx
# nginx.conf
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' *.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.envoyou.com https://*.google-analytics.com" always;
```

## 📊 Backend Integration in Production

### HTTPS Requirements
```python
# FastAPI backend CORS for production
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://envoyou.com",
        "https://www.envoyou.com",
        "https://envoyou.netlify.app"  # If using Netlify
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### API Key Management
- Demo keys should have shorter expiration in production
- Implement rate limiting per IP/key
- Monitor demo key usage for abuse
- Set up alerts for high API usage

### Health Monitoring
```bash
# Health check endpoint should return
{
  "status": "healthy",
  "timestamp": "2025-09-02T14:36:50.165503+00:00",
  "version": "1.0.0",
  "environment": "production"
}
```

## 🚨 Monitoring & Alerts

### Frontend Monitoring
1. **Google Analytics 4**
   - Page views and user flows
   - API usage patterns
   - Error tracking

2. **Performance Monitoring**
   ```javascript
   // Already included in the app
   new PerformanceObserver((list) => {
     // Send to monitoring service
   }).observe({ entryTypes: ['navigation', 'paint'] });
   ```

3. **Error Tracking**
   - Console errors automatically logged
   - API failures tracked
   - User feedback collection

### Backend Monitoring
- Health endpoint checks every 5 minutes
- API response time monitoring
- Rate limiting alerts
- Demo key usage tracking

## 🔄 Deployment Pipeline

### GitHub Actions Example
```yaml
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.PRODUCTION_API_URL }}
          VITE_GA_TRACKING_ID: ${{ secrets.GA_TRACKING_ID }}
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist
        env:
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

## ✅ Post-Deployment Verification

### Automated Checks
```bash
# Health check
curl https://api.envoyou.com/health

# Demo key request
curl -X POST https://api.envoyou.com/admin/request-demo-key \
  -H "Content-Type: application/json" \
  -d '{"client_name":"Production Test"}'

# CEVS data with demo key
curl https://api.envoyou.com/global/cevs/Shell \
  -H "X-API-Key: [demo_key_from_above]"
```

### Manual Testing Checklist
- [ ] Homepage loads correctly
- [ ] API status indicator shows green
- [ ] Demo API key request works
- [ ] CEVS lookup returns real data
- [ ] All navigation links work
- [ ] Mobile responsiveness
- [ ] PWA installation prompt
- [ ] Error handling for offline scenarios

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🛡️ Security Considerations

### API Key Security
- Never expose production master keys in frontend
- Demo keys should have limited scope
- Implement IP-based rate limiting
- Monitor for suspicious usage patterns

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' *.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://api.envoyou.com https://*.google-analytics.com;
">
```

### HTTPS Enforcement
- Force HTTPS redirects
- HSTS headers enabled
- Secure cookie settings
- Mixed content prevention

## 📋 Rollback Strategy

### Quick Rollback
1. **Netlify**: Use deploy history to rollback
2. **Vercel**: Revert to previous deployment
3. **AWS**: Update CloudFront to previous S3 version
4. **Docker**: Deploy previous container tag

### Backend Issues
- Fallback to demo mode if backend unavailable
- Cache critical data for offline scenarios
- Display maintenance message if needed

---

**Ready for production? Follow this checklist and deploy with confidence! 🚀**
