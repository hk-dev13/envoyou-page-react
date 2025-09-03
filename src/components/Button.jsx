import React from 'react';

/**
 * Enhanced Button Component
 * Provides smooth micro-interactions and loading states
 */

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-offset-2',
    secondary: 'text-slate-200 border border-slate-600 hover:bg-slate-600 focus:ring-slate-500',
    outline: 'border text-emerald-400 hover:text-white focus:ring-2',
    ghost: 'text-slate-300 hover:text-white hover:bg-slate-800 focus:ring-slate-500',
    danger: 'text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus:ring-2'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const handleClick = (e) => {
    if (!loading && !disabled && onClick) {
      // Add ripple effect
      const button = e.currentTarget;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.className = 'absolute rounded-full bg-white bg-opacity-30 animate-ping';

      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);

      onClick(e);
    }
  };

  const getVariantStyles = (variant) => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--envoyou-green)',
          '--tw-ring-color': 'var(--envoyou-green)'
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--envoyou-dark-light)',
          '--tw-ring-color': 'var(--envoyou-gray)'
        };
      case 'outline':
        return {
          borderColor: 'var(--envoyou-green)',
          '--tw-ring-color': 'var(--envoyou-green)'
        };
      case 'ghost':
        return {
          '--tw-ring-color': 'var(--envoyou-gray)'
        };
      case 'danger':
        return {
          backgroundColor: '#e53e3e',
          '--tw-ring-color': '#e53e3e'
        };
      default:
        return {};
    }
  };

  const getHoverStyles = (variant) => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: 'var(--envoyou-green-hover)' };
      case 'outline':
        return { backgroundColor: 'var(--envoyou-green)' };
      default:
        return {};
    }
  };

  return (
    <button
      className={buttonClasses}
      style={{
        ...getVariantStyles(variant),
        ':hover': getHoverStyles(variant)
      }}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}

      {!loading && icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}

      <span className={loading ? 'opacity-75' : ''}>
        {children}
      </span>

      {!loading && icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

export default Button;
