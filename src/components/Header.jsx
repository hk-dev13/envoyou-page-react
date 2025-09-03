import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated, user, logout } = useAuth();

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
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 glass-nav">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
                <div className="text-emerald-400">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="25" height="25" viewBox="0 0 300 300" className="text-emerald-400"
                     preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0,300) scale(0.1,-0.1)"
                    fill="currentColor" stroke="none">
                    <path d="M1130 2950 c-116 -24 -199 -54 -301 -106 -275 -142 -540 -405 -671
                    -668 l-30 -61 58 60 c160 164 359 268 619 321 76 16 135 19 375 19 244 -1 305
                    -4 425 -23 149 -23 213 -37 222 -46 3 -3 -97 -3 -223 1 -626 16 -1012 -96
                    -1269 -368 -86 -93 -135 -161 -190 -268 -28 -54 -36 -78 -29 -89 15 -23 216
                    -121 326 -158 189 -64 337 -77 493 -45 157 32 288 94 470 219 397 275 509 326
                    720 325 168 -1 311 -48 510 -168 44 -26 83 -49 86 -51 9 -5 -24 100 -56 179
                    -102 257 -298 507 -521 666 -92 66 -292 170 -379 197 -179 56 -343 85 -473 83
                    -42 0 -115 -9 -162 -19z"/>
                    <path d="M2115 2835 c383 -259 598 -551 681 -920 8 -38 18 -140 21 -225 22
                    -608 -246 -1030 -743 -1175 -288 -84 -715 -70 -1084 35 -108 31 -94 32 85 3
                    149 -24 536 -23 670 1 313 57 542 170 718 356 71 74 157 186 157 204 0 10
                    -216 149 -293 187 -185 94 -381 133 -554 111 -166 -21 -263 -60 -623 -249
                    -215 -113 -311 -144 -465 -151 -103 -4 -132 -1 -200 17 -136 38 -274 114 -419
                    233 -32 27 -60 47 -62 45 -7 -7 39 -207 67 -292 17 -49 57 -142 90 -205 378
                    -732 1274 -1018 2011 -643 483 246 792 723 815 1258 15 362 -85 690 -300 981
                    -71 95 -217 237 -323 313 -76 54 -312 181 -336 181 -5 0 34 -29 87 -65z"/>
                    </g>
                    </svg>
                </div>

                <h1 className="text-xl font-bold text-white">Envoyou</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
                {location.pathname === '/' ? (
                    <>
                        <a
                            href="#features"
                            className="text-slate-300 hover:text-emerald-400 transition-colors"
                        >
                            Features
                        </a>
                        <Link
                            to="/pricing"
                            className="text-slate-300 hover:text-emerald-400 transition-colors"
                        >
                            Pricing
                        </Link>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => handleSectionNavigation('features')}
                            className="text-slate-300 hover:text-emerald-400 transition-colors"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => navigate('/pricing')}
                            className="text-slate-300 hover:text-emerald-400 transition-colors"
                        >
                            Pricing
                        </button>
                    </>
                )}
                <Link
                    to="/documentation"
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                    Documentation
                </Link>
                <Link
                    to="/about"
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                    Contact
                </Link>
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
            
            {isAuthenticated ? (
                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        to="/dashboard"
                        className="text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                        Dashboard
                    </Link>
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                                {user?.first_name?.[0] || user?.email?.[0] || 'U'}
                            </span>
                        </div>
                        <button
                            onClick={logout}
                            className="text-slate-400 hover:text-white transition-colors"
                            title="Sign out"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </button>
                    </div>
                </div>
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
                    {location.pathname === '/' ? (
                        <>
                            <a
                                href="#features"
                                className="text-slate-300 hover:text-emerald-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </a>
                            <Link
                                to="/pricing"
                                className="text-slate-300 hover:text-emerald-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => {
                                    handleSectionNavigation('features');
                                    setIsMenuOpen(false);
                                }}
                                className="text-slate-300 hover:text-emerald-400 transition-colors text-left"
                            >
                                Features
                            </button>
                            <button
                                onClick={() => {
                                    navigate('/pricing');
                                    setIsMenuOpen(false);
                                }}
                                className="text-slate-300 hover:text-emerald-400 transition-colors text-left"
                            >
                                Pricing
                            </button>
                        </>
                    )}
                    <Link
                        to="/documentation"
                        className="text-slate-300 hover:text-emerald-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Documentation
                    </Link>
                    <Link
                        to="/about"
                        className="text-slate-300 hover:text-emerald-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="text-slate-300 hover:text-emerald-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    {isAuthenticated ? (
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
                                            {user?.first_name?.[0] || user?.email?.[0] || 'U'}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">
                                            {user?.first_name ? `${user.first_name} ${user.last_name}` : user?.email}
                                        </div>
                                        <div className="text-slate-400 text-sm">
                                            {user?.email}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        logout();
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