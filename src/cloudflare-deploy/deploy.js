#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('📦 Deploying to Cloudflare Pages...');

try {
    // Step 1: Setup bindings (skip resource creation)
    console.log('🔄 Setting up bindings...');
    execSync('node ./scripts/update-bindings.js', { stdio: 'inherit' });

    // Step 2: Install dependencies and build Next.js app
    console.log('📦 Installing dependencies...');
    execSync('cd ../web && npm install', { stdio: 'inherit' });
    
    console.log('🛠️ Building Next.js app...');
    execSync('cd ../web && npm run build', { stdio: 'inherit' });

    // Step 3: Build Pages directly without recursive build
    console.log('⚡ Building for Cloudflare Pages...');
    execSync('npx @cloudflare/next-on-pages@1 --skip-build', { stdio: 'inherit' });

    // Step 4: Deploy to Cloudflare Pages
    console.log('🚀 Deploying to Cloudflare Pages...');
    execSync('npx wrangler pages deploy ../web/.vercel/output/static', { stdio: 'inherit' });

    console.log('✅ Deployment complete!');
} catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
}