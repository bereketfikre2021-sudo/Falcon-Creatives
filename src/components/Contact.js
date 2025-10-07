import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Alert,
  Snackbar,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Send,
} from '@mui/icons-material';
import MobileContactForm from './MobileContactForm';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(false);



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xnngbaeo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Thank you for your message! We\'ll get back to you soon.',
          severity: 'success',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSnackbar({
        open: true,
        message: 'Sorry, there was an error sending your message. Please try again.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
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

  return (
    <Box
      id="contact"
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
                Get In Touch
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
                Let's Create Something Amazing
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
                Ready to take your project to the next level? Get in touch with us today 
                and let's discuss how we can help bring your vision to life.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={6} justifyContent="center">
            {/* Contact Form */}
            <Grid item xs={12} md={8} lg={6}>
              <motion.div variants={itemVariants}>
                {isMobile ? (
                  <MobileContactForm />
                ) : (
                  <Card
                    sx={{
                      background: 'rgba(26, 26, 26, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(232, 62, 106, 0.2)',
                      borderRadius: 3,
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 3,
                          color: 'text.primary',
                        }}
                      >
                        Send us a Message
                      </Typography>
                      <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Your Name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: 'rgba(232, 62, 106, 0.3)',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Email Address"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: 'rgba(232, 62, 106, 0.3)',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              required
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: 'rgba(232, 62, 106, 0.3)',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Message"
                              name="message"
                              multiline
                              rows={5}
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: 'rgba(232, 62, 106, 0.3)',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main',
                                  },
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Button
                              type="submit"
                              variant="contained"
                              size="large"
                              disabled={loading}
                              endIcon={loading ? null : <Send />}
                              sx={{
                                background: loading 
                                  ? 'rgba(232, 62, 106, 0.5)' 
                                  : 'linear-gradient(45deg, #E83E6A, #FF6B8A)',
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                borderRadius: 2,
                                '&:hover': {
                                  background: loading 
                                    ? 'rgba(232, 62, 106, 0.5)' 
                                    : 'linear-gradient(45deg, #C2185B, #E83E6A)',
                                  transform: loading ? 'none' : 'translateY(-2px)',
                                  boxShadow: loading ? 'none' : '0 10px 30px rgba(232, 62, 106, 0.4)',
                                },
                                transition: 'all 0.3s ease',
                              }}
                            >
                              {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
