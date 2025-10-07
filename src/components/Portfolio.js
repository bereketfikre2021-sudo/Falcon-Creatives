import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Close as CloseIcon, Launch as LaunchIcon } from '@mui/icons-material';
import OptimizedImage from './OptimizedImage';
import MobilePortfolioCarousel from './MobilePortfolioCarousel';

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = {
    'Graphics Design': [
    {
      id: 1,
      title: 'E-commerce Brand Identity',
        category: 'Graphics Design',
        image: '/img/banner.webp',
      description: 'Complete brand identity design for a modern e-commerce platform, including logo, color palette, and brand guidelines.',
      technologies: ['Adobe Illustrator', 'Photoshop', 'Brand Strategy'],
      link: '#',
    },
      {
        id: 2,
        title: 'Restaurant Logo Design',
        category: 'Graphics Design',
        image: '/img/mug.webp',
        description: 'Modern logo design for a fine dining restaurant with elegant typography and sophisticated color scheme.',
        technologies: ['Adobe Illustrator', 'Typography', 'Color Theory'],
        link: '#',
      },
      {
        id: 3,
        title: 'Tech Startup Branding',
        category: 'Graphics Design',
        image: '/img/rock.webp',
        description: 'Complete visual identity for a fintech startup including logo, business cards, and digital assets.',
        technologies: ['Adobe Creative Suite', 'Brand Guidelines', 'Digital Assets'],
        link: '#',
      },
    ],
    'Brand Identity': [
      {
        id: 4,
        title: 'Fashion Brand Identity',
        category: 'Brand Identity',
        image: '/img/belbe.webp',
        description: 'Comprehensive brand identity package for a luxury fashion brand including logo, packaging, and marketing materials.',
        technologies: ['Brand Strategy', 'Visual Identity', 'Packaging Design'],
        link: '#',
      },
      {
        id: 5,
        title: 'Healthcare Brand System',
        category: 'Brand Identity',
        image: '/img/ketero.webp',
        description: 'Professional brand identity for a healthcare organization with trust-building design elements.',
        technologies: ['Brand Guidelines', 'Typography', 'Color Psychology'],
        link: '#',
      },
    ],
    'Video & Motion Graphics': [
      {
        id: 6,
        title: 'Product Launch Animation',
        category: 'Video & Motion Graphics',
        image: '/img/VS.webp',
      description: 'Dynamic motion graphics for a tech startup\'s product launch video with 3D elements and smooth animations.',
      technologies: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
      link: '#',
    },
      {
        id: 7,
        title: 'Corporate Explainer Video',
        category: 'Video & Motion Graphics',
        image: '/img/mbappe.webp',
        description: 'Animated explainer video for a SaaS company explaining complex features in simple, engaging visuals.',
        technologies: ['Motion Graphics', '2D Animation', 'Sound Design'],
        link: '#',
      },
      {
        id: 8,
        title: 'Social Media Animations',
        category: 'Video & Motion Graphics',
        image: '/img/different.webp',
        description: 'Eye-catching social media animations for Instagram and TikTok campaigns with viral potential.',
        technologies: ['After Effects', 'Social Media Optimization', 'Trending Effects'],
        link: '#',
      },
    ],
    'Website Development': [
      {
        id: 9,
        title: 'E-commerce Platform',
        category: 'Website Development',
        image: '/img/500.webp',
        description: 'Modern responsive e-commerce website with advanced features, payment integration, and admin dashboard.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      link: '#',
    },
    {
        id: 10,
      title: 'Corporate Website',
        category: 'Website Development',
        image: '/img/Deposite.webp',
        description: 'Professional corporate website for a financial services company with advanced animations and user experience design.',
        technologies: ['Next.js', 'Material-UI', 'Framer Motion', 'SEO'],
      link: '#',
    },
    {
        id: 11,
        title: 'Portfolio Website',
        category: 'Website Development',
        image: '/img/2 up.webp',
        description: 'Creative portfolio website for a photographer with image galleries, booking system, and client testimonials.',
        technologies: ['React', 'Image Optimization', 'CMS Integration', 'Responsive Design'],
        link: '#',
      },
    ],
    'Casino Game Development': [
      {
        id: 12,
        title: 'Slot Game Collection',
        category: 'Casino Game Development',
        image: '/img/keno.webp',
        description: 'Immersive slot game collection with advanced graphics, sound effects, and multiple bonus features for online casino platform.',
        technologies: ['Unity', 'C#', 'JavaScript', 'WebGL'],
      link: '#',
    },
    {
        id: 13,
      title: 'Telegram Casino Bot',
        category: 'Casino Game Development',
        image: '/img/royality.webp',
      description: 'Advanced Telegram bot with integrated casino games, payment processing, and user management system.',
      technologies: ['Python', 'Telegram API', 'Payment Gateway', 'Database Design'],
      link: '#',
    },
      {
        id: 14,
        title: 'Live Casino Integration',
        category: 'Casino Game Development',
        image: '/img/spin.webp',
        description: 'Live dealer casino games with real-time streaming, chat functionality, and secure payment processing.',
        technologies: ['WebRTC', 'Node.js', 'Socket.io', 'Payment Integration'],
        link: '#',
      },
    ],
    'Gaming & Entertainment': [
      {
        id: 15,
        title: 'Virtual Sports Games',
        category: 'Gaming & Entertainment',
        image: '/img/virtual games.webp',
        description: 'Immersive virtual sports gaming platform with realistic graphics and engaging gameplay mechanics.',
        technologies: ['Unity', '3D Graphics', 'Game Physics', 'Multiplayer'],
        link: '#',
      },
      {
        id: 16,
        title: 'JetX Game Design',
        category: 'Gaming & Entertainment',
        image: '/img/jetx.webp',
        description: 'High-octane JetX game with stunning visual effects and thrilling gameplay experience.',
        technologies: ['Game Design', 'Visual Effects', 'Animation', 'Sound Design'],
        link: '#',
      },
      {
        id: 17,
        title: 'Sports Jersey Design',
        category: 'Gaming & Entertainment',
        image: '/img/jersey.webp',
        description: 'Custom sports jersey designs for gaming teams with modern aesthetics and team branding.',
        technologies: ['Graphic Design', 'Branding', 'Textile Design', '3D Mockups'],
        link: '#',
      },
    ],
  };

  const categories = ['All', 'Graphics Design', 'Brand Identity', 'Video & Motion Graphics', 'Website Development', 'Casino Game Development', 'Gaming & Entertainment'];
  const [activeCategory, setActiveCategory] = useState('All');

  const getAllProjects = () => {
    return Object.values(projects).flat();
  };

  const filteredProjects = activeCategory === 'All' 
    ? getAllProjects()
    : projects[activeCategory] || [];

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
      id="portfolio"
      sx={{
        py: 10,
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(26, 26, 26, 0.9) 0%, rgba(13, 13, 13, 0.9) 100%)',
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
              <Typography
                variant="h6"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  mb: 2,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}
              >
                Our Portfolio
              </Typography>
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
                Featured Projects
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
                  mb: 4,
                }}
              >
                Explore our latest work and see how we bring creative visions to life.
              </Typography>
            </motion.div>

            {/* Category Filter */}
            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    onClick={() => setActiveCategory(category)}
                    sx={{
                      backgroundColor: activeCategory === category ? 'primary.main' : 'transparent',
                      color: activeCategory === category ? 'white' : 'text.secondary',
                      border: '1px solid',
                      borderColor: activeCategory === category ? 'primary.main' : 'rgba(232, 62, 106, 0.3)',
                      '&:hover': {
                        backgroundColor: activeCategory === category ? 'primary.dark' : 'rgba(232, 62, 106, 0.1)',
                        borderColor: 'primary.main',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Box>

          {isMobile ? (
            <MobilePortfolioCarousel projects={filteredProjects} />
          ) : (
          <Grid container spacing={4}>
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <Grid item xs={12} sm={6} lg={4} key={project.id}>
                  <motion.div
                    key={activeCategory + project.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    layout
                  >
                    <Card
                      sx={{
                        height: '100%',
                        background: 'rgba(26, 26, 26, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(232, 62, 106, 0.2)',
                        borderRadius: 3,
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          border: '1px solid rgba(232, 62, 106, 0.5)',
                          boxShadow: '0 20px 40px rgba(232, 62, 106, 0.2)',
                          '& .project-image': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                      onClick={() => setSelectedProject(project)}
                    >
                        <Box sx={{ 
                          position: 'relative', 
                          overflow: 'hidden',
                          width: '100%',
                          aspectRatio: '1/1',
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
                            src={project.image}
                            alt={`${project.title} - ${project.category} project by Falcon Creatives`}
                            width="100%"
                            height="100%"
                          className="project-image"
                          sx={{
                            transition: 'transform 0.3s ease',
                              objectFit: 'contain',
                              width: '100%',
                              height: '100%',
                              maxHeight: '100%',
                              position: 'relative',
                              zIndex: 2,
                          }}
                        />
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

                        <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Chip
                          label={project.category}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(232, 62, 106, 0.2)',
                            color: 'primary.main',
                            mb: 2,
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: 'text.primary',
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.6,
                            mb: 2,
                          }}
                        >
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: 'rgba(232, 62, 106, 0.3)',
                                color: 'text.secondary',
                                fontSize: '0.75rem',
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
          )}
        </motion.div>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            border: '1px solid rgba(232, 62, 106, 0.2)',
            borderRadius: 3,
          },
        }}
      >
        {selectedProject && (
          <DialogContent sx={{ p: 0 }}>
                    <Box sx={{ 
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16/9',
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
                        src={selectedProject.image}
                alt={selectedProject.title}
                        width="100%"
                        height="100%"
                        sx={{
                          objectFit: 'contain',
                          width: '100%',
                          height: '100%',
                          maxHeight: '100%',
                          position: 'relative',
                          zIndex: 2,
                        }}
              />
              <IconButton
                onClick={() => setSelectedProject(null)}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ p: 4 }}>
              <Chip
                label={selectedProject.category}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  mb: 2,
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                {selectedProject.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                {selectedProject.description}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Technologies Used:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {selectedProject.technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    variant="outlined"
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                    }}
                  />
                ))}
              </Box>
              <Button
                variant="contained"
                endIcon={<LaunchIcon />}
                sx={{
                  background: 'linear-gradient(45deg, #E83E6A, #FF6B8A)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #C2185B, #E83E6A)',
                  },
                }}
              >
                View Project
              </Button>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default Portfolio;
