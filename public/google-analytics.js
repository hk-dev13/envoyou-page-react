// Google Analytics with Consent Mode v2
// This should be loaded in the <head> of your HTML

// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-HJPHVX4X02';

// Initialize Google Analytics with default consent denied
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;

// Set default consent to 'denied' for all storage types
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted'
});

// Initialize Google Analytics
gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID, {
  // Additional configuration options
  anonymize_ip: true,
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});

console.log('Google Analytics initialized with Consent Mode v2 - Default: All denied except security');
