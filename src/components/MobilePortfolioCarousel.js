import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowBack, 
  ArrowForward, 
  Launch as LaunchIcon,
  TouchApp,
} from '@mui/icons-material';
import OptimizedImage from './OptimizedImage';

const MobilePortfolioCarousel = ({ projects }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentProject, setCurrentProject] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  // Touch gesture handling
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  const handlePrevious = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const carouselVariants = {
    enter: { opacity: 0, x: 300 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 },
  };

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      {/* Swipe Instructions */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        mb: 2,
        color: 'text.secondary',
        fontSize: '0.875rem',
      }}>
        <TouchApp sx={{ mr: 1, fontSize: 16 }} />
        Swipe to explore projects
      </Box>

      {/* Project Carousel */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 3,
          height: 400,
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
          >
            <Card
              sx={{
                height: 'auto',
                minHeight: 400,
                background: 'rgba(26, 26, 26, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(232, 62, 106, 0.2)',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Project Image */}
              <Box sx={{ 
                position: 'relative', 
                width: '100%',
                aspectRatio: '1/1',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(232, 62, 106, 0.1) 0%, rgba(255, 215, 0, 0.1) 50%, rgba(232, 62, 106, 0.1) 100%)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(232, 62, 106, 0.05) 0%, rgba(255, 215, 0, 0.05) 100%)',
                  zIndex: 1,
                }
              }}>
                <OptimizedImage
                  src={projects[currentProject].image}
                  alt={`${projects[currentProject].title} - ${projects[currentProject].category} project by Falcon Creatives`}
                  width="100%"
                  height="100%"
                  sx={{
                    transition: 'transform 0.3s ease',
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                    maxHeight: '100%',
                    position: 'relative',
                    zIndex: 2,
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                
                {/* Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(232, 62, 106, 0.8), rgba(255, 215, 0, 0.8))',
                    opacity: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.3s ease',
                    zIndex: 3,
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  <IconButton
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      },
                    }}
                  >
                    <LaunchIcon />
                  </IconButton>
                </Box>
              </Box>

              {/* Project Content */}
              <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Chip
                  label={projects[currentProject].category}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(232, 62, 106, 0.2)',
                    color: 'primary.main',
                    mb: 2,
                    alignSelf: 'flex-start',
                  }}
                />
                
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: 'text.primary',
                    fontSize: '1.1rem',
                  }}
                >
                  {projects[currentProject].title}
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.5,
                    flex: 1,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {projects[currentProject].description}
                </Typography>

                {/* Technologies */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                  {projects[currentProject].technologies.slice(0, 2).map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: 'rgba(232, 62, 106, 0.3)',
                        color: 'text.secondary',
                        fontSize: '0.7rem',
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <IconButton
          onClick={handlePrevious}
          sx={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(232, 62, 106, 0.1)',
            border: '1px solid rgba(232, 62, 106, 0.3)',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(232, 62, 106, 0.2)',
              transform: 'translateY(-50%) scale(1.1)',
            },
            transition: 'all 0.3s ease',
            zIndex: 2,
          }}
        >
          <ArrowBack />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(232, 62, 106, 0.1)',
            border: '1px solid rgba(232, 62, 106, 0.3)',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(232, 62, 106, 0.2)',
              transform: 'translateY(-50%) scale(1.1)',
            },
            transition: 'all 0.3s ease',
            zIndex: 2,
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>

      {/* Project Indicators */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
        {projects.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentProject(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: index === currentProject ? 'primary.main' : 'rgba(232, 62, 106, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'primary.main',
                transform: 'scale(1.2)',
              },
            }}
          />
        ))}
      </Box>

      {/* Project Counter */}
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          mt: 2,
          color: 'text.secondary',
          fontSize: '0.875rem',
        }}
      >
        {currentProject + 1} of {projects.length}
      </Typography>
    </Box>
  );
};

export default MobilePortfolioCarousel;
