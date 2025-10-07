import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import PerformanceMonitor from './components/PerformanceMonitor';
import MobileOptimizations from './components/MobileOptimizations';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <PerformanceMonitor />
        <MobileOptimizations />
        <FloatingElements />
        <Header />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <main>
                    <Hero />
                    <About />
                    <Services />
                    <Portfolio />
                    <Pricing />
                    <Testimonials />
                    <Contact />
                  </main>
                  <Footer />
                </motion.div>
      </Box>
    </ErrorBoundary>
  );
}

export default App;
