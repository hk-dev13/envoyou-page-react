import { API_CONFIG } from '../config';
import logger from './logger';
import { handleError } from './errorHandler';

class APIService {
  constructor() {
    this.baseURL = API_CONFIG.baseURL;
    this.timeout = API_CONFIG.timeout;
    this.retryAttempts = API_CONFIG.retryAttempts;
    this.retryDelay = API_CONFIG.retryDelay;
  }

  getAuthHeaders() {
    const token = localStorage.getItem('authToken');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }

  createAbortSignal() {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), this.timeout);
    return controller.signal;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const method = options.method || 'GET';
    let lastError = null;

    // Using retry logic from config, defaulting to 1 attempt for non-GET requests
    const maxAttempts = (method === 'GET' ? this.retryAttempts : 1);

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const startTime = Date.now();
      try {
        logger.apiRequest(method, url, options.body);

        const response = await fetch(url, {
          ...options,
          signal: this.createAbortSignal(),
          headers: {
            'Content-Type': 'application/json',
            ...this.getAuthHeaders(),
            ...options.headers,
          },
        });

        const duration = Date.now() - startTime;
        // Try to parse JSON, but don't fail if body is empty (e.g., 204 No Content)
        const responseData = response.status !== 204 ? await response.json().catch(() => null) : null;

        if (!response.ok) {
          const error = new Error(responseData?.message || `HTTP Error: ${response.status}`);
          error.response = {
            status: response.status,
            data: responseData,
          };
          throw error;
        }

        logger.apiResponse(method, url, response.status, responseData, duration);
        return responseData;

      } catch (error) {
        const duration = Date.now() - startTime;
        lastError = error;
        logger.apiResponse(method, url, error.response?.status || 0, { message: error.message }, duration);

        const handledError = handleError(error, {
          operation: 'apiRequest',
          url,
          method,
          attempt,
        });

        if (handledError.shouldRetry && attempt < maxAttempts) {
          logger.info(`Retrying API request`, { method, url, attempt: attempt + 1, delay: handledError.delay });
          await new Promise(resolve => setTimeout(resolve, handledError.delay));
          continue;
        }
        
        throw handledError;
      }
    }
    throw lastError;
  }

  // --- Standard HTTP Methods ---

  async get(endpoint, options = {}) {
    const { params, ...otherOptions } = options;
    const queryString = params ? new URLSearchParams(params).toString() : '';
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    return this.request(url, { method: 'GET', ...otherOptions });
  }

  async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
  }

  async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
  }

  async delete(endpoint, options = {}) {
    return this.request(endpoint, { method: 'DELETE', ...options });
  }

  // --- Application-Specific Methods ---

  async healthCheck() {
    return this.get('/health');
  }

  async getCEVSData(companyName, country = null, apiKey = null) {
    if (!companyName) throw new Error('Company name is required for CEVS lookup');
    
    const params = {};
    if (country) params.country = country;

    const headers = apiKey ? { 'X-API-Key': apiKey } : {};
    return this.get(`/global/cevs/${encodeURIComponent(companyName)}`, { params, headers });
  }

  async getEmissionsData(state = null, year = null, page = 1, limit = 50) {
    const params = { state, year, page, limit };
    Object.keys(params).forEach(key => params[key] == null && delete params[key]);
    return this.get('/global/emissions', { params });
  }

  async getCountries(country = null, limit = 50) {
    const params = { country, limit };
    Object.keys(params).forEach(key => params[key] == null && delete params[key]);
    return this.get('/global/iso', { params });
  }

  async submitAPIKeyRequest(formData) {
    return this.post('/api/v1/request-api-key', formData);
  }

  async testAPIKey(apiKey) {
    return this.get('/api/v1/test', {
      headers: { 'X-API-Key': apiKey },
    });
  }

  async requestDemoKey(clientName = "Demo User") {
    const data = await this.post('/admin/request-demo-key', { client_name: clientName });
    if (data.status === 'success') {
        const apiKey = data.data.api_key;
        logger.info('Demo API Key obtained and stored.');
        localStorage.setItem('envoyou_demo_api_key', apiKey);
        return apiKey;
    } else {
        throw new Error(data.message || 'Failed to get demo API key');
    }
  }

  getStoredApiKey() {
    return localStorage.getItem('envoyou_demo_api_key');
  }

  clearStoredApiKey() {
    localStorage.removeItem('envoyou_demo_api_key');
    logger.info('Stored Demo API Key cleared.');
  }
}

const apiService = new APIService();
export default apiService;
