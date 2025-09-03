import React from 'react';
import { Link } from 'react-router-dom';

const InfoCard = ({
  icon,
  title,
  description,
  link,
  className = '',
  iconClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  onClick
}) => {
  const CardContent = () => (
    <div className={`
      bg-slate-900/50 backdrop-blur-sm
      border border-slate-800
      rounded-xl p-6
      hover:bg-slate-800/50 hover:border-slate-700
      transition-all duration-300
      h-full
      ${onClick ? 'cursor-pointer' : ''}
      ${className}
    `} style={{
      backgroundColor: 'rgba(13, 17, 23, 0.5)',
      borderColor: 'var(--envoyou-border)',
      '--tw-ring-color': 'var(--envoyou-green)'
    }}>
      {/* Icon */}
      <div className={`
        w-12 h-12
        bg-emerald-500/10
        border border-emerald-500/20
        rounded-lg
        flex items-center justify-center
        mb-4
        ${iconClassName}
      `} style={{
        backgroundColor: 'var(--envoyou-green-light)',
        borderColor: 'var(--envoyou-green)'
      }}>
        {typeof icon === 'string' ? (
          <span className="text-emerald-400 text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
        ) : (
          <div className="text-emerald-400 w-6 h-6" style={{ color: 'var(--envoyou-green)' }}>
            {icon}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className={`
        text-lg font-semibold text-white
        mb-3
        ${titleClassName}
      `} style={{ color: 'var(--envoyou-white)' }}>
        {title}
      </h3>

      {/* Description */}
      <p className={`
        text-slate-400
        text-sm
        leading-relaxed
        ${descriptionClassName}
      `} style={{ color: 'var(--envoyou-gray)' }}>
        {description}
      </p>
    </div>
  );

  // If link is provided, wrap in Link component
  if (link) {
    return (
      <Link to={link} className="block h-full">
        <CardContent />
      </Link>
    );
  }

  // If onClick is provided, wrap in button-like div
  if (onClick) {
    return (
      <div onClick={onClick} className="h-full">
        <CardContent />
      </div>
    );
  }

  // Default card without link or click handler
  return <CardContent />;
};

export default InfoCard;
