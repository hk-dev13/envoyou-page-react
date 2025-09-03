import React from 'react';
import { Link } from 'react-router-dom';

function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-slate-950">
            {/* Header Spacing */}
            <div className="pt-20">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    {/* Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
                        <Link to="/" className="hover:text-emerald-400 transition-colors">
                            Home
                        </Link>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-white">Terms of Service</span>
                    </nav>

                    {/* Page Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            Please read these terms and conditions carefully before using our service.
                        </p>
                        <p className="text-sm text-slate-500 mt-2">
                            Last updated: September 3, 2025
                        </p>
                    </div>

                    {/* Terms Content */}
                    <div className="prose prose-slate prose-invert max-w-none">
                        <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    By accessing and using EnvoyOU's CV Enhancement API service, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") govern your use of our website and API services.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    EnvoyOU provides a CV Enhancement API that helps users improve their resumes through AI-powered analysis and suggestions. Our service includes:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li>CV content analysis and optimization</li>
                                    <li>Skill gap identification</li>
                                    <li>Industry-specific recommendations</li>
                                    <li>ATS (Applicant Tracking System) optimization</li>
                                    <li>API access for developers</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts and API Keys</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    To use our API, you must create an account and obtain an API key. You are responsible for:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li>Maintaining the confidentiality of your API key</li>
                                    <li>All activities that occur under your account</li>
                                    <li>Notifying us immediately of any unauthorized use</li>
                                    <li>Providing accurate and complete information</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">4. Acceptable Use Policy</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    You agree not to use our service to:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li>Violate any applicable laws or regulations</li>
                                    <li>Infringe on intellectual property rights</li>
                                    <li>Upload malicious code or attempt to breach security</li>
                                    <li>Exceed rate limits or abuse our API</li>
                                    <li>Use the service for spam or fraudulent activities</li>
                                    <li>Reverse engineer or attempt to extract our algorithms</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">5. Privacy and Data Protection</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We take your privacy seriously. Please review our{' '}
                                    <Link to="/legal/privacy" className="text-emerald-400 hover:text-emerald-300 underline">
                                        Privacy Policy
                                    </Link>{' '}
                                    to understand how we collect, use, and protect your information. By using our service, you consent to our data practices as described in our Privacy Policy.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">6. Subscription and Billing</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Our service offers various subscription plans with different usage limits. You agree to:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li>Pay all charges associated with your selected plan</li>
                                    <li>Provide accurate billing information</li>
                                    <li>Update payment information as needed</li>
                                    <li>Understand that subscriptions auto-renew unless cancelled</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">7. Service Availability and Support</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. We provide:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li>Best effort service availability</li>
                                    <li>Email support for technical issues</li>
                                    <li>Documentation and API guides</li>
                                    <li>Advance notice of planned maintenance</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">8. Intellectual Property</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    All content and technology provided by EnvoyOU, including but not limited to our API, algorithms, and documentation, are protected by intellectual property laws. You retain ownership of your data while granting us necessary rights to provide our service.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    EnvoyOU shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our service. Our total liability shall not exceed the amount paid by you for the service in the 12 months preceding the claim.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Either party may terminate this agreement at any time. Upon termination:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li>Your access to the service will be discontinued</li>
                                    <li>Outstanding fees remain due and payable</li>
                                    <li>We may delete your data after 30 days</li>
                                    <li>These terms survive termination where applicable</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to Terms</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through our service. Continued use of the service after changes constitutes acceptance of the new terms.
                                </p>
                            </section>

                            <section className="mb-0">
                                <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Information</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    If you have any questions about these Terms of Service, please contact us:
                                </p>
                                <div className="bg-slate-800/50 rounded-lg p-4 mt-4">
                                    <p className="text-slate-300">
                                        <strong className="text-white">Email:</strong> legal@envoyou.com<br />
                                        <strong className="text-white">Address:</strong> EnvoyOU Legal Department<br />
                                        <strong className="text-white">Response Time:</strong> Within 48 hours
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/legal/privacy"
                            className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            View Privacy Policy
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.964L3 20l1.964-5.874A8.955 8.955 0 013 12a8 8 0 018-8 8 8 0 018 8z" />
                            </svg>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsOfServicePage;
