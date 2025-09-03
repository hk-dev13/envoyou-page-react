import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false
    });

    useEffect(() => {
        const consent = localStorage.getItem('envoyou-cookie-consent');
        if (!consent) {
            // Delay showing banner for better UX
            const timer = setTimeout(() => setShowBanner(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        const allPreferences = { necessary: true, analytics: true, marketing: true };
        setPreferences(allPreferences);
        localStorage.setItem('envoyou-cookie-consent', JSON.stringify(allPreferences));
        setShowBanner(false);
        // Initialize analytics/marketing cookies here
        initializeCookies(allPreferences);
    };

    const acceptNecessary = () => {
        const necessaryOnly = { necessary: true, analytics: false, marketing: false };
        setPreferences(necessaryOnly);
        localStorage.setItem('envoyou-cookie-consent', JSON.stringify(necessaryOnly));
        setShowBanner(false);
        initializeCookies(necessaryOnly);
    };

    const savePreferences = () => {
        localStorage.setItem('envoyou-cookie-consent', JSON.stringify(preferences));
        setShowBanner(false);
        initializeCookies(preferences);
    };

    const initializeCookies = (prefs) => {
        // Set cookie based on preferences
        if (prefs.analytics) {
            // Initialize Google Analytics or other analytics
            console.log('Analytics cookies enabled');
        }
        if (prefs.marketing) {
            // Initialize marketing cookies
            console.log('Marketing cookies enabled');
        }
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-700 shadow-2xl">
            <div className="max-w-7xl mx-auto">
                {/* Main Banner */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
                        <Cookie className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                        <div className="flex-1">
                            <h3 className="text-white font-semibold mb-2">We Value Your Privacy</h3>
                            <p className="text-slate-400 text-sm">
                                We use cookies to enhance your experience and analyze site usage.
                                You can manage your preferences or accept all cookies.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                        <button
                            onClick={acceptAll}
                            className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-200 font-medium"
                        >
                            Accept All
                        </button>
                        <button
                            onClick={acceptNecessary}
                            className="px-6 py-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg transition-colors duration-200"
                        >
                            Necessary Only
                        </button>
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="px-6 py-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
                        >
                            <Settings className="w-4 h-4" />
                            Customize
                        </button>
                        <button
                            onClick={() => setShowBanner(false)}
                            className="p-2 text-slate-400 hover:text-white transition-colors duration-200 lg:hidden"
                            aria-label="Close banner"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Detailed Preferences */}
                {showDetails && (
                    <div className="mt-6 pt-6 border-t border-slate-700 animate-in slide-in-from-bottom-4 duration-300">
                        <h4 className="text-white font-semibold mb-4">Cookie Preferences</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={preferences.necessary}
                                        disabled
                                        className="w-4 h-4 text-emerald-500 bg-slate-700 border-slate-600 rounded focus:ring-emerald-500 cursor-not-allowed"
                                    />
                                    <div>
                                        <h5 className="text-white font-medium text-sm">Necessary Cookies</h5>
                                        <p className="text-slate-400 text-xs">Required for website functionality and security</p>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-xs italic">Always enabled</p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={preferences.analytics}
                                        onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                                        className="w-4 h-4 text-emerald-500 bg-slate-700 border-slate-600 rounded focus:ring-emerald-500"
                                    />
                                    <div>
                                        <h5 className="text-white font-medium text-sm">Analytics Cookies</h5>
                                        <p className="text-slate-400 text-xs">Help us understand how visitors use our site</p>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-xs">Google Analytics, usage statistics</p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={preferences.marketing}
                                        onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                                        className="w-4 h-4 text-emerald-500 bg-slate-700 border-slate-600 rounded focus:ring-emerald-500"
                                    />
                                    <div>
                                        <h5 className="text-white font-medium text-sm">Marketing Cookies</h5>
                                        <p className="text-slate-400 text-xs">Used for personalized ads and content</p>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-xs">Targeted advertising, social media</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 pt-4 border-t border-slate-700">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="/legal/privacy" className="text-emerald-400 hover:text-emerald-300 text-sm underline transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="/legal/cookies" className="text-emerald-400 hover:text-emerald-300 text-sm underline transition-colors">
                                    Cookie Policy
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={acceptNecessary}
                                    className="px-4 py-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg transition-colors duration-200 text-sm"
                                >
                                    Reject All
                                </button>
                                <button
                                    onClick={savePreferences}
                                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                                >
                                    Save Preferences
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CookieConsent;
