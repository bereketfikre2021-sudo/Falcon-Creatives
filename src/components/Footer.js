import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Telegram,
  WhatsApp,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import PrivacyModal from './PrivacyModal';
import TermsModal from './TermsModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const socialLinks = [
    { icon: <Facebook />, url: '#', color: '#1877F2' },
    { icon: <Twitter />, url: '#', color: '#1DA1F2' },
    { icon: <Instagram />, url: '#', color: '#E4405F' },
    { icon: <LinkedIn />, url: '#', color: '#0077B5' },
    { icon: <Telegram />, url: '#', color: '#0088CC' },
    { icon: <WhatsApp />, url: '#', color: '#25D366' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Graphics Design',
    'Brand Identity',
    'Motion Graphics',
    'Video Editing',
    'Web Development',
    'Game Development',
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)',
        borderTop: '1px solid rgba(232, 62, 106, 0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '10%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(232, 62, 106, 0.05), rgba(255, 215, 0, 0.05))',
          filter: 'blur(40px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: '10%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.05), rgba(232, 62, 106, 0.05))',
          filter: 'blur(30px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ py: 8 }}>
          <Grid container spacing={6}>
            {/* Company Info */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    src="/img/Falcon.webp"
                    alt="Falcon Creatives Logo - Premium Digital Marketing and Creative Services Agency in Ethiopia"
                    sx={{
                      height: 50,
                      width: 50,
                      mr: 2,
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      background: 'linear-gradient(45deg, #E83E6A, #FFD700)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Falcon Creatives
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  Elevating brands to new heights through innovative design, 
                  cutting-edge development, and strategic digital marketing solutions.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      onClick={() => window.open(social.url, '_blank')}
                      sx={{
                        color: social.color,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          backgroundColor: `${social.color}20`,
                          border: `1px solid ${social.color}`,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: 'text.primary',
                  }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      component="button"
                      onClick={() => scrollToSection(link.href)}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        textAlign: 'left',
                        '&:hover': {
                          color: 'primary.main',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Services */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: 'text.primary',
                  }}
                >
                  Our Services
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {services.map((service, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                          cursor: 'pointer',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {service}
                    </Typography>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: 'text.primary',
                  }}
                >
                  Contact Info
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Email sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Link
                      href="mailto:falconcreativesplc@gmail.com"
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      <Typography variant="body2">
                        falconcreativesplc@gmail.com
                      </Typography>
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Phone sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Link
                      href="tel:+251985535022"
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      <Typography variant="body2">
                        +251 98 553 5022
                      </Typography>
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Phone sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Link
                      href="tel:+251923988838"
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      <Typography variant="body2">
                        +251 923 988 838
                      </Typography>
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOn sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Link
                      href="https://maps.google.com/?q=Addis+Ababa,+Ethiopia"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      <Typography variant="body2">
                        Addis Ababa, Ethiopia
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: 'rgba(232, 62, 106, 0.2)' }} />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                }}
              >
                © {currentYear} Falcon Creatives. All rights reserved.
              </Typography>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Link
                  component="button"
                  onClick={() => setPrivacyOpen(true)}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  component="button"
                  onClick={() => setTermsOpen(true)}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  Terms of Service
                </Link>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Modals */}
      <PrivacyModal 
        open={privacyOpen} 
        onClose={() => setPrivacyOpen(false)} 
      />
      <TermsModal 
        open={termsOpen} 
        onClose={() => setTermsOpen(false)} 
      />
    </Box>
  );
};

export default Footer;
