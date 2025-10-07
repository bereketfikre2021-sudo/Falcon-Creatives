import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ 
  end, 
  duration = 2000, 
  start = 0, 
  suffix = '', 
  prefix = '',
  decimals = 0,
  delay = 0,
  sx = {},
  variant = 'h3'
}) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !isAnimating) {
      const startAnimation = () => {
        setIsAnimating(true);
        
        const startTime = Date.now();
        const startValue = start;
        const endValue = parseFloat(end);
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = startValue + (endValue - startValue) * easeOutQuart;
          
          setCount(currentValue);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(endValue);
          }
        };
        
        requestAnimationFrame(animate);
      };

      if (delay > 0) {
        setTimeout(startAnimation, delay);
      } else {
        startAnimation();
      }
    }
  }, [inView, isAnimating, start, end, duration, delay]);

  const formatNumber = (num) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.floor(num).toString();
  };

  return (
    <Typography
      ref={ref}
      variant={variant}
      sx={{
        fontWeight: 800,
        mb: 1,
        background: 'linear-gradient(45deg, #E83E6A, #FFD700)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        ...sx,
      }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </Typography>
  );
};

export default CountUp;
