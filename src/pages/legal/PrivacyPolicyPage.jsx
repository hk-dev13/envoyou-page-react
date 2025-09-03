import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicyPage() {
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
                        <span className="text-white">Privacy Policy</span>
                    </nav>

                    {/* Page Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                        </p>
                        <p className="text-sm text-slate-500 mt-2">
                            Last updated: September 3, 2025
                        </p>
                    </div>

                    {/* Privacy Content */}
                    <div className="prose prose-slate prose-invert max-w-none">
                        <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We collect information you provide directly to us and information we obtain automatically when you use our services.
                                </p>
                                
                                <h3 className="text-xl font-medium text-white mb-3">Information You Provide</h3>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
                                    <li><strong>Account Information:</strong> Name, email address, company name, job title</li>
                                    <li><strong>CV Content:</strong> Resume text, skills, experience, education details</li>
                                    <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely by our payment providers)</li>
                                    <li><strong>Communication Data:</strong> Messages you send to our support team</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-3">Information Collected Automatically</h3>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li><strong>Usage Data:</strong> API requests, feature usage, response times</li>
                                    <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                                    <li><strong>Log Data:</strong> Access times, pages viewed, actions taken</li>
                                    <li><strong>Cookies:</strong> Session cookies, preference cookies, analytics cookies</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We use the information we collect to provide, maintain, and improve our services:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li><strong>Service Delivery:</strong> Process your CV content and provide enhancement suggestions</li>
                                    <li><strong>Account Management:</strong> Create and maintain your account, authenticate API requests</li>
                                    <li><strong>Communication:</strong> Send service updates, technical notices, and respond to inquiries</li>
                                    <li><strong>Improvement:</strong> Analyze usage patterns to enhance our AI algorithms</li>
                                    <li><strong>Security:</strong> Detect and prevent fraud, abuse, and security incidents</li>
                                    <li><strong>Compliance:</strong> Meet legal obligations and enforce our terms</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing and Disclosure</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We do not sell, trade, or rent your personal information. We may share your information only in these limited circumstances:
                                </p>
                                
                                <h3 className="text-xl font-medium text-white mb-3">Service Providers</h3>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We work with trusted third-party providers who help us deliver our services:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
                                    <li>Cloud hosting providers (AWS, Google Cloud)</li>
                                    <li>Payment processors (Stripe, PayPal)</li>
                                    <li>Email service providers</li>
                                    <li>Analytics services (anonymized data only)</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-3">Legal Requirements</h3>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We may disclose information when required by law or to protect our rights and users.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We implement comprehensive security measures to protect your information:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                                    <li><strong>Access Control:</strong> Strict employee access controls and regular security training</li>
                                    <li><strong>Infrastructure:</strong> SOC 2 compliant cloud infrastructure</li>
                                    <li><strong>Monitoring:</strong> 24/7 security monitoring and incident response</li>
                                    <li><strong>Testing:</strong> Regular penetration testing and vulnerability assessments</li>
                                    <li><strong>Backup:</strong> Secure, encrypted backups with geographic redundancy</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We retain your information only as long as necessary to provide our services and comply with legal obligations:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li><strong>Account Data:</strong> Retained while your account is active</li>
                                    <li><strong>CV Content:</strong> Deleted 30 days after account closure</li>
                                    <li><strong>Usage Logs:</strong> Retained for 12 months for security and improvement purposes</li>
                                    <li><strong>Financial Records:</strong> Retained for 7 years for tax and legal compliance</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights and Choices</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    You have several rights regarding your personal information:
                                </p>
                                
                                <h3 className="text-xl font-medium text-white mb-3">Access and Control</h3>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
                                    <li><strong>Account Settings:</strong> Update your profile and preferences anytime</li>
                                    <li><strong>Data Export:</strong> Request a copy of your data in portable format</li>
                                    <li><strong>Data Deletion:</strong> Delete your account and associated data</li>
                                    <li><strong>Communication Preferences:</strong> Opt-out of marketing emails</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-3">GDPR Rights (EU Users)</h3>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    If you're located in the European Union, you have additional rights under GDPR:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li>Right to rectification of inaccurate data</li>
                                    <li>Right to data portability</li>
                                    <li>Right to object to processing</li>
                                    <li>Right to lodge complaints with supervisory authorities</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Tracking</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We use cookies and similar technologies to improve your experience:
                                </p>
                                
                                <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                                    <h4 className="text-lg font-medium text-white mb-2">Essential Cookies</h4>
                                    <p className="text-slate-300 text-sm">
                                        Required for basic site functionality, authentication, and security.
                                    </p>
                                </div>
                                
                                <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                                    <h4 className="text-lg font-medium text-white mb-2">Analytics Cookies</h4>
                                    <p className="text-slate-300 text-sm">
                                        Help us understand how users interact with our service (anonymized).
                                    </p>
                                </div>
                                
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <h4 className="text-lg font-medium text-white mb-2">Preference Cookies</h4>
                                    <p className="text-slate-300 text-sm">
                                        Remember your settings and preferences for a better experience.
                                    </p>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">8. International Data Transfers</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Our services are hosted in secure data centers. When we transfer data internationally, we ensure adequate protection through:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li>Standard Contractual Clauses approved by the European Commission</li>
                                    <li>Adequacy decisions for certain countries</li>
                                    <li>Additional safeguards for data protection</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by:
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                    <li>Email notification to your registered address</li>
                                    <li>Prominent notice on our website</li>
                                    <li>In-app notifications for significant changes</li>
                                </ul>
                            </section>

                            <section className="mb-0">
                                <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    If you have questions about this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className="bg-slate-800/50 rounded-lg p-4 mt-4">
                                    <p className="text-slate-300">
                                        <strong className="text-white">Data Protection Officer:</strong> privacy@envoyou.com<br />
                                        <strong className="text-white">General Inquiries:</strong> support@envoyou.com<br />
                                        <strong className="text-white">Address:</strong> EnvoyOU Privacy Team<br />
                                        <strong className="text-white">Response Time:</strong> Within 48 hours
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/legal/terms"
                            className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            View Terms of Service
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.964L3 20l1.964-5.874A8.955 8.955 0 013 12a8 8 0 018-8 8 8 0 018 8z" />
                            </svg>
                            Contact Privacy Team
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicyPage;
