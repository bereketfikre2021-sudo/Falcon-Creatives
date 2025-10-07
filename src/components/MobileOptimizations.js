import { useEffect } from 'react';

const MobileOptimizations = () => {
  useEffect(() => {
    // Only run on mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) return;

    // Disable hover effects on touch devices
    const disableHoverOnTouch = () => {
      if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
      }
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;
      
      const updateScrollPosition = () => {
        // Add any scroll-based optimizations here
        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestTick, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', requestTick);
      };
    };

    // Optimize touch interactions
    const optimizeTouch = () => {
      // Prevent double-tap zoom on buttons
      const preventDoubleTap = (e) => {
            e.preventDefault();
            e.target.click();
      };

      const buttons = document.querySelectorAll('button, [role="button"]');
      buttons.forEach(button => {
        button.addEventListener('touchend', preventDoubleTap, { passive: false });
      });

      return () => {
        buttons.forEach(button => {
          button.removeEventListener('touchend', preventDoubleTap);
        });
      };
    };

    // Add mobile-specific CSS optimizations
    const addMobileStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Mobile-specific optimizations */
        .touch-device * {
          -webkit-tap-highlight-color: transparent;
        }
        
        .touch-device button,
        .touch-device [role="button"] {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        /* Optimize animations for mobile */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Improve touch targets */
        .touch-device button,
        .touch-device [role="button"],
        .touch-device a {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* Optimize scrolling */
        .touch-device {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Prevent zoom on input focus */
        .touch-device input,
        .touch-device textarea,
        .touch-device select {
          font-size: 16px;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    };

    // Initialize optimizations
    disableHoverOnTouch();
    const cleanupScroll = optimizeScroll();
    const cleanupTouch = optimizeTouch();
    const cleanupStyles = addMobileStyles();

    // Cleanup on unmount
    return () => {
      cleanupScroll();
      cleanupTouch();
      cleanupStyles();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default MobileOptimizations;
