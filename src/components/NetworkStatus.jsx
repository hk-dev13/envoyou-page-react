import React, { useState, useEffect } from 'react';
import { useToast } from './Toast';

const NetworkStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const { addToast } = useToast();

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            addToast(
                'You\'re back online! All features are now available.',
                'success',
                4000
            );
        };

        const handleOffline = () => {
            setIsOnline(false);
            addToast(
                'You\'re offline. Some features may be limited.',
                'warning',
                0 // Don't auto-dismiss offline warning
            );
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [addToast]);

    // Show persistent offline indicator
    if (!isOnline) {
        return (
            <div className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg bg-red-600 text-white animate-slide-in-right">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-200 animate-pulse"></div>
                    <span className="text-sm font-medium">
                        Offline Mode
                    </span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-12.728 12.728m0 0L12 12m-6.364 6.364L12 12m6.364-6.364L12 12" />
                    </svg>
                </div>
            </div>
        );
    }

    return null;
};

export default NetworkStatus;
