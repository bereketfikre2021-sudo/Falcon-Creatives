const fs = require('fs');
const path = require('path');

// Production build script
console.log('🚀 Starting production build...');

// Set production environment variables
process.env.NODE_ENV = 'production';
process.env.GENERATE_SOURCEMAP = 'false';
process.env.INLINE_RUNTIME_CHUNK = 'false';

// Build optimizations
const optimizations = {
  // Disable source maps for production
  GENERATE_SOURCEMAP: 'false',
  
  // Optimize bundle size
  INLINE_RUNTIME_CHUNK: 'false',
  
  // Enable production optimizations
  NODE_ENV: 'production',
  
  // Disable development features
  FAST_REFRESH: 'false',
  ESLINT_NO_DEV_ERRORS: 'true',
};

// Apply optimizations
Object.keys(optimizations).forEach(key => {
  process.env[key] = optimizations[key];
});

// Generate sitemap after build
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Homepage -->
  <url>
    <loc>https://falconcreatives.netlify.app/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Services Section -->
  <url>
    <loc>https://falconcreatives.netlify.app/#services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Portfolio Section -->
  <url>
    <loc>https://falconcreatives.netlify.app/#portfolio</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- About Section -->
  <url>
    <loc>https://falconcreatives.netlify.app/#about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Pricing Section -->
  <url>
    <loc>https://falconcreatives.netlify.app/#pricing</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Testimonials Section -->
  <url>
    <loc>https://falconcreatives.netlify.app/#testimonials</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Contact Section -->
  <url>
    <loc>https://falconcreatives.netlify.app/#contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

</urlset>`;

  const buildDir = path.join(__dirname, '..', 'build');
  if (fs.existsSync(buildDir)) {
    fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
    console.log('✅ Sitemap generated successfully');
  }
}

// Register sitemap generation
if (process.env.npm_lifecycle_event === 'postbuild') {
  generateSitemap();
}

// Export for use in package.json
module.exports = {
  generateSitemap,
  optimizations
};
