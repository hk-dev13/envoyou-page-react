import React, { useState } from 'react';
import apiService from '../services/apiService';

const FreeAPIKeyPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        purpose: '',
        organization: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        
        try {
            const response = await apiService.submitAPIKeyRequest({
                name: formData.name,
                email: formData.email,
                organization: formData.organization || null,
                purpose: formData.purpose
            });
            
            console.log('API Key request submitted:', response);
            setSubmitted(true);
        } catch (err) {
            console.error('Error submitting API key request:', err);
            setError(err.message || 'Failed to submit request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <div className="bg-slate-800 rounded-xl p-8 border border-emerald-500">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Request Submitted Successfully!</h2>
                        <p className="text-slate-400 mb-6">
                            Thank you for your interest in the Envoyou API. We've received your request for a free API key.
                        </p>
                        <div className="bg-slate-700 rounded-lg p-4 mb-6">
                            <h3 className="font-semibold text-emerald-400 mb-2">What's Next?</h3>
                            <ul className="text-slate-300 text-sm space-y-2 text-left">
                                <li>• We'll review your application within 24-48 hours</li>
                                <li>• You'll receive your API key via email: <strong className="text-white">{formData.email}</strong></li>
                                <li>• Documentation will be included with your API key</li>
                                <li>• Free tier includes 100 requests/hour</li>
                            </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/documentation"
                                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors"
                            >
                                Read Documentation
                            </a>
                            <a
                                href="/"
                                className="border border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 px-6 py-3 rounded-lg transition-colors"
                            >
                                Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero Section */}
            <section className="py-20 hero-gradient">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                        Get Your <span className="text-emerald-400">Free API Key</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-8">
                        Start accessing standardized environmental data for free. Perfect for research, development, and small projects.
                    </p>
                    <div className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 max-w-lg mx-auto">
                        <div className="flex items-center justify-center space-x-4 text-sm">
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-300">100 requests/hour</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-300">No credit card</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-300">Quick approval</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Form */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                            <h2 className="text-2xl font-bold text-white mb-6">Request Free API Key</h2>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-2">
                                    Organization (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                    placeholder="Company or institution name"
                                />
                            </div>

                            <div className="mt-6">
                                <label htmlFor="purpose" className="block text-sm font-medium text-slate-300 mb-2">
                                    Intended Use *
                                </label>
                                <textarea
                                    id="purpose"
                                    name="purpose"
                                    required
                                    rows="4"
                                    value={formData.purpose}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                    placeholder="Briefly describe how you plan to use the Envoyou API (e.g., research project, prototype development, ESG analysis, etc.)"
                                />
                            </div>

                            {/* Error Display */}
                            {error && (
                                <div className="mt-6 p-4 bg-red-900/20 border border-red-600/30 rounded-lg">
                                    <p className="text-red-400 text-sm">{error}</p>
                                </div>
                            )}

                            <div className="mt-8">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        'Request Free API Key'
                                    )}
                                </button>
                            </div>

                            <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                                <p className="text-slate-400 text-sm">
                                    <strong className="text-white">Note:</strong> Free API keys are for non-commercial use, research, and development purposes. 
                                    Commercial usage requires a <a href="/#pricing" className="text-emerald-400 hover:text-emerald-300">paid subscription</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeAPIKeyPage;
