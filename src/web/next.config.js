module.exports = {
  output: process.env.NEXT_OUTPUT || 'standalone',
  basePath: process.env.NEXT_BASE_PATH || '',
  images: {
    unoptimized: process.env.NEXT_UNOPTIMIZED_IMAGES === 'false',
  },
};
