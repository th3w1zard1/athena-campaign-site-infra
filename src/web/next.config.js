/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Ensures static HTML/asset generation for GitHub Pages
  basePath: process.env.NEXT_BASE_PATH || '',
  assetPrefix: process.env.NEXT_BASE_PATH || '',
  // Add trailing slash for static export compatibility
  trailingSlash: true,
  images: {
    // Unoptimized images for static export (GitHub Pages doesn't support Next.js Image optimization)
    unoptimized: true,
  },
};

module.exports = nextConfig;
