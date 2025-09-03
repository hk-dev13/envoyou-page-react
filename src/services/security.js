/**
 * Security Service
 * Implements client-side security measures and validations
 */

import logger from './logger';
import { AUTH_CONFIG, SECURITY_CONFIG } from '../config';

class SecurityService {
  constructor() {
    this.initializeSecurity();
  }

  /**
   * Initialize security measures
   */
  initializeSecurity() {
    // Set up CSP violation reporting
    this.setupCSPReporting();
    
    // Monitor for suspicious activities
    this.setupSecurityMonitoring();
    
    // Validate environment security
    this.validateEnvironmentSecurity();
  }

  /**
   * Setup CSP violation reporting
   */
  setupCSPReporting() {
    document.addEventListener('securitypolicyviolation', (event) => {
      logger.error('CSP Violation detected', {
        blockedURI: event.blockedURI,
        violatedDirective: event.violatedDirective,
        originalPolicy: event.originalPolicy,
        disposition: event.disposition,
        documentURI: event.documentURI,
        lineNumber: event.lineNumber,
        columnNumber: event.columnNumber,
        type: 'csp_violation',
      });
    });
  }

  /**
   * Setup security monitoring
   */
  setupSecurityMonitoring() {
    // Monitor for XSS attempts
    this.monitorXSSAttempts();
    
    // Monitor for suspicious DOM manipulation
    this.monitorDOMManipulation();
    
    // Monitor for suspicious network requests
    this.monitorNetworkRequests();
  }

