import React from 'react';

const CevsLookupSection = () => {
    return (
        <section id="cevs-lookup" className="py-12 sm:py-20" data-aos="fade-up">
            <div className="container mx-auto px-6">
                <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-xl max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-white">Find CEVS Score</h3>
                    <p className="mt-2 text-slate-400">Enter a company name to view its environmental score (CEVS). If the API is hosted on another domain, make sure the backend allows CORS.</p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                        <input id="cevs-company-input" type="text" placeholder="Company name (e.g. ACME Corp)" className="sm:col-span-2 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none" />
                        <input id="cevs-country-input" type="text" placeholder="Country (optional)" className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none" />
                        <input id="cevs-api-key" type="text" placeholder="API key (optional)" className="sm:col-span-2 mt-2 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none" />
                        <button id="cevs-submit-btn" className="mt-2 sm:mt-0 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg">View Score</button>
                    </div>

                    <div id="cevs-message" className="mt-4 text-sm text-slate-400" aria-live="polite"></div>
                </div>
            </div>
        </section>
    );
};

export default CevsLookupSection;
