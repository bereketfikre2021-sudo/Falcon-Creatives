import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Floating Geometric Shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(232, 62, 106, 0.1), rgba(255, 215, 0, 0.1))',
            border: '1px solid rgba(232, 62, 106, 0.2)',
          }}
        />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '20%',
          right: '8%',
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(232, 62, 106, 0.1))',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            transform: 'rotate(45deg)',
          }}
        />
      </motion.div>

      <motion.div
        variants={rotateVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '60%',
          left: '3%',
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(232, 62, 106, 0.05), rgba(255, 215, 0, 0.05))',
            border: '1px solid rgba(232, 62, 106, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #E83E6A, #FFD700)',
            }}
          />
        </Box>
      </motion.div>

      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '5%',
        }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(232, 62, 106, 0.1))',
            border: '1px solid rgba(255, 215, 0, 0.2)',
          }}
        />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            background: 'linear-gradient(45deg, rgba(232, 62, 106, 0.1), rgba(255, 215, 0, 0.1))',
            border: '1px solid rgba(232, 62, 106, 0.2)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />
      </motion.div>

      {/* Additional floating elements */}
      <motion.div
        variants={rotateVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '40%',
          right: '15%',
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 30,
            background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.2), rgba(232, 62, 106, 0.2))',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            transform: 'rotate(45deg)',
          }}
        />
      </motion.div>

      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '70%',
          left: '20%',
        }}
      >
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(232, 62, 106, 0.1), rgba(255, 215, 0, 0.1))',
            border: '1px solid rgba(232, 62, 106, 0.2)',
          }}
        />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(232, 62, 106, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 62, 106, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5,
        }}
      />
    </Box>
  );
};

export default FloatingElements;
