import React, { useState } from 'react';
import Button from './Button';

const CevsCalculator = () => {
  const [score, setScore] = useState(50);
  const [factors, setFactors] = useState({
    iso14001: false,
    renewableEnergy: false,
    emissionViolation: false
  });

  const calculateScore = (newFactors) => {
    let baseScore = 50;

    if (newFactors.iso14001) baseScore += 30; // ISO 14001 certification
    if (newFactors.renewableEnergy) baseScore += 12; // Exceeds renewable targets
    if (newFactors.emissionViolation) baseScore -= 30; // Emission violations

    // Ensure score stays within 0-100 range
    return Math.max(0, Math.min(100, baseScore));
  };

  const toggleFactor = (factor) => {
    const newFactors = {
      ...factors,
      [factor]: !factors[factor]
    };
    setFactors(newFactors);
    setScore(calculateScore(newFactors));
  };

  const getScoreColor = () => {
    if (score >= 80) return '#2ECC71'; // Green
    if (score >= 60) return '#F39C12'; // Orange
    return '#E74C3C'; // Red
  };

  const getScoreLabel = () => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Poor';
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 max-w-md mx-auto" style={{ backgroundColor: 'rgba(13, 17, 23, 0.5)', borderColor: 'var(--envoyou-border)' }}>
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--envoyou-white)' }}>
          CEVS Score Calculator
        </h3>
        <div className="relative">
          <div
            className="w-32 h-32 rounded-full border-8 flex items-center justify-center mx-auto mb-4 transition-all duration-500"
            style={{
              borderColor: getScoreColor(),
              backgroundColor: 'rgba(13, 17, 23, 0.8)'
            }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: 'var(--envoyou-white)' }}>
                {score}
              </div>
              <div className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>
                /100
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold mb-1" style={{ color: getScoreColor() }}>
              {getScoreLabel()}
            </div>
            <div className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>
              Environmental Performance
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div
          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
            factors.iso14001 ? 'border-green-500 bg-green-500/10' : 'border-slate-700 hover:border-slate-600'
          }`}
          onClick={() => toggleFactor('iso14001')}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
              factors.iso14001 ? 'bg-green-500 border-green-500' : 'border-slate-500'
            }`}>
              {factors.iso14001 && (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div>
              <div className="font-medium" style={{ color: 'var(--envoyou-white)' }}>
                Has ISO 14001 Certification
              </div>
              <div className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>
                +30 points • Environmental Management System
              </div>
            </div>
          </div>
        </div>

        <div
          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
            factors.renewableEnergy ? 'border-green-500 bg-green-500/10' : 'border-slate-700 hover:border-slate-600'
          }`}
          onClick={() => toggleFactor('renewableEnergy')}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
              factors.renewableEnergy ? 'bg-green-500 border-green-500' : 'border-slate-500'
            }`}>
              {factors.renewableEnergy && (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div>
              <div className="font-medium" style={{ color: 'var(--envoyou-white)' }}>
                Exceeds Renewable Energy Targets
              </div>
              <div className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>
                +12 points • Sustainability Leadership
              </div>
            </div>
          </div>
        </div>

        <div
          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
            factors.emissionViolation ? 'border-red-500 bg-red-500/10' : 'border-slate-700 hover:border-slate-600'
          }`}
          onClick={() => toggleFactor('emissionViolation')}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
              factors.emissionViolation ? 'bg-red-500 border-red-500' : 'border-slate-500'
            }`}>
              {factors.emissionViolation && (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div>
              <div className="font-medium" style={{ color: 'var(--envoyou-white)' }}>
                Has Emission Violation Records (EPA)
              </div>
              <div className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>
                -30 points • Regulatory Non-Compliance
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>
          Click factors to see how they impact the CEVS score
        </div>
      </div>
    </div>
  );
};

export default CevsCalculator;
