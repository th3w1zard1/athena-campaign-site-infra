/** @type {import('@cloudflare/next-on-pages').Config} */
const config = {
  // Path to the Next.js application
  projectRoot: '../web',
  
  // Let Next.js handle its own build directory
  // Don't override distDir, let it use the default .next
  
  // Skip minification if needed for debugging
  skipMinification: process.env.NODE_ENV === 'development',
  
  // Exclude template files and other non-main app files
  excludeFiles: [
    '../cloudflare-deploy/**',
    '../template-backup/**',
    '**/.git/**',
    '**/node_modules/**'
  ],
  
  // Enable experimental features
  experimental: {
    // Enable runtime logs for better debugging
    runtime: 'nodejs',
    // Improve build performance
    incrementalCache: true,
  },
  
  // Environment variables to include in the build
  env: {
    NODE_ENV: process.env.NODE_ENV || 'production',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  },
  
  // Build options for better performance and compatibility
  buildOptions: {
    // Target the Edge Runtime for better performance
    target: 'edge',
    // Enable source maps for better debugging
    sourceMaps: true,
  },
  
  // Custom webpack configuration for Cloudflare Workers compatibility
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize for Edge Runtime
    if (!isServer && !dev) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // Polyfill Node.js modules for Edge Runtime
        fs: false,
        path: false,
        crypto: false,
      };
    }
    
    return config;
  },
};

module.exports = config; 