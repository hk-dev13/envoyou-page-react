/**
 * SEO Service
 * Manages meta tags, structured data, and SEO optimization
 */

import { APP_CONFIG } from '../config';

class SEOService {
  constructor() {
    this.defaultMeta = {
      title: 'Envoyou - Professional CV Management & API Service',
      description: 'Professional CV data management API service with secure authentication, comprehensive documentation, and enterprise-grade reliability.',
      keywords: 'CV API, Resume API, Professional data, JSON API, Developer tools, Authentication',
      ogType: 'website',
      ogImage: '/screenshots/screenshot-wide.png',
      twitterCard: 'summary_large_image',
      canonicalUrl: APP_CONFIG.siteURL,
    };
  }

  /**
   * Set meta tags for a page
   */
  setMeta(meta = {}) {
    const finalMeta = { ...this.defaultMeta, ...meta };
    
    // Set title
    document.title = finalMeta.title;
    
    // Set meta description
    this.setMetaTag('description', finalMeta.description);
    
    // Set meta keywords
    this.setMetaTag('keywords', finalMeta.keywords);
    
    // Open Graph tags
    this.setMetaTag('og:title', finalMeta.title, 'property');
    this.setMetaTag('og:description', finalMeta.description, 'property');
    this.setMetaTag('og:type', finalMeta.ogType, 'property');
    this.setMetaTag('og:url', finalMeta.canonicalUrl, 'property');
    this.setMetaTag('og:image', this.getFullImageUrl(finalMeta.ogImage), 'property');
    this.setMetaTag('og:site_name', 'Envoyou', 'property');
    
    // Twitter Card tags
    this.setMetaTag('twitter:card', finalMeta.twitterCard);
    this.setMetaTag('twitter:title', finalMeta.title);
    this.setMetaTag('twitter:description', finalMeta.description);
    this.setMetaTag('twitter:image', this.getFullImageUrl(finalMeta.ogImage));
    
    // Canonical URL
    this.setCanonicalUrl(finalMeta.canonicalUrl);
    
    // Additional meta tags
    if (finalMeta.author) {
      this.setMetaTag('author', finalMeta.author);
    }
    
    if (finalMeta.robots) {
      this.setMetaTag('robots', finalMeta.robots);
    }
    
    return finalMeta;
  }

  /**
   * Set individual meta tag
   */
  setMetaTag(name, content, attribute = 'name') {
    if (!content) return;
    
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    
    element.setAttribute('content', content);
  }

  /**
   * Set canonical URL
   */
  setCanonicalUrl(url) {
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    
    canonicalElement.setAttribute('href', url);
  }

