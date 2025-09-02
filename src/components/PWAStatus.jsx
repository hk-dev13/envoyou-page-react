import React, { useState, useEffect } from 'react';

const PWAStatus = () => {
    const [pwaCapabilities, setPwaCapabilities] = useState({
        installable: false,
        installed: false,
        offlineReady: false,
        updateAvailable: false
    });
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        // Check if app is installable
        const checkInstallable = () => {
            if (window.matchMedia('(display-mode: standalone)').matches) {
                setPwaCapabilities(prev => ({ ...prev, installed: true }));
            }

            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(registrations => {
                    setPwaCapabilities(prev => ({
                        ...prev,
                        offlineReady: registrations.length > 0
                    }));
                });
            }

            // Check for beforeinstallprompt support
            window.addEventListener('beforeinstallprompt', () => {
                setPwaCapabilities(prev => ({ ...prev, installable: true }));
            });
        };

        checkInstallable();

        // Listen for service worker updates
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.addEventListener('message', (event) => {
                if (event.data && event.data.type === 'UPDATE_AVAILABLE') {
                    setPwaCapabilities(prev => ({ ...prev, updateAvailable: true }));
                }
            });
        }
    }, []);

    const capabilities = [
        {
            name: 'Installable',
            status: pwaCapabilities.installable,
            icon: '📱',
            description: 'Can be installed as a native app'
        },
        {
            name: 'Offline Ready',
            status: pwaCapabilities.offlineReady,
            icon: '📶',
            description: 'Works without internet connection'
        },
        {
            name: 'App Installed',
            status: pwaCapabilities.installed,
            icon: '✅',
            description: 'Running as installed PWA'
        },
        {
            name: 'Auto Updates',
            status: true,
            icon: '🔄',
            description: 'Automatically updates in background'
        }
    ];

    return (
        <div className="fixed bottom-4 right-4 z-40">
            <button
                onClick={() => setShowDetails(!showDetails)}
                className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg border border-slate-700 transition-all duration-200 hover:scale-105"
                title="PWA Status"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
            </button>

            {showDetails && (
                <div className="absolute bottom-16 right-0 bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-4 min-w-64">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-white font-semibold">PWA Status</h3>
                        <button
                            onClick={() => setShowDetails(false)}
                            className="text-slate-400 hover:text-slate-300"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-2">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="flex items-center justify-between py-2">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm">{capability.icon}</span>
                                    <span className="text-slate-300 text-sm">{capability.name}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span
                                        className={`w-2 h-2 rounded-full ${
                                            capability.status ? 'bg-green-400' : 'bg-red-400'
                                        }`}
                                    ></span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {pwaCapabilities.updateAvailable && (
                        <div className="mt-3 p-2 bg-yellow-600/20 border border-yellow-600/30 rounded">
                            <p className="text-yellow-300 text-xs">Update available! Refresh to get the latest version.</p>
                        </div>
                    )}

                    <div className="mt-3 pt-3 border-t border-slate-700">
                        <p className="text-slate-400 text-xs">
                            Experience native app features with offline support and automatic updates.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PWAStatus;
