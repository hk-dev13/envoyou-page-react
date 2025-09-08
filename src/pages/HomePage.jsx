import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import CevsCalculator from '../components/CevsCalculator';
import InfoCard from '../components/InfoCard';
import { CheckCircle, Shield, TrendingUp, Users, Code, Database } from 'lucide-react';

const HomePage = () => {
    const navigate = useNavigate();

    console.log('🏠 HomePage component is rendering');
    console.log('Current URL:', window.location.href);
    console.log('User agent:', navigator.userAgent);

    const handleGetStarted = () => {
        navigate('/pricing');
    };

    const handleViewDocumentation = () => {
        navigate('/documentation');
    };

    return (
        <div className="min-h-screen relative" style={{ backgroundColor: 'var(--envoyou-dark)' }}>
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1" fill="currentColor" style={{ color: 'var(--envoyou-green)' }}/>
                        </pattern>
                        <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" style={{ color: 'var(--envoyou-green)' }}/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)"/>
                    <rect width="100%" height="100%" fill="url(#grid)"/>
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-6xl font-bold mb-6 flex items-center justify-center font-aileron" style={{ color: 'var(--envoyou-white)' }}>
                            <img 
                                src="/svg/logo-icon-nb.svg" 
                                alt="Envoyou" 
                                className="h-12 w-12 text-emerald-400 mr-4"
                            />
                            <span style={{ color: 'var(--envoyou-green)' }}>Envoy</span>OU
                        </h1>
                        <h2 className="text-2xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--envoyou-white)' }}>
                            The Standardized Score for Corporate Environmental Performance
                        </h2>
                        <p className="text-xl mb-8 max-w-4xl mx-auto" style={{ color: 'var(--envoyou-gray)' }}>
                            Envoyou's CEVS API aggregates data from global sources like the EPA and EEA to generate a single,
                            reliable environmental score from 0-100, enabling transparent ESG assessment and supply chain verification.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={handleGetStarted}
                            >
                                Get Started Free
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleViewDocumentation}
                            >
                                View Documentation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CEVS Calculator Section */}
            <section className="py-20" style={{ backgroundColor: 'var(--envoyou-dark-light)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--envoyou-white)' }}>
                            See Your CEVS Score in Action
                        </h2>
                        <p className="text-lg" style={{ color: 'var(--envoyou-gray)' }}>
                            Interactive calculator showing how environmental factors impact your company's score
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <CevsCalculator />
                    </div>
                </div>
            </section>

            {/* Data Sources Section */}
            <section className="py-20" style={{ backgroundColor: 'var(--envoyou-dark)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--envoyou-white)' }}>
                            Trusted Global Data Sources
                        </h2>
                        <p className="text-lg" style={{ color: 'var(--envoyou-gray)' }}>
                            Our CEVS score is calculated using verified data from authoritative environmental agencies worldwide
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                        <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Database />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>EPA</h3>
                            <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>United States Environmental Protection Agency</p>
                        </div>

                        <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Database />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>EEA</h3>
                            <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>European Environment Agency</p>
                        </div>

                        <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Database />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>EDGAR</h3>
                            <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Emissions Database for Global Atmospheric Research</p>
                        </div>

                        <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Database />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>ISO</h3>
                            <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>International Organization for Standardization</p>
                        </div>

                        <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Database />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>KLHK</h3>
                            <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Ministry of Environment and Forestry Indonesia</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-20" style={{ backgroundColor: 'var(--envoyou-dark-light)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--envoyou-white)' }}>
                            Transparent Methodology
                        </h2>
                        <p className="text-lg" style={{ color: 'var(--envoyou-gray)' }}>
                            Our scoring algorithm combines multiple environmental factors into a single, standardized metric
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--envoyou-white)' }}>
                                Scoring Factors
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <CheckCircle className="text-green-500 mr-3" size={20} />
                                    <span style={{ color: 'var(--envoyou-gray)' }}>Carbon emissions and climate impact</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="text-green-500 mr-3" size={20} />
                                    <span style={{ color: 'var(--envoyou-gray)' }}>Water usage and conservation</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="text-green-500 mr-3" size={20} />
                                    <span style={{ color: 'var(--envoyou-gray)' }}>Waste management practices</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="text-green-500 mr-3" size={20} />
                                    <span style={{ color: 'var(--envoyou-gray)' }}>Energy efficiency metrics</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="text-green-500 mr-3" size={20} />
                                    <span style={{ color: 'var(--envoyou-gray)' }}>Regulatory compliance history</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--envoyou-white)' }}>
                                Score Ranges
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--envoyou-dark)', borderColor: 'var(--envoyou-border)' }}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold" style={{ color: 'var(--envoyou-green)' }}>90-100</span>
                                        <span className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Excellent</span>
                                    </div>
                                    <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Industry-leading environmental performance</p>
                                </div>

                                <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--envoyou-dark)', borderColor: 'var(--envoyou-border)' }}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold" style={{ color: 'var(--envoyou-yellow)' }}>70-89</span>
                                        <span className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Good</span>
                                    </div>
                                    <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Above-average environmental practices</p>
                                </div>

                                <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--envoyou-dark)', borderColor: 'var(--envoyou-border)' }}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold" style={{ color: 'var(--envoyou-orange)' }}>50-69</span>
                                        <span className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Average</span>
                                    </div>
                                    <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Meeting basic environmental standards</p>
                                </div>

                                <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--envoyou-dark)', borderColor: 'var(--envoyou-border)' }}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold" style={{ color: 'var(--envoyou-red)' }}>0-49</span>
                                        <span className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Needs Improvement</span>
                                    </div>
                                    <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Significant environmental concerns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20" style={{ backgroundColor: 'var(--envoyou-dark)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--envoyou-white)' }}>
                            Perfect for ESG & Supply Chain Teams
                        </h2>
                        <p className="text-lg" style={{ color: 'var(--envoyou-gray)' }}>
                            Streamline your environmental assessment process with standardized scoring
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 rounded-lg border text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group cursor-pointer" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Shield />
                            </div>
                            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--envoyou-white)' }}>
                                ESG Reporting
                            </h3>
                            <p style={{ color: 'var(--envoyou-gray)' }}>
                                Automate environmental scoring for comprehensive ESG reports and stakeholder communications
                            </p>
                        </div>

                        <div className="p-6 rounded-lg border text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group cursor-pointer" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <TrendingUp />
                            </div>
                            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--envoyou-white)' }}>
                                Supply Chain Risk
                            </h3>
                            <p style={{ color: 'var(--envoyou-gray)' }}>
                                Evaluate supplier environmental performance to mitigate supply chain risks and ensure compliance
                            </p>
                        </div>

                        <div className="p-6 rounded-lg border text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group cursor-pointer" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Users />
                            </div>
                            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--envoyou-white)' }}>
                                Investor Relations
                            </h3>
                            <p style={{ color: 'var(--envoyou-gray)' }}>
                                Provide transparent environmental metrics to investors and demonstrate sustainability commitments
                            </p>
                        </div>

                        <div className="p-6 rounded-lg border text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group cursor-pointer" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Code />
                            </div>
                            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--envoyou-white)' }}>
                                Developer
                            </h3>
                            <p style={{ color: 'var(--envoyou-gray)' }}>
                                Integrate CEVS scoring into your applications with our comprehensive API and developer tools
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" style={{ backgroundColor: 'var(--envoyou-dark-light)' }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--envoyou-white)' }}>
                        Ready to Get Your CEVS Score?
                    </h2>
                    <p className="text-lg mb-8" style={{ color: 'var(--envoyou-gray)' }}>
                        Join leading companies using Envoyou's CEVS API for transparent environmental assessment
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
            </section>
            </div>
        </div>
    );
};

export default HomePage;
