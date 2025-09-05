import React, { useState, useEffect } from 'react';

const PushNotificationManager = () => {
    const [permission, setPermission] = useState('default');
    const [subscription, setSubscription] = useState(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        // Check notification permission
        if ('Notification' in window) {
            setPermission(Notification.permission);
        }

        // Check for existing subscription
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            navigator.serviceWorker.ready.then(registration => {
                registration.pushManager.getSubscription().then(existingSubscription => {
                    setSubscription(existingSubscription);
                });
            });
        }
    }, []);

    const requestPermission = async () => {
        if (!('Notification' in window)) {
            alert('This browser does not support notifications');
            return;
        }

        const result = await Notification.requestPermission();
        setPermission(result);

        if (result === 'granted') {
            await subscribeToNotifications();
        }
    };

    const subscribeToNotifications = async () => {
        try {
            const registration = await navigator.serviceWorker.ready;
            const vapidPublicKey = 'BKxQzBJhNpJf6Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8Qh8'; // Replace with your VAPID public key

            const subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(vapidPublicKey)
            });

            setSubscription(subscription);

            // Send subscription to your server
            await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(subscription)
            });

            setShowPrompt(false);
        } catch (error) {
            console.error('Failed to subscribe to push notifications:', error);
        }
    };

    // const unsubscribeFromNotifications = async () => {
    //     if (subscription) {
    //         await subscription.unsubscribe();
    //         setSubscription(null);
    //         // Notify server about unsubscription
    //         await fetch('/api/unsubscribe', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ endpoint: subscription.endpoint })
    //         });
    //     }
    // };

    // Helper function to convert VAPID key
    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    // Show prompt after user has been on the site for a while
    useEffect(() => {
        if (permission === 'default' && !showPrompt) {
            const timer = setTimeout(() => {
                setShowPrompt(true);
            }, 30000); // Show after 30 seconds

            return () => clearTimeout(timer);
        }
    }, [permission, showPrompt]);

    if (permission === 'denied' || (permission === 'granted' && subscription)) {
        return null; // Don't show anything if denied or already subscribed
    }

    return (
        <>
            {/* Notification Permission Prompt */}
            {showPrompt && permission === 'default' && (
                <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50">
                    <div className="bg-slate-800 border border-blue-500 rounded-lg p-4 shadow-2xl">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    Stay Updated
                                </h3>
                                <p className="text-slate-300 text-sm mb-3">
                                    Get notified about new environmental data updates and important announcements.
                                </p>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={requestPermission}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                    >
                                        Enable Notifications
                                    </button>
                                    <button
                                        onClick={() => setShowPrompt(false)}
                                        className="text-slate-400 hover:text-slate-300 px-3 py-2 rounded-lg text-sm transition-colors"
                                    >
                                        Not now
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowPrompt(false)}
                                className="flex-shrink-0 text-slate-400 hover:text-slate-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Subscription Management (for future use) */}
            {permission === 'granted' && !subscription && (
                <button
                    onClick={subscribeToNotifications}
                    className="fixed bottom-4 left-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
                    title="Subscribe to notifications"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                </button>
            )}
        </>
    );
};

export default PushNotificationManager;
