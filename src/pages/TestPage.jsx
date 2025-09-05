import React from 'react';
import DemoKeyManager from '../components/DemoKeyManager';
import CevsLookupSection from '../components/CevsLookupSection';

const TestPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            🧪 API <span className="text-emerald-400">Test Center</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-400">
            Test the Envoyou CEVS API with our interactive demo. Get a free API key and explore environmental data verification capabilities.
          </p>
        </div>

        {/* Demo Key Manager */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Get Your Demo API Key</h2>
          <DemoKeyManager />
        </div>

        {/* CEVS Lookup Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Test CEVS Company Lookup</h2>
          <CevsLookupSection />
        </div>

        {/* API Status */}
        <div className="bg-slate-800 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-emerald-400 mb-4">✅ API Status: Online</h3>
          <p className="text-slate-300">
            Backend API is running at <code className="bg-slate-700 px-2 py-1 rounded">https://api.envoyou.com</code>
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-slate-700 rounded p-4">
              <h4 className="font-semibold text-emerald-400">Health Check</h4>
              <p className="text-slate-300">✅ System healthy</p>
            </div>
            <div className="bg-slate-700 rounded p-4">
              <h4 className="font-semibold text-emerald-400">Demo Keys</h4>
              <p className="text-slate-300">✅ Available</p>
            </div>
            <div className="bg-slate-700 rounded p-4">
              <h4 className="font-semibold text-emerald-400">CEVS Data</h4>
              <p className="text-slate-300">✅ Ready</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
