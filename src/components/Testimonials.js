import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FormatQuote,
  ArrowBack,
  ArrowForward,
  Star,
} from '@mui/icons-material';
import OptimizedImage from './OptimizedImage';

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Falcon Creatives transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. The new logo and brand guidelines have significantly improved our market presence.',
      project: 'Brand Identity Design',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Digital Solutions Ltd.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The motion graphics and video editing services were outstanding. They delivered a product launch video that generated 300% more engagement than our previous campaigns. Highly professional and creative team.',
      project: 'Motion Graphics & Video',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'E-commerce Plus',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Our website development project was handled with exceptional professionalism. The responsive design and user experience improvements led to a 40% increase in conversions. Truly impressed with their technical expertise.',
      project: 'Website Development',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Gaming Director',
      company: 'CasinoMax Entertainment',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The casino game development exceeded all our expectations. The slot games they created have become our top performers, with seamless integration and outstanding graphics. Their Telegram bot integration was flawless.',
      project: 'Casino Game Development',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Creative Director',
      company: 'Fashion Forward',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Working with Falcon Creatives was a game-changer for our social media campaigns. Their ad management strategies increased our ROI by 250% and brought in high-quality leads consistently.',
      project: 'Digital Marketing',
    },
    {
      id: 6,
      name: 'James Anderson',
      role: 'Product Manager',
      company: 'InnovateTech',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The graphics design work for our product launch was phenomenal. They understood our vision perfectly and delivered designs that resonated with our target audience. The quality and creativity are unmatched.',
      project: 'Graphics Design',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const testimonialVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <Box
      id="testimonials"
      sx={{
        py: 10,
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(13, 13, 13, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(232, 62, 106, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <Box
                  component="img"
                  src="/img/Falcon.webp"
                  alt="Falcon Creatives Logo - Premium Digital Marketing and Creative Services Agency in Ethiopia"
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mr: 2,
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
                  Client Testimonials
                </Typography>
              </Box>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography
                variant={isMobile ? 'h3' : 'h2'}
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  background: 'linear-gradient(45deg, #FFFFFF, #E83E6A)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                What Our Clients Say
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Don't just take our word for it. Here's what our satisfied clients have to say about working with Falcon Creatives.
              </Typography>
            </motion.div>
          </Box>

          {/* Main Testimonial Carousel */}
          <motion.div variants={itemVariants}>
            <Box sx={{ position: 'relative', mb: 6 }}>
              <Card
                sx={{
                  background: 'rgba(26, 26, 26, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(232, 62, 106, 0.3)',
                  borderRadius: 4,
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(232, 62, 106, 0.05) 0%, rgba(255, 215, 0, 0.05) 100%)',
                    pointerEvents: 'none',
                  },
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    variants={testimonialVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <FormatQuote
                          sx={{
                            fontSize: 40,
                            color: 'primary.main',
                            mr: 2,
                            opacity: 0.7,
                          }}
                        />
                        <Box sx={{ flex: 1 }}>
                          <Rating
                            value={testimonials[currentTestimonial].rating}
                            readOnly
                            icon={<Star sx={{ color: '#FFD700' }} />}
                            emptyIcon={<Star sx={{ color: 'rgba(255, 255, 255, 0.3)' }} />}
                            size="large"
                          />
                        </Box>
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          color: 'text.primary',
                          lineHeight: 1.8,
                          mb: 4,
                          fontStyle: 'italic',
                          fontSize: { xs: '1.1rem', md: '1.3rem' },
                        }}
                      >
                        "{testimonials[currentTestimonial].text}"
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              mr: 3,
                              border: '3px solid',
                              borderColor: 'primary.main',
                              borderRadius: '50%',
                              overflow: 'hidden',
                            }}
                          >
                            <OptimizedImage
                              src={testimonials[currentTestimonial].image}
                              alt={`${testimonials[currentTestimonial].name} - ${testimonials[currentTestimonial].role} at ${testimonials[currentTestimonial].company}`}
                              width={60}
                              height={60}
                              sx={{ borderRadius: '50%' }}
                            />
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                color: 'text.primary',
                                mb: 0.5,
                              }}
                            >
                              {testimonials[currentTestimonial].name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                                mb: 0.5,
                              }}
                            >
                              {testimonials[currentTestimonial].role}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                fontSize: '0.9rem',
                              }}
                            >
                              {testimonials[currentTestimonial].company}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            backgroundColor: 'rgba(232, 62, 106, 0.1)',
                            border: '1px solid rgba(232, 62, 106, 0.3)',
                            borderRadius: 2,
                            px: 2,
                            py: 1,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'primary.main',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              fontSize: '0.8rem',
                              letterSpacing: 1,
                            }}
                          >
                            {testimonials[currentTestimonial].project}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <IconButton
                  onClick={handlePrevious}
                  sx={{
                    position: 'absolute',
                    left: 16,
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
                  }}
                >
                  <ArrowBack />
                </IconButton>

                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: 'absolute',
                    right: 16,
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
                  }}
                >
                  <ArrowForward />
                </IconButton>
              </Card>
            </Box>
          </motion.div>

          {/* Testimonial Indicators */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 4 }}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: index === currentTestimonial ? 'primary.main' : 'rgba(232, 62, 106, 0.3)',
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
          </motion.div>

          {/* Additional Testimonials Grid */}
          <motion.div variants={itemVariants}>
            <Grid container spacing={3}>
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <Grid item xs={12} md={4} key={testimonial.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        background: 'rgba(26, 26, 26, 0.6)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(232, 62, 106, 0.2)',
                        borderRadius: 3,
                        p: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          border: '1px solid rgba(232, 62, 106, 0.4)',
                          boxShadow: '0 10px 30px rgba(232, 62, 106, 0.2)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Rating
                          value={testimonial.rating}
                          readOnly
                          size="small"
                          icon={<Star sx={{ color: '#FFD700', fontSize: 16 }} />}
                          emptyIcon={<Star sx={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: 16 }} />}
                        />
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          mb: 3,
                          fontStyle: 'italic',
                        }}
                      >
                        "{testimonial.text.length > 120 
                          ? testimonial.text.substring(0, 120) + '...' 
                          : testimonial.text}"
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            mr: 2,
                            border: '2px solid',
                            borderColor: 'primary.main',
                            borderRadius: '50%',
                            overflow: 'hidden',
                          }}
                        >
                          <OptimizedImage
                            src={testimonial.image}
                            alt={`${testimonial.name} - ${testimonial.role} at ${testimonial.company}`}
                            width={40}
                            height={40}
                            sx={{ borderRadius: '50%' }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600,
                              color: 'text.primary',
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'text.secondary',
                            }}
                          >
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Testimonials;