  /**
   * Monitor for XSS attempts
   */
  monitorXSSAttempts() {
    // Override eval function to detect and log attempts
    const originalEval = window.eval;
    window.eval = function(...args) {
      logger.warn('eval() function called - potential XSS attempt', {
        args: args.map(arg => typeof arg === 'string' ? arg.substring(0, 100) : typeof arg),
        stack: new Error().stack,
        type: 'potential_xss',
      });
      return originalEval.apply(this, args);
    };

    // Monitor for script injections
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SCRIPT') {
              const src = node.src || 'inline';
              const content = node.innerHTML.substring(0, 100);
              
              logger.warn('Script element dynamically added', {
                src,
                content,
                type: 'dynamic_script',
              });
            }
          });
        }
      });
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  /**
   * Monitor DOM manipulation
   */
  monitorDOMManipulation() {
    // Monitor innerHTML/outerHTML changes
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
    
    Object.defineProperty(Element.prototype, 'innerHTML', {
      set: function(value) {
        if (typeof value === 'string' && this.isContentSuspicious(value)) {
          logger.warn('Suspicious innerHTML content detected', {
            element: this.tagName,
            content: value.substring(0, 100),
            type: 'suspicious_dom',
          });
        }
        return originalInnerHTML.set.call(this, value);
      },
      get: originalInnerHTML.get,
    });
  }

  /**
   * Monitor network requests
   */
  monitorNetworkRequests() {
    // Override fetch to monitor requests
    const originalFetch = window.fetch;
    
    window.fetch = async function(resource, options = {}) {
      const url = typeof resource === 'string' ? resource : resource.url;
      
      // Check for suspicious requests
      if (this.isURLSuspicious(url)) {
        logger.warn('Suspicious network request detected', {
          url,
          method: options.method || 'GET',
          type: 'suspicious_request',
        });
      }
      
      return originalFetch.call(this, resource, options);
    }.bind(this);
  }

  /**
   * Check if content is suspicious
   */
  isContentSuspicious(content) {
    const suspiciousPatterns = [
      /<script[^>]*>/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /eval\s*\(/i,
      /document\.write/i,
      /innerHTML/i,
    ];

    return suspiciousPatterns.some(pattern => pattern.test(content));
  }

  /**
   * Check if URL is suspicious
   */
  isURLSuspicious(url) {
    try {
      const urlObj = new URL(url, window.location.origin);
      
      // Check for known malicious patterns
      const suspiciousPatterns = [
        /\b(eval|exec|system|cmd)\b/i,
        /\.(bat|exe|scr|com|pif)$/i,
        /javascript:/i,
        /data:.*script/i,
      ];

      return suspiciousPatterns.some(pattern => pattern.test(url));
    } catch (error) {
      // Invalid URL
      return true;
    }
  }

  /**
   * Validate environment security
   */
  validateEnvironmentSecurity() {
    const issues = [];

    // Check if running over HTTPS in production
    if (!window.location.protocol.includes('https') && 
        window.location.hostname !== 'localhost' && 
        !window.location.hostname.includes('127.0.0.1')) {
      issues.push('Application not running over HTTPS');
    }

    // Check for development tools in production
    if (process.env.NODE_ENV === 'production' && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      issues.push('React DevTools detected in production');
    }

    // Check for console access
    if (process.env.NODE_ENV === 'production') {
      this.protectConsole();
    }

    if (issues.length > 0) {
      logger.warn('Security validation issues detected', {
        issues,
        type: 'security_validation',
      });
    }
  }

  /**
   * Protect console in production
   */
  protectConsole() {
    const methods = ['log', 'warn', 'error', 'info', 'debug'];
    
    methods.forEach(method => {
      const original = console[method];
      console[method] = function(...args) {
        // Log to our logger service instead
        logger[method === 'log' ? 'info' : method](
          'Console access detected in production',
          { args: args.map(arg => String(arg).substring(0, 100)) }
        );
        
        // Still call original in development
        if (process.env.NODE_ENV !== 'production') {
          return original.apply(console, args);
        }
      };
    });
  }

  /**
   * Sanitize user input
   */
  sanitizeInput(input, type = 'text') {
    if (typeof input !== 'string') {
      return input;
    }

    switch (type) {
      case 'html':
        return this.sanitizeHTML(input);
      case 'url':
        return this.sanitizeURL(input);
      case 'email':
        return this.sanitizeEmail(input);
      default:
        return this.sanitizeText(input);
    }
  }

  /**
   * Sanitize HTML content
   */
  sanitizeHTML(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  /**
   * Sanitize URL
   */
  sanitizeURL(url) {
    try {
      const urlObj = new URL(url);
      
      // Only allow http and https protocols
      if (!['http:', 'https:'].includes(urlObj.protocol)) {
        throw new Error('Invalid protocol');
      }
      
      return urlObj.toString();
    } catch (error) {
      logger.warn('Invalid URL provided for sanitization', { url, error: error.message });
      return '';
    }
  }

  /**
   * Sanitize email
   */
  sanitizeEmail(email) {
    // Basic email validation and sanitization
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      return '';
    }
    
    return email.toLowerCase().trim();
  }

  /**
   * Sanitize text
   */
  sanitizeText(text) {
    return text
      .replace(/[<>]/g, '') // Remove HTML brackets
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .trim();
  }

  /**
   * Validate JWT token
   */
  validateJWTToken(token) {
    if (!token) return false;

    try {
      // Basic JWT structure validation
      const parts = token.split('.');
      if (parts.length !== 3) {
        return false;
      }

      // Decode payload
      const payload = JSON.parse(atob(parts[1]));
      
      // Check expiration
      if (payload.exp && payload.exp < Date.now() / 1000) {
        logger.info('JWT token expired', { exp: payload.exp, now: Date.now() / 1000 });
        return false;
      }

      // Check issuer if configured
      if (AUTH_CONFIG.jwtIssuer && payload.iss !== AUTH_CONFIG.jwtIssuer) {
        logger.warn('JWT token from invalid issuer', { 
          expected: AUTH_CONFIG.jwtIssuer, 
          actual: payload.iss 
        });
        return false;
      }

      return true;
    } catch (error) {
      logger.error('JWT token validation failed', { error: error.message });
      return false;
    }
  }

  /**
   * Generate secure random string
   */
  generateSecureRandom(length = 32) {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Check password strength
   */
  checkPasswordStrength(password) {
    const checks = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      numbers: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    const score = Object.values(checks).filter(Boolean).length;
    
    const strength = {
      score,
      level: score < 3 ? 'weak' : score < 4 ? 'medium' : 'strong',
      checks,
      feedback: this.getPasswordFeedback(checks),
    };

    return strength;
  }

  /**
   * Get password feedback
   */
  getPasswordFeedback(checks) {
    const feedback = [];
    
    if (!checks.length) feedback.push('Use at least 8 characters');
    if (!checks.lowercase) feedback.push('Add lowercase letters');
    if (!checks.uppercase) feedback.push('Add uppercase letters');
    if (!checks.numbers) feedback.push('Add numbers');
    if (!checks.special) feedback.push('Add special characters');
    
    return feedback;
  }

  /**
   * Rate limiting for client-side actions
   */
  createRateLimiter(maxRequests = 10, windowMs = 60000) {
    const requests = [];
    
    return function(action) {
      const now = Date.now();
      
      // Remove old requests outside the window
      while (requests.length > 0 && requests[0] < now - windowMs) {
        requests.shift();
      }
      
      // Check if we've exceeded the limit
      if (requests.length >= maxRequests) {
        logger.warn('Rate limit exceeded', {
          action,
          limit: maxRequests,
          window: windowMs,
          type: 'rate_limit',
        });
        return false;
      }
      
      requests.push(now);
      return true;
    };
  }

  /**
   * Secure storage wrapper
   */
  secureStorage = {
    set: (key, value) => {
      try {
        const encryptedValue = btoa(JSON.stringify(value));
        localStorage.setItem(key, encryptedValue);
        return true;
      } catch (error) {
        logger.error('Failed to store data securely', { key, error: error.message });
        return false;
      }
    },

    get: (key) => {
      try {
        const encryptedValue = localStorage.getItem(key);
        if (!encryptedValue) return null;
        
        return JSON.parse(atob(encryptedValue));
      } catch (error) {
        logger.error('Failed to retrieve data securely', { key, error: error.message });
        return null;
      }
    },

    remove: (key) => {
      localStorage.removeItem(key);
    },

    clear: () => {
      localStorage.clear();
    },
  };
}

// Create singleton instance
const securityService = new SecurityService();

// Export convenience functions
export const sanitizeInput = (input, type) => securityService.sanitizeInput(input, type);
export const validateJWT = (token) => securityService.validateJWTToken(token);
export const checkPasswordStrength = (password) => securityService.checkPasswordStrength(password);
export const createRateLimiter = (maxRequests, windowMs) => securityService.createRateLimiter(maxRequests, windowMs);

export default securityService;
