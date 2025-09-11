import React, { useState } from 'react';

const DocumentationPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'auth', label: 'Authentication' },
        { id: 'endpoints', label: 'API Endpoints' },
        { id: 'examples', label: 'Code Examples' },
        { id: 'errors', label: 'Error Handling' }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero Section */}
            <section className="relative py-20 hero-gradient">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                        API <span className="text-emerald-400">Documentation</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-slate-400">
                        Comprehensive guide to the Envoyou CEVS Aggregator API. Access standardized environmental data from multiple global sources with our secure, high-performance REST API.
                    </p>
                </div>
            </section>

            {/* Navigation Tabs */}
            <div className="sticky top-16 z-40 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 sm:px-6">
                    <nav className="flex space-x-4 sm:space-x-8 overflow-x-auto scrollbar-hide">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                data-tab={tab.id}
                                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors flex-shrink-0 ${
                                    activeTab === tab.id
                                        ? 'border-emerald-400 text-emerald-400'
                                        : 'border-transparent text-slate-400 hover:text-white'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Content Sections */}
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {activeTab === 'overview' && <OverviewSection />}
                {activeTab === 'auth' && <AuthSection />}
                {activeTab === 'endpoints' && <EndpointsSection />}
                {activeTab === 'examples' && <ExamplesSection />}
                {activeTab === 'errors' && <ErrorsSection />}
            </div>
        </div>
    );
};

const OverviewSection = () => (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="bg-slate-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">What is CEVS?</h2>
            <p className="text-slate-400 mb-6">
                The <strong className="text-emerald-400">Composite Environmental Verification Score (CEVS)</strong> is our proprietary algorithm that aggregates and normalizes environmental data from multiple official sources to provide a comprehensive view of a company's environmental performance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Data Sources</h3>
                    <ul className="space-y-2 text-slate-400">
                        <li>• <strong>EPA</strong> - US Environmental Protection Agency</li>
                        <li>• <strong>EEA</strong> - European Environment Agency</li>
                        <li>• <strong>ISO</strong> - International Standards Organization</li>
                        <li>• <strong>EDGAR</strong> - Global Emissions Database</li>
                        <li>• <strong>CAMPD</strong> - Clean Air Markets Program Data</li>
                        <li>• <strong>EIA</strong> - US Energy Information Administration</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                    <ul className="space-y-2 text-slate-400">
                        <li className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            <span><strong>High Performance</strong> - Sub-2 second response times</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <span><strong>Enterprise Security</strong> - API key authentication</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <span><strong>Data Standardization</strong> - Consistent schemas</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span><strong>Production Ready</strong> - 99.9% uptime target</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M8 10a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
                            </svg>
                            <span><strong>Smart Caching</strong> - Optimized data freshness</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            <span><strong>Real-time Testing</strong> - Built-in API tester interface</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            <span><strong>Instant Demo Keys</strong> - No registration required</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span><strong>Connection Monitor</strong> - Live backend status indicator</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Base URL</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Development</h3>
                    <div className="bg-slate-900 rounded p-4 font-mono text-emerald-400">
                        https://api.envoyou.com
                    </div>
                    <p className="text-slate-400 text-sm mt-2">Production API (shared for dev)</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Production</h3>
                    <div className="bg-slate-900 rounded p-4 font-mono text-emerald-400">
                        https://api.envoyou.com
                    </div>
                    <p className="text-slate-400 text-sm mt-2">Live production API</p>
                </div>
            </div>
            <div className="mt-6 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-blue-400 font-medium">Quick Start</span>
                </div>
                <p className="text-blue-200 text-sm">
                    This frontend automatically connects to <code>https://api.envoyou.com</code> for both development and production environments. 
                    Start your FastAPI backend and refresh this page to see the green connection indicator!
                </p>
            </div>
        </div>
    </div>
);

