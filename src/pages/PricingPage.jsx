import React, { lazy, Suspense } from 'react';

// Lazy load PricingSection for better performance
const PricingSection = lazy(() => import('../components/PricingSection'));

// Loading skeleton component
const PricingSkeleton = () => (
    <div className="animate-pulse py-20">
        <div className="container mx-auto px-6">
            <div className="h-8 bg-slate-700 rounded w-1/3 mb-4 mx-auto"></div>
            <div className="h-4 bg-slate-700 rounded w-full mb-2 max-w-2xl mx-auto"></div>
            <div className="h-4 bg-slate-700 rounded w-3/4 max-w-xl mx-auto"></div>
            
            {/* Pricing cards skeleton */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-slate-800 p-6 rounded-lg">
                        <div className="h-6 bg-slate-700 rounded w-1/2 mb-4"></div>
                        <div className="h-8 bg-slate-700 rounded w-1/3 mb-4"></div>
                        <div className="space-y-2">
                            {[1, 2, 3, 4].map((j) => (
                                <div key={j} className="h-4 bg-slate-700 rounded w-full"></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const PricingPage = () => {
    return (
        <main className="min-h-screen bg-slate-950">
            {/* Hero Section for Pricing */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Simple, Transparent 
                        <span className="text-emerald-400 block lg:inline"> Pricing</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                        Choose the plan that fits your needs. Start free and scale as you grow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-slate-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span>No setup fees</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span>Cancel anytime</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span>24/7 support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <Suspense fallback={<PricingSkeleton />}>
                <PricingSection />
            </Suspense>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-slate-400">
                            Got questions? We've got answers. If you can't find what you're looking for, 
                            feel free to contact our support team.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6" data-aos="fade-up" data-aos-delay="100">
                        {[
                            {
                                question: "Can I switch plans at any time?",
                                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll only pay the prorated difference."
                            },
                            {
                                question: "What happens if I exceed my plan limits?",
                                answer: "We'll notify you when you're approaching your limits. For API requests, additional usage is charged at standard rates. You can also upgrade to a higher plan anytime."
                            },
                            {
                                question: "Is there a free trial?",
                                answer: "Yes! Our Starter plan is completely free for non-commercial and research use. No credit card required to get started."
                            },
                            {
                                question: "Do you offer enterprise discounts?",
                                answer: "Yes! We offer custom pricing for large enterprises with specific requirements. Contact our sales team for a personalized quote."
                            },
                            {
                                question: "What payment methods do you accept?",
                                answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay via bank transfer."
                            }
                        ].map((faq, index) => (
                            <details key={index} className="bg-slate-800/50 rounded-lg p-6 group">
                                <summary className="flex justify-between items-center cursor-pointer text-white font-semibold text-lg">
                                    {faq.question}
                                    <svg className="w-5 h-5 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="mt-4 text-slate-300 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800">
                <div className="container mx-auto px-6 text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of developers and businesses using Envoyou for reliable environmental data.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors text-lg">
                            Start Free
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-lg">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PricingPage;
