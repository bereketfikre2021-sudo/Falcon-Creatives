import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, PlayArrow } from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Custom typing animation state
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = React.useMemo(() => [
    'Graphics Design',
    'Brand Identity',
    'Motion Graphics',
    'Video Editing',
    'Web Development',
    'Game Development'
  ], []);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }
      
      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? 30 : 50);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
        '& @keyframes blink': {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(232, 62, 106, 0.1), rgba(255, 215, 0, 0.1))',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(232, 62, 106, 0.1))',
          filter: 'blur(30px)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <Box
                    component="img"
                    src="/img/Falcon.webp"
                    alt="Falcon Creatives Logo - Premium Digital Marketing and Creative Services Agency in Ethiopia"
                    sx={{
                      height: 60,
                      width: 60,
                      mr: 2,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      animation: 'float 3s ease-in-out infinite',
                      '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-10px)' },
                      },
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: 2,
                    }}
                  >
                    Welcome to the Future
                  </Typography>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant={isMobile ? 'h3' : 'h1'}
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    background: 'linear-gradient(45deg, #FFFFFF, #E83E6A, #FFD700)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.2,
                  }}
                >
                  Digital Excellence
                  <br />
                  <span style={{ color: '#E83E6A' }}>
                    {currentText}
                    <span style={{ animation: 'blink 1s infinite' }}>|</span>
                  </span>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    lineHeight: 1.6,
                    maxWidth: '500px',
                  }}
                >
                  Elevating brands to new heights through innovative design, 
                  cutting-edge development, and strategic digital marketing solutions.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    sx={{
                      background: 'linear-gradient(45deg, #E83E6A, #FF6B8A)',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      '&:hover': {
                        background: 'linear-gradient(45deg, #C2185B, #E83E6A)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 30px rgba(232, 62, 106, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    onClick={() => {
                      const element = document.querySelector('#portfolio');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      '&:hover': {
                        borderColor: 'primary.light',
                        color: 'primary.light',
                        backgroundColor: 'rgba(232, 62, 106, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    View Our Portfolio
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ position: 'relative' }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {/* Main Hero Image/Icon */}
                  <Box
                    sx={{
                      width: { xs: 300, md: 400 },
                      height: { xs: 300, md: 400 },
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(232, 62, 106, 0.2), rgba(255, 215, 0, 0.2))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      border: '2px solid rgba(232, 62, 106, 0.3)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -20,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #E83E6A, #FFD700, #E83E6A)',
                        opacity: 0.1,
                        filter: 'blur(20px)',
                        animation: 'glow 3s ease-in-out infinite alternate',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="/img/Falcon.webp"
                      alt="Falcon Creatives Logo - Premium Digital Marketing and Creative Services Agency in Ethiopia"
                      sx={{
                        width: { xs: 250, md: 320 },
                        height: { xs: 250, md: 320 },
                        objectFit: 'contain',
                        filter: 'brightness(1.1) contrast(1.1)',
                        borderRadius: '50%',
                      }}
                    />
                  </Box>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      rotate: 360,
                      transition: { duration: 20, repeat: Infinity, ease: 'linear' },
                    }}
                    style={{
                      position: 'absolute',
                      top: '10%',
                      right: '10%',
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #E83E6A, #FF6B8A)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(232, 62, 106, 0.5)',
                      }}
                    >
                      <Typography sx={{ color: 'white', fontWeight: 700 }}>🎨</Typography>
                    </Box>
                  </motion.div>

                  <motion.div
                    animate={{
                      rotate: -360,
                      transition: { duration: 15, repeat: Infinity, ease: 'linear' },
                    }}
                    style={{
                      position: 'absolute',
                      bottom: '20%',
                      left: '5%',
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #FFD700, #FFF176)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
                      }}
                    >
                      <Typography sx={{ color: 'white', fontWeight: 700 }}>⚡</Typography>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
