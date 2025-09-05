// Pastikan ini ada di src/components/ServiceWorkerManager.jsx

import React, { useState, useEffect } from 'react';
import { Workbox } from 'workbox-window';

const ServiceWorkerManager = () => {
    const [updateAvailable, setUpdateAvailable] = useState(false);
    const [registration, setRegistration] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [isPWAInstalled, setIsPWAInstalled] = useState(false);

    const showToastMessage = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    useEffect(() => {
        const checkPWAStatus = () => {
            const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                               window.navigator.standalone || 
                               document.referrer.includes('android-app://');
            console.log("PWA standalone detected:", isStandalone);
            setIsPWAInstalled(isStandalone);
        };

        checkPWAStatus();

        if (import.meta.env.DEV) {
            console.log('ServiceWorker: Skipping registration in development mode');
            return;
        }

        if ('serviceWorker' in navigator) {
            const wb = new Workbox('/sw.js');

            wb.addEventListener('waiting', () => {
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
                        showToastMessage('Page updated with latest improvements');
                    }
                }
            });

            wb.addEventListener('message', (event) => {
                if (event.data && event.data.type === 'CACHE_UPDATED') {
                    showToastMessage('Content updated in background');
                }
            });

            wb.register()
              .then((reg) => {
                  setRegistration(reg);
                  console.log('Service Worker registered:', reg);
              })
              .catch((error) => {
                  console.warn('Service Worker registration failed (possibly incognito mode):', error);
                  // Don't throw error, just log it - app should still work
              });
        } else {
            console.warn("Service Worker not supported in this browser.");
        }
    }, [isPWAInstalled]);

    const handleUpdate = () => {
        if (registration?.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
            setUpdateAvailable(false);
            window.location.reload();
        } else {
            console.log('No registration waiting, forcing reload');
            setUpdateAvailable(false);
            window.location.reload();
        }
    };

    const handleDismiss = () => setUpdateAvailable(false);

    if (!showToast && (!updateAvailable || !isPWAInstalled)) return null;

    return (
        <>
            {updateAvailable && isPWAInstalled && (
                <div className="fixed top-16 left-0 right-0 z-50 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-3 shadow-lg">
                    <div className="container mx-auto flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <span className="font-medium">Update Available</span>
                            <span className="text-emerald-100 text-sm">A new version of Envoyou is ready!</span>
                        </div>
                        <div className="flex space-x-2">
                            <button onClick={handleUpdate} className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50">
                                Update Now
                            </button>
                            <button onClick={handleDismiss} className="text-emerald-100 hover:text-white px-3 py-2 rounded-lg">
                                Later
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showToast && (
                <div className="fixed top-20 right-4 z-50 bg-slate-800 border border-emerald-500 rounded-lg p-4 shadow-lg max-w-sm">
                    <p className="text-white text-sm font-medium">{toastMessage}</p>
                </div>
            )}
        </>
    );
};

export default ServiceWorkerManager;
