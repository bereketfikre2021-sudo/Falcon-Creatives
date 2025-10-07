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

const TermsModal = ({ open, onClose }) => {
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
              Terms of Service
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
                Welcome to Falcon Creatives! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  1. Acceptance of Terms
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  By accessing and using Falcon Creatives' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  2. Services Description
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  Falcon Creatives provides the following services:
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Graphics Design and Brand Identity
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Motion Graphics and Video Editing
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Web Development and Design
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Game Development
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Digital Marketing Solutions
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  3. Client Responsibilities
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  As a client, you agree to:
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Provide accurate and complete information for your project
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Make timely payments as agreed in the project contract
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Provide feedback and approvals within agreed timeframes
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Respect intellectual property rights
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  4. Payment Terms
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  Payment terms will be specified in individual project contracts. Generally:
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    A deposit may be required before work begins
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Final payment is due upon project completion
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Late payments may incur additional fees
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Refunds are subject to our refund policy
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  5. Intellectual Property
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  All work created by Falcon Creatives remains our intellectual property until full payment is received. Upon completion of payment:
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    You receive full rights to the final deliverables
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    We retain the right to showcase work in our portfolio
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.7, color: 'text.secondary' }}>
                    Source files may be provided upon request
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  6. Project Timeline and Revisions
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  Project timelines and revision limits will be specified in each project contract. Additional revisions beyond the agreed limit may incur extra charges.
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  7. Limitation of Liability
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  Falcon Creatives shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  8. Termination
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  Either party may terminate a project contract with written notice. Upon termination, payment for completed work is due, and any work in progress will be delivered as-is.
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  9. Contact Information
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
                  For questions about these Terms of Service, please contact us:
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
                These Terms of Service may be updated from time to time. Continued use of our services after changes constitutes acceptance of the new terms.
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

export default TermsModal;
