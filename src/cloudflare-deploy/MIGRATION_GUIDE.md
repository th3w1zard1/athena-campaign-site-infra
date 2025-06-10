# Cloudflare Pages Migration Guide (2024-2025)

## 🔄 What Changed?

This folder has been updated with the latest Cloudflare Pages deployment practices based on 2024-2025 standards.

## 📋 Key Updates

### 1. **Modern Dependency Versions**

- **@cloudflare/next-on-pages**: Updated to `^1.13.5`
- **wrangler**: Updated to `^3.92.0`
- **Node.js compatibility**: Now using `nodejs_compat_v2`

## 🚀 Migration Steps

### If You're Using This for the First Time

1. Navigate to `src/cloudflare-deploy/`
2. Run `npm install`
3. Run `npm run deploy`

## 🔧 Available Commands

### **Development**

```bash
npm run dev          # Start local development server
npm run preview      # Preview build locally
```

### **Deployment**

```bash
npm run deploy                 # Deploy to default environment
npm run deploy:production      # Deploy to production
npm run deploy:preview         # Deploy to preview
```

### **Monitoring & Debugging**

```bash
npm run logs                   # View deployment logs
npm run logs:production        # View production logs
npm run logs:preview          # View preview logs
npm run status                # Check deployment status
```

### **Configuration Management**

```bash
npm run config:download        # Download current config from Cloudflare
npm run config:validate        # Validate configuration file
npm run deps:update           # Update Cloudflare dependencies
npm run deps:check            # Check for outdated dependencies
```

## 📦 What's Included in the New Setup

### 1. **Modern Configuration** (`wrangler.jsonc`)

- JSON with comments for better readability
- Environment-specific variable overrides
- Ready-to-use bindings (commented out)
- Performance optimizations
- Observability settings

### 2. **Campaign-Ready Bindings** (Ready to Uncomment)

- **KV Storage**: For session data, cache
- **D1 Database**: For structured campaign data
- **R2 Storage**: For file uploads, images
- **Email Service**: For campaign communications
- **Analytics Engine**: For campaign metrics tracking

### 3. **Enhanced Next.js Configuration**

- Edge Runtime optimization
- Source map support
- Better error handling
- Improved build performance

## 🎯 Campaign-Specific Features

The new configuration is pre-configured for campaign websites with:

1. **Donation Processing**: Ready for payment integrations
2. **Voter Outreach**: Email and analytics bindings
3. **Content Management**: R2 storage for media assets
4. **Performance Monitoring**: Analytics for campaign metrics
5. **Security**: Enhanced headers and monitoring

## 🔍 Troubleshooting

### **Configuration Issues**

```bash
npm run config:validate
```

### **Dependency Problems**

```bash
npm run deps:check
npm run deps:update
```

### **Deployment Failures**

```bash
npm run logs
npm run status
```

### **Local Development Issues**

```bash
npm run clean
npm install
npm run dev
```

## 📚 Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Wrangler Configuration Reference](https://developers.cloudflare.com/workers/wrangler/configuration/)
- [Campaign Integration Guide](./INTEGRATIONS.md)

## 🆘 Need Help?

If you encounter issues:

1. Check the logs: `npm run logs`
2. Validate config: `npm run config:validate`
3. Update dependencies: `npm run deps:update`
4. Clean and rebuild: `npm run clean && npm install`
