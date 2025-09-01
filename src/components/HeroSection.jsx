import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative h-screen flex items-center justify-center hero-gradient">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    Transform Fragmented Environmental Data.
                    <br className="hidden md:block" />
                    <span className="text-emerald-400">Into Verified Insights.</span>
                </h2>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400">
                    Unified access to standardized global environmental datasets for ESG businesses, analysts, and investors. Stop time-consuming manual data collection and start making strategic data-driven decisions with confidence.
                </p>
                <div className="mt-10 flex justify-center items-center space-x-4">
                    <Link to="documentation.html" className="bg-white text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-200 transition-colors text-lg">
                        View Documentation
                    </Link>
                    <Link to="https://github.com/hk-dev13/project-permit-api" target="_blank" className="border border-slate-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors text-lg">
                        View on GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
