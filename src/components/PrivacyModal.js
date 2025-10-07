import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const PrivacyModal = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.1, duration: 0.4 }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      fullScreen={isMobile}
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)',
          border: '1px solid rgba(232, 62, 106, 0.2)',
          borderRadius: isMobile ? 0 : 3,
          backdropFilter: 'blur(20px)',
          position: 'relative',
          overflow: 'hidden',
        }
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 20%, rgba(232, 62, 106, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pb: 2,
            borderBottom: '1px solid rgba(232, 62, 106, 0.2)',
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(45deg, #E83E6A, #FFD700)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              Privacy Policy
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Last updated: {new Date().toLocaleDateString()}
            </Typography>
          </Box>
          <IconButton
            onClick={onClose}
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'primary.main',
                backgroundColor: 'rgba(232, 62, 106, 0.1)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {/* Content */}
        <DialogContent sx={{ px: 3, py: 3 }}>
          <motion.div variants={contentVariants}>
            <Box sx={{ maxHeight: isMobile ? '60vh' : '70vh', overflow: 'auto', pr: 1 }}>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.primary' }}>
                At Falcon Creatives, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  1. Information We Collect
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  We may collect the following types of information:
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Personal information (name, email, phone number) when you contact us
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Usage data and analytics to improve our website performance
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Cookies and similar tracking technologies
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Project-related information when you engage our services
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  2. How We Use Your Information
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    To provide and improve our creative services
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    To communicate with you about projects and inquiries
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    To send you marketing communications (with your consent)
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    To analyze website usage and optimize user experience
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  3. Data Security
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    SSL encryption for data transmission
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Secure servers and databases
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Regular security audits and updates
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Limited access to personal information
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  4. Your Rights
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  You have the right to:
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Access and update your personal information
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Request deletion of your data
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Opt-out of marketing communications
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Withdraw consent for data processing
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  5. Third-Party Services
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  We may use third-party services for analytics, hosting, and communication. These services have their own privacy policies, and we encourage you to review them.
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  6. Contact Us
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </Typography>
                <Box sx={{ 
                  p: 2, 
                  backgroundColor: 'rgba(232, 62, 106, 0.1)', 
                  borderRadius: 2,
                  border: '1px solid rgba(232, 62, 106, 0.2)'
                }}>
                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                    Email: falconcreatives@gmail.com
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                    Phone: +251 98 553 5022 / +251 923 988 838
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                    Address: Addis Ababa, Ethiopia
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 3, borderColor: 'rgba(232, 62, 106, 0.2)' }} />

              <Typography variant="body2" sx={{ 
                color: 'text.secondary', 
                fontStyle: 'italic',
                textAlign: 'center'
              }}>
                This Privacy Policy may be updated from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page.
              </Typography>
            </Box>
          </motion.div>
        </DialogContent>

        {/* Actions */}
        <DialogActions sx={{ px: 3, py: 2, borderTop: '1px solid rgba(232, 62, 106, 0.2)' }}>
          <Button
            onClick={onClose}
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #E83E6A, #FFD700)',
              color: 'white',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              '&:hover': {
                background: 'linear-gradient(45deg, #C6284A, #E6C200)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(232, 62, 106, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Close
          </Button>
        </DialogActions>
      </motion.div>
    </Dialog>
  );
};

export default PrivacyModal;
