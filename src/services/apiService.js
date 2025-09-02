// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// API Service Class
class ApiService {
    constructor() {
        this.baseURL = API_BASE_URL;
    }

        // Generic request method
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        // Add API key if available (from environment, passed in options, or localStorage)
        const apiKey = options.apiKey || import.meta.env.VITE_API_KEY || this.getStoredApiKey();
        if (apiKey) {
            config.headers['X-API-Key'] = apiKey;
        }

        try {
            console.log(`Making request to: ${url}`);
            const response = await fetch(url, config);
            
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP ${response.status}: ${errorText}`);
            }
            
            const data = await response.json();
            console.log('API Response:', data);
            return data;
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    // GET request
    async get(endpoint, params = {}) {
        const queryString = new URLSearchParams(params).toString();
        const url = queryString ? `${endpoint}?${queryString}` : endpoint;
        
        return this.request(url, {
            method: 'GET',
        });
    }

    // POST request
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    // PUT request
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    // DELETE request
    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE',
        });
    }

    // Health check
    async healthCheck() {
        return this.get('/health');
    }

        // Get CEVS (Company Environmental Verification Score) data
    async getCEVSData(companyName, country = null, apiKey = null) {
        if (!companyName) {
            throw new Error('Company name is required for CEVS lookup');
        }
        
        let endpoint = `/global/cevs/${encodeURIComponent(companyName)}`;
        const params = new URLSearchParams();
        
        if (country) {
            params.append('country', country);
        }
        
        if (params.toString()) {
            endpoint += `?${params.toString()}`;
        }
        
        return this.request(endpoint, { apiKey });
    }

    // Get emissions data  
    async getEmissionsData(state = null, year = null, page = 1, limit = 50) {
        const params = new URLSearchParams();
        
        if (state) params.append('state', state);
        if (year) params.append('year', year.toString());
        params.append('page', page.toString());
        params.append('limit', limit.toString());
        
        return this.request(`/global/emissions?${params.toString()}`);
    }

    // Get countries data from ISO endpoint
    async getCountries(country = null, limit = 50) {
        const params = new URLSearchParams();
        
        if (country) params.append('country', country);
        params.append('limit', limit.toString());
        
        return this.request(`/global/iso?${params.toString()}`);
    }

    // Submit API key request
    async submitAPIKeyRequest(formData) {
        return this.post('/api/v1/request-api-key', formData);
    }

    // Test API with key
    async testAPIKey(apiKey) {
        return this.request('/api/v1/test', {
            method: 'GET',
            headers: {
                'X-API-Key': apiKey,
            },
        });
    }

    // Request demo API key (no auth required)
    async requestDemoKey(clientName = "Demo User") {
        const response = await fetch(`${this.baseURL}/admin/request-demo-key`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ client_name: clientName })
        });
        
        const data = await response.json();
        if (data.status === 'success') {
            const apiKey = data.data.api_key;
            console.log('Demo API Key obtained:', apiKey);
            // Store in localStorage for persistence
            localStorage.setItem('envoyou_demo_api_key', apiKey);
            return apiKey;
        } else {
            throw new Error(data.message || 'Failed to get demo API key');
        }
    }

    // Get stored API key from localStorage
    getStoredApiKey() {
        return localStorage.getItem('envoyou_demo_api_key');
    }

    // Clear stored API key
    clearStoredApiKey() {
        localStorage.removeItem('envoyou_demo_api_key');
    }
}

// Create singleton instance
const apiService = new ApiService();

export default apiService;
