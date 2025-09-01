import React from 'react';

const CevsLookupSection = () => {
    return (
        <section id="cevs-lookup" className="py-16 sm:py-20" data-aos="fade-up">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Check Company CEVS Score</h3>
                    <p className="mt-3 text-slate-400 text-lg">Enter a company name to instantly view its environmental verification score</p>

                    {/* Simplified Search Form */}
                    <div className="mt-8 max-w-md mx-auto">
                        <div className="relative">
                            <input
                                id="cevs-company-input"
                                type="text"
                                placeholder="Enter company name..."
                                className="w-full px-6 py-4 pr-16 text-lg rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                            />
                            <button
                                id="cevs-submit-btn"
                                className="absolute right-2 top-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                <span>Check</span>
                            </button>
                        </div>

                        {/* Status Message */}
                        <div id="cevs-message" className="mt-4 text-sm text-slate-400" aria-live="polite"></div>

                        {/* Additional Options (Collapsible) */}
                        <details className="mt-4 text-left">
                            <summary className="text-slate-500 hover:text-slate-400 cursor-pointer text-sm transition-colors">
                                Advanced Options
                            </summary>
                            <div className="mt-3 space-y-3">
                                <input
                                    id="cevs-country-input"
                                    type="text"
                                    placeholder="Country (optional)"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm"
                                />
                                <input
                                    id="cevs-api-key"
                                    type="text"
                                    placeholder="API Key (optional)"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm"
                                />
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CevsLookupSection;
