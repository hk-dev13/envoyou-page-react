# Backend Environment Variables for Multi-Domain Setup

## Overview
With the new subdomain (app.envoyou.com), the backend needs to be configured to handle multiple domains and proper CORS.

## Environment Variables to Add

### 1. Domain Configuration
```bash
# Frontend domains that are allowed
ALLOWED_ORIGINS=https://envoyou.com,https://app.envoyou.com
CORS_ALLOWED_ORIGINS=https://envoyou.com,https://app.envoyou.com,https://staging.envoyou.com

# Cookie settings for cross-domain authentication
COOKIE_DOMAIN=.envoyou.com
COOKIE_SECURE=true
COOKIE_SAME_SITE=lax

# Domain-specific settings
MAIN_DOMAIN=https://envoyou.com
APP_DOMAIN=https://app.envoyou.com
API_DOMAIN=https://api.envoyou.com
```

### 2. CORS Configuration
```bash
# CORS settings for multiple domains
CORS_ALLOW_CREDENTIALS=true
CORS_ALLOW_METHODS=GET,POST,PUT,DELETE,OPTIONS
CORS_ALLOW_HEADERS=Content-Type,Authorization,X-Requested-With,Accept,Origin
CORS_EXPOSE_HEADERS=Content-Length,X-Custom-Header
CORS_MAX_AGE=86400
```

### 3. Session/Cookie Configuration
```bash
# Session settings for cross-domain
SESSION_COOKIE_DOMAIN=.envoyou.com
SESSION_COOKIE_SECURE=true
SESSION_COOKIE_HTTPONLY=true
SESSION_COOKIE_SAMESITE=lax

# JWT settings (if using JWT)
JWT_COOKIE_DOMAIN=.envoyou.com
JWT_COOKIE_SECURE=true
JWT_COOKIE_SAMESITE=lax
```

### 4. Redirect URLs
```bash
# Email verification redirects
EMAIL_VERIFICATION_SUCCESS_URL=https://app.envoyou.com/auth/login
EMAIL_VERIFICATION_ERROR_URL=https://app.envoyou.com/auth/login

# Password reset redirects
PASSWORD_RESET_SUCCESS_URL=https://app.envoyou.com/auth/login
PASSWORD_RESET_ERROR_URL=https://app.envoyou.com/auth/login

# Social auth redirects
GOOGLE_REDIRECT_URI=https://app.envoyou.com/auth/google/callback
GITHUB_REDIRECT_URI=https://app.envoyou.com/auth/github/callback
```

## Backend Configuration Example (Node.js/Express)

### CORS Setup
```javascript
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS.split(',');
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Content-Length', 'X-Custom-Header'],
  maxAge: 86400
};

app.use(cors(corsOptions));
```

### Cookie Setup
```javascript
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    domain: process.env.COOKIE_DOMAIN,
    secure: process.env.COOKIE_SECURE === 'true',
    httpOnly: true,
    sameSite: process.env.COOKIE_SAME_SITE || 'lax',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  },
  resave: false,
  saveUninitialized: false
}));
```

### JWT Cookie Setup (jika menggunakan JWT)
```javascript
const jwtOptions = {
  httpOnly: true,
  secure: process.env.JWT_COOKIE_SECURE === 'true',
  sameSite: process.env.JWT_COOKIE_SAMESITE || 'lax',
  domain: process.env.JWT_COOKIE_DOMAIN,
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
};
```

## Backend Configuration Checklist

### ✅ CORS Configuration
- [ ] Add `https://app.envoyou.com` to allowed origins
- [ ] Set `credentials: true` for cookie support
- [ ] Configure preflight OPTIONS requests

### ✅ Cookie/Session Configuration
- [ ] Set cookie domain to `.envoyou.com`
- [ ] Enable secure cookies in production
- [ ] Set sameSite to 'lax' for cross-domain
- [ ] Test cookie sharing between domains

### ✅ Authentication Redirects
- [ ] Update email verification success URL
- [ ] Update password reset success URL
- [ ] Update social auth callback URLs
- [ ] Test all redirect flows

### ✅ Database/Session Storage
- [ ] Ensure session storage supports cross-domain
- [ ] Test session persistence across domains
- [ ] Verify user data consistency

### ✅ Security Headers
- [ ] Update CSP for multiple domains
- [ ] Configure HSTS for all subdomains
- [ ] Test security headers on all domains

## Testing Checklist

### 🔍 CORS Testing
```bash
# Test CORS from app.envoyou.com
curl -H "Origin: https://app.envoyou.com" \
     -H "Access-Control-Request-Method: POST" \
     -X OPTIONS https://api.envoyou.com/api/test

# Test CORS from envoyou.com
curl -H "Origin: https://envoyou.com" \
     -H "Access-Control-Request-Method: GET" \
     -X OPTIONS https://api.envoyou.com/api/test
```

### 🍪 Cookie Testing
```bash
# Test cookie domain
curl -c cookies.txt https://app.envoyou.com/auth/login
curl -b cookies.txt https://api.envoyou.com/api/user

# Verify cookie domain di browser dev tools
# Check bahwa cookie domain adalah .envoyou.com
```

### 🔄 Redirect Testing
- [ ] Test email verification redirect
- [ ] Test password reset redirect
- [ ] Test social auth redirects
- [ ] Test direct access redirects

## Troubleshooting

### CORS Issues
- Ensure all origins are listed in `ALLOWED_ORIGINS`
- Check that `credentials: true` is set
- Verify preflight OPTIONS handling

### Cookie Issues
- Ensure cookie domain is `.envoyou.com`
- Check `secure` flag (must be true on HTTPS)
- Verify `sameSite` setting

### Redirect Issues
- Ensure all redirect URLs use `https://app.envoyou.com`
- Check that backend sends correct redirects
- Test in incognito mode to avoid cache issues

## Environment Variables Summary

```bash
# Domain Configuration
ALLOWED_ORIGINS=https://envoyou.com,https://app.envoyou.com
CORS_ALLOWED_ORIGINS=https://envoyou.com,https://app.envoyou.com
COOKIE_DOMAIN=.envoyou.com
COOKIE_SECURE=true
COOKIE_SAME_SITE=lax

# Authentication Redirects
EMAIL_VERIFICATION_SUCCESS_URL=https://app.envoyou.com/auth/login
PASSWORD_RESET_SUCCESS_URL=https://app.envoyou.com/auth/login
GOOGLE_REDIRECT_URI=https://app.envoyou.com/auth/google/callback
GITHUB_REDIRECT_URI=https://app.envoyou.com/auth/github/callback
```

## Next Steps

1. **Update Backend Configuration**: Add environment variables above
2. **Test CORS**: Ensure API can be accessed from both domains
3. **Test Cookies**: Verify cookie sharing works
4. **Test Redirects**: Ensure all auth flows redirect correctly
5. **Update Documentation**: Update API docs with new domain information
