import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-green-400">Envoy</span>OU
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Professional CV Enhancement API Service with enterprise-grade features. 
                            Transform your resume data with our powerful API.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                                Get Started Free
                            </button>
                            <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Preview */}
            <section className="py-20 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Enterprise Features</h2>
                        <p className="text-gray-300 text-lg">Production-ready with advanced capabilities</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                            <div className="text-green-400 text-2xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">High Performance</h3>
                            <p className="text-gray-300">Optimized API with sub-100ms response times</p>
                        </div>
                        
                        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                            <div className="text-blue-400 text-2xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                            <p className="text-gray-300">SOC2 compliant with end-to-end encryption</p>
                        </div>
                        
                        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                            <div className="text-purple-400 text-2xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Advanced Analytics</h3>
                            <p className="text-gray-300">Real-time monitoring and insights</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
