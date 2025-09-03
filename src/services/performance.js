/**
 * Performance Monitoring Service
 * Tracks and monitors application performance metrics
 */

import logger from './logger';
import { APP_CONFIG, DEV_CONFIG } from '../config';

class PerformanceMonitor {
  constructor() {
    this.isEnabled = DEV_CONFIG.enablePerformanceMonitoring;
    this.metrics = new Map();
    this.thresholds = {
      pageLoad: 3000, // 3 seconds
      apiResponse: 2000, // 2 seconds
      componentRender: 100, // 100ms
      bundleSize: 500000, // 500KB
    };
    
    this.initializeMonitoring();
  }

  initializeMonitoring() {
    if (!this.isEnabled) return;

    // Monitor page load performance
    this.monitorPageLoad();
    
    // Monitor Core Web Vitals
    this.monitorWebVitals();
    
    // Monitor memory usage
    this.monitorMemoryUsage();
    
    // Monitor bundle size
    this.monitorBundleSize();
  }

  /**
   * Monitor page load performance
   */
  monitorPageLoad() {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstPaint: this.getFirstPaint(),
          firstContentfulPaint: this.getFirstContentfulPaint(),
          totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        };

        this.recordMetric('pageLoad', metrics);
        
        // Check if load time exceeds threshold
        if (metrics.totalLoadTime > this.thresholds.pageLoad) {
          logger.warn('Page load time exceeds threshold', {
            threshold: this.thresholds.pageLoad,
            actual: metrics.totalLoadTime,
            metrics,
          });
        }
      }
    });
  }

  /**
   * Monitor Core Web Vitals
   */
  monitorWebVitals() {
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint (LCP)
    this.observeLCP();
    
    // First Input Delay (FID)
    this.observeFID();
    
    // Cumulative Layout Shift (CLS)
    this.observeCLS();
  }

  observeLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        
        this.recordMetric('lcp', {
          value: lcp.startTime,
          element: lcp.element?.tagName || 'unknown',
        });

        // LCP should be under 2.5 seconds
        if (lcp.startTime > 2500) {
          logger.warn('LCP exceeds threshold', {
            threshold: 2500,
            actual: lcp.startTime,
            element: lcp.element,
          });
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  observeFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.recordMetric('fid', {
            value: entry.processingStart - entry.startTime,
            eventType: entry.name,
          });

          // FID should be under 100ms
          if (entry.processingStart - entry.startTime > 100) {
            logger.warn('FID exceeds threshold', {
              threshold: 100,
              actual: entry.processingStart - entry.startTime,
              eventType: entry.name,
            });
          }
        });
      });

      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  observeCLS() {
    if ('PerformanceObserver' in window) {
      let clsScore = 0;
      
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsScore += entry.value;
          }
        });

        this.recordMetric('cls', { value: clsScore });

        // CLS should be under 0.1
        if (clsScore > 0.1) {
          logger.warn('CLS exceeds threshold', {
            threshold: 0.1,
            actual: clsScore,
          });
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  /**
   * Monitor memory usage
   */
  monitorMemoryUsage() {
    if (typeof window === 'undefined' || !performance.memory) return;

    setInterval(() => {
      const memory = {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit,
        percentage: (performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit) * 100,
      };

      this.recordMetric('memory', memory);

      // Warn if memory usage is high
      if (memory.percentage > 80) {
        logger.warn('High memory usage detected', {
          percentage: memory.percentage,
          used: memory.used,
          total: memory.total,
        });
      }
    }, 30000); // Check every 30 seconds
  }

  /**
   * Monitor bundle size
   */
  monitorBundleSize() {
    if (typeof window === 'undefined') return;

    // This would typically be done during build time
    // For runtime, we can approximate based on resource timing
    const resources = performance.getEntriesByType('resource');
    let totalSize = 0;

    resources.forEach((resource) => {
      if (resource.name.includes('.js') || resource.name.includes('.css')) {
        totalSize += resource.transferSize || 0;
      }
    });

    this.recordMetric('bundleSize', { totalSize });

    if (totalSize > this.thresholds.bundleSize) {
      logger.warn('Bundle size exceeds threshold', {
        threshold: this.thresholds.bundleSize,
        actual: totalSize,
      });
    }
  }

  /**
   * Get First Paint timing
   */
  getFirstPaint() {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    return firstPaint ? firstPaint.startTime : null;
  }

  /**
   * Get First Contentful Paint timing
   */
  getFirstContentfulPaint() {
    const paintEntries = performance.getEntriesByType('paint');
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return fcp ? fcp.startTime : null;
  }

  /**
   * Record a performance metric
   */
  recordMetric(name, data) {
    const timestamp = Date.now();
    const metric = {
      name,
      data,
      timestamp,
    };

    // Store in memory
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    
    const metrics = this.metrics.get(name);
    metrics.push(metric);
    
    // Keep only last 100 entries per metric
    if (metrics.length > 100) {
      metrics.shift();
    }

    // Log to logger service
    logger.performance(name, data, {
      timestamp,
      isProduction: !APP_CONFIG.isDevelopment,
    });

    return metric;
  }

  /**
   * Measure function execution time
   */
  measureFunction(name, fn) {
    const start = performance.now();
    
    try {
      const result = fn();
      
      // Handle async functions
      if (result && typeof result.then === 'function') {
        return result.finally(() => {
          const end = performance.now();
          this.recordMetric(`function_${name}`, {
            duration: end - start,
            type: 'async',
          });
        });
      }
      
      const end = performance.now();
      this.recordMetric(`function_${name}`, {
        duration: end - start,
        type: 'sync',
      });
      
      return result;
    } catch (error) {
      const end = performance.now();
      this.recordMetric(`function_${name}`, {
        duration: end - start,
        type: 'error',
        error: error.message,
      });
      throw error;
    }
  }

  /**
   * Measure React component render time
   */
  measureComponentRender(componentName) {
    const start = performance.now();
    
    return () => {
      const end = performance.now();
      const duration = end - start;
      
      this.recordMetric('componentRender', {
        component: componentName,
        duration,
      });

      if (duration > this.thresholds.componentRender) {
        logger.warn('Component render time exceeds threshold', {
          component: componentName,
          threshold: this.thresholds.componentRender,
          actual: duration,
        });
      }
    };
  }

  /**
   * Get performance report
   */
  getPerformanceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: {},
      summary: {},
    };

    // Aggregate metrics
    for (const [name, entries] of this.metrics.entries()) {
      const recent = entries.slice(-10); // Last 10 entries
      
      report.metrics[name] = {
        count: entries.length,
        recent: recent.map(entry => ({
          data: entry.data,
          timestamp: entry.timestamp,
        })),
      };

      // Calculate averages for numeric values
      if (recent.length > 0) {
        const numericValues = recent.map(entry => {
          if (typeof entry.data === 'number') return entry.data;
          if (entry.data.value) return entry.data.value;
          if (entry.data.duration) return entry.data.duration;
          return 0;
        }).filter(val => val > 0);

        if (numericValues.length > 0) {
          report.summary[name] = {
            average: numericValues.reduce((a, b) => a + b, 0) / numericValues.length,
            min: Math.min(...numericValues),
            max: Math.max(...numericValues),
            count: numericValues.length,
          };
        }
      }
    }

    return report;
  }

  /**
   * Export performance data
   */
  exportPerformanceData() {
    const report = this.getPerformanceReport();
    const dataStr = JSON.stringify(report, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `envoyou-performance-${Date.now()}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    
    logger.info('Performance data exported');
  }

  /**
   * Clear performance metrics
   */
  clearMetrics() {
    this.metrics.clear();
    logger.info('Performance metrics cleared');
  }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor();

// Export convenience functions
export const measurePerformance = (name, fn) => {
  return performanceMonitor.measureFunction(name, fn);
};

export const measureComponentRender = (componentName) => {
  return performanceMonitor.measureComponentRender(componentName);
};

export const recordMetric = (name, data) => {
  return performanceMonitor.recordMetric(name, data);
};

export function initializePerformanceMonitoring() {
  // create new instance, or just use existing singleton
  console.log("Performance monitoring initialized via wrapper");
  return performanceMonitor;
};

export default performanceMonitor;
