import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  TrendingUp,
  People,
  Star,
  EmojiEvents,
} from '@mui/icons-material';
import CountUp from './CountUp';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    {
      icon: <People sx={{ fontSize: 40 }} />,
      number: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      duration: 2500,
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40 }} />,
      number: 1000,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful project deliveries',
      duration: 3000,
    },
    {
      icon: <Star sx={{ fontSize: 40 }} />,
      number: 5.0,
      decimals: 1,
      label: 'Client Rating',
      description: 'Average client satisfaction',
      duration: 2000,
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      number: 99,
      suffix: '%',
      label: 'Success Rate',
      description: 'Project completion rate',
      duration: 2500,
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

  return (
    <Box
      id="about"
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
                  About Us
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
                Crafting Digital Excellence
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
                We are a team of passionate creatives and developers dedicated to transforming 
                ideas into extraordinary digital experiences that drive results.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
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
                    }}
                  >
                    <Box
                      component="img"
                      src="/img/Falcon.webp"
                      alt="Falcon Creatives Logo - Premium Digital Marketing and Creative Services Agency in Ethiopia"
                      sx={{
                        width: { xs: 280, md: 360 },
                        height: { xs: 280, md: 360 },
                        objectFit: 'contain',
                        filter: 'brightness(1.1) contrast(1.1)',
                        borderRadius: '50%',
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: 'text.primary',
                  }}
                >
                  Our Story
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  Founded with a vision to revolutionize digital experiences, Falcon Creatives has 
                  grown from a small creative studio to a full-service digital agency. We combine 
                  cutting-edge technology with creative excellence to deliver solutions that not 
                  only meet but exceed our clients' expectations.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  Our team of designers, developers, and strategists work together to create 
                  memorable brands, engaging websites, and innovative digital solutions that 
                  drive business growth and customer engagement.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {['Innovation', 'Quality', 'Creativity', 'Excellence'].map((value, index) => (
                    <Box
                      key={index}
                      sx={{
                        px: 3,
                        py: 1,
                        borderRadius: 2,
                        background: 'linear-gradient(45deg, rgba(232, 62, 106, 0.2), rgba(255, 215, 0, 0.2))',
                        border: '1px solid rgba(232, 62, 106, 0.3)',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 600,
                        }}
                      >
                        {value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Stats Section */}
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      background: 'rgba(26, 26, 26, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(232, 62, 106, 0.2)',
                      borderRadius: 3,
                      height: 280,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        border: '1px solid rgba(232, 62, 106, 0.5)',
                        boxShadow: '0 15px 30px rgba(232, 62, 106, 0.2)',
                      },
                    }}
                  >
                    <CardContent sx={{ 
                      p: 4, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between',
                      height: '100%'
                    }}>
                      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            background: 'linear-gradient(45deg, #E83E6A, #FF6B8A)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                            color: 'white',
                          }}
                        >
                          {stat.icon}
                        </Box>
                        <CountUp
                          end={stat.number}
                          suffix={stat.suffix}
                          decimals={stat.decimals || 0}
                          duration={stat.duration || 2000}
                          delay={index * 200}
                          variant="h3"
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: 'text.primary',
                          }}
                        >
                          {stat.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {stat.description}
                        </Typography>
                      </Box>
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

export default About;
