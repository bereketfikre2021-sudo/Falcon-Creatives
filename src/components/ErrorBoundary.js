import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  useTheme,
} from '@mui/material';
import { ErrorOutline, Refresh } from '@mui/icons-material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }

    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  logErrorToService = (error, errorInfo) => {
    // Log to external error reporting service
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false
      });
    }

    // You can integrate with services like Sentry here
    // Sentry.captureException(error, { extra: errorInfo });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Paper
            elevation={3}
            sx={{
              p: 6,
              textAlign: 'center',
              background: 'rgba(26, 26, 26, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(232, 62, 106, 0.2)',
              borderRadius: 3,
            }}
          >
            <Box sx={{ mb: 4 }}>
              <ErrorOutline
                sx={{
                  fontSize: 80,
                  color: 'error.main',
                  mb: 2,
                }}
              />
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: 'text.primary',
              }}
            >
              Oops! Something went wrong
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              We're sorry, but something unexpected happened. Our team has been notified 
              and is working to fix this issue. Please try refreshing the page or contact 
              us if the problem persists.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                startIcon={<Refresh />}
                onClick={this.handleReload}
                sx={{
                  background: 'linear-gradient(45deg, #E83E6A, #FF6B8A)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #C2185B, #E83E6A)',
                  },
                }}
              >
                Reload Page
              </Button>

              <Button
                variant="outlined"
                onClick={this.handleReset}
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(232, 62, 106, 0.1)',
                  },
                }}
              >
                Try Again
              </Button>

              <Button
                variant="outlined"
                onClick={() => window.location.href = '/#contact'}
                sx={{
                  borderColor: 'text.secondary',
                  color: 'text.secondary',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Contact Support
              </Button>
            </Box>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <Box sx={{ mt: 4, textAlign: 'left' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'error.main' }}>
                  Error Details (Development Only):
                </Typography>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'error.main',
                    fontFamily: 'monospace',
                    fontSize: '0.875rem',
                    overflow: 'auto',
                    maxHeight: 300,
                  }}
                >
                  <Typography variant="body2" component="pre">
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                  </Typography>
                </Paper>
              </Box>
            )}
          </Paper>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