const AuthSection = () => (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="bg-slate-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">API Key Authentication</h2>
            <p className="text-slate-400 mb-6">
                Most endpoints require authentication via API keys. We offer tiered access with different rate limits and features.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-900 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Basic Tier</h3>
                    <p className="text-slate-400 text-sm mb-4">Perfect for development and testing</p>
                    <div className="text-2xl font-bold text-white mb-2">100/hour</div>
                    <div className="text-sm text-slate-500">Rate Limit</div>
                </div>
                <div className="bg-slate-900 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Premium Tier</h3>
                    <p className="text-slate-400 text-sm mb-4">For production applications</p>
                    <div className="text-2xl font-bold text-white mb-2">1000/hour</div>
                    <div className="text-sm text-slate-500">Rate Limit</div>
                </div>
                <div className="bg-slate-900 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Enterprise Tier</h3>
                    <p className="text-slate-400 text-sm mb-4">Unlimited access</p>
                    <div className="text-2xl font-bold text-white mb-2">Unlimited</div>
                    <div className="text-sm text-slate-500">Rate Limit</div>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">Demo API Keys</h3>
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-emerald-400 font-medium">Instant Demo API Keys Available!</span>
                </div>
                <p className="text-sm text-slate-300 mb-3">
                    Get a demo API key instantly without registration. Perfect for testing and development.
                </p>
                <div className="bg-slate-900 rounded p-3 space-y-2">
                    <div className="text-sm">
                        <span className="text-slate-400">Endpoint:</span>
                        <code className="ml-2 bg-slate-700 px-2 py-1 rounded text-emerald-400">POST /admin/request-demo-key</code>
                    </div>
                    <div className="text-sm">
                        <span className="text-slate-400">Payload:</span>
                        <code className="ml-2 bg-slate-700 px-2 py-1 rounded text-slate-300">{'{"client_name": "Your Name"}'}</code>
                    </div>
                    <div className="text-sm">
                        <span className="text-slate-400">Rate Limit:</span>
                        <code className="ml-2 bg-slate-700 px-2 py-1 rounded text-slate-300">30 requests/minute</code>
                    </div>
                </div>
            </div>
            
            <div className="bg-slate-900 rounded p-4 space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-slate-400">Static Demo Keys (Deprecated):</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-slate-500">Basic:</span>
                    <code className="bg-slate-700 px-3 py-1 rounded text-slate-500">demo_key_basic_2025</code>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-slate-500">Premium:</span>
                    <code className="bg-slate-700 px-3 py-1 rounded text-slate-500">demo_key_premium_2025</code>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                    ⚠️ Use the dynamic endpoint above for guaranteed access
                </p>
            </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Authentication Methods</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Authorization Header (Recommended)</h3>
                    <div className="bg-slate-900 rounded p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                        <div className="text-slate-400 mb-2"># Example request</div>
                        <div className="text-emerald-400 whitespace-nowrap">
                            curl -H "Authorization: Bearer demo_key_basic_2025" \<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"https://api.envoyou.com/v1/global/emissions"
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">X-API-Key Header</h3>
                    <div className="bg-slate-900 rounded p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                        <div className="text-slate-400 mb-2"># Alternative method</div>
                        <div className="text-emerald-400 whitespace-nowrap">
                            curl -H "X-API-Key: demo_key_basic_2025" \<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;"https://api.envoyou.com/v1/global/emissions"
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const EndpointsSection = () => (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Health Endpoints */}
        <div className="bg-slate-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Health & Status Endpoints</h2>
            <div className="space-y-4">
                <EndpointCard
                    method="GET"
                    path="/"
                    description="API information and available endpoints"
                    auth="None"
                />
                <EndpointCard
                    method="GET"
                    path="/health"
                    description="Health check endpoint with system status"
                    auth="None"
                />
            </div>
        </div>

        {/* Demo API Key */}
        <div className="bg-slate-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Demo API Key Management</h2>
            <p className="text-slate-400 mb-6">Get instant access to demo API keys without registration</p>
            <div className="space-y-4">
                <EndpointCard
                    method="POST"
                    path="/admin/request-demo-key"
                    description="Request a new demo API key (30 req/min limit)"
                    auth="None"
                    params={["client_name"]}
                />
            </div>
        </div>

        {/* Indonesian Permits */}
        <div className="bg-slate-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Indonesian Environmental Permits</h2>
            <p className="text-slate-400 mb-6">Access to KLHK Amdalnet environmental permit data (no authentication required)</p>
            <div className="space-y-4">
                <EndpointCard
                    method="GET"
                    path="/permits"
                    description="Get all environmental permits"
                    auth="None"
                    params={["page", "limit"]}
                />
                <EndpointCard
                    method="GET"
                    path="/v1/permits/search"
                    description="Search permits by company name or type"
                    auth="None"
                    params={["nama", "jenis", "status"]}
                />
                <EndpointCard
                    method="GET"
                    path="/v1/permits/active"
                    description="Get only active permits"
                    auth="None"
                />
                <EndpointCard
                    method="GET"
                    path="/v1/permits/company/{company_name}"
                    description="Get permits for specific company"
                    auth="None"
                />
                <EndpointCard
                    method="GET"
                    path="/v1/permits/stats"
                    description="Get permit statistics"
                    auth="None"
                />
            </div>
        </div>

        {/* Global Environmental Data */}
        <div className="bg-slate-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Global Environmental Data</h2>
            <p className="text-slate-400 mb-6">Aggregated data from multiple international sources (API key required)</p>
            <div className="space-y-4">
                <EndpointCard
                    method="GET"
                    path="/v1/global/cevs/{company_name}"
                    description="Calculate CEVS for a company (main endpoint)"
                    auth="Required"
                    params={["country"]}
                />
                <EndpointCard
                    method="GET"
                    path="/v1/global/emissions"
                    description="EPA power plant emissions data"
                    auth="Required"
                    params={["state", "year", "pollutant", "page", "limit"]}
                />
                <EndpointCard
                    method="GET"
                    path="/v1/global/emissions/stats"
                    description="Emissions statistics"
                    auth="Required"
                />
                <EndpointCard
                    method="GET"
                    path="/v1/global/iso"
                    description="ISO 14001 certifications"
                    auth="Required"
                    params={["country", "limit"]}
                />
                <EndpointCard
                    method="GET"
                    path="/v1/global/eea"
                    description="EEA environmental indicators"
                    auth="Required"
                    params={["country", "indicator", "year", "limit"]}
                />
                <EndpointCard
                    method="GET"
                    path="/v1/global/edgar"
                    description="EDGAR emissions data"
                    auth="Required"
                    params={["country", "pollutant", "window"]}
                />
                <EndpointCard
                    method="GET"
                    path="/v1/global/campd"
                    description="CAMPD power plant data"
                    auth="Required"
                    params={["facility_id"]}
                />
            </div>
        </div>

        {/* Admin Endpoints */}
        <div className="bg-slate-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Administrative Endpoints</h2>
            <p className="text-slate-400 mb-6">API key management and usage statistics (Premium tier required)</p>
            <div className="space-y-4">
                <EndpointCard
                    method="GET"
                    path="/admin/api-keys"
                    description="List all API keys"
                    auth="Premium"
                />
                <EndpointCard
                    method="POST"
                    path="/admin/api-keys"
                    description="Create new API key"
                    auth="Premium"
                />
                <EndpointCard
                    method="GET"
                    path="/admin/stats"
                    description="API usage statistics"
                    auth="Premium"
                />
            </div>
        </div>
    </div>
);

