import React, { useState, useRef, useEffect } from 'react';
import { Box, Skeleton } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  sx = {},
  placeholder = true,
  loading = 'lazy',
  ...props
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', src);
    setImageLoaded(true);
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', src, e);
    setImageError(true);
    setImageLoaded(true);
  };

  // Generate WebP and fallback sources
  const generateSrcSet = (baseSrc, sizes = [1, 2]) => {
    if (!baseSrc) return '';
    
    // For external images (like Unsplash), we can't convert to WebP
    if (baseSrc.includes('unsplash.com') || baseSrc.includes('http')) {
      return sizes.map(size => `${baseSrc}?w=${width * size}&h=${height * size}&fit=crop&auto=format&q=80 ${size}x`).join(', ');
    }
    
    // For local images, just use the original source
    return '';
  };

  const srcSet = generateSrcSet(src);

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        width: width || '100%',
        height: height || 'auto',
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
    >
      {/* Placeholder/Skeleton */}
      {placeholder && !imageLoaded && inView && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&::after': {
              background: 'linear-gradient(90deg, transparent, rgba(232, 62, 106, 0.1), transparent)',
            },
          }}
        />
      )}

      {/* Actual Image */}
      {inView && (
        <Box
          component="img"
          src={src}
          srcSet={srcSet}
          alt={alt}
          loading={loading}
          onLoad={handleImageLoad}
          onError={handleImageError}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            ...(imageError && {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&::after': {
                content: '"Image not available"',
                color: 'text.secondary',
                fontSize: '0.875rem',
              },
            }),
          }}
        />
      )}

      {/* Error State */}
      {imageError && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(232, 62, 106, 0.1)',
            color: 'text.secondary',
            fontSize: '0.875rem',
            border: '2px dashed rgba(232, 62, 106, 0.3)',
          }}
        >
          <Box sx={{ fontSize: '2rem', mb: 1 }}>🖼️</Box>
          <Box>Image not available</Box>
          <Box sx={{ fontSize: '0.75rem', mt: 1, opacity: 0.7 }}>
            {src.split('/').pop()}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default OptimizedImage;
