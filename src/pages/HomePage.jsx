import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import CevsCalculator from '../components/CevsCalculator';
import InfoCard from '../components/InfoCard';
import { CheckCircle, Shield, TrendingUp, Users, Code, Database } from 'lucide-react';

const HomePage = () => {
    const navigate = useNavigate();

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
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="50" height="50" viewBox="0 0 300 300" className="text-emerald-400 mr-4"
                     preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0,300) scale(0.1,-0.1)"
                    fill="currentColor" stroke="none">
                    <path d="M1130 2950 c-116 -24 -199 -54 -301 -106 -275 -142 -540 -405 -671
                    -668 l-30 -61 58 60 c160 164 359 268 619 321 76 16 135 19 375 19 244 -1 305
                    -4 425 -23 149 -23 213 -37 222 -46 3 -3 -97 -3 -223 1 -626 16 -1012 -96
                    -1269 -368 -86 -93 -135 -161 -190 -268 -28 -54 -36 -78 -29 -89 15 -23 216
                    -121 326 -158 189 -64 337 -77 493 -45 157 32 288 94 470 219 397 275 509 326
                    720 325 168 -1 311 -48 510 -168 44 -26 83 -49 86 -51 9 -5 -24 100 -56 179
                    -102 257 -298 507 -521 666 -92 66 -292 170 -379 197 -179 56 -343 85 -473 83
                    -42 0 -115 -9 -162 -19z"/>
                    <path d="M2115 2835 c383 -259 598 -551 681 -920 8 -38 18 -140 21 -225 22
                    -608 -246 -1030 -743 -1175 -288 -84 -715 -70 -1084 35 -108 31 -94 32 85 3
                    149 -24 536 -23 670 1 313 57 542 170 718 356 71 74 157 186 157 204 0 10
                    -216 149 -293 187 -185 94 -381 133 -554 111 -166 -21 -263 -60 -623 -249
                    -215 -113 -311 -144 -465 -151 -103 -4 -132 -1 -200 17 -136 38 -274 114 -419
                    233 -32 27 -60 47 -62 45 -7 -7 39 -207 67 -292 17 -49 57 -142 90 -205 378
                    -732 1274 -1018 2011 -643 483 246 792 723 815 1258 15 362 -85 690 -300 981"/>
                    </g>
                    </svg>
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
