import React, { useState, useEffect } from 'react';

const NetworkStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [showStatus, setShowStatus] = useState(false);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            setShowStatus(true);
            // Auto-hide after 3 seconds
            setTimeout(() => setShowStatus(false), 3000);
        };

        const handleOffline = () => {
            setIsOnline(false);
            setShowStatus(true);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    if (!showStatus) return null;

    return (
        <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ${
            isOnline
                ? 'bg-green-600 text-white'
                : 'bg-red-600 text-white'
        }`}>
            <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                    isOnline ? 'bg-green-200' : 'bg-red-200'
                }`}></div>
                <span className="text-sm font-medium">
                    {isOnline ? 'Back Online' : 'Offline Mode'}
                </span>
                {isOnline && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                )}
            </div>
        </div>
    );
};

export default NetworkStatus;
