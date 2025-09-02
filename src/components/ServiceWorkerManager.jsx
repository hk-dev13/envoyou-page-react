import React, { useState, useEffect } from 'react';
import { Workbox } from 'workbox-window';

const ServiceWorkerManager = () => {
    const [updateAvailable, setUpdateAvailable] = useState(false);
    const [registration, setRegistration] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [isPWAInstalled, setIsPWAInstalled] = useState(false);

    useEffect(() => {
        // Check if running as installed PWA
        const checkPWAStatus = () => {
            const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                               window.navigator.standalone || 
                               document.referrer.includes('android-app://');
            setIsPWAInstalled(isStandalone);
        };

        checkPWAStatus();

        // Skip service worker registration in development mode
        if (import.meta.env.DEV) {
            console.log('ServiceWorker: Skipping registration in development mode');
            // For development testing, you can manually trigger the update banner
            // Uncomment the line below to test the update banner in development
            // setTimeout(() => setUpdateAvailable(true), 2000);
            return;
        }

        if ('serviceWorker' in navigator) {
            const wb = new Workbox('/sw.js');

            wb.addEventListener('installed', (event) => {
                if (event.isUpdate && isPWAInstalled) {
                    setUpdateAvailable(true);
                    console.log('PWA update available');
                }
            });

            wb.addEventListener('waiting', (event) => {
                if (isPWAInstalled) {
                    setUpdateAvailable(true);
                    console.log('PWA update waiting');
                }
            });

            wb.addEventListener('activated', (event) => {
                if (event.isUpdate) {
                    if (isPWAInstalled) {
                        showToastMessage('App updated successfully!');
                    } else {
                        // For web users, just show a subtle notification
                        showToastMessage('Page updated with latest improvements');
                    }
                }
            });

            wb.addEventListener('message', (event) => {
                if (event.data && event.data.type === 'CACHE_UPDATED') {
                    showToastMessage('Content updated in background');
                }
            });

            wb.register().then((reg) => {
                setRegistration(reg);
                console.log('Service Worker registered:', reg);
            }).catch((error) => {
                console.error('Service Worker registration failed:', error);
            });
        }
    }, []);

    const showToastMessage = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    const handleUpdate = () => {
        console.log('Update button clicked', { registration, waiting: registration?.waiting });
        if (registration && registration.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
            setUpdateAvailable(false);
            window.location.reload();
        } else {
            // Fallback: force reload if no service worker registration
            console.log('No registration waiting, forcing reload');
            setUpdateAvailable(false);
            window.location.reload();
        }
    };

    const handleDismiss = () => {
        console.log('Dismiss button clicked');
        setUpdateAvailable(false);
    };

    if (!showToast && (!updateAvailable || !isPWAInstalled)) return null;

    return (
        <>
            {/* Update Available Banner - Only show for installed PWA */}
            {updateAvailable && isPWAInstalled && (
                <div className="fixed top-16 left-0 right-0 z-50 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-3 shadow-lg">
                    <div className="container mx-auto flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">Update Available</span>
                            <span className="text-emerald-100 text-sm">A new version of Envoyou is ready!</span>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={handleUpdate}
                                className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors cursor-pointer z-10 relative"
                                type="button"
                            >
                                Update Now
                            </button>
                            <button
                                onClick={handleDismiss}
                                className="text-emerald-100 hover:text-white px-3 py-2 rounded-lg transition-colors cursor-pointer z-10 relative"
                                type="button"
                            >
                                Later
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast Notifications */}
            {showToast && (
                <div className="fixed top-20 right-4 z-50 bg-slate-800 border border-emerald-500 rounded-lg p-4 shadow-lg max-w-sm">
                    <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-emerald-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div className="flex-1">
                            <p className="text-white text-sm font-medium">{toastMessage}</p>
                        </div>
                        <button
                            onClick={() => setShowToast(false)}
                            className="text-slate-400 hover:text-slate-300"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServiceWorkerManager;
