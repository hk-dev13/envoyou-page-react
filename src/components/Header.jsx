import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated, user, logout, isLoading } = useAuth();

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isUserMenuOpen && !event.target.closest('.user-menu')) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isUserMenuOpen]);

    const handleSectionNavigation = (sectionId) => {
        if (location.pathname !== '/') {
            navigate(`/#${sectionId}`);
        }
    };

    const handleLogout = async () => {
        await logout();
        navigate('/');
        setIsUserMenuOpen(false);
    };

    // Consolidated navigation links
    const navigationLinks = [
        {
            name: 'Features',
            href: '#features',
            to: null,
            isButton: location.pathname !== '/',
        },
        {
            name: 'Pricing',
            href: null,
            to: '/pricing',
            isButton: false,
        },
        {
            name: 'Documentation',
            href: null,
            to: '/documentation',
            isButton: false,
        },
        {
            name: 'Test API',
            href: null,
            to: '/test',
            isButton: false,
        },
        {
            name: 'About',
            href: null,
            to: '/about',
            isButton: false,
        },
        {
            name: 'Contact',
            href: null,
            to: '/contact',
            isButton: false,
        },
    ];

    const UserMenu = () => (
        <div className="relative user-menu">
            <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                        {user?.name?.[0] || user?.email?.[0] || 'U'}
                    </span>
                </div>
                <span className="hidden lg:block">
                    {user?.name || user?.email}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg border border-slate-700 py-1 z-50">
                    <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                    >
                        Settings
                    </Link>
                    <div className="border-t border-slate-700 my-1"></div>
                    <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
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
            
            {isLoading ? (
                <div className="hidden md:flex items-center space-x-4">
                    <div className="w-8 h-8 bg-slate-700 rounded-full animate-pulse"></div>
                    <div className="w-20 h-4 bg-slate-700 rounded animate-pulse"></div>
                </div>
            ) : isAuthenticated ? (
                <UserMenu />
            ) : (
                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        to="/auth/login"
                        className="text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                        Sign In
                    </Link>
                    {location.pathname === '/documentation' ? (
                        <Link
                            to="/pricing"
                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
                        >
                            Get API Key
                        </Link>
                    ) : (
                        <Link 
                            to="/auth/register" 
                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
                        >
                            Get Started
                        </Link>
                    )}
                </div>
            )}
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
                    {isLoading ? (
                        <div className="flex items-center space-x-3 pt-4 border-t border-slate-700">
                            <div className="w-10 h-10 bg-slate-700 rounded-full animate-pulse"></div>
                            <div className="flex-1 space-y-2">
                                <div className="w-24 h-4 bg-slate-700 rounded animate-pulse"></div>
                                <div className="w-32 h-3 bg-slate-700 rounded animate-pulse"></div>
                            </div>
                        </div>
                    ) : isAuthenticated ? (
                        <>
                            <Link
                                to="/dashboard"
                                className="text-slate-300 hover:text-emerald-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Dashboard
                            </Link>
                            <div className="border-t border-slate-700 pt-4 mt-4">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-medium">
                                            {user?.name?.[0] || user?.email?.[0] || 'U'}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">
                                            {user?.name || user?.email}
                                        </div>
                                        <div className="text-slate-400 text-sm">
                                            {user?.email}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setIsMenuOpen(false);
                                    }}
                                    className="w-full text-left text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors flex items-center space-x-2 px-2 py-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/auth/login"
                                className="text-slate-300 hover:text-emerald-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign In
                            </Link>
                            {location.pathname === '/documentation' ? (
                                <Link
                                    to="/pricing"
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get API Key
                                </Link>
                            ) : (
                                <Link
                                    to="/auth/register"
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            )}
                        </>
                    )}
                </nav>
            </div>
        )}
    </header>
    );
}

export default Header;