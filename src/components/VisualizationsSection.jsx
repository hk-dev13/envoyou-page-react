import React, { useState, useEffect } from 'react';
// Impor komponen yang diperlukan dari library chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';
import { Doughnut, Line, Bar } from 'react-chartjs-2';

// Daftarkan semua komponen chart yang akan kita gunakan
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const VisualizationsSection = () => {
  // State untuk input perbandingan perusahaan
  const [compareInput, setCompareInput] = useState('');
  // State untuk data grafik perbandingan
  const [compareData, setCompareData] = useState({
    labels: ['Example A', 'Example B'],
    datasets: [{
      label: 'CEVS Score',
      data: [72, 64],
      backgroundColor: ['#10b981', '#60a5fa'],
    }],
  });

  // Data mock/statis untuk dua grafik pertama
  const breakdownData = {
    labels: ['EDGAR', 'EPA', 'EEA', 'ISO', 'Local Permits'],
    datasets: [{
      data: [35, 25, 20, 10, 10],
      backgroundColor: ['#10b981', '#60a5fa', '#f97316', '#f43f5e', '#a78bfa'],
    }],
  };

  const trendData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'CO2 (kt)',
      data: [120, 115, 110, 105, 100, 95],
      borderColor: '#60a5fa',
      fill: false,
    }],
  };

  // Fungsi untuk menangani perbandingan
  const handleCompare = () => {
    const companies = compareInput.split(',').map(s => s.trim()).filter(Boolean);
    if (!companies.length) return;

    // Di aplikasi nyata, Anda akan mengambil data API di sini.
    // Untuk sekarang, kita gunakan data acak sebagai contoh.
    const newScores = companies.map(() => Math.floor(Math.random() * 100));
    
    setCompareData({
      labels: companies,
      datasets: [{
        ...compareData.datasets[0],
        data: newScores,
      }]
    });
  };


  return (
            <section id="visualizations" className="py-16 sm:py-24 bg-slate-900/30" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Visualize Environmental Data</h3>
          <p className="mt-4 text-lg text-slate-400">Interactive charts show data source breakdowns, emission trends over years, and company comparisons.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h4 className="text-lg font-semibold text-white">Data Source Breakdown</h4>
            <Doughnut data={breakdownData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h4 className="text-lg font-semibold text-white">Emissions Trend (per year)</h4>
            <Line data={trendData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>

        <div className="mt-8 bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h4 className="text-lg font-semibold text-white">Company Comparison</h4>
          <p className="text-slate-400 mt-2">Enter company names (comma separated) to compare CEVS scores.</p>
          <div className="mt-4 flex items-center space-x-3">
            <input
              type="text"
              placeholder="Company A, Company B"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none"
              value={compareInput}
              onChange={(e) => setCompareInput(e.target.value)}
            />
            <button
              onClick={handleCompare}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3 rounded-lg"
            >
              Compare
            </button>
          </div>
          <div className="mt-6">
            <Bar data={compareData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualizationsSection;