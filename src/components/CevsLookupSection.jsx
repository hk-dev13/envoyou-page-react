import React, { useState } from 'react';
import apiService from '../services/apiService';

const CevsLookupSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [country, setCountry] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            setError('Please enter a company name');
            return;
        }

        setLoading(true);
        setError('');
        setResults(null);

        try {
            // Search for company CEVS data
            const data = await apiService.getCEVSData(
                searchQuery.trim(), 
                country.trim() || null,
                apiKey.trim() || null
            );
            
            if (data && (Array.isArray(data) ? data.length > 0 : data.status === 'success')) {
                // Handle both array and object responses
                const resultsData = Array.isArray(data) ? data : [data.data || data];
                setResults(resultsData);
            } else {
                setError(`No CEVS data found for "${searchQuery}". Please try a different company name.`);
            }
        } catch (err) {
            setError('Failed to fetch data. Please check your connection and try again.');
            console.error('Search error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <section id="cevs-lookup" className="py-16 sm:py-20" data-aos="fade-up">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Check Company CEVS Score</h3>
                    <p className="mt-3 text-slate-400 text-lg">Enter a company name or country to view environmental verification scores</p>

                    {/* Search Form */}
                    <div className="mt-8 max-w-md mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Enter company name or country..."
                                className="w-full px-6 py-4 pr-16 text-lg rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                                disabled={loading}
                            />
                            <button
                                onClick={handleSearch}
                                disabled={loading}
                                className="absolute right-2 top-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                            >
                                {loading ? (
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                )}
                                <span>{loading ? 'Checking...' : 'Check'}</span>
                            </button>
                        </div>

                        {/* Advanced Options */}
                        <details className="mt-4 text-left">
                            <summary className="text-slate-500 hover:text-slate-400 cursor-pointer text-sm transition-colors">
                                Advanced Options
                            </summary>
                            <div className="mt-3 space-y-3">
                                <input
                                    type="text"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    placeholder="Filter by country (optional)"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm"
                                />
                                <input
                                    type="text"
                                    value={apiKey}
                                    onChange={(e) => setApiKey(e.target.value)}
                                    placeholder="API Key (optional)"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm"
                                />
                            </div>
                        </details>
                    </div>

                    {/* Error Display */}
                    {error && (
                        <div className="mt-6 p-4 bg-red-900/20 border border-red-800 rounded-lg">
                            <p className="text-red-400">{error}</p>
                        </div>
                    )}

                    {/* Results Display */}
                    {results && results.length > 0 && (
                        <div className="mt-8 space-y-4">
                            <h4 className="text-xl font-semibold text-white">Search Results</h4>
                            <div className="grid gap-4 max-w-4xl mx-auto">
                                {results.map((result, index) => (
                                    <div key={index} className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 text-left">
                                        <div className="flex justify-between items-start mb-3">
                                            <h5 className="text-lg font-semibold text-white">
                                                {result.company || result.country || 'Unknown Entity'}
                                            </h5>
                                            {result.cevs_score && (
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                    result.cevs_score >= 80 ? 'bg-emerald-500/20 text-emerald-400' :
                                                    result.cevs_score >= 60 ? 'bg-yellow-500/20 text-yellow-400' :
                                                    'bg-red-500/20 text-red-400'
                                                }`}>
                                                    CEVS: {result.cevs_score}
                                                </span>
                                            )}
                                        </div>
                                        
                                        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                                            {result.country && (
                                                <div>
                                                    <span className="text-slate-400">Country:</span> {result.country}
                                                </div>
                                            )}
                                            {result.industry && (
                                                <div>
                                                    <span className="text-slate-400">Industry:</span> {result.industry}
                                                </div>
                                            )}
                                            {result.emissions && (
                                                <div>
                                                    <span className="text-slate-400">Emissions:</span> {result.emissions} CO₂e
                                                </div>
                                            )}
                                            {result.verification_date && (
                                                <div>
                                                    <span className="text-slate-400">Verified:</span> {new Date(result.verification_date).toLocaleDateString()}
                                                </div>
                                            )}
                                        </div>
                                        
                                        {result.description && (
                                            <p className="mt-3 text-slate-400 text-sm">{result.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CevsLookupSection;
