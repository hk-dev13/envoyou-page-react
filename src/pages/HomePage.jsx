import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center hero-gradient">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    Transform Fragmented Environmental Data.
                    <br className="hidden md:block" />
                    <span className="text-emerald-400">Into Verified Insights.</span>
                </h2>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400">
                    Unified access to standardized global environmental datasets for ESG businesses, analysts, and investors. Stop time-consuming manual data collection and start making strategic data-driven decisions with confidence.
                </p>
                <div className="mt-10 flex justify-center items-center space-x-4">
                    <Link to="documentation.html" className="bg-white text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-200 transition-colors text-lg">
                        View Documentation
                    </Link>
                    <Link to="https://github.com/hk-dev13/project-permit-api" target="_blank" className="border border-slate-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors text-lg">
                        View on GitHub
                    </Link>
                </div>
            </div>
        </section>

        {/* CEVS Lookup Section */}
        <section id="cevs-lookup" className="py-12 sm:py-20">
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

        {/* Visualizations Section */}
        <section id="visualizations" className="py-16 sm:py-24 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto scroll-reveal">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Visualize Environmental Data</h3>
                    <p className="mt-4 text-lg text-slate-400">Interactive charts show data source breakdowns, emission trends over years, and company comparisons.</p>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-lg font-semibold text-white">Data Source Breakdown</h4>
                        <canvas id="chart-breakdown" className="mt-4"></canvas>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-lg font-semibold text-white">Emissions Trend (per year)</h4>
                        <canvas id="chart-trend" className="mt-4"></canvas>
                    </div>
                </div>

                <div className="mt-8 bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h4 className="text-lg font-semibold text-white">Company Comparison</h4>
                    <p className="text-slate-400 mt-2">Enter company names (comma separated) to compare CEVS scores.</p>
                    <div className="mt-4 flex items-center space-x-3">
                        <input id="compare-companies" type="text" placeholder="Company A, Company B" className="flex-1 px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none" />
                        <button id="compare-btn" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3 rounded-lg">Compare</button>
                    </div>
                    <div className="mt-6">
                        <canvas id="chart-compare"></canvas>
                    </div>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto scroll-reveal">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">The Most Comprehensive Environmental Data Platform</h3>
                    <p className="mt-4 text-lg text-slate-400">
                        From carbon emissions to ISO certifications, we do the heavy lifting by aggregating and cleansing data from various trusted sources, presenting it through one simple, easy-to-use API.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Feature Card 1 */}
                    <div className="feature-card p-8 rounded-xl scroll-reveal">
                        <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-emerald-400"><path d="M4.22 12.22a3 3 0 0 0 0 4.24l8.49 8.49a3 3 0 0 0 4.24 0l8.49-8.49a3 3 0 0 0 0-4.24l-8.49-8.49a3 3 0 0 0-4.24 0Z"/><path d="M16 12h-4"/></svg>
                        </div>
                        <h4 className="mt-6 text-xl font-bold text-white">Multi-Source Integration</h4>
                        <p className="mt-2 text-slate-400">Access data from the EPA, EEA, ISO, and other government data sources through a single unified integration point, saving hundreds of hours of engineering work.</p>
                    </div>
                    {/* Feature Card 2 */}
                    <div className="feature-card p-8 rounded-xl scroll-reveal" style={{ transitionDelay: '100ms' }}>
                        <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                        </div>
                        <h4 className="mt-6 text-xl font-bold text-white">Data Standardization</h4>
                        <p className="mt-2 text-slate-400">We normalize diverse data formats, units, and schemas into one consistent, predictable JSON structure, so you can start analyzing immediately.</p>
                    </div>
                    {/* Feature Card 3 */}
                    <div className="feature-card p-8 rounded-xl scroll-reveal" style={{ transitionDelay: '200ms' }}>
                        <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3-3 3 3"/></svg>
                        </div>
                        <h4 className="mt-6 text-xl font-bold text-white">CEVS Score</h4>
                        <p className="mt-2 text-slate-400">Get a holistic, actionable environmental performance score (CEVS) for ESG analysis, risk assessment, and supply chain verification.</p>
                    </div>
                    {/* Feature Card 4 */}
                    <div className="feature-card p-8 rounded-xl scroll-reveal" style={{ transitionDelay: '300ms' }}>
                        <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                        </div>
                        <h4 className="mt-6 text-xl font-bold text-white">Developer-Friendly</h4>
                        <p className="mt-2 text-slate-400">Interactive OpenAPI documentation, SDKs, and clear error handling designed to accelerate the integration process from weeks to hours.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Code Example Section */}
        <section id="docs" className="py-20 sm:py-32 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="scroll-reveal">
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Start in Minutes</h3>
                        <p className="mt-4 text-lg text-slate-400">
                            Our API is designed for simplicity and power. Get complex global emissions data with a single, simple API call. See our full documentation to explore all available possibilities and data sources.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                                <p className="text-slate-300">Predictable and easily parseable JSON responses, accelerating your application development.</p>
                            </div>
                            <div className="flex items-start space-x-3">
                               <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                                <p className="text-slate-300">Internal Caching and Pagination support to ensure optimal performance and fast response times.</p>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-reveal" style={{ transitionDelay: '150ms' }}>
                        <div className="bg-[#0D1117] rounded-xl border border-slate-800 overflow-hidden">
                            <div className="px-4 py-2 border-b border-slate-800 flex justify-between items-center">
                                <span className="text-sm text-slate-400">Example: Get emissions data</span>
                                <button id="copyBtn" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                    <span id="copyBtnText">Copy</span>
                                </button>
                            </div>
                            <pre className="p-6 text-sm overflow-x-auto" id="codeBlock"><code className="language-bash"><span className="text-pink-400">curl</span> <span className="text-sky-300">-X</span> GET \
  <span className="text-sky-300">-H</span> <span className="text-emerald-300">"Authorization: Bearer &lt;YOUR_API_KEY&gt;"</span> \
  <span className="text-slate-100">"https://api.envoyou.com/v1/global/cevs/CompanyName"</span></code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto scroll-reveal">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Flexible and Transparent Pricing</h3>
                    <p className="mt-4 text-lg text-slate-400">
                        Start for free for non-commercial and research projects, then upgrade as your needs grow. We support all scales, from hobby projects to large enterprise applications.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Pricing Card 1: Basic */}
                    <div className="feature-card p-8 rounded-xl flex flex-col scroll-reveal">
                        <h4 className="text-lg font-semibold text-emerald-400">Basic</h4>
                        <p className="mt-2 text-4xl font-bold text-white">Free</p>
                        <p className="text-slate-400">Perfect for research, evaluation, & non-commercial projects.</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>100 requests/day</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Access to core emissions & country data</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Support via the GitHub community</li>
                        </ul>
                        <a href="coming-soon.html" className="mt-8 w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors">Start Free</a>
                    </div>
                    {/* Pricing Card 2: Premium (Highlighted) */}
                    <div className="relative feature-card p-8 rounded-xl flex flex-col border-2 border-emerald-500 scroll-reveal" style={{ transitionDelay: '150ms' }}>
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">Most Popular</div>
                        <h4 className="text-lg font-semibold text-emerald-400">Premium</h4>
                        <p className="mt-2 text-4xl font-bold text-white">$99<span className="text-lg font-medium text-slate-400">/month</span></p>
                        <p className="text-slate-400">Designed for growing startups and small businesses.</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>1000 requests/day</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>All features from the Basic plan</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Access to analytics & CEVS scores</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Priority support via email</li>
                        </ul>
                        <a href="coming-soon.html" className="mt-8 w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors">Choose Premium</a>
                    </div>
                    {/* Pricing Card 3: Enterprise */}
                    <div className="feature-card p-8 rounded-xl flex flex-col scroll-reveal" style={{ transitionDelay: '300ms' }}>
                        <h4 className="text-lg font-semibold text-emerald-400">Enterprise</h4>
                        <p className="mt-2 text-4xl font-bold text-white">Custom</p>
                        <p className="text-slate-400">Custom solutions for large-scale enterprises with unique needs.</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Custom usage and throughput limits</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>All features from the Premium plan</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>SLA support & dedicated account manager</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Full access to historical data & beta features</li>
                        </ul>
                        <a href="mailto:info@envoyou.com" className="mt-8 w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
};

export default HomePage;