/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_OUTPUT || 'standalone',
  basePath: process.env.NEXT_BASE_PATH || '',
  // Add trailing slash for static export compatibility
  trailingSlash: true,
  images: {
    // Unoptimized images for static export (GitHub Pages doesn't support Next.js Image optimization)
    unoptimized: process.env.NEXT_UNOPTIMIZED_IMAGES === 'true' || process.env.NEXT_OUTPUT === 'export',
  },
  // Ensure asset prefix is set for GitHub Pages
  assetPrefix: process.env.NEXT_BASE_PATH || '',
};

module.exports = nextConfig;
