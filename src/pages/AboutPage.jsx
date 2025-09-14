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

            {/* Meet the Team Section */}
            <section className="py-20 bg-slate-950">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">Meet the Team Behind Envoyou</h2>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                                A passionate team of innovators, developers, and environmental experts working together to democratize environmental intelligence
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Husni Kusuma */}
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-400/10 group" data-aos="fade-up" data-aos-delay="300">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl font-bold text-white">HK</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Husni Kusuma</h3>
                                    <p className="text-emerald-400 font-medium mb-4">Leader & Lead Developer</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Visionary behind the core system, ensuring the platform runs smoothly and efficiently. Expert in API development and environmental data aggregation.
                                    </p>
                                    <div className="flex justify-center mt-6">
                                        <a href="https://github.com/hk-dev13" target="_blank" rel="noopener noreferrer"
                                           className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Aluna */}
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-400/10 group" data-aos="fade-up" data-aos-delay="400">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl font-bold text-white">A</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Aluna</h3>
                                    <p className="text-emerald-400 font-medium mb-4">Strategic Planning</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Guiding direction, roadmap, and user-centered planning to keep Envoyou on track. Expert in product strategy and user experience design.
                                    </p>
                                    <div className="flex justify-center mt-6">
                                        <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Gemini */}
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-400/10 group" data-aos="fade-up" data-aos-delay="500">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl font-bold text-white">G</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Gemini</h3>
                                    <p className="text-emerald-400 font-medium mb-4">Research & Insights</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Providing data-driven research and innovative ideas to push the boundaries of what Envoyou can do. Expert in environmental science and data analysis.
                                    </p>
                                    <div className="flex justify-center mt-6">
                                        <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Claude */}
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-400/10 group" data-aos="fade-up" data-aos-delay="600">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl font-bold text-white">C</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Claude</h3>
                                    <p className="text-emerald-400 font-medium mb-4">Development & Coding</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Turning ideas into robust, scalable code. Expert in full-stack development and ensuring production-ready features with exceptional performance.
                                    </p>
                                    <div className="flex justify-center mt-6">
                                        <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Grock */}
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-400/10 group" data-aos="fade-up" data-aos-delay="700">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl font-bold text-white">G</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Grok</h3>
                                    <p className="text-emerald-400 font-medium mb-4">Development & Coding</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Building reliable systems and innovative solutions. Focused on creating seamless user experiences and maintaining code quality standards.
                                    </p>
                                    <div className="flex justify-center mt-6">
                                        <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Community */}
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-400/10 group" data-aos="fade-up" data-aos-delay="800">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Open Source Community</h3>
                                    <p className="text-emerald-400 font-medium mb-4">Contributors & Collaborators</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Powered by a global community of developers, environmental scientists, and data analysts contributing to environmental intelligence.
                                    </p>
                                    <div className="flex justify-center mt-6">
                                        <a href="https://github.com/hk-dev13/envoyou-page-react" target="_blank" rel="noopener noreferrer"
                                           className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            View Repository
                                        </a>
                                    </div>
                                </div>
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
