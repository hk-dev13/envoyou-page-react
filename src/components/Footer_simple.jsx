import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-green-400">🚀 EnvoyOU</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Professional CV Enhancement API Service with enterprise-grade features.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/documentation" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                            <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400 text-sm">
                            Ready for production deployment
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 EnvoyOU. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
