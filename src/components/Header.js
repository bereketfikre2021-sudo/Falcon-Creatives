import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Touch gesture handling for mobile navigation
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

    if (isLeftSwipe && mobileOpen) {
      setMobileOpen(false);
    }
    if (isRightSwipe && !mobileOpen) {
      setMobileOpen(true);
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled 
            ? 'rgba(13, 13, 13, 0.25)' 
            : 'rgba(13, 13, 13, 0.1)',
          backdropFilter: scrolled 
            ? 'blur(20px) saturate(180%)' 
            : 'blur(10px) saturate(150%)',
          borderBottom: scrolled 
            ? '1px solid rgba(232, 62, 106, 0.3)' 
            : '1px solid rgba(232, 62, 106, 0.1)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
            : '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(232, 62, 106, 0.1) 0%, rgba(255, 215, 0, 0.1) 100%)',
            opacity: scrolled ? 0.3 : 0.1,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => scrollToSection('#home')}
              >
                <Box
                  component="img"
                  src="/img/Falcon.webp"
                    alt="Falcon Creatives Logo - Premium Digital Marketing and Creative Services Agency in Ethiopia"
                  sx={{
                    height: 40,
                    width: 40,
                    mr: 2,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <Typography
                  variant="h5"
                  component="div"
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
            </motion.div>

            {!isMobile ? (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <Button
                        color="inherit"
                        onClick={() => scrollToSection(item.href)}
                        sx={{
                          fontWeight: 500,
                          '&:hover': {
                            color: 'primary.main',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {item.name}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: 'rgba(13, 13, 13, 0.25)',
            backdropFilter: 'blur(20px) saturate(180%)',
            borderLeft: '1px solid rgba(232, 62, 106, 0.3)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(232, 62, 106, 0.1) 0%, rgba(255, 215, 0, 0.1) 100%)',
              opacity: 0.3,
              pointerEvents: 'none',
            },
          },
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ py: 2 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              sx={{
                cursor: 'pointer',
                minHeight: 56, // Minimum touch target size
                py: 2,
                px: 3,
                mx: 2,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(232, 62, 106, 0.1)',
                  transform: 'translateX(8px)',
                },
                '&:active': {
                  backgroundColor: 'rgba(232, 62, 106, 0.2)',
                  transform: 'scale(0.98)',
                },
              }}
            >
              <ListItemText
                primary={item.name}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: 'text.primary',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
