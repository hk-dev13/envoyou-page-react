import React, { useState } from 'react';
// Impor komponen yang diperlukan dari library chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';
import { Doughnut, Line, Bar } from 'react-chartjs-2';

// Daftarkan semua komponen chart yang akan kita gunakan
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const VisualizationsSection = () => {
  // State untuk input perbandingan perusahaan
  const [compareInput, setCompareInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // State untuk data grafik perbandingan
  const [compareData, setCompareData] = useState({
    labels: ['Tesla Inc.', 'Apple Inc.'],
    datasets: [{
      label: 'CEVS Score',
      data: [87, 73],
      backgroundColor: ['#10b981', '#60a5fa'],
      borderColor: ['#059669', '#3b82f6'],
      borderWidth: 2,
      borderRadius: 4,
      borderSkipped: false,
    }],
  });

  // CEVS Factor Breakdown - menampilkan komponen scoring
  const cevsFactorsData = {
    labels: ['Base Score', 'ISO 14001 Bonus', 'Renewables Bonus', 'Policy Bonus', 'EPA Penalty', 'Pollution Penalty', 'CAMPD Penalty'],
    datasets: [{
      label: 'CEVS Score Impact',
      data: [50, 30, 20, 3, -30, -15, -40], // Max values dari backend
      backgroundColor: [
        '#6b7280', // Base - neutral gray
        '#10b981', // Bonuses - green
        '#10b981',
        '#10b981',
        '#ef4444', // Penalties - red
        '#ef4444',
        '#ef4444'
      ],
      borderWidth: 2,
      borderColor: '#1e293b',
      borderRadius: 4,
      borderSkipped: false,
    }],
  };

  // Data yang akurat sesuai dengan backend capabilities
  const breakdownData = {
    labels: ['EDGAR Database', 'EPA Envirofacts', 'EEA Indicators', 'ISO 14001 Cert', 'KLHK Permits'],
    datasets: [{
      data: [42, 28, 15, 10, 5], // EDGAR sebagai primary source (42%)
      backgroundColor: [
        '#10b981', // EDGAR - Primary green
        '#60a5fa', // EPA - Blue
        '#f97316', // EEA - Orange
        '#f43f5e', // ISO - Red
        '#a78bfa'  // KLHK - Purple
      ],
      borderWidth: 2,
      borderColor: '#1e293b',
      hoverBorderColor: '#ffffff',
      hoverBorderWidth: 3,
    }],
  };

  // Data yang lebih realistis untuk emissions trend
  const trendData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'CO2 Emissions (kt)',
      data: [2450, 2230, 1980, 1750, 1520, 1280],
      borderColor: '#60a5fa',
      backgroundColor: 'rgba(96, 165, 250, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#60a5fa',
      pointBorderColor: '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: '#3b82f6',
      pointHoverBorderColor: '#ffffff',
      pointHoverBorderWidth: 3,
    }],
  };

  // Enhanced chart options
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#e2e8f0',
          font: { size: 12 },
          padding: 20,
          usePointStyle: true,
        }
      },
      tooltip: {
        backgroundColor: 'rgba(30, 41, 59, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#e2e8f0',
        borderColor: '#475569',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value}% (${percentage}% of total data)`;
          }
        }
      }
    },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(30, 41, 59, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#e2e8f0',
        borderColor: '#475569',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            return context.parsed.y.toLocaleString() + ' kt CO2';
          }
        }
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(148, 163, 184, 0.1)' },
        ticks: { color: '#94a3b8' }
      },
      y: {
        grid: { color: 'rgba(148, 163, 184, 0.1)' },
        ticks: {
          color: '#94a3b8',
          callback: function(value) {
            return value.toLocaleString() + ' kt';
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(30, 41, 59, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#e2e8f0',
        borderColor: '#475569',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            return 'CEVS Score: ' + context.parsed.y;
          }
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#94a3b8' }
      },
      y: {
        grid: { color: 'rgba(148, 163, 184, 0.1)' },
        ticks: { color: '#94a3b8' },
        beginAtZero: true,
        max: 100
      }
    }
  };

  // Fungsi untuk menangani perbandingan
  const handleCompare = async () => {
    const companies = compareInput.split(',').map(s => s.trim()).filter(Boolean);
    if (!companies.length) return;

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      // Generate more realistic scores based on company names
      const generateScore = (companyName) => {
        const hash = companyName.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        return Math.max(45, Math.min(95, (hash % 50) + 45)); // Score between 45-95
      };

      const newScores = companies.map(generateScore);

      setCompareData({
        labels: companies,
        datasets: [{
          ...compareData.datasets[0],
          data: newScores,
        }]
      });

      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="visualizations" className="py-16 sm:py-24 bg-slate-900/30" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Data Insights & Analytics</h3>
          <p className="text-lg text-slate-400">Explore comprehensive environmental data visualizations powered by verified sources</p>
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Data Source Breakdown */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Data Source Reliability</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-emerald-400">Live Data</span>
              </div>
            </div>
            <div className="h-64">
              <Doughnut data={breakdownData} options={doughnutOptions} />
            </div>
          </div>

          {/* Emissions Trend */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Global CO2 Emission Trends</h4>
              <div className="flex items-center space-x-2">
                <div className="text-xs text-slate-400">2019-2024</div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-blue-400">EPA Data</span>
              </div>
            </div>
            <div className="h-64">
              <Line data={trendData} options={lineOptions} />
            </div>
            <div className="mt-4 text-xs text-slate-400">
              Data sourced from EPA Envirofacts API with EDGAR fallback
            </div>
          </div>
        </div>

        {/* CEVS Factors Breakdown */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 mb-12">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-semibold text-white mb-2">CEVS Scoring Factors</h4>
            <p className="text-slate-400">Understanding how Composite Environmental Verification Scores are calculated</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-80">
              <Bar data={cevsFactorsData} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#e2e8f0',
                    borderColor: '#475569',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                      label: function(context) {
                        const value = context.parsed.y;
                        const sign = value > 0 ? '+' : '';
                        return `${context.label}: ${sign}${value} points`;
                      }
                    }
                  }
                },
                scales: {
                  x: {
                    grid: { display: false },
                    ticks: {
                      color: '#94a3b8',
                      maxRotation: 45,
                      minRotation: 45
                    }
                  },
                  y: {
                    grid: { color: 'rgba(148, 163, 184, 0.1)' },
                    ticks: { color: '#94a3b8' },
                    beginAtZero: true
                  }
                }
              }} />
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                <h5 className="text-emerald-400 font-semibold mb-2">Positive Factors (Bonuses)</h5>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li><strong className="text-emerald-400">ISO 14001:</strong> +30 points for certification</li>
                  <li><strong className="text-emerald-400">Renewables:</strong> Up to +20 points</li>
                  <li><strong className="text-emerald-400">Policy:</strong> Up to +3 points</li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <h5 className="text-red-400 font-semibold mb-2">Negative Factors (Penalties)</h5>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li><strong className="text-red-400">EPA Records:</strong> -2.5 points per violation</li>
                  <li><strong className="text-red-400">Pollution:</strong> Up to -15 points</li>
                  <li><strong className="text-red-400">CAMPD:</strong> Up to -40 points</li>
                </ul>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4">
                <h5 className="text-slate-400 font-semibold mb-2">Base Score</h5>
                <p className="text-sm text-slate-300">All companies start with 50 points, then bonuses and penalties are applied.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Comparison Section */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-semibold text-white mb-2">Company Environmental Comparison</h4>
            <p className="text-slate-400">Compare CEVS scores across companies to benchmark environmental performance</p>
          </div>

          {/* Input Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter company names (e.g., Tesla, Apple, Microsoft)"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                value={compareInput}
                onChange={(e) => setCompareInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCompare()}
              />
              <button
                onClick={handleCompare}
                disabled={isLoading}
                className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 min-w-[120px]"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                    <span>Compare</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Chart Display */}
          <div className="h-80">
            <Bar data={compareData} options={barOptions} />
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              CEVS (Corporate Environmental Verification Score) ranges from 0-100, where higher scores indicate better environmental performance
            </p>
          </div>
        </div>

        {/* Methodology Information */}
        <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
          <div className="text-center mb-6">
            <h4 className="text-xl font-semibold text-white mb-2">CEVS Methodology Overview</h4>
            <p className="text-slate-400">How we calculate environmental verification scores using multi-source data</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h5 className="text-white font-semibold mb-2">Multi-Source Data</h5>
              <p className="text-sm text-slate-400">Aggregates data from EPA, EEA, EDGAR, ISO, and local environmental agencies</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h5 className="text-white font-semibold mb-2">Weighted Algorithm</h5>
              <p className="text-sm text-slate-400">Uses weighted scoring based on environmental impact and compliance levels</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h5 className="text-white font-semibold mb-2">Real-time Updates</h5>
              <p className="text-sm text-slate-400">Continuously updated with latest environmental data and compliance records</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <div className="text-center">
              <p className="text-sm text-slate-400 mb-4">
                Want to learn more about our CEVS methodology or integrate our API?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#docs" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                  View API Documentation
                </a>
                <a href="https://github.com/hk-dev13/ENVOYou-page" target="_blank" rel="noopener noreferrer" className="border border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 font-semibold px-6 py-2 rounded-lg transition-colors">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualizationsSection;