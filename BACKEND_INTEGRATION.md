# 🔌 Backend Integration Guide

This document explains how the React frontend integrates with the FastAPI backend for real environmental data.

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** for the React frontend
- **Python 3.8+** with FastAPI backend running
- **Backend URL**: `http://localhost:8000`

### Setup Steps

1. **Start Backend** (Required)
   ```bash
   # Make sure your FastAPI backend is running on port 8000
   # Backend should have CORS enabled for http://localhost:5173
   curl http://localhost:8000/health  # Should return success
   ```

2. **Start Frontend**
   ```bash
   npm run dev  # Starts on http://localhost:5173
   ```

3. **Check Connection**
   - Look for green connection indicator (bottom-right)
   - If red: Backend is not running or CORS not configured

## 🔑 Demo API Key System

### Instant Access
The frontend includes a built-in demo API key system:

1. **Click floating status button** (green circle, bottom-right)
2. **Get Demo API Key** - No registration needed
3. **Test all endpoints** - Real data from multiple sources

### API Key Storage
- Keys are stored in `localStorage`
- Automatic inclusion in API requests
- Persistent across browser sessions

### Rate Limits
- **Demo Keys**: 30 requests/minute
- **Automatic retry**: If rate limited
- **Error handling**: User-friendly messages

## 📊 Real-Time Features

### Connection Monitor
- **Green**: Backend connected and healthy
- **Yellow**: Checking connection
- **Red**: Backend unavailable or error

### API Tester Interface
- **Test Health**: `/health` endpoint (no key needed)
- **Test CEVS**: Real company environmental scores
- **Test Emissions**: EPA power plant data
- **Test ISO Data**: Global environmental certifications

### CEVS Score Lookup
Live company environmental scoring with:
- **ISO 14001 Certifications**
- **EPA Emissions Data**
- **EEA Environmental Indicators**
- **EDGAR Pollution Data**
- **Real-time calculation**

## 🌐 API Endpoints Available

### Public Endpoints (No API Key)
```http
GET /health
# Returns: Backend status, version, system info

POST /admin/request-demo-key
# Payload: {"client_name": "Your Name"}
# Returns: {"api_key": "...", "tier": "basic", "requests_per_minute": 30}
```

### Protected Endpoints (API Key Required)
```http
GET /global/cevs/{company_name}?country={country}
# Returns: Complete environmental score with breakdown

GET /global/emissions?state={state}&limit={limit}
# Returns: EPA power plant emissions data

GET /global/iso?country={country}&limit={limit}  
# Returns: ISO 14001 environmental certifications

GET /global/eea?country={country}&indicator={indicator}
# Returns: European Environment Agency data
```

## 🔧 Technical Integration

### API Service Layer
```javascript
// Location: src/services/apiService.js
const apiService = {
  // Demo key management
  async requestDemoKey(clientName) { ... },
  getStoredApiKey() { ... },
  
  // Data endpoints
  async getCEVSData(company, country, apiKey) { ... },
  async getEmissionsData(state, year, page, limit) { ... },
  async getCountries(country, limit) { ... },
}
```

### Auto API Key Inclusion
```javascript
// Automatic API key handling
const config = {
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey || localStorage.getItem('envoyou_demo_api_key')
  }
}
```

### Error Handling
- **Network errors**: Graceful fallback
- **Rate limiting**: Automatic retry with backoff
- **Invalid keys**: Clear error messages
- **CORS issues**: Development guidance

## 🎯 User Flow

### First-Time User
1. **Lands on homepage** → Sees CEVS lookup section
2. **Tries to search** → Gets "API key needed" message
3. **Clicks status indicator** → Opens API tester panel
4. **Gets demo key** → Automatic storage and retry
5. **Search works** → Real environmental data displayed

### Returning User
1. **Page loads** → API key loaded from storage
2. **Auto-connects** → Backend status checked
3. **Full functionality** → All endpoints available immediately

### Developer Testing
1. **API Tester Panel** → Test individual endpoints
2. **Connection monitoring** → Real-time backend status
3. **Response inspection** → Full JSON responses
4. **Error debugging** → Detailed error messages

## 🚨 Troubleshooting

### Red Connection Indicator
1. **Check Backend**: Is FastAPI running on port 8000?
   ```bash
   curl http://localhost:8000/health
   ```

2. **Check CORS**: Backend must allow `http://localhost:5173`
   ```python
   from fastapi.middleware.cors import CORSMiddleware
   
   app.add_middleware(
       CORSMiddleware,
       allow_origins=["http://localhost:5173"],
       allow_methods=["*"],
       allow_headers=["*"],
   )
   ```

3. **Check Firewall**: Ensure ports 8000 and 5173 are open

### API Key Issues
- **Invalid key**: Request new demo key
- **Rate limited**: Wait 1 minute or get new key
- **Storage issues**: Clear localStorage and get new key

### Data Issues
- **No results**: Some companies may not have data
- **Empty arrays**: Normal for certain filters
- **Slow responses**: Large datasets may take 2-3 seconds

## 🔐 Production Deployment

### Environment Variables
```env
VITE_API_URL=https://api.envoyou.com
VITE_API_KEY=prod_key_here
```

### Security Considerations
- Demo keys expire after 24 hours
- Production keys have higher rate limits
- HTTPS required for production
- API key rotation recommended

### Performance Optimization
- Response caching (5 minutes)
- Request deduplication
- Lazy loading of large datasets
- Progressive data loading

## 📈 Monitoring

### Built-in Metrics
- Connection success/failure rates
- API response times
- Error frequency by endpoint
- Demo key usage statistics

### Development Console
All API calls are logged to browser console:
```
Making request to: http://localhost:8000/global/cevs/Shell
API Response: {status: 'success', company: 'Shell', score: 50.0, ...}
```

---

**Questions?** Check the [main documentation](./README.md) or open an issue on GitHub.
