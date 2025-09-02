import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const DemoKeyManager = () => {
    const [apiKey, setApiKey] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [clientName, setClientName] = useState('Demo User');

    useEffect(() => {
        // Check if there's already a stored API key
        const storedKey = apiService.getStoredApiKey();
        if (storedKey) {
            setApiKey(storedKey);
        }
    }, []);

    const requestDemoKey = async () => {
        if (!clientName.trim()) {
            setError('Please enter your name');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const newApiKey = await apiService.requestDemoKey(clientName.trim());
            setApiKey(newApiKey);
        } catch (err) {
            setError(err.message);
            console.error('Failed to get demo API key:', err);
        } finally {
            setLoading(false);
        }
    };

    const clearApiKey = () => {
        apiService.clearStoredApiKey();
        setApiKey(null);
        setError(null);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(apiKey);
        // Could add a toast notification here
    };

    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Demo API Key</h3>
                {apiKey && (
                    <div className="flex items-center space-x-2">
                        <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                            Active
                        </span>
                        <button
                            onClick={clearApiKey}
                            className="text-xs text-red-400 hover:text-red-300"
                        >
                            Clear
                        </button>
                    </div>
                )}
            </div>

            {!apiKey ? (
                <div className="space-y-4">
                    <p className="text-slate-400 text-sm">
                        Get a free demo API key to test all endpoints
                    </p>
                    <div className="space-y-3">
                        <input
                            type="text"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            placeholder="Your name (optional)"
                            className="w-full px-3 py-2 rounded-lg bg-slate-800/30 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm"
                        />
                        <button
                            onClick={requestDemoKey}
                            disabled={loading}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Getting Demo Key...</span>
                                </>
                            ) : (
                                <span>Get Demo API Key</span>
                            )}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="space-y-3">
                    <p className="text-sm text-emerald-400">
                        ✅ Demo API key active! You can now test all endpoints.
                    </p>
                    <div className="bg-slate-900 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                            <code className="text-xs text-slate-300 break-all">
                                {apiKey.slice(0, 20)}...{apiKey.slice(-8)}
                            </code>
                            <button
                                onClick={copyToClipboard}
                                className="ml-2 text-xs text-slate-400 hover:text-white"
                                title="Copy to clipboard"
                            >
                                📋
                            </button>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500">
                        This key is stored in your browser and will be used automatically for API calls.
                    </p>
                </div>
            )}

            {error && (
                <div className="mt-4 p-3 bg-red-900/20 border border-red-800 rounded-lg">
                    <p className="text-red-400 text-sm">{error}</p>
                </div>
            )}
        </div>
    );
};

export default DemoKeyManager;
