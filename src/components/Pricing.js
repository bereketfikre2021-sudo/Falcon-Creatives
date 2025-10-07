import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Collapse,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Check,
  Star,
  TrendingUp,
  Rocket,
  Diamond,
  ExpandMore,
  ExpandLess,
} from '@mui/icons-material';

const Pricing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expandedCards, setExpandedCards] = useState({});
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleExpanded = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const packages = [
    {
      name: 'Starter',
      price: '$299',
      period: '/project',
      description: 'Perfect for small businesses and startups',
      icon: <Star sx={{ fontSize: 40 }} />,
      color: '#4CAF50',
      previewFeatures: [
        'Logo Design',
        'Business Card Design',
        'Social Media Kit (3 platforms)',
        'Basic Brand Guidelines',
      ],
      allFeatures: [
        'Logo Design',
        'Business Card Design',
        'Social Media Kit (3 platforms)',
        'Basic Brand Guidelines',
        '2 Revisions',
        '5 Business Days Delivery',
        'Email Support',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/project',
      description: 'Ideal for growing businesses',
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      color: '#E83E6A',
      previewFeatures: [
        'Complete Brand Identity',
        'Logo + Business Card + Letterhead',
        'Social Media Kit (5 platforms)',
        'Website Design (up to 5 pages)',
      ],
      allFeatures: [
        'Complete Brand Identity',
        'Logo + Business Card + Letterhead',
        'Social Media Kit (5 platforms)',
        'Website Design (up to 5 pages)',
        'Brand Guidelines Document',
        '3 Revisions',
        '7 Business Days Delivery',
        'Priority Support',
        '1 Month Free Consultation',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '$999',
      period: '/project',
      description: 'For established businesses and agencies',
      icon: <Rocket sx={{ fontSize: 40 }} />,
      color: '#FFD700',
      previewFeatures: [
        'Full Brand Identity Package',
        'Logo + Complete Stationery Set',
        'Social Media Kit (All platforms)',
        'Website Design + Development',
      ],
      allFeatures: [
        'Full Brand Identity Package',
        'Logo + Complete Stationery Set',
        'Social Media Kit (All platforms)',
        'Website Design + Development',
        'Motion Graphics (30 seconds)',
        'Video Editing (2 minutes)',
        'Comprehensive Brand Guidelines',
        'Unlimited Revisions',
        '10 Business Days Delivery',
        'Dedicated Project Manager',
        '3 Months Free Consultation',
        'Priority Support',
      ],
      popular: false,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      icon: <Diamond sx={{ fontSize: 40 }} />,
      color: '#9C27B0',
      previewFeatures: [
        'Custom Brand Strategy',
        'Complete Digital Transformation',
        'Multi-platform Campaign Design',
        'Advanced Web Development',
      ],
      allFeatures: [
        'Custom Brand Strategy',
        'Complete Digital Transformation',
        'Multi-platform Campaign Design',
        'Advanced Web Development',
        'Game Development',
        'Telegram Bot Development',
        'Ongoing Marketing Support',
        'Dedicated Team',
        'Flexible Timeline',
        '24/7 Support',
        'Monthly Strategy Sessions',
        'Performance Analytics',
      ],
      popular: false,
    },
  ];

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

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="pricing"
      sx={{
        py: 10,
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(13, 13, 13, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%)',
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
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src="/img/Falcon.webp"
                  alt="Falcon Creatives Logo"
                  sx={{
                    height: 40,
                    width: 40,
                    mr: 2,
                    borderRadius: '50%',
                    objectFit: 'cover',
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
                  Pricing
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
                Choose Your Perfect Package
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Flexible pricing options designed to meet your business needs and budget. 
                All packages include our signature quality and attention to detail.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {packages.map((pkg, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index} sx={{ display: 'flex' }}>
                <motion.div variants={itemVariants} style={{ width: '100%', height: '100%' }}>
                  <Card
                    sx={{
                      height: expandedCards[index] ? 'auto' : '480px',
                      minHeight: '480px',
                      width: '100%',
                      background: pkg.popular
                        ? 'linear-gradient(135deg, rgba(232, 62, 106, 0.1), rgba(255, 215, 0, 0.1))'
                        : 'rgba(26, 26, 26, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: pkg.popular
                        ? '2px solid rgba(232, 62, 106, 0.5)'
                        : '1px solid rgba(232, 62, 106, 0.2)',
                      borderRadius: 3,
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'visible',
                      zIndex: expandedCards[index] ? 10 : 1,
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: pkg.popular
                          ? '0 15px 30px rgba(232, 62, 106, 0.3)'
                          : '0 10px 20px rgba(232, 62, 106, 0.2)',
                      },
                    }}
                  >
                    {pkg.popular && (
                      <Chip
                        label="Most Popular"
                        sx={{
                          position: 'absolute',
                          top: -12,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'linear-gradient(45deg, #E83E6A, #FF6B8A)',
                          color: 'white',
                          fontWeight: 600,
                          zIndex: 1,
                        }}
                      />
                    )}
                    
                    <CardContent sx={{ p: 2.5, height: '100%', display: 'flex', flexDirection: 'column', overflow: 'visible', flex: 1 }}>
                      <Box sx={{ textAlign: 'center', mb: 1.5 }}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            background: `linear-gradient(45deg, ${pkg.color}, ${pkg.color}80)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 1,
                            color: 'white',
                          }}
                        >
                          {pkg.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            mb: 0.5,
                            color: 'text.primary',
                            fontSize: '1.1rem',
                          }}
                        >
                          {pkg.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            mb: 1,
                            fontSize: '0.8rem',
                            lineHeight: 1.3,
                          }}
                        >
                          {pkg.description}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 800,
                              background: `linear-gradient(45deg, ${pkg.color}, ${pkg.color}CC)`,
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              fontSize: '1.8rem',
                            }}
                          >
                            {pkg.price}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'text.secondary',
                              ml: 0.5,
                              fontSize: '0.9rem',
                            }}
                          >
                            {pkg.period}
                          </Typography>
                        </Box>
                      </Box>

                      <List sx={{ flex: 1, mb: 1, minHeight: '120px' }}>
                        {pkg.previewFeatures.map((feature, featureIndex) => (
                          <ListItem key={featureIndex} sx={{ px: 0, py: 0.2 }}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                              <Check
                                sx={{
                                  color: pkg.color,
                                  fontSize: 16,
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  fontSize: '0.8rem',
                                  color: 'text.secondary',
                                  lineHeight: 1.2,
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>

                      <Button
                        variant="text"
                        fullWidth
                        size="small"
                        onClick={() => toggleExpanded(index)}
                        endIcon={expandedCards[index] ? <ExpandLess /> : <ExpandMore />}
                        sx={{
                          color: pkg.color,
                          mb: 1,
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          py: 0.3,
                          minHeight: '32px',
                          '&:hover': {
                            backgroundColor: `${pkg.color}10`,
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {expandedCards[index] ? 'Show Less' : 'View Details'}
                      </Button>

                      <Collapse in={expandedCards[index]} timeout="auto" unmountOnExit>
                        <List sx={{ mb: 1 }}>
                          {pkg.allFeatures.slice(pkg.previewFeatures.length).map((feature, featureIndex) => (
                            <ListItem key={featureIndex + pkg.previewFeatures.length} sx={{ px: 0, py: 0.2 }}>
                              <ListItemIcon sx={{ minWidth: 24 }}>
                                <Check
                                  sx={{
                                    color: pkg.color,
                                    fontSize: 16,
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={feature}
                                sx={{
                                  '& .MuiListItemText-primary': {
                                    fontSize: '0.8rem',
                                    color: 'text.secondary',
                                    lineHeight: 1.2,
                                  },
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>

                      <Button
                        variant={pkg.popular ? 'contained' : 'outlined'}
                        fullWidth
                        size="small"
                        onClick={handleContactClick}
                        sx={{
                          background: pkg.popular
                            ? `linear-gradient(45deg, ${pkg.color}, ${pkg.color}CC)`
                            : 'transparent',
                          borderColor: pkg.color,
                          color: pkg.popular ? 'white' : pkg.color,
                          py: 0.8,
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          borderRadius: 2,
                          minHeight: '36px',
                          '&:hover': {
                            background: pkg.popular
                              ? `linear-gradient(45deg, ${pkg.color}CC, ${pkg.color})`
                              : `${pkg.color}20`,
                            borderColor: pkg.color,
                            color: pkg.popular ? 'white' : pkg.color,
                            transform: 'translateY(-1px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {pkg.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

        </motion.div>
      </Container>
    </Box>
  );
};

export default Pricing;
