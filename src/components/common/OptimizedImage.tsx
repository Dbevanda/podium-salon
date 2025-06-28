
import { useState, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  fallback = '/placeholder.svg',
  loading = 'lazy',
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
    onError?.();
  }, [onError]);

  if (imageError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}>
        <span className="text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={`transition-opacity duration-300 ${
        imageLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      loading={loading}
      onLoad={handleImageLoad}
      onError={handleImageError}
    />
  );
};

export default OptimizedImage;
