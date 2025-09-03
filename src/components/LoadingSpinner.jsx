import React from 'react';

/**
 * Loading Spinner Component
 * Provides smooth, customizable loading animations
 */

const LoadingSpinner = ({
  size = 'md',
  color = 'emerald',
  className = '',
  text = '',
  overlay = false
}) => {
  const sizes = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colors = {
    emerald: 'text-emerald-400',
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    white: 'text-white',
    slate: 'text-slate-400'
  };

  const spinner = (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <div className={`relative ${sizes[size]}`}>
        {/* Outer ring */}
        <div className={`absolute inset-0 rounded-full border-2 border-transparent ${colors[color]} opacity-20`}></div>

        {/* Spinning ring */}
        <div className={`absolute inset-0 rounded-full border-2 border-transparent ${colors[color]} animate-spin`}
             style={{
               borderTopColor: 'currentColor',
               animation: 'spin 1s linear infinite'
             }}>
        </div>

        {/* Inner dot */}
        <div className={`absolute inset-2 rounded-full bg-current ${colors[color]} opacity-60 animate-pulse`}></div>
      </div>

      {text && (
        <p className={`mt-2 text-sm ${colors[color]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

// Pulse animation for content loading
export const PulseLoader = ({ className = '', children }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {children}
    </div>
  );
};

// Shimmer effect for skeleton loading
export const ShimmerLoader = ({ className = '', height = '1rem', width = '100%' }) => {
  return (
    <div
      className={`bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded ${className}`}
      style={{ width, height }}
    />
  );
};

export default LoadingSpinner;
