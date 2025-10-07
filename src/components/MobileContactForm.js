import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Snackbar,
  InputAdornment,
} from '@mui/material';
import {
  Person,
  Email,
  Subject,
  Message,
  Send,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MobileContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({ 
    open: false, 
    message: '', 
    severity: 'success' 
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
      // eslint-disable-next-line no-console
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

  const handleCallClick = () => {
    window.location.href = 'tel:+251985535022';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I\'m interested in your services.');
    window.open(`https://wa.me/251985535022?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:falconcreativesplc@gmail.com';
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 3,
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          Get In Touch
        </Typography>

        {/* Quick Contact Buttons */}
        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
          <Button
            variant="outlined"
            startIcon={<Email />}
            onClick={handleEmailClick}
            sx={{
              flex: 1,
              minWidth: 120,
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(232, 62, 106, 0.1)',
                borderColor: 'primary.main',
              },
            }}
          >
            Email
          </Button>
          <Button
            variant="outlined"
            startIcon={<Message />}
            onClick={handleWhatsAppClick}
            sx={{
              flex: 1,
              minWidth: 120,
              borderColor: '#25D366',
              color: '#25D366',
              '&:hover': {
                backgroundColor: 'rgba(37, 211, 102, 0.1)',
                borderColor: '#25D366',
              },
            }}
          >
            WhatsApp
          </Button>
          <Button
            variant="outlined"
            startIcon={<Person />}
            onClick={handleCallClick}
            sx={{
              flex: 1,
              minWidth: 120,
              borderColor: '#FFD700',
              color: '#FFD700',
              '&:hover': {
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                borderColor: '#FFD700',
              },
            }}
          >
            Call
          </Button>
        </Box>

        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person sx={{ color: 'primary.main' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
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
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  color: 'primary.main',
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: 'primary.main' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
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
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  color: 'primary.main',
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Subject sx={{ color: 'primary.main' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
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
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  color: 'primary.main',
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                  <Message sx={{ color: 'primary.main' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
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
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  color: 'primary.main',
                },
              },
            }}
          />

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
              borderRadius: 3,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              '&:hover': {
                background: loading 
                  ? 'rgba(232, 62, 106, 0.5)' 
                  : 'linear-gradient(45deg, #C2185B, #E83E6A)',
                transform: loading ? 'none' : 'translateY(-2px)',
                boxShadow: loading ? 'none' : '0 10px 30px rgba(232, 62, 106, 0.4)',
              },
              '&:active': {
                transform: loading ? 'none' : 'translateY(0)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </motion.div>
    </Box>
  );
};

export default MobileContactForm;
