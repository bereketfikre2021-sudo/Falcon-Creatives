# Falcon Creatives - Deployment Guide

This guide covers how to deploy the Falcon Creatives website to various hosting platforms.

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
npm run deploy:netlify
```

### Option 2: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
npm run deploy:vercel
```

### Option 3: GitHub Pages
```bash
# Deploy to GitHub Pages
npm run deploy:github
```

## 📋 Pre-Deployment Checklist

### 1. Environment Configuration
- [ ] Copy `env.example` to `.env.local`
- [ ] Update environment variables for production
- [ ] Set up analytics tracking IDs
- [ ] Configure contact form endpoints

### 2. Build Optimization
- [ ] Run `npm run build:production` to test production build
- [ ] Verify all assets are properly optimized
- [ ] Check for console errors in production build
- [ ] Test responsive design on multiple devices

### 3. SEO & Performance
- [ ] Verify all meta tags are correct
- [ ] Test structured data with Google's Rich Results Test
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check Core Web Vitals

### 4. Content Review
- [ ] Update all placeholder content with real data
- [ ] Replace placeholder images with actual project images
- [ ] Verify all contact information is correct
- [ ] Test all external links

## 🔧 Environment Variables

### Required Variables
```bash
REACT_APP_NAME=Falcon Creatives
REACT_APP_CONTACT_EMAIL=falconcreativesplc@gmail.com
REACT_APP_PHONE_PRIMARY=+251985535022
```

### Optional Variables
```bash
REACT_APP_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
REACT_APP_GOOGLE_TAG_MANAGER_ID=GTM_ID
REACT_APP_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
```

## 🌐 Platform-Specific Deployment

### Netlify Deployment

#### Automatic Deployment
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build:production`
3. Set publish directory: `build`
4. Add environment variables in Netlify dashboard

#### Manual Deployment
```bash
# Build the project
npm run build:production

# Deploy to Netlify
netlify deploy --prod --dir=build
```

#### Netlify Configuration
The `netlify.toml` file includes:
- Build settings
- Redirect rules for SPA
- Security headers
- Cache optimization
- Compression settings

### Vercel Deployment

#### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect React settings
3. Add environment variables in Vercel dashboard

#### Manual Deployment
```bash
# Deploy to Vercel
vercel --prod
```

#### Vercel Configuration
The `vercel.json` file includes:
- Build configuration
- Route handling
- Security headers
- Cache optimization

### GitHub Pages Deployment

#### Setup
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. The workflow will automatically deploy on push to main

#### Manual Deployment
```bash
# Deploy to GitHub Pages
npm run deploy:github
```

## 🔒 Security Configuration

### Security Headers
All platforms are configured with:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

### HTTPS
- All platforms automatically provide HTTPS
- Ensure all external resources use HTTPS
- Update any HTTP links to HTTPS

## 📊 Performance Optimization

### Build Optimizations
- Source maps disabled in production
- Code splitting enabled
- Tree shaking for unused code
- Image optimization with lazy loading
- Service worker for caching

### Caching Strategy
- Static assets: 1 year cache
- Images: 1 year cache
- HTML: No cache (for SPA routing)
- Service worker: No cache

## 🧪 Testing Before Deployment

### Local Testing
```bash
# Build and test locally
npm run build:production
npm run preview

# Run tests
npm run test:coverage

# Check code quality
npm run lint
npm run format:check
```

### Production Testing
1. Deploy to staging environment first
2. Test all functionality
3. Verify performance metrics
4. Check mobile responsiveness
5. Test contact form functionality

## 📈 Monitoring & Analytics

### Google Analytics Setup
1. Create Google Analytics account
2. Get measurement ID
3. Add to environment variables
4. Verify tracking in production

### Performance Monitoring
- Web Vitals tracking enabled
- Error boundary for error reporting
- Service worker for offline functionality

## 🔄 CI/CD Pipeline

### GitHub Actions
The `.github/workflows/deploy.yml` file includes:
- Automated testing
- Code quality checks
- Build verification
- Automatic deployment to multiple platforms

### Deployment Triggers
- Push to main/master branch
- Pull request creation
- Manual workflow dispatch

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build:production
```

#### Environment Variables Not Loading
- Ensure variables start with `REACT_APP_`
- Check for typos in variable names
- Verify variables are set in hosting platform

#### Routing Issues
- Ensure SPA redirect rules are configured
- Check that all routes redirect to index.html
- Verify React Router configuration

### Performance Issues
- Check bundle size with `npm run build:analyze`
- Optimize images and assets
- Review lazy loading implementation
- Check for memory leaks

## 📞 Support

For deployment issues:
- Check platform-specific documentation
- Review build logs for errors
- Test locally with production build
- Contact platform support if needed

## 🔄 Updates & Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor performance metrics
- Review security headers
- Update content regularly

### Backup Strategy
- Code is version controlled in Git
- Environment variables documented
- Database backups (if applicable)
- Asset backups

---

**Last Updated**: January 2024
**Version**: 1.0.0
