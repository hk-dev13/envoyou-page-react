import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    const [isAnnual, setIsAnnual] = useState(false);
    const [expandedSections, setExpandedSections] = useState({});

    // Pricing configuration
    const pricingConfig = {
        premium: {
            monthlyPrice: 29,
            annualDiscount: 0.20, // 20% discount for annual
        }
    };

    // Dynamic pricing calculations
    const monthlyPrice = pricingConfig.premium.monthlyPrice;
    const annualDiscount = pricingConfig.premium.annualDiscount;
    const annualPrice = Math.round(monthlyPrice * 12 * (1 - annualDiscount));
    const discountedMonthlyPrice = Math.round(annualPrice / 12);
    const savings = Math.round(annualDiscount * 100);

    // Billing & Terms configuration
    const billingConfig = {
        title: "Billing & Terms",
        sections: [
            {
                id: "subscription",
                title: "Subscription Billing",
                content: "Charges are processed automatically on monthly or annual cycles. All plans are subject to a 14-day money-back guarantee."
            },
            {
                id: "enterprise",
                title: "Enterprise Contracts",
                content: "Custom billing cycles (e.g., quarterly) and payment terms are available. Volume discounts are offered for high-usage commitments."
            },
            {
                id: "plan_changes",
                title: "Plan Changes",
                content: "Upgrades or downgrades are prorated."
            },
            {
                id: "overage",
                title: "Usage-Based Overage",
                content: "For customers who occasionally exceed their plan limits, we offer automated usage-based pricing.",
                subItems: [
                    "Premium Tier Overage: $0.05 per 100 additional requests.",
                    "Enterprise Tier Overage: Custom rates as defined in the contract."
                ]
            },
            {
                id: "special_programs",
                title: "Special Programs",
                content: "",
                subItems: [
                    "Startup Program: Eligible companies (< 3 years old, < $5M ARR) receive a 50% discount on their first year.",
                    "Academic/NGO Program: Verified educational institutions and registered non-profits receive a 70% discount on standard pricing."
                ]
            },
            {
                id: "support",
                title: "Support & Service Levels",
                content: "",
                subItems: [
                    "Basic Support (Included with all plans): Access to documentation and community forums. Email support with a 48-hour response time.",
                    "Premium Support (Included with Premium Plan): Email support with a 24-hour response time. Phone support access for critical issues.",
                    "Enterprise Support (Included with Enterprise Plan): A dedicated account manager. Guaranteed 99.9% uptime SLA. Phone support with a 4-hour response time for critical issues."
                ]
            },
            {
                id: "terms",
                title: "Terms & Conditions",
                content: "",
                subItems: [
                    "Refund Policy: A 14-day money-back guarantee is offered for all new subscriptions. No refunds are issued for usage-based overages.",
                    "Data & Privacy: Our platform is SOC 2, GDPR, and CCPA compliant. Custom Data Processing Agreements (DPA) are available for enterprise customers."
                ]
            },
            {
                id: "contact",
                title: "Contact Information",
                content: "",
                contactLinks: [
                    {
                        type: "email",
                        label: "General Support",
                        value: "support@envoyou.com"
                    },
                    {
                        type: "email",
                        label: "Enterprise Sales",
                        value: "info@envoyou.com"
                    },
                    {
                        type: "page",
                        label: "Contact Form",
                        value: "/contact",
                        text: "Use our contact form for detailed inquiries"
                    }
                ]
            }
        ]
    };

    // Toggle accordion section
    const toggleSection = (sectionId) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

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
            monthlyPrice: monthlyPrice,
            annualPrice: annualPrice,
            discountedMonthlyPrice: discountedMonthlyPrice,
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
                                        <span className="text-4xl font-bold text-white">${discountedMonthlyPrice}</span>
                                        <span className="text-lg font-medium text-slate-400">/month</span>
                                    </div>
                                    <p className="text-xs text-slate-400">Billed annually (${annualPrice}/year)</p>
                                    <div className="mt-2 inline-flex items-center px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                                        <span className="text-emerald-400 text-xs font-medium">Save {savings}% with annual billing</span>
                                    </div>
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
                                            {isAnnual ? (
                                                <div>
                                                    <div>${discountedMonthlyPrice}/month</div>
                                                    <div className="text-xs text-slate-400">(${annualPrice}/year)</div>
                                                </div>
                                            ) : (
                                                <div>${monthlyPrice}/month</div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-center text-emerald-400 font-semibold">Custom</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Billing & Terms Section */}
                <div className="mt-20 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="500">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{billingConfig.title}</h3>
                        <p className="text-slate-400">Important information about billing, support, and terms of service</p>
                    </div>

                    <div className="space-y-4">
                        {billingConfig.sections.map((section) => (
                            <div key={section.id} className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden">
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                                >
                                    <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                                    <svg
                                        className={`w-5 h-5 text-emerald-400 transform transition-transform ${
                                            expandedSections[section.id] ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>

                                {expandedSections[section.id] && (
                                    <div className="px-6 pb-4 border-t border-slate-700/50">
                                        {section.content && (
                                            <p className="text-slate-300 mb-3">{section.content}</p>
                                        )}
                                        {section.contactLinks && section.contactLinks.length > 0 && (
                                            <div className="space-y-3">
                                                {section.contactLinks.map((link, index) => (
                                                    <div key={index}>
                                                        {link.type === 'email' ? (
                                                            <a
                                                                href={`mailto:${link.value}`}
                                                                className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors"
                                                            >
                                                                <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                                </svg>
                                                                <span className="font-medium">{link.label}:</span>
                                                                <span className="ml-2 underline">{link.value}</span>
                                                            </a>
                                                        ) : link.type === 'page' ? (
                                                            <div>
                                                                <Link
                                                                    to={link.value}
                                                                    className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors"
                                                                >
                                                                    <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                    </svg>
                                                                    <span className="font-medium">{link.label}</span>
                                                                </Link>
                                                                {link.text && (
                                                                    <p className="text-slate-400 text-sm mt-1 ml-6">{link.text}</p>
                                                                )}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {section.subItems && section.subItems.length > 0 && !section.contactLinks && (
                                            <ul className="space-y-2">
                                                {section.subItems.map((item, index) => (
                                                    <li key={index} className="text-slate-400 flex items-start">
                                                        <span className="text-emerald-400 mr-2 mt-1">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-slate-400 text-sm">
                            Have questions about our billing or terms?{' '}
                            <Link to="/contact" className="text-emerald-400 hover:text-emerald-300 underline">
                                Contact our sales team
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
