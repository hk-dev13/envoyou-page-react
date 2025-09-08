# Backend Environment Variables untuk Multi-Domain Setup

## Overview
Dengan adanya subdomain baru (app.envoyou.com), backend perlu dikonfigurasi untuk menangani multiple domains dan CORS yang tepat.

## Environment Variables yang Perlu Ditambahkan

### 1. Domain Configuration
```bash
# Frontend domains yang diizinkan
ALLOWED_ORIGINS=https://envoyou.com,https://app.envoyou.com
CORS_ALLOWED_ORIGINS=https://envoyou.com,https://app.envoyou.com,https://staging.envoyou.com

# Cookie settings untuk cross-domain authentication
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
# CORS settings untuk multiple domains
CORS_ALLOW_CREDENTIALS=true
CORS_ALLOW_METHODS=GET,POST,PUT,DELETE,OPTIONS
CORS_ALLOW_HEADERS=Content-Type,Authorization,X-Requested-With,Accept,Origin
CORS_EXPOSE_HEADERS=Content-Length,X-Custom-Header
CORS_MAX_AGE=86400
```

### 3. Session/Cookie Configuration
```bash
# Session settings untuk cross-domain
SESSION_COOKIE_DOMAIN=.envoyou.com
SESSION_COOKIE_SECURE=true
SESSION_COOKIE_HTTPONLY=true
SESSION_COOKIE_SAMESITE=lax

# JWT settings (jika menggunakan JWT)
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

## Contoh Konfigurasi Backend (Node.js/Express)

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

## Checklist Konfigurasi Backend

### ✅ CORS Configuration
- [ ] Tambahkan `https://app.envoyou.com` ke allowed origins
- [ ] Set `credentials: true` untuk cookie support
- [ ] Konfigurasi preflight OPTIONS requests

### ✅ Cookie/Session Configuration
- [ ] Set cookie domain ke `.envoyou.com`
- [ ] Enable secure cookies di production
- [ ] Set sameSite ke 'lax' untuk cross-domain
- [ ] Test cookie sharing antara domains

### ✅ Authentication Redirects
- [ ] Update email verification success URL
- [ ] Update password reset success URL
- [ ] Update social auth callback URLs
- [ ] Test semua redirect flows

### ✅ Database/Session Storage
- [ ] Pastikan session storage mendukung cross-domain
- [ ] Test session persistence across domains
- [ ] Verify user data consistency

### ✅ Security Headers
- [ ] Update CSP untuk multiple domains
- [ ] Configure HSTS untuk semua subdomains
- [ ] Test security headers di semua domains

## Testing Checklist

### 🔍 CORS Testing
```bash
# Test CORS dari app.envoyou.com
curl -H "Origin: https://app.envoyou.com" \
     -H "Access-Control-Request-Method: POST" \
     -X OPTIONS https://api.envoyou.com/api/test

# Test CORS dari envoyou.com
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
- Pastikan semua origins tercantum di `ALLOWED_ORIGINS`
- Check bahwa `credentials: true` di-set
- Verify preflight OPTIONS handling

### Cookie Issues
- Pastikan cookie domain adalah `.envoyou.com`
- Check `secure` flag (harus true di HTTPS)
- Verify `sameSite` setting

### Redirect Issues
- Pastikan semua redirect URLs menggunakan `https://app.envoyou.com`
- Check bahwa backend mengirim redirect yang benar
- Test di incognito mode untuk menghindari cache issues

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

1. **Update Backend Configuration**: Tambahkan environment variables di atas
2. **Test CORS**: Pastikan API dapat diakses dari kedua domains
3. **Test Cookies**: Verify cookie sharing berfungsi
4. **Test Redirects**: Pastikan semua auth flows redirect dengan benar
5. **Update Documentation**: Update API docs dengan informasi domain baru
