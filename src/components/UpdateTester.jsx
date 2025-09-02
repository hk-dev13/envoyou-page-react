import React, { useState } from 'react';

const UpdateTester = () => {
    const [showBanner, setShowBanner] = useState(false);

    const handleUpdateClick = () => {
        console.log('Update Now clicked from test banner');
        window.location.reload();
    };

    const handleDismissClick = () => {
        console.log('Later clicked from test banner');
        setShowBanner(false);
    };

    // Only show in development or if manually triggered
    if (!showBanner) {
        return (
            <div className="fixed bottom-4 left-4 z-50">
                <button
                    onClick={() => setShowBanner(true)}
                    className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-700 transition-colors"
                >
                    Test Update Banner
                </button>
            </div>
        );
    }

    return (
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
                        onClick={handleUpdateClick}
                        className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors cursor-pointer"
                        type="button"
                    >
                        Update Now
                    </button>
                    <button
                        onClick={handleDismissClick}
                        className="text-emerald-100 hover:text-white px-3 py-2 rounded-lg transition-colors cursor-pointer"
                        type="button"
                    >
                        Later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateTester;
