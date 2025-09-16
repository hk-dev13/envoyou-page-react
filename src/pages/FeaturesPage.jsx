import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const FeaturesPage = () => {
    console.log('🏗️ FeaturesPage component is rendering');

    const handleGetStarted = () => {
        window.location.href = 'https://app.envoyou.com/auth/register';
    };

    const handleViewDocumentation = () => {
        window.location.href = '/documentation';
    };

    return (
        <main>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 sm:py-32">
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="features-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="1" fill="currentColor" style={{ color: 'var(--envoyou-green)' }}/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#features-dots)"/>
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-6xl font-bold mb-6" style={{ color: 'var(--envoyou-white)' }}>
                            Powerful Features for
                            <span style={{ color: 'var(--envoyou-green)' }}> Environmental Intelligence</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                            Discover how Envoyou's comprehensive platform transforms environmental data into actionable insights for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={handleGetStarted}
                            >
                                Start Free Trial
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleViewDocumentation}
                            >
                                View API Docs
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Most Comprehensive Environmental Data Platform</h2>
                        <p className="text-lg text-slate-400">
                            From carbon emissions to ISO certifications, we do the heavy lifting by aggregating and cleansing data from various trusted sources, presenting it through one simple, easy-to-use API.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {/* Feature Card 1 */}
                        <div className="feature-card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="0">
                            <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                                    <path d="M4.22 12.22a3 3 0 0 0 0 4.24l8.49 8.49a3 3 0 0 0 4.24 0l8.49-8.49a3 3 0 0 0 0-4.24l-8.49-8.49a3 3 0 0 0-4.24 0Z"/>
                                    <path d="M16 12h-4"/>
                                </svg>
                            </div>
                            <h4 className="mt-6 text-xl font-bold text-white">Multi-Source Integration</h4>
                            <p className="mt-2 text-slate-400">Access data from the EPA, EEA, ISO, and other government data sources through a single unified integration point, saving hundreds of hours of engineering work.</p>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="feature-card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                                    <path d="m9 12 2 2 4-4"/>
                                </svg>
                            </div>
                            <h4 className="mt-6 text-xl font-bold text-white">Data Standardization</h4>
                            <p className="mt-2 text-slate-400">We normalize diverse data formats, units, and schemas into one consistent, predictable JSON structure, so you can start analyzing immediately.</p>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="feature-card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                                   <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                   <polyline points="14 2 14 8 20 8"/>
                                   <path d="M12 18v-6"/>
                                   <path d="m9 15 3-3 3 3"/>
                               </svg>
                            </div>
                            <h4 className="mt-6 text-xl font-bold text-white">CEVS Score</h4>
                            <p className="mt-2 text-slate-400">Get a holistic, actionable environmental performance score (CEVS) for ESG analysis, risk assessment, and supply chain verification.</p>
                        </div>

                        {/* Feature Card 4 */}
                        <div className="feature-card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="300">
                            <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                                    <polyline points="16 18 22 12 16 6"/>
                                    <polyline points="8 6 2 12 8 18"/>
                                </svg>
                            </div>
                            <h4 className="mt-6 text-xl font-bold text-white">Developer-Friendly</h4>
                            <p className="mt-2 text-slate-400">Interactive OpenAPI documentation, SDKs, and clear error handling designed to accelerate the integration process from weeks to hours.</p>
                        </div>
                    </div>

                    {/* Advanced Features Section */}
                    <div className="mb-20">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced Capabilities</h2>
                            <p className="text-lg text-slate-400">Enterprise-grade features for comprehensive environmental intelligence</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Left Column */}
                            <div className="space-y-8">
                                <div className="feature-card p-6 rounded-xl" data-aos="fade-up" data-aos-delay="0">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-emerald-500/10 p-3 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                                                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                                <path d="M2 17l10 5 10-5"/>
                                                <path d="M2 12l10 5 10-5"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Real-time Data Updates</h4>
                                            <p className="text-slate-400">Stay current with the latest environmental data through our automated update system that pulls from primary sources daily.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-card p-6 rounded-xl" data-aos="fade-up" data-aos-delay="100">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-emerald-500/10 p-3 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                                                <line x1="12" y1="19" x2="12" y2="23"/>
                                                <line x1="8" y1="23" x2="16" y2="23"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Advanced Analytics</h4>
                                            <p className="text-slate-400">Built-in analytics tools for trend analysis, comparative studies, and predictive modeling of environmental data.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-card p-6 rounded-xl" data-aos="fade-up" data-aos-delay="200">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-emerald-500/10 p-3 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                                                <path d="M12 2l3 6.5L21 9l-5 4.5 1.5 7L12 16l-5.5 4.5L9 13.5 4 9l6-0.5L12 2z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Compliance Monitoring</h4>
                                            <p className="text-slate-400">Automated compliance checking against international environmental standards and regulations.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-8">
                                <div className="feature-card p-6 rounded-xl" data-aos="fade-up" data-aos-delay="100">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-emerald-500/10 p-3 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                                <circle cx="9" cy="7" r="4"/>
                                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Multi-User Collaboration</h4>
                                            <p className="text-slate-400">Team collaboration features with role-based access control and shared dashboards for enterprise environments.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-card p-6 rounded-xl" data-aos="fade-up" data-aos-delay="200">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-emerald-500/10 p-3 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                                <line x1="9" y1="9" x2="15" y2="15"/>
                                                <line x1="15" y1="9" x2="9" y2="15"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Custom Integrations</h4>
                                            <p className="text-slate-400">Flexible API endpoints and webhook support for seamless integration with existing business systems.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-card p-6 rounded-xl" data-aos="fade-up" data-aos-delay="300">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-emerald-500/10 p-3 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                                                <path d="M12 2l3 6.5L21 9l-5 4.5 1.5 7L12 16l-5.5 4.5L9 13.5 4 9l6-0.5L12 2z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">24/7 Enterprise Support</h4>
                                            <p className="text-slate-400">Round-the-clock technical support with dedicated account managers for enterprise customers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Data Sources Section */}
                    <div className="mb-20">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted Global Data Sources</h2>
                            <p className="text-lg text-slate-400">Our CEVS score is calculated using verified data from authoritative environmental agencies worldwide</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                            <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                        <path d="M2 17l10 5 10-5"/>
                                        <path d="M2 12l10 5 10-5"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>EPA</h3>
                                <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>United States Environmental Protection Agency</p>
                            </div>

                            <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                        <path d="M2 17l10 5 10-5"/>
                                        <path d="M2 12l10 5 10-5"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>EEA</h3>
                                <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>European Environment Agency</p>
                            </div>

                            <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                        <path d="M2 17l10 5 10-5"/>
                                        <path d="M2 12l10 5 10-5"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>EDGAR</h3>
                                <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Emissions Database for Global Atmospheric Research</p>
                            </div>

                            <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                        <path d="M2 17l10 5 10-5"/>
                                        <path d="M2 12l10 5 10-5"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>ISO</h3>
                                <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>International Organization for Standardization</p>
                            </div>

                            <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                        <path d="M2 17l10 5 10-5"/>
                                        <path d="M2 12l10 5 10-5"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>KLHK</h3>
                                <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Ministry of Environment and Forestry Indonesia</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
                        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                            Join leading companies using Envoyou's comprehensive environmental data platform for transparent environmental assessment and ESG reporting.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={handleGetStarted}
                            >
                                Start Free Trial
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleViewDocumentation}
                            >
                                View API Docs
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FeaturesPage;