import React, { useState, useEffect } from 'react';
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

  // Data yang lebih realistis untuk data source breakdown
  const breakdownData = {
    labels: ['EDGAR Database', 'EPA Reports', 'EEA Standards', 'ISO Certified', 'Local Permits'],
    datasets: [{
      data: [42, 28, 15, 10, 5],
      backgroundColor: [
        '#10b981', // emerald
        '#60a5fa', // blue
        '#f97316', // orange
        '#f43f5e', // red
        '#a78bfa'  // purple
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
              <h4 className="text-lg font-semibold text-white">Global Emission Trends</h4>
              <div className="text-xs text-slate-400">2019-2024</div>
            </div>
            <div className="h-64">
              <Line data={trendData} options={lineOptions} />
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
      </div>
    </section>
  );
};

export default VisualizationsSection;