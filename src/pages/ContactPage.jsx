import React, { useState, useEffect } from 'react';
import AOS from 'aos';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState('');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus('sending');
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Hero Section */}
            <section className="relative py-20 hero-gradient">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6" data-aos="fade-up">
                        Contact <span className="text-emerald-400">Us</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-slate-400" data-aos="fade-up" data-aos-delay="200">
                        Have questions about our API or need enterprise support? We're here to help.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div data-aos="fade-right">
                                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                                            Subject
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="api-support">API Support</option>
                                            <option value="enterprise">Enterprise Inquiry</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white resize-none"
                                            placeholder="Tell us how we can help you..."
                                        ></textarea>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        disabled={submitStatus === 'sending'}
                                        className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                                    >
                                        {submitStatus === 'sending' ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                    
                                    {submitStatus === 'success' && (
                                        <div className="bg-emerald-900 border border-emerald-700 rounded-lg p-4">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-emerald-400 text-sm">Message sent successfully! We'll get back to you soon.</span>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                            
                            {/* Contact Information */}
                            <div data-aos="fade-left">
                                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                                <div className="space-y-6">
                                    <div className="bg-slate-800 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-4">Email Support</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 text-emerald-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg>
                                                <div>
                                                    <p className="text-white font-medium">General Support</p>
                                                    <a href="mailto:support@envoyou.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                                                        support@envoyou.com
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 text-emerald-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg>
                                                <div>
                                                    <p className="text-white font-medium">Enterprise Sales</p>
                                                    <a href="mailto:info@envoyou.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                                                        info@envoyou.com
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-slate-800 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-4">Developer Resources</h3>
                                        <div className="space-y-3">
                                            <a href="/documentation" className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors">
                                                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                                </svg>
                                                API Documentation
                                            </a>
                                            <a href="https://github.com/hk-dev13/project-permit-api" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors">
                                                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                                GitHub Repository
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-slate-800 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-4">Response Time</h3>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-slate-400">General inquiries</span>
                                                <span className="text-white">24-48 hours</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-400">API support</span>
                                                <span className="text-white">12-24 hours</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-400">Enterprise support</span>
                                                <span className="text-emerald-400">4-8 hours</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-950">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="bg-slate-800 rounded-lg p-6" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="text-lg font-semibold text-white mb-2">How do I get started with the API?</h3>
                                <p className="text-slate-400">Visit our documentation page to get your free API key and start making requests immediately. Basic tier includes 100 requests per hour.</p>
                            </div>
                            <div className="bg-slate-800 rounded-lg p-6" data-aos="fade-up" data-aos-delay="300">
                                <h3 className="text-lg font-semibold text-white mb-2">Do you offer enterprise support?</h3>
                                <p className="text-slate-400">Yes! Enterprise customers get priority support, higher rate limits, custom endpoints, and dedicated account management.</p>
                            </div>
                            <div className="bg-slate-800 rounded-lg p-6" data-aos="fade-up" data-aos-delay="400">
                                <h3 className="text-lg font-semibold text-white mb-2">Which data sources do you aggregate?</h3>
                                <p className="text-slate-400">We aggregate data from EPA, EEA, ISO, EDGAR, CAMPD, and other authoritative environmental agencies. Visit our documentation for the complete list.</p>
                            </div>
                            <div className="bg-slate-800 rounded-lg p-6" data-aos="fade-up" data-aos-delay="500">
                                <h3 className="text-lg font-semibold text-white mb-2">Can I contribute to the project?</h3>
                                <p className="text-slate-400">Absolutely! Envoyou is open source. Check out our GitHub repository to see how you can contribute to making environmental data more accessible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
