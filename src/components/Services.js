import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  IconButton,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Palette,
  BrandingWatermark,
  Movie,
  Campaign,
  Web,
  Casino,
  ArrowForward,
  Close,
  Check,
} from '@mui/icons-material';

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <Palette sx={{ fontSize: 40 }} />,
      title: 'Graphics Design',
      description: 'Stunning visual designs that capture attention and communicate your brand message effectively.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics'],
      detailedDescription: 'Our graphics design service creates compelling visual content that resonates with your target audience. We combine creativity with strategic thinking to deliver designs that not only look amazing but also drive results for your business.',
      deliverables: ['Custom Logo Design', 'Business Card Design', 'Social Media Graphics', 'Print Materials', 'Digital Assets', 'Brand Guidelines'],
      process: ['Discovery & Research', 'Concept Development', 'Design Creation', 'Client Review', 'Refinement', 'Final Delivery'],
    },
    {
      icon: <BrandingWatermark sx={{ fontSize: 40 }} />,
      title: 'Brand Identity',
      description: 'Complete brand identity packages that establish a strong visual presence in the market.',
      features: ['Brand Guidelines', 'Visual Identity', 'Brand Strategy', 'Style Guides'],
      detailedDescription: 'We develop comprehensive brand identities that tell your story and connect with your customers. Our brand identity service includes everything from logo design to complete brand guidelines that ensure consistency across all touchpoints.',
      deliverables: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography System', 'Business Stationery', 'Brand Book'],
      process: ['Brand Strategy', 'Visual Identity Design', 'Guidelines Creation', 'Asset Development', 'Implementation Support', 'Brand Training'],
    },
    {
      icon: <Movie sx={{ fontSize: 40 }} />,
      title: 'Video & Motion Graphics',
      description: 'Complete video production services including professional editing, motion graphics, and animations that bring your content to life.',
      features: ['Video Editing', 'Motion Graphics', '2D/3D Animation', 'Explainer Videos', 'Social Media Content', 'Post-Production'],
      detailedDescription: 'Transform your ideas into compelling visual content with our comprehensive video and motion graphics services. We handle everything from raw footage editing to creating stunning animations that capture attention, explain complex concepts, and enhance your brand storytelling across all digital platforms.',
      deliverables: ['Professional Video Editing', '2D/3D Animations', 'Explainer Videos', 'Social Media Content', 'Corporate Videos', 'Logo Animations', 'Product Demos', 'Motion Graphics Templates', 'Event Highlights', 'Training Videos'],
      process: ['Concept & Planning', 'Script & Storyboard', 'Asset Creation', 'Video Editing & Effects', 'Animation Development', 'Audio Enhancement', 'Color Grading', 'Review & Refinement', 'Final Delivery'],
    },
    {
      icon: <Campaign sx={{ fontSize: 40 }} />,
      title: 'Ads Management',
      description: 'Strategic advertising campaigns that maximize your ROI and reach your target audience.',
      features: ['Social Media Ads', 'Google Ads', 'Campaign Strategy', 'Performance Analytics'],
      detailedDescription: 'Maximize your advertising ROI with our strategic ad management services. We create, optimize, and manage campaigns across multiple platforms to drive qualified leads and increase your business growth.',
      deliverables: ['Campaign Strategy', 'Ad Creative Design', 'Platform Setup', 'Performance Monitoring', 'A/B Testing', 'ROI Reports'],
      process: ['Audience Research', 'Campaign Planning', 'Creative Development', 'Launch & Optimization', 'Performance Analysis', 'Strategy Refinement'],
    },
    {
      icon: <Web sx={{ fontSize: 40 }} />,
      title: 'Website Development',
      description: 'Modern, responsive websites that provide exceptional user experiences.',
      features: ['Responsive Design', 'E-commerce', 'CMS Development', 'SEO Optimization'],
      detailedDescription: 'Build a powerful online presence with our custom website development services. We create modern, responsive websites that not only look great but also perform exceptionally across all devices and platforms.',
      deliverables: ['Custom Website Design', 'Responsive Development', 'E-commerce Solutions', 'CMS Integration', 'SEO Optimization', 'Performance Optimization'],
      process: ['Discovery & Planning', 'Design & Prototyping', 'Development & Testing', 'Content Integration', 'Launch & Optimization', 'Ongoing Support'],
    },
    {
      icon: <Casino sx={{ fontSize: 40 }} />,
      title: 'Casino Game Development',
      description: 'Comprehensive casino game solutions including virtual games and Telegram integration for seamless gaming experiences.',
      features: ['Slot Games', 'Table Games', 'Live Casino', 'Telegram Bot Integration', 'Payment Systems', 'Mobile Gaming'],
      detailedDescription: 'Create immersive casino gaming experiences with our comprehensive game development services. We specialize in both traditional virtual casino games and modern Telegram-integrated solutions that provide seamless gaming experiences.',
      deliverables: ['Slot Game Development', 'Table Games', 'Live Casino Integration', 'Telegram Bot Development', 'Payment System Integration', 'Mobile Gaming Solutions'],
      process: ['Game Concept Design', 'Technical Architecture', 'Game Development', 'Integration & Testing', 'Payment Setup', 'Launch & Support'],
    },
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseModal();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      id="services"
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
                Our Services
              </Typography>
              </Box>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography
                variant={isMobile ? 'h3' : 'h2'}
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  background: 'linear-gradient(45deg, #FFFFFF, #E83E6A, #FFD700)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.1,
                }}
              >
                What We Do Best
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.7,
                  fontSize: '1.1rem',
                  fontWeight: 400,
                }}
              >
                We provide comprehensive digital solutions to help your business thrive in the modern world.
                From creative design to cutting-edge development, we deliver excellence in every project.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={3} sx={{ justifyContent: 'flex-start' }}>
            {services.map((service, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                lg={4} 
                key={index} 
                sx={{ 
                  display: 'flex',
                  // Align the last card (Casino Game Development) to the left
                  ...(index === services.length - 1 && {
                    lg: 4,
                    xl: 3,
                  })
                }}
              >
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      width: '100%',
                      background: 'rgba(26, 26, 26, 0.25)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      border: '1px solid rgba(232, 62, 106, 0.3)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 4,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(232, 62, 106, 0.1) 0%, rgba(255, 215, 0, 0.1) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                      },
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        border: '1px solid rgba(232, 62, 106, 0.6)',
                        boxShadow: '0 25px 50px rgba(232, 62, 106, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        '&::before': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3.5, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #E83E6A, #FF6B8A, #FFD700)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2.5,
                          color: 'white',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: -2,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #E83E6A, #FF6B8A, #FFD700)',
                            opacity: 0.3,
                            filter: 'blur(8px)',
                            zIndex: -1,
                          },
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1) rotate(5deg)',
                          },
                        }}
                      >
                        {service.icon}
                      </Box>

                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                          color: 'text.primary',
                          fontSize: '1.3rem',
                          lineHeight: 1.2,
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          mb: 2.5,
                          lineHeight: 1.6,
                          flexGrow: 1,
                          fontSize: '0.95rem',
                          minHeight: '60px',
                        }}
                      >
                        {service.description}
                      </Typography>

                      <Box sx={{ mb: 2.5, mt: 0 }}>
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                mb: 1,
                                py: 0.5,
                                px: 1,
                                borderRadius: 1,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  backgroundColor: 'rgba(232, 62, 106, 0.1)',
                                  transform: 'translateX(5px)',
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  width: 8,
                                  height: 8,
                                  borderRadius: '50%',
                                  background: 'linear-gradient(45deg, #E83E6A, #FFD700)',
                                  mr: 2,
                                  flexShrink: 0,
                                  mt: 0.5,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                fontSize: '0.9rem',
                                  fontWeight: 500,
                                  lineHeight: 1.4,
                                  flex: 1,
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                          </motion.div>
                        ))}
                      </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mt: 'auto',
                            cursor: 'pointer',
                            minHeight: 48, // Minimum touch target
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: 'rgba(232, 62, 106, 0.1)',
                            },
                            '&:active': {
                              backgroundColor: 'rgba(232, 62, 106, 0.2)',
                              transform: 'scale(0.98)',
                            },
                          }}
                          onClick={() => handleLearnMore(service)}
                        >
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          Learn More
                        </Typography>
                      <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLearnMore(service);
                          }}
                        sx={{
                          color: 'primary.main',
                            backgroundColor: 'rgba(232, 62, 106, 0.1)',
                            border: '1px solid rgba(232, 62, 106, 0.3)',
                            minWidth: 44, // Minimum touch target
                            minHeight: 44,
                            '&:hover': {
                              backgroundColor: 'rgba(232, 62, 106, 0.2)',
                              transform: 'translateX(3px) scale(1.1)',
                              border: '1px solid rgba(232, 62, 106, 0.5)',
                          },
                          '&:active': {
                            transform: 'scale(0.95)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                          <ArrowForward sx={{ fontSize: 20 }} />
                      </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Service Detail Modal */}
      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            background: 'rgba(13, 13, 13, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(232, 62, 106, 0.3)',
            borderRadius: 3,
          },
        }}
      >
        {selectedService && (
          <>
            <DialogTitle
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pb: 2,
                borderBottom: '1px solid rgba(232, 62, 106, 0.2)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #E83E6A, #FF6B8A, #FFD700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    color: 'white',
                  }}
                >
                  {selectedService.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                  }}
                >
                  {selectedService.title}
                </Typography>
              </Box>
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(232, 62, 106, 0.1)',
                  },
                }}
              >
                <Close />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ pt: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: '1.1rem',
                }}
              >
                {selectedService.detailedDescription}
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    What You'll Get
                  </Typography>
                  <List sx={{ pl: 0 }}>
                    {selectedService.deliverables.map((deliverable, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Check
                            sx={{
                              color: 'primary.main',
                              fontSize: 20,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={deliverable}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontSize: '0.95rem',
                              color: 'text.secondary',
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    Our Process
                  </Typography>
                  <List sx={{ pl: 0 }}>
                    {selectedService.process.map((step, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Chip
                            label={index + 1}
                            size="small"
                            sx={{
                              backgroundColor: 'primary.main',
                              color: 'white',
                              fontWeight: 600,
                              minWidth: 24,
                              height: 24,
                              fontSize: '0.75rem',
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={step}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontSize: '0.95rem',
                              color: 'text.secondary',
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions sx={{ p: 3, pt: 2 }}>
              <Button
                onClick={handleCloseModal}
                sx={{
                  color: 'text.secondary',
                  mr: 2,
                }}
              >
                Close
              </Button>
              <Button
                onClick={handleContactClick}
                variant="contained"
                sx={{
                  background: 'linear-gradient(45deg, #E83E6A, #FF6B8A)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #C2185B, #E83E6A)',
                  },
                }}
              >
                Get Started
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Services;
