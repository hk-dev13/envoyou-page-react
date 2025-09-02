import React, { useEffect } from 'react';
import AOS from 'aos';

const AboutPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Hero Section */}
            <section className="relative py-20 hero-gradient">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6" data-aos="fade-up">
                        About <span className="text-emerald-400">Envoyou</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-slate-400" data-aos="fade-up" data-aos-delay="200">
                        Democratizing access to environmental data for a sustainable future
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Mission</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div data-aos="fade-right">
                                <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Unified Environmental Intelligence</h3>
                                <p className="text-slate-400 mb-6">
                                    We believe environmental data should be accessible, standardized, and actionable. Envoyou bridges the gap between scattered environmental datasets and the ESG professionals who need them most.
                                </p>
                                <p className="text-slate-400">
                                    By aggregating data from EPA, EEA, ISO, EDGAR, and other authoritative sources, we provide a single API that delivers comprehensive environmental insights with unprecedented speed and reliability.
                                </p>
                            </div>
                            <div className="space-y-6" data-aos="fade-left">
                                <div className="bg-slate-800 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <svg className="w-8 h-8 text-emerald-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <h4 className="text-lg font-semibold text-white">Data Standardization</h4>
                                    </div>
                                    <p className="text-slate-400 text-sm">Consistent schemas across all environmental datasets</p>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <svg className="w-8 h-8 text-emerald-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                        <h4 className="text-lg font-semibold text-white">Lightning Fast</h4>
                                    </div>
                                    <p className="text-slate-400 text-sm">Sub-2 second response times with intelligent caching</p>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <svg className="w-8 h-8 text-emerald-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        <h4 className="text-lg font-semibold text-white">Enterprise Ready</h4>
                                    </div>
                                    <p className="text-slate-400 text-sm">99.9% uptime with enterprise-grade security</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-slate-950">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Behind Envoyou</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-800 rounded-lg p-8" data-aos="fade-up" data-aos-delay="200">
                                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">HK</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Husni Kusuma</h3>
                                <p className="text-emerald-400 mb-4">Founder & Lead Developer</p>
                                <p className="text-slate-400 text-sm">
                                    Environmental data enthusiast with expertise in API development and data aggregation. 
                                    Passionate about making environmental intelligence accessible to everyone.
                                </p>
                                <div className="flex justify-center mt-6 space-x-4">
                                    <a href="https://github.com/hk-dev13" target="_blank" rel="noopener noreferrer" 
                                       className="text-slate-400 hover:text-emerald-400 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="bg-slate-800 rounded-lg p-8" data-aos="fade-up" data-aos-delay="400">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Open Source Community</h3>
                                <p className="text-emerald-400 mb-4">Contributors & Collaborators</p>
                                <p className="text-slate-400 text-sm mb-4">
                                    Envoyou is powered by an amazing community of developers, environmental scientists, and data analysts who contribute to making environmental data more accessible.
                                </p>
                                <a href="https://github.com/hk-dev13/project-permit-api" target="_blank" rel="noopener noreferrer"
                                   className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    View Repository
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Values</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                                <div className="w-16 h-16 bg-emerald-400 rounded-lg mx-auto mb-6 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4">Accessibility</h3>
                                <p className="text-slate-400">Environmental data should be accessible to everyone, from startups to enterprises.</p>
                            </div>
                            
                            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                                <div className="w-16 h-16 bg-emerald-400 rounded-lg mx-auto mb-6 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4">Reliability</h3>
                                <p className="text-slate-400">Consistent, accurate data you can trust for critical business decisions.</p>
                            </div>
                            
                            <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                                <div className="w-16 h-16 bg-emerald-400 rounded-lg mx-auto mb-6 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                                <p className="text-slate-400">Continuously improving our platform with the latest technology and data sources.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
