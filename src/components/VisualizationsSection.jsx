import React from 'react';

const VisualizationsSection = () => {
    return (
        <section id="visualizations" className="py-16 sm:py-24 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto scroll-reveal">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Visualize Environmental Data</h3>
                    <p className="mt-4 text-lg text-slate-400">Interactive charts show data source breakdowns, emission trends over years, and company comparisons.</p>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-lg font-semibold text-white">Data Source Breakdown</h4>
                        <canvas id="chart-breakdown" className="mt-4"></canvas>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-lg font-semibold text-white">Emissions Trend (per year)</h4>
                        <canvas id="chart-trend" className="mt-4"></canvas>
                    </div>
                </div>

                <div className="mt-8 bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h4 className="text-lg font-semibold text-white">Company Comparison</h4>
                    <p className="text-slate-400 mt-2">Enter company names (comma separated) to compare CEVS scores.</p>
                    <div className="mt-4 flex items-center space-x-3">
                        <input id="compare-companies" type="text" placeholder="Company A, Company B" className="flex-1 px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none" />
                        <button id="compare-btn" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3 rounded-lg">Compare</button>
                    </div>
                    <div className="mt-6">
                        <canvas id="chart-compare"></canvas>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisualizationsSection;
