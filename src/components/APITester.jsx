import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';
import DemoKeyManager from './DemoKeyManager';

const APITester = () => {
    const [connectionStatus, setConnectionStatus] = useState('checking');
    const [healthData, setHealthData] = useState(null);
    const [testResults, setTestResults] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [cevsData, setCevsData] = useState([]);
    const [countriesData, setCountriesData] = useState([]);

    // Test connection on component mount
    useEffect(() => {
        testConnection();
    }, []);

    const testConnection = async () => {
        try {
            setConnectionStatus('checking');
            const health = await apiService.checkHealth();
            setHealthData(health);
            setConnectionStatus('connected');
            setError(null);
        } catch (err) {
            setConnectionStatus('failed');
            setError(err.message);
            console.error('Connection failed:', err);
        }
    };

    const runTest = async (testName, apiCall) => {
        setTestResults(prev => ({ ...prev, [testName]: 'loading' }));
        
        try {
            const result = await apiCall();
            setTestResults(prev => ({ 
                ...prev, 
                [testName]: { success: true, data: result, timestamp: new Date().toISOString() }
            }));
        } catch (error) {
            setTestResults(prev => ({ 
                ...prev, 
                [testName]: { success: false, error: error.message, timestamp: new Date().toISOString() }
            }));
        }
    };

    const testEndpoints = [
        {
            name: 'Health Check',
            key: 'health',
            call: () => apiService.checkHealth(),
            requiresKey: false
        },
        {
            name: 'CEVS Data (Shell)',
            key: 'cevs',
            call: () => apiService.getCEVSData('Shell', 'Netherlands'),
            requiresKey: true
        },
        {
            name: 'Emissions Data (TX)', 
            key: 'emissions',
            call: () => apiService.getEmissionsData('TX', null, 1, 5),
            requiresKey: true
        },
        {
            name: 'Countries ISO (Indonesia)',
            key: 'countries',
            call: () => apiService.getCountries('Indonesia'),
            requiresKey: true
        }
    ];

    const fetchCEVSData = async () => {
        setLoading(true);
        try {
            const data = await apiService.getCEVSData('Shell', 'Netherlands');
            setCevsData(Array.isArray(data) ? data : [data]);
            setError(null);
        } catch (err) {
            setError(`CEVS API Error: ${err.message}`);
            setCevsData([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchCountries = async () => {
        setLoading(true);
        try {
            const data = await apiService.getCountries('Indonesia');
            setCountriesData(Array.isArray(data) ? data : [data]);
            setError(null);
        } catch (err) {
            setError(`Countries API Error: ${err.message}`);
            setCountriesData([]);
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = () => {
        switch (connectionStatus) {
            case 'connected':
                return 'text-green-400';
            case 'failed':
                return 'text-red-400';
            case 'checking':
                return 'text-yellow-400';
            default:
                return 'text-slate-400';
        }
    };

    const getStatusIcon = () => {
        switch (connectionStatus) {
            case 'connected':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                );
            case 'failed':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                );
            case 'checking':
                return (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="fixed bottom-4 left-4 z-50 max-w-sm">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-sm">API Status</h3>
                    <button
                        onClick={testConnection}
                        className="text-slate-400 hover:text-white text-sm"
                        title="Refresh connection"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                </div>

                {/* Connection Status */}
                <div className={`flex items-center space-x-2 mb-3 ${getStatusColor()}`}>
                    {getStatusIcon()}
                    <span className="text-sm">
                        Backend: {connectionStatus === 'connected' ? 'Connected' : connectionStatus === 'failed' ? 'Failed' : 'Checking...'}
                    </span>
                </div>

                {/* Health Data */}
                {healthData && (
                    <div className="text-xs text-slate-400 mb-3">
                        <div>API: {healthData.status || 'Unknown'}</div>
                        <div>Version: {healthData.version || 'Unknown'}</div>
                        <div>URL: http://localhost:8000</div>
                    </div>
                )}

                {/* Error Display */}
                {error && (
                    <div className="text-xs text-red-400 mb-3 p-2 bg-red-900/20 rounded">
                        {error}
                    </div>
                )}

                {/* Test Buttons */}
                {connectionStatus === 'connected' && (
                    <div className="space-y-2">
                        <button
                            onClick={fetchCEVSData}
                            disabled={loading}
                            className="w-full text-xs bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-600 text-white py-2 px-3 rounded transition-colors"
                        >
                            {loading ? 'Loading...' : 'Test CEVS API'}
                        </button>
                        <button
                            onClick={fetchCountries}
                            disabled={loading}
                            className="w-full text-xs bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white py-2 px-3 rounded transition-colors"
                        >
                            {loading ? 'Loading...' : 'Test Countries API'}
                        </button>
                    </div>
                )}

                {/* Results */}
                {cevsData.length > 0 && (
                    <div className="mt-3 text-xs">
                        <div className="text-green-400 mb-1">CEVS Data ({cevsData.length} items):</div>
                        <div className="text-slate-300 max-h-20 overflow-y-auto">
                            {cevsData.slice(0, 3).map((item, index) => (
                                <div key={index} className="mb-1">
                                    {item.country}: {item.cevs_score}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {countriesData.length > 0 && (
                    <div className="mt-3 text-xs">
                        <div className="text-blue-400 mb-1">Countries ({countriesData.length}):</div>
                        <div className="text-slate-300 max-h-20 overflow-y-auto">
                            {countriesData.slice(0, 5).join(', ')}...
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default APITester;
