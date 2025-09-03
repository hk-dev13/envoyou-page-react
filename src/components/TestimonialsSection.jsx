import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            content: "Used by developers to access environmental data faster. The unified API eliminated hours of manual data collection from multiple sources.",
            author: "Development Team",
            role: "ESG Analytics Platform",
            metric: "70% faster data integration"
        },
        {
            id: 2,
            content: "Reliable access to verified environmental datasets. The standardized format made our compliance reporting significantly more efficient.",
            author: "Sustainability Analyst",
            role: "Fortune 500 Company",
            metric: "50% reduction in reporting time"
        },
        {
            id: 3,
            content: "Clean, consistent data structure across all environmental metrics. Perfect for building automated ESG scoring systems.",
            author: "Data Science Team",
            role: "Investment Firm",
            metric: "Automated 90% of ESG data collection"
        },
        {
            id: 4,
            content: "The API documentation is excellent and the data quality is outstanding. Saved us months of development time.",
            author: "Technical Lead",
            role: "Climate Tech Startup",
            metric: "6 months faster to market"
        }
    ];

    return (
        <section className="py-20 bg-slate-950/50" id="testimonials">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Trusted by Teams Worldwide
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Organizations choose Envoyou to streamline their environmental data workflows and accelerate their ESG initiatives.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="mb-4">
                                <svg className="w-8 h-8 text-emerald-400 mb-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                </svg>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    "{testimonial.content}"
                                </p>
                            </div>
                            
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-white">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-slate-400 text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-emerald-400 font-semibold text-sm">
                                        {testimonial.metric}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to Transform Your Environmental Data Workflow?
                    </h3>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Join teams worldwide who trust Envoyou for reliable, standardized environmental data access.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link
                            to="/documentation"
                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center space-x-2"
                        >
                            <span>Start Building Today</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <Link
                            to="/pricing"
                            className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                            See Pricing
                        </Link>
                        <Link
                            to="/contact"
                            className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
