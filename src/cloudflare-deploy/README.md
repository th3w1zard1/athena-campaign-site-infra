# Cloudflare Pages Deployment (2024-2025 Updated)

This folder contains the **modernized** Cloudflare Pages deployment configuration for the Athena Campaign Website.

> **🔄 UPDATED**: This configuration has been updated with 2024-2025 best practices. See `MIGRATION_GUIDE.md` for detailed changes.

**Key Improvements:**

- Modern `wrangler.jsonc` configuration (replaces TOML)
- Latest Next.js compatibility (`nodejs_compat_v2`)
- Simplified deployment commands
- Enhanced monitoring and debugging tools
- Campaign-ready bindings for scaling

## Prerequisites

1. **Cloudflare Account**: You need a Cloudflare account with Pages enabled
2. **Wrangler CLI**: Make sure you're logged in to Cloudflare via wrangler
3. **Node.js**: Version 18 or higher

## Setup

1. **Install dependencies** (run this from the `cloudflare-deploy` folder):

   ```bash
   npm install
   ```

2. **Login to Cloudflare** (if not already done):

   ```bash
   npx wrangler login
   ```

3. **Create your Pages project** (optional - it will be created automatically on first deploy):

   ```bash
   npx wrangler pages project create athena-campaign
   ```

## Commands

All commands should be run from the `cloudflare-deploy` directory:

### Development

```bash
# Build and preview locally (runs on http://localhost:3000)
npm run preview

# or use the dev command
npm run dev
```

### Deployment

```bash
# Deploy to Cloudflare Pages
npm run deploy

# Deploy to production with additional flags
npm run deploy:production
```

### Building Only

```bash
# Build the Next.js app and convert for Cloudflare Pages
npm run build

# Build only the Next.js app (in parent directory)
npm run build:nextjs

# Build only the Cloudflare Pages output
npm run build:pages
```

## Configuration

- **`wrangler.toml`**: Main Cloudflare configuration
- **`next-on-pages.config.js`**: Next.js to Cloudflare Pages adapter configuration
- **`package.json`**: Dependencies and scripts

## Project Structure

```bash
src/
├── cloudflare-deploy/          # This folder - Cloudflare deployment config
│   ├── package.json           # CF deployment dependencies
│   ├── wrangler.toml          # Cloudflare configuration
│   └── next-on-pages.config.js # Build configuration
├── app/                       # Your Next.js app
├── public/                    # Static assets
├── package.json              # Main Next.js dependencies
└── ...                       # Other Next.js files
```

## Environment Variables

Add environment variables in the `wrangler.toml` file under the `[env.production.vars]` section or use `.dev.vars` for local development.

See `.dev.vars.example` for a comprehensive list of environment variables commonly used in campaign websites.

## Integrations

See `INTEGRATIONS.md` for a comprehensive guide on integrating third-party services with your Next.js campaign website, including:

- **Authentication:** NextAuth.js, Auth0, Clerk
- **Databases:** PostgreSQL + Prisma, Supabase, Turso
- **Email:** Resend, SendGrid, Mailchimp
- **Payments:** Stripe, PayPal
- **Analytics:** Google Analytics, Plausible
- **And many more campaign-specific integrations**

Each integration includes setup instructions, environment variables, and use cases specific to campaign websites.

## Troubleshooting

### Build Issues

- Make sure the parent Next.js app builds successfully: `cd .. && npm run build`
- Check that all dependencies are installed in both directories

### Deployment Issues

- Verify you're logged in: `npx wrangler whoami`
- Check your Cloudflare account has Pages enabled
- Ensure the project name in `wrangler.toml` matches your Pages project

### Local Development Issues

- The local dev server runs on port 3000 by default
- If you get port conflicts, modify the `--port` flag in the package.json scripts

## Important Notes

- The build process references the parent directory (`..`) where your Next.js app lives
- All Cloudflare-specific configuration stays in this folder
- The Next.js app remains unchanged and can still be deployed elsewhere
- Static assets and images are automatically optimized for Cloudflare's CDN
