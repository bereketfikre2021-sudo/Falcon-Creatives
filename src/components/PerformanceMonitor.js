import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Web Vitals monitoring
    const reportWebVitals = (metric) => {
      // Send to analytics service
      if (window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Log to console in development
      // eslint-disable-next-line no-console
      console.log(metric);
    };

    // Import and initialize web vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    });

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Monitor long tasks
          if (entry.entryType === 'longtask') {
            // eslint-disable-next-line no-console
            console.warn('Long task detected:', entry);
          }
          
          // Monitor layout shifts
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            // eslint-disable-next-line no-console
            console.warn('Layout shift detected:', entry);
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['longtask', 'layout-shift'] });
      } catch (e) {
        // Some browsers don't support all entry types
        // eslint-disable-next-line no-console
        console.log('Performance observer not fully supported');
      }
    }

    // Resource timing analysis
    const analyzeResources = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter(resource => resource.duration > 1000);
      
      if (slowResources.length > 0) {
        // eslint-disable-next-line no-console
        console.warn('Slow resources detected:', slowResources);
      }
    };

    // Run analysis after page load
    window.addEventListener('load', () => {
      setTimeout(analyzeResources, 2000);
    });

  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
