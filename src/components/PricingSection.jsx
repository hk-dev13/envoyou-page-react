import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    // Pricing data from txt file
    const pricingData = {
        basic: {
            name: "Basic Plan",
            price: 0,
            annualPrice: 0,
            requests: "100 requests/hour",
            target: "Researchers, developers in evaluation phase, non-commercial projects"
        },
        premium: {
            name: "Premium Plan",
            monthlyPrice: 29,
            annualPrice: 290,
            requests: "1,000 requests/hour",
            target: "Growing startups and small to medium-sized businesses"
        },
        enterprise: {
            name: "Enterprise Plan",
            price: "Custom",
            requests: "10,000+ requests/hour",
            target: "Large enterprises with high-volume requirements"
        }
    };

    const monthlyPrice = pricingData.premium.monthlyPrice;
    const annualPrice = pricingData.premium.annualPrice;
    const savings = Math.round(((monthlyPrice * 12 - annualPrice) / (monthlyPrice * 12)) * 100);

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
                        <h4 className="text-lg font-semibold text-emerald-400">{pricingData.basic.name}</h4>
                        <p className="mt-2 text-4xl font-bold text-white">Free</p>
                        <p className="text-slate-400">{pricingData.basic.target}</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{pricingData.basic.requests}</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Access to core emissions & country data</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Community support</li>
                        </ul>
                        <Link to="/free-api-key" className="mt-8 w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors block">Get Free API Key</Link>
                    </div>

                    {/* Pricing Card 2: Premium (Highlighted) */}
                    <div className="relative feature-card p-8 rounded-xl flex flex-col border-2 border-emerald-500" data-aos="fade-up" data-aos-delay="150">
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                            🔥 Most Popular
                        </div>
                        <h4 className="text-lg font-semibold text-emerald-400">{pricingData.premium.name}</h4>

                        {/* Pricing Display */}
                        <div className="mt-2">
                            {isAnnual ? (
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-4xl font-bold text-white">${monthlyPrice}</span>
                                        <span className="text-lg font-medium text-slate-400">/month</span>
                                    </div>
                                    <p className="text-xs text-slate-400">Billed annually (${annualPrice}/year)</p>
                                </div>
                            ) : (
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-4xl font-bold text-white">${monthlyPrice}</span>
                                        <span className="text-lg font-medium text-slate-400">/month</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <p className="text-slate-400 mt-2">{pricingData.premium.target}</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{pricingData.premium.requests}</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>All features from the Basic plan</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Advanced analytics & CEVS scores</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Priority email support</li>
                            {isAnnual && (
                                <li className="flex items-center bg-emerald-500/10 p-2 rounded-lg">
                                    <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span className="text-emerald-400 font-medium"> {savings}% Annual Savings!</span>
                                </li>
                            )}
                        </ul>
                        <Link to="/contact" className="mt-8 w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors block">
                            {isAnnual ? `Get Annual Plan - $${annualPrice}/year` : 'Contact Sales'}
                        </Link>
                    </div>

                    {/* Pricing Card 3: Enterprise */}
                    <div className="feature-card p-8 rounded-xl flex flex-col" data-aos="fade-up" data-aos-delay="300">
                        <h4 className="text-lg font-semibold text-emerald-400">{pricingData.enterprise.name}</h4>
                        <p className="mt-2 text-4xl font-bold text-white">{pricingData.enterprise.price}</p>
                        <p className="text-slate-400">{pricingData.enterprise.target}</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{pricingData.enterprise.requests}</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>All features from the Premium plan</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Customizable usage limits and rate throttling</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Full historical data access</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Early access to beta features</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Service Level Agreement (SLA) & dedicated account manager</li>
                        </ul>
                        <Link to="/contact" className="mt-8 w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors block">Contact Sales</Link>
                    </div>
                </div>

                {/* Feature Comparison Table */}
                <div className="mt-20 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Compare Plans</h3>
                        <p className="text-slate-400">Choose the perfect plan for your environmental data needs</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="text-left py-4 px-6 text-slate-300 font-semibold">Features</th>
                                    <th className="text-center py-4 px-6 text-slate-300 font-semibold">Free</th>
                                    <th className="text-center py-4 px-6">
                                        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg py-2 px-4">
                                            <span className="text-emerald-400 font-semibold">Premium</span>
                                            <div className="text-xs text-emerald-300 mt-1">Most Popular</div>
                                        </div>
                                    </th>
                                    <th className="text-center py-4 px-6 text-slate-300 font-semibold">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* API Requests */}
                                <tr className="border-b border-slate-800/50">
                                    <td className="py-4 px-6 text-white font-medium">API Requests</td>
                                    <td className="py-4 px-6 text-center text-slate-300">100/hour</td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 font-semibold">1,000/hour</span>
                                    </td>
                                    <td className="py-4 px-6 text-center text-slate-300">10,000+/hour</td>
                                </tr>

                                {/* Core Data Access */}
                                <tr className="border-b border-slate-800/50 bg-slate-900/20">
                                    <td className="py-4 px-6 text-white font-medium">Core Emissions Data</td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                </tr>

                                {/* Country Data */}
                                <tr className="border-b border-slate-800/50">
                                    <td className="py-4 px-6 text-white font-medium">Country-level Data</td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                </tr>

                                {/* Analytics & CEVS */}
                                <tr className="border-b border-slate-800/50 bg-slate-900/20">
                                    <td className="py-4 px-6 text-white font-medium">Analytics & CEVS Scores</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                </tr>

                                {/* Advanced Filtering */}
                                <tr className="border-b border-slate-800/50">
                                    <td className="py-4 px-6 text-white font-medium">Advanced Data Filtering</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                </tr>

                                {/* Historical Data */}
                                <tr className="border-b border-slate-800/50 bg-slate-900/20">
                                    <td className="py-4 px-6 text-white font-medium">Full Historical Data</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                </tr>

                                {/* Beta Features */}
                                <tr className="border-b border-slate-800/50">
                                    <td className="py-4 px-6 text-white font-medium">Early Beta Access</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                </tr>

                                {/* Custom Limits */}
                                <tr className="border-b border-slate-800/50 bg-slate-900/20">
                                    <td className="py-4 px-6 text-white font-medium">Custom Usage Limits</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                </tr>

                                {/* Support Level */}
                                <tr className="border-b border-slate-800/50">
                                    <td className="py-4 px-6 text-white font-medium">Support</td>
                                    <td className="py-4 px-6 text-center text-slate-300">Community</td>
                                    <td className="py-4 px-6 text-center text-emerald-400 font-semibold">Priority Email</td>
                                    <td className="py-4 px-6 text-center text-emerald-400 font-semibold">Dedicated Manager</td>
                                </tr>

                                {/* SLA */}
                                <tr className="border-b border-slate-800/50 bg-slate-900/20">
                                    <td className="py-4 px-6 text-white font-medium">SLA Guarantee</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-emerald-400 text-xl">✔</span>
                                    </td>
                                </tr>

                                {/* Price */}
                                <tr>
                                    <td className="py-4 px-6 text-white font-medium">Pricing</td>
                                    <td className="py-4 px-6 text-center text-emerald-400 font-semibold">Free</td>
                                    <td className="py-4 px-6 text-center">
                                        <div className="text-emerald-400 font-semibold">
                                            ${monthlyPrice}/month
                                            {isAnnual && <div className="text-xs text-slate-400">(${annualPrice}/year)</div>}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-center text-emerald-400 font-semibold">Custom</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