  /**
   * Add structured data (JSON-LD)
   */
  addStructuredData(data) {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Get full image URL
   */
  getFullImageUrl(imagePath) {
    if (!imagePath) return '';
    if (imagePath.startsWith('http')) return imagePath;
    return `${APP_CONFIG.siteURL}${imagePath}`;
  }

  /**
   * Generate breadcrumb structured data
   */
  generateBreadcrumbData(breadcrumbs) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${APP_CONFIG.siteURL}${crumb.path}`,
      })),
    };
  }

  /**
   * Generate organization structured data
   */
  generateOrganizationData() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Envoyou',
      url: APP_CONFIG.siteURL,
      logo: `${APP_CONFIG.siteURL}/favicon_io_envoyou/android-chrome-512x512.png`,
      description: this.defaultMeta.description,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: `${APP_CONFIG.siteURL}/contact`,
      },
      sameAs: [
        // Add social media URLs when available
      ],
    };
  }

  /**
   * Generate website structured data
   */
  generateWebsiteData() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Envoyou',
      url: APP_CONFIG.siteURL,
      description: this.defaultMeta.description,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${APP_CONFIG.siteURL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    };
  }

  /**
   * Generate software application structured data
   */
  generateSoftwareApplicationData() {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Envoyou API',
      description: 'Professional CV data management API service',
      url: APP_CONFIG.siteURL,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        description: 'Free tier available with premium plans',
      },
      featureList: [
        'CV Data API',
        'Authentication System',
        'Secure Data Management',
        'REST API',
        'JSON Response Format',
      ],
    };
  }

  /**
   * Set page-specific SEO
   */
  setPageSEO(pageType, data = {}) {
    const pageConfigs = {
      home: {
        title: 'Envoyou - Professional CV Management & API Service',
        description: 'Professional CV data management API service with secure authentication, comprehensive documentation, and enterprise-grade reliability.',
        keywords: 'CV API, Resume API, Professional data, JSON API, Developer tools, Authentication',
        canonicalUrl: APP_CONFIG.siteURL,
        structuredData: [
          this.generateOrganizationData(),
          this.generateWebsiteData(),
          this.generateSoftwareApplicationData(),
        ],
      },
      
      about: {
        title: 'About Envoyou - Professional CV API Service',
        description: 'Learn about Envoyou\'s mission to provide professional CV data management through secure, reliable API services for developers and businesses.',
        canonicalUrl: `${APP_CONFIG.siteURL}/about`,
      },
      
      pricing: {
        title: 'Envoyou Pricing - CV API Plans & Features',
        description: 'Choose the perfect plan for your CV API needs. Free tier available with premium plans for advanced features and higher usage limits.',
        keywords: 'CV API pricing, Resume API cost, Developer API plans, API subscription',
        canonicalUrl: `${APP_CONFIG.siteURL}/pricing`,
      },
      
      documentation: {
        title: 'Envoyou API Documentation - Developer Guide',
        description: 'Complete API documentation for Envoyou CV management service. Learn how to integrate, authenticate, and use our professional CV API.',
        keywords: 'API documentation, CV API guide, REST API docs, Developer documentation',
        canonicalUrl: `${APP_CONFIG.siteURL}/documentation`,
      },
      
      contact: {
        title: 'Contact Envoyou - Get Support & Information',
        description: 'Get in touch with Envoyou team for support, questions, or business inquiries about our CV API service.',
        canonicalUrl: `${APP_CONFIG.siteURL}/contact`,
      },
      
      login: {
        title: 'Login to Envoyou - Access Your CV API Dashboard',
        description: 'Sign in to your Envoyou account to manage your CV API usage, view analytics, and access your dashboard.',
        robots: 'noindex, nofollow',
        canonicalUrl: `${APP_CONFIG.siteURL}/login`,
      },
      
      register: {
        title: 'Register for Envoyou - Create Your CV API Account',
        description: 'Create your free Envoyou account to start using our professional CV API service with secure authentication and comprehensive features.',
        canonicalUrl: `${APP_CONFIG.siteURL}/register`,
      },
      
      dashboard: {
        title: 'Envoyou Dashboard - Manage Your CV API',
        description: 'Access your Envoyou dashboard to monitor API usage, manage settings, and view analytics for your CV API integration.',
        robots: 'noindex, nofollow',
        canonicalUrl: `${APP_CONFIG.siteURL}/dashboard`,
      },
    };

    const config = pageConfigs[pageType] || {};
    const finalConfig = { ...config, ...data };
    
    // Set meta tags
    this.setMeta(finalConfig);
    
    // Add structured data if provided
    if (finalConfig.structuredData) {
      finalConfig.structuredData.forEach(data => {
        this.addStructuredData(data);
      });
    }
    
    // Add breadcrumb if provided
    if (finalConfig.breadcrumbs) {
      this.addStructuredData(this.generateBreadcrumbData(finalConfig.breadcrumbs));
    }
    
    return finalConfig;
  }

  /**
   * Update page title dynamically
   */
  updateTitle(title) {
    document.title = title;
    this.setMetaTag('og:title', title, 'property');
    this.setMetaTag('twitter:title', title);
  }

  /**
   * Preload critical resources for SEO
   */
  preloadCriticalResources() {
    // Preload critical images
    const criticalImages = [
      '/screenshots/screenshot-wide.png',
      '/favicon_io_envoyou/android-chrome-512x512.png',
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload critical fonts if any
    const criticalFonts = [
      // Add critical font URLs here when needed
    ];

    criticalFonts.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = href;
      document.head.appendChild(link);
    });
  }

  /**
   * Get current page SEO data
   */
  getCurrentSEOData() {
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content || '',
      keywords: document.querySelector('meta[name="keywords"]')?.content || '',
      canonical: document.querySelector('link[rel="canonical"]')?.href || '',
      ogImage: document.querySelector('meta[property="og:image"]')?.content || '',
    };
  }
}

// Create singleton instance
const seoService = new SEOService();

export default seoService;
