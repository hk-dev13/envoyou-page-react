import React from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    return (
        <section id="pricing" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Flexible and Transparent Pricing</h3>
                    <p className="mt-4 text-lg text-slate-400">
                        Start for free for non-commercial and research projects, then upgrade as your needs grow. We support all scales, from hobby projects to large enterprise applications.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Pricing Card 1: Basic */}
                    <div className="feature-card p-8 rounded-xl flex flex-col" data-aos="fade-up" data-aos-delay="0">
                        <h4 className="text-lg font-semibold text-emerald-400">Basic</h4>
                        <p className="mt-2 text-4xl font-bold text-white">Free</p>
                        <p className="text-slate-400">Perfect for research, evaluation, & non-commercial projects.</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>100 requests/hour</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Access to core emissions & country data</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Support via the GitHub community</li>
                        </ul>
                        <a href="coming-soon.html" className="mt-8 w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors">Start Free</a>
                    </div>
                    {/* Pricing Card 2: Premium (Highlighted) */}
                    <div className="relative feature-card p-8 rounded-xl flex flex-col border-2 border-emerald-500" data-aos="fade-up" data-aos-delay="150">
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">Most Popular</div>
                        <h4 className="text-lg font-semibold text-emerald-400">Premium</h4>
                        <p className="mt-2 text-4xl font-bold text-white">$99<span className="text-lg font-medium text-slate-400">/month</span></p>
                        <p className="text-slate-400">Designed for growing startups and small businesses.</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>1000 requests/hour</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>All features from the Basic plan</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Access to analytics & CEVS scores</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Priority support via email</li>
                        </ul>
                        <a href="coming-soon.html" className="mt-8 w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors">Choose Premium</a>
                    </div>
                    {/* Pricing Card 3: Enterprise */}
                    <div className="feature-card p-8 rounded-xl flex flex-col" data-aos="fade-up" data-aos-delay="300">
                        <h4 className="text-lg font-semibold text-emerald-400">Enterprise</h4>
                        <p className="mt-2 text-4xl font-bold text-white">Custom</p>
                        <p className="text-slate-400">Custom solutions for large-scale enterprises with unique needs.</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Custom usage and throughput limits</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>All features from the Premium plan</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>SLA support & dedicated account manager</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Full access to historical data & beta features</li>
                        </ul>
                        <a href="mailto:info@envoyou.com" className="mt-8 w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