const EndpointCard = ({ method, path, description, auth, params }) => (
    <div className="bg-slate-900 rounded-lg p-4 sm:p-6">
        <div className="flex flex-col space-y-3 mb-3">
            <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-xs font-mono ${
                    method === 'GET' ? 'bg-green-600 text-white' :
                    method === 'POST' ? 'bg-blue-600 text-white' :
                    'bg-red-600 text-white'
                }`}>
                    {method}
                </span>
                <span className={`px-2 py-1 rounded text-xs ${
                    auth === 'None' ? 'bg-green-600 text-white' :
                    auth === 'Required' ? 'bg-yellow-600 text-white' :
                    'bg-red-600 text-white'
                }`}>
                    {auth === 'None' ? 'Public' : auth === 'Required' ? 'API Key' : 'Premium'}
                </span>
            </div>
            <div className="overflow-x-auto">
                <code className="text-emerald-400 font-mono text-sm whitespace-nowrap">{path}</code>
            </div>
        </div>
        <p className="text-slate-400 mb-3 text-sm break-words">{description}</p>
        {params && (
            <div>
                <div className="text-sm text-slate-500 mb-2">Query Parameters:</div>
                <div className="flex flex-wrap gap-2">
                    {params.map(param => (
                        <span key={param} className="bg-slate-700 px-2 py-1 rounded text-xs text-slate-300">
                            {param}
                        </span>
                    ))}
                </div>
            </div>
        )}
    </div>
);

const ExamplesSection = () => (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="bg-slate-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Code Examples</h2>

            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Calculate CEVS Score</h3>
                    <div className="bg-slate-900 rounded p-4 font-mono text-sm overflow-x-auto">
                        <div className="text-slate-400 mb-2"># Get CEVS for a company</div>
                        <div className="text-emerald-400 whitespace-pre-wrap break-all">
                            curl -H "Authorization: Bearer demo_key_premium_2025" \
                            "https://api.envoyou.com/v1/global/cevs/Green%20Energy%20Co?country=US"
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Search Indonesian Permits</h3>
                    <div className="bg-slate-900 rounded p-4 font-mono text-sm overflow-x-auto">
                        <div className="text-slate-400 mb-2"># Search permits by company name</div>
                        <div className="text-emerald-400 whitespace-pre-wrap break-all">
                            curl "https://api.envoyou.com/v1/permits/search?nama=PT%20Pertamina"
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Get EPA Emissions Data</h3>
                    <div className="bg-slate-900 rounded p-4 font-mono text-sm overflow-x-auto">
                        <div className="text-slate-400 mb-2"># Get California emissions data</div>
                        <div className="text-emerald-400 whitespace-pre-wrap break-all">
                            curl -H "Authorization: Bearer demo_key_basic_2025" \
                            "https://api.envoyou.com/global/emissions?state=CA&limit=5"
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">JavaScript Example</h3>
                    <div className="bg-slate-900 rounded p-4 font-mono text-sm overflow-x-auto">
                        <div className="text-slate-400 mb-2">// Fetch CEVS data</div>
                        <div className="text-blue-400 whitespace-pre-wrap break-all">
                            {`const response = await fetch('/global/cevs/Company%20Name', {
  headers: {
    'Authorization': 'Bearer demo_key_premium_2025'
  }
});
const data = await response.json();`}
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Python Example</h3>
                    <div className="bg-slate-900 rounded p-4 font-mono text-sm overflow-x-auto">
                        <div className="text-slate-400 mb-2"># Python requests example</div>
                        <div className="text-blue-400 whitespace-pre-wrap break-all">
                            {`import requests

headers = {'Authorization': 'Bearer demo_key_premium_2025'}
response = requests.get(
  'https://api.envoyou.com/global/cevs/Company%20Name',
  headers=headers
)
data = response.json()`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ErrorsSection = () => (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="bg-slate-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Error Handling</h2>

            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-3">Missing API Key</h3>
                    <div className="bg-slate-900 rounded p-3 sm:p-4 overflow-x-auto">
                        <div className="text-red-400 font-mono text-xs sm:text-sm mb-2">Status: 401</div>
                        <pre className="text-slate-300 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">{
`{
  "status": "error",
  "message": "API key required. Include it in Authorization header...",
  "code": "MISSING_API_KEY",
  "demo_keys": {
    "basic": "demo_key_basic_2025",
    "premium": "demo_key_premium_2025"
  }
}`
                        }</pre>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-3">Rate Limit Exceeded</h3>
                    <div className="bg-slate-900 rounded p-3 sm:p-4 overflow-x-auto">
                        <div className="text-red-400 font-mono text-xs sm:text-sm mb-2">Status: 429</div>
                        <pre className="text-slate-300 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">{
`{
  "status": "error",
  "message": "Rate limit exceeded. Upgrade to premium tier for higher limits.",
  "code": "RATE_LIMIT_EXCEEDED",
  "retry_after": 3600
}`
                        }</pre>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-3">Data Not Found</h3>
                    <div className="bg-slate-900 rounded p-3 sm:p-4 overflow-x-auto">
                        <div className="text-red-400 font-mono text-xs sm:text-sm mb-2">Status: 404</div>
                        <pre className="text-slate-300 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">{
`{
  "status": "error",
  "message": "Country 'XYZ' not found in dataset",
  "code": "DATA_NOT_FOUND"
}`
                        }</pre>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-3">Invalid Parameters</h3>
                    <div className="bg-slate-900 rounded p-3 sm:p-4 overflow-x-auto">
                        <div className="text-red-400 font-mono text-xs sm:text-sm mb-2">Status: 400</div>
                        <pre className="text-slate-300 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">{
`{
  "status": "error",
  "message": "Invalid parameter: year must be between 2000-2024",
  "code": "INVALID_PARAMETER"
}`
                        }</pre>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">HTTP Status Codes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3">Success Codes</h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li><strong>200</strong> - OK: Request successful</li>
                        <li><strong>201</strong> - Created: Resource created</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-3">Error Codes</h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="break-words"><strong>400</strong> - Bad Request: Invalid parameters</li>
                        <li className="break-words"><strong>401</strong> - Unauthorized: Missing/invalid API key</li>
                        <li className="break-words"><strong>403</strong> - Forbidden: Insufficient permissions</li>
                        <li className="break-words"><strong>404</strong> - Not Found: Resource not found</li>
                        <li className="break-words"><strong>429</strong> - Too Many Requests: Rate limit exceeded</li>
                        <li className="break-words"><strong>500</strong> - Internal Server Error: Server error</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default DocumentationPage;
