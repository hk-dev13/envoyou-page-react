# Multi-Domain Setup Guide for Envoyou

## Overview
Envoyou now uses a multi-domain architecture with:
- **envoyou.com**: Landing page/marketing site
- **app.envoyou.com**: Dashboard application and authentication
- **api.envoyou.com**: Backend API

## Prerequisites

### 1. Domain Setup
Ensure all subdomains are properly configured:
```bash
# Required DNS Records:
envoyou.com      A     YOUR_SERVER_IP
app.envoyou.com  A     YOUR_SERVER_IP
api.envoyou.com  A     YOUR_SERVER_IP

# or if using CNAME:
envoyou.com      CNAME your-netlify-app.netlify.app
app.envoyou.com  CNAME your-netlify-app.netlify.app
api.envoyou.com  CNAME your-api-server.com
```

### 2. SSL Certificates
Ensure all domains have valid SSL certificates:
```bash
# Let's Encrypt for all subdomains
certbot certonly --dns-cloudflare -d envoyou.com -d app.envoyou.com -d api.envoyou.com
```

## Frontend Configuration

### 1. Environment Variables
Update the `.env` file in each frontend project:

#### Landing Page (envoyou.com)
```bash
# .env.production
VITE_MAIN_DOMAIN=https://envoyou.com
VITE_APP_DOMAIN=https://app.envoyou.com
VITE_API_DOMAIN=https://api.envoyou.com
VITE_COOKIE_DOMAIN=.envoyou.com
VITE_COOKIE_SECURE=true
VITE_COOKIE_SAME_SITE=lax
```

#### Dashboard App (app.envoyou.com)
```bash
# .env.production
VITE_MAIN_DOMAIN=https://envoyou.com
VITE_APP_DOMAIN=https://app.envoyou.com
VITE_API_DOMAIN=https://api.envoyou.com
VITE_COOKIE_DOMAIN=.envoyou.com
VITE_COOKIE_SECURE=true
VITE_COOKIE_SAME_SITE=lax
```

### 2. Build & Deploy
```bash
# Build landing page
cd /path/to/envoyou-landing
npm run build
npm run deploy

# Build dashboard app
cd /path/to/envoyou-dashboard
npm run build
npm run deploy
```

## Backend Configuration

### 1. Environment Variables
Copy template and update with actual values:

```bash
cp .env.backend.template .env.production
# Edit .env.production with correct values
```

### 2. CORS Configuration
Ensure backend allows requests from both domains:

```javascript
// Express.js CORS setup
const corsOptions = {
  origin: [
    'https://envoyou.com',
    'https://app.envoyou.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
```

### 3. Cookie Configuration
Setup cookies for cross-domain authentication:

```javascript
// Session cookie config
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    domain: '.envoyou.com',
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000
  }
}));
```

## Deployment Checklist

### ✅ Domain & DNS
- [ ] envoyou.com points to landing page
- [ ] app.envoyou.com points to dashboard app
- [ ] api.envoyou.com points to backend API
- [ ] SSL certificates valid for all domains

### ✅ Frontend Configuration
- [ ] Environment variables set correctly
- [ ] Build succeeds without errors
- [ ] Redirects work properly

### ✅ Backend Configuration
- [ ] CORS allows both domains
- [ ] Cookie domain set to `.envoyou.com`
- [ ] Authentication redirects point to `app.envoyou.com`
- [ ] Database connection works

### ✅ Testing
- [ ] Landing page accessible at envoyou.com
- [ ] Dashboard accessible at app.envoyou.com
- [ ] API accessible from both domains
- [ ] Authentication flow works end-to-end
- [ ] Cookie sharing works between domains

## Troubleshooting

### CORS Issues
```bash
# Test CORS dari landing page
curl -H "Origin: https://envoyou.com" \
     -H "Access-Control-Request-Method: GET" \
     -X OPTIONS https://api.envoyou.com/api/health

# Test CORS dari dashboard
curl -H "Origin: https://app.envoyou.com" \
     -H "Access-Control-Request-Method: POST" \
     -X OPTIONS https://api.envoyou.com/api/auth/login
```

### Cookie Issues
```bash
# Check cookie domain di browser
# 1. Buka DevTools > Application > Cookies
# 2. Pastikan domain adalah .envoyou.com
# 3. Pastikan secure flag aktif di HTTPS
```

### Redirect Issues
```bash
# Test redirects
curl -I https://api.envoyou.com/auth/verify/some-token
# Should redirect to: https://app.envoyou.com/auth/login
```

## Monitoring & Maintenance

### 1. Health Checks
Setup monitoring untuk semua domain:
```bash
# Landing page health check
curl https://envoyou.com/health

# Dashboard health check
curl https://app.envoyou.com/health

# API health check
curl https://api.envoyou.com/health
```

### 2. SSL Certificate Monitoring
```bash
# Check SSL expiry
openssl s_client -connect envoyou.com:443 -servername envoyou.com 2>/dev/null | openssl x509 -noout -dates
openssl s_client -connect app.envoyou.com:443 -servername app.envoyou.com 2>/dev/null | openssl x509 -noout -dates
openssl s_client -connect api.envoyou.com:443 -servername api.envoyou.com 2>/dev/null | openssl x509 -noout -dates
```

### 3. Performance Monitoring
Monitor Core Web Vitals untuk kedua domain:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)

## Security Considerations

### 1. HTTPS Enforcement
```nginx
# Nginx configuration
server {
    listen 80;
    server_name envoyou.com app.envoyou.com api.envoyou.com;
    return 301 https://$server_name$request_uri;
}
```

### 2. Security Headers
```nginx
# Security headers untuk semua domain
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;" always;
```

### 3. Rate Limiting
```nginx
# Rate limiting
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
limit_req zone=api burst=20 nodelay;
```

## Backup & Recovery

### 1. Database Backup
```bash
# Automated backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump -h localhost -U envoyou_user envoyou_db > backup_$DATE.sql
aws s3 cp backup_$DATE.sql s3://envoyou-backups/
```

### 2. SSL Certificate Backup
```bash
# Backup SSL certificates
tar -czf ssl_backup_$DATE.tar.gz /etc/letsencrypt/
aws s3 cp ssl_backup_$DATE.tar.gz s3://envoyou-backups/ssl/
```

### 3. Configuration Backup
```bash
# Backup environment files
tar -czf config_backup_$DATE.tar.gz .env* *.conf nginx/ apache2/
aws s3 cp config_backup_$DATE.tar.gz s3://envoyou-backups/config/
```

## Support & Documentation

### Useful Links
- [Frontend Deployment Guide](./FRONTEND_DEPLOYMENT.md)
- [Backend API Documentation](./API_DOCUMENTATION.md)
- [SSL Certificate Setup](./SSL_SETUP.md)
- [Monitoring Setup](./MONITORING.md)

### Emergency Contacts
- **Technical Issues**: tech@envoyou.com
- **Security Issues**: security@envoyou.com
- **Domain Issues**: admin@envoyou.com

---

**Last Updated**: September 9, 2025
**Version**: 1.0.0
**Maintainer**: Envoyou Dev Team
