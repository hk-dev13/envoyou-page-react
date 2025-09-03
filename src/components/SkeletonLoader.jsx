import React from 'react';

/**
 * Skeleton Loader Component
 * Provides animated placeholder content while data is loading
 */

const SkeletonLoader = ({
  className = '',
  variant = 'rectangle',
  width = '100%',
  height = '1rem',
  lines = 1,
  animate = true
}) => {
  const baseClasses = 'bg-slate-700 rounded';

  if (variant === 'text') {
    if (lines === 1) {
      return (
        <div
          className={`${baseClasses} ${animate ? 'animate-pulse' : ''} ${className}`}
          style={{ width, height }}
        />
      );
    }

    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${animate ? 'animate-pulse' : ''}`}
            style={{
              width: index === lines - 1 ? '60%' : width,
              height
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'circle') {
    return (
      <div
        className={`${baseClasses} ${animate ? 'animate-pulse' : ''} ${className}`}
        style={{
          width: width,
          height: width,
          borderRadius: '50%'
        }}
      />
    );
  }

  if (variant === 'card') {
    return (
      <div className={`bg-slate-800 rounded-lg p-4 space-y-3 ${className}`}>
        <div className="flex items-center space-x-3">
          <SkeletonLoader variant="circle" width="2.5rem" height="2.5rem" />
          <div className="flex-1 space-y-2">
            <SkeletonLoader variant="text" width="60%" height="0.875rem" />
            <SkeletonLoader variant="text" width="40%" height="0.75rem" />
          </div>
        </div>
        <SkeletonLoader variant="rectangle" height="8rem" />
        <div className="flex space-x-2">
          <SkeletonLoader variant="text" width="4rem" height="2rem" />
          <SkeletonLoader variant="text" width="4rem" height="2rem" />
        </div>
      </div>
    );
  }

  // Default rectangle
  return (
    <div
      className={`${baseClasses} ${animate ? 'animate-pulse' : ''} ${className}`}
      style={{ width, height }}
    />
  );
};

export default SkeletonLoader;
