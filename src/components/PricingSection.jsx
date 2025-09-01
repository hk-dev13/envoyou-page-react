import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const monthlyPrice = 29;
    const annualPrice = monthlyPrice * 10; // 10 months for annual
    const originalPrice = 99;
    const savings = Math.round(((originalPrice * 12 - annualPrice) / (originalPrice * 12)) * 100);

    return (
        <section id="pricing" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Flexible and Transparent Pricing</h3>
                    <p className="mt-4 text-lg text-slate-400">
                        Start for free for non-commercial and research projects, then upgrade as your needs grow. We support all scales, from hobby projects to large enterprise applications.
                    </p>
                </div>

                {/* Pricing Toggle */}
                <div className="mt-12 flex justify-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="bg-slate-800 p-1 rounded-lg flex items-center">
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                                !isAnnual
                                    ? 'bg-emerald-500 text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all relative ${
                                isAnnual
                                    ? 'bg-emerald-500 text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            Annual
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                                SAVE {savings}%
                            </span>
                        </button>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                            🔥 Most Popular
                        </div>
                        <h4 className="text-lg font-semibold text-emerald-400">Premium</h4>

                        {/* Pricing Display */}
                        <div className="mt-2">
                            {isAnnual ? (
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-4xl font-bold text-white">${annualPrice}</span>
                                        <span className="text-lg font-medium text-slate-400">/year</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-slate-500 line-through">${originalPrice * 12}</span>
                                        <span className="text-sm text-emerald-400 font-medium">Save ${originalPrice * 12 - annualPrice} ({savings}% off)</span>
                                    </div>
                                    <p className="text-xs text-slate-400">Billed annually • ${monthlyPrice}/month equivalent</p>
                                </div>
                            ) : (
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-4xl font-bold text-white">${monthlyPrice}</span>
                                        <span className="text-lg font-medium text-slate-400">/month</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-slate-500 line-through">${originalPrice}</span>
                                        <span className="text-sm text-emerald-400 font-medium">70% OFF Launch Discount!</span>
                                    </div>
                                    <p className="text-xs text-slate-400">Save ${originalPrice - monthlyPrice} monthly</p>
                                </div>
                            )}
                        </div>

                        <p className="text-slate-400 mt-2">Designed for growing startups and small businesses.</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>1000 requests/hour</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>All features from the Basic plan</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Access to analytics & CEVS scores</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Priority support via email</li>
                            {isAnnual && (
                                <li className="flex items-center bg-emerald-500/10 p-2 rounded-lg">
                                    <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span className="text-emerald-400 font-medium"> {savings}% Annual Savings!</span>
                                </li>
                            )}
                        </ul>
                        <a href="coming-soon.html" className="mt-8 w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors">
                            {isAnnual ? `Get Annual Plan - Save $${originalPrice * 12 - annualPrice}` : 'Choose Premium'}
                        </a>
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
