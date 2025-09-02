import React from 'react';

/**
 * Optimized Image Component with WebP support and lazy loading
 * Usage: <OptimizedImage src="/path/to/image.jpg" alt="Description" width={800} height={600} />
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  ...props
}) => {
  // Convert JPG/PNG to WebP
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const isWebP = /\.(webp)$/i.test(src);

  return (
    <picture className={className}>
      {/* WebP version for modern browsers */}
      {!isWebP && (
        <source
          srcSet={webpSrc}
          type="image/webp"
          media="(min-width: 768px)"
        />
      )}

      {/* Fallback for older browsers */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
