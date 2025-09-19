import React, { useEffect, useState } from 'react';
import { DASHBOARD_URL } from '../config/constants';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Handle scrolling to sections when navigating with hash
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                // Small delay to ensure the page has loaded
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const handleSectionNavigation = (sectionId) => {
        if (location.pathname !== '/') {
            navigate(`/#${sectionId}`);
        }
    };

    // Consolidated navigation links
    const navigationLinks = [
        { name: 'Features', href: null, to: '/features', isButton: false },
        { name: 'Pricing', href: null, to: '/pricing', isButton: false },
        { name: 'Docs', href: 'https://docs.envoyou.com/', to: null, isButton: false },
        { name: 'Test API', href: null, to: '/test', isButton: false },
        { name: 'About', href: null, to: '/about', isButton: false },
        { name: 'Contact', href: null, to: '/contact', isButton: false },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 glass-nav">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
                <img 
                    src="/svg/logo-full-nb.svg" 
                    alt="Envoyou" 
                    className="h-8 w-auto text-emerald-400"
                />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
                {navigationLinks.map((link) => {
                    if (link.isButton) {
                        return (
                            <button
                                key={link.name}
                                onClick={() => handleSectionNavigation(link.href.slice(1))}
                                className="text-slate-300 hover:text-emerald-400 transition-colors"
                            >
                                {link.name}
                            </button>
                        );
                    }
                    if (link.href) {
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-emerald-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        );
                    }
                    return (
                        <Link
                            key={link.name}
                            to={link.to}
                            className="text-slate-300 hover:text-emerald-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
            
            {/* Mobile menu button */}
            <button
                className="md:hidden flex items-center text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
            
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
                <a
                    href={`${DASHBOARD_URL}/auth/login`}
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                    Sign In
                </a>
                {location.pathname === 'https://docs.envoyou.com/' ? (
                    <Link
                        to="/pricing"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
                    >
                        Get API Key
                    </Link>
                ) : (
                    <a 
                        href={`${DASHBOARD_URL}/auth/register`} 
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
                    >
                        Get Started
                    </a>
                )}
            </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
                <nav className="flex flex-col p-4 space-y-4">
                    {navigationLinks.map((link) => {
                        if (link.isButton) {
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => {
                                        handleSectionNavigation(link.href.slice(1));
                                        setIsMenuOpen(false);
                                    }}
                                    className="text-slate-300 hover:text-emerald-400 transition-colors text-left"
                                >
                                    {link.name}
                                </button>
                            );
                        }
                        if (link.href) {
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            );
                        }
                        return (
                            <Link
                                key={link.name}
                                to={link.to}
                                className="text-slate-300 hover:text-emerald-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    {/* Mobile CTA */}
                    <div className="border-t border-slate-700 pt-4 mt-4 space-y-4">
                        <a
                            href={`${DASHBOARD_URL}/auth/login`}
                            className="text-slate-300 hover:text-emerald-400 transition-colors block"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign In
                        </a>
                        {location.pathname === '/documentation' ? (
                            <Link
                                to="/pricing"
                                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors text-center block"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get API Key
                            </Link>
                        ) : (
                            <a
                                href={`${DASHBOARD_URL}/auth/register`}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors text-center block"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </a>
                        )}
                    </div>
                </nav>
            </div>
        )}
    </header>
    );
}

export default Header;