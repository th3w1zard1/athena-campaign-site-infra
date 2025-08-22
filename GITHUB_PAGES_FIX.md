# GitHub Pages Deployment Fix

## Problem Description

The Next.js application was showing error pages instead of the intended website when deployed to GitHub Pages at `https://th3w1zard1.github.io/campaign-infra/`. This issue occurred exclusively on GitHub Pages and not in local development or reverse proxy environments.

## Root Cause Analysis

The primary issue was that GitHub Pages serves repository-based projects from a subpath (`/campaign-infra/`), but the Next.js application was built for the root path (`/`). This caused:

1. **Broken asset references**: JavaScript and CSS files were looking for `/_next/static/...` instead of `/campaign-infra/_next/static/...`
2. **Broken navigation links**: Internal links pointed to `/about/` instead of `/campaign-infra/about/`
3. **Broken image references**: 
   - The Hero component referenced a non-existent image path
   - Public assets didn't include the basePath prefix

## Solution Implemented

### 1. Updated `next.config.js`
- Added `assetPrefix: process.env.NEXT_BASE_PATH || ''` to ensure `_next` assets get the basePath prefix
- This makes JavaScript and CSS files use the correct path: `/campaign-infra/_next/static/...`

### 2. Updated GitHub Actions Workflow (`.github/workflows/nextjs.yml`)
- Added `generator_config_file: src/web/next.config.js` to the `actions/configure-pages@v5` step
- Set both `NEXT_BASE_PATH=/campaign-infra` and `NEXT_PUBLIC_BASE_PATH=/campaign-infra` environment variables during build
- This ensures all internal routing uses the correct basePath

### 3. Fixed Broken Image Reference
- Changed `/images/candidate/athena-portrait.jpg` to `/images/candidate-profile.jpg` (the actual file that exists)
- Updated the Hero component to use `NEXT_PUBLIC_BASE_PATH` for image URLs
- This ensures images use the correct path: `/campaign-infra/images/candidate-profile.jpg`

## Files Modified

1. **`src/web/next.config.js`**: Added `assetPrefix` configuration
2. **`.github/workflows/nextjs.yml`**: Updated build environment variables and configure-pages settings
3. **`src/web/app/components/Hero.tsx`**: Fixed image path and added basePath support
4. **`src/web/app/lib/utils.ts`**: Created utility for basePath handling (ready for future use)

## Verification

The fix ensures that:
- ✅ JavaScript/CSS assets have correct paths: `/campaign-infra/_next/static/...`
- ✅ Navigation links work correctly: `/campaign-infra/about/`, `/campaign-infra/platform/`, etc.
- ✅ Images have correct paths: `/campaign-infra/images/candidate-profile.jpg`
- ✅ All pages are generated with proper basePath prefixes

## Key GitHub Pages Considerations

1. **Repository-based GitHub Pages** (like `username.github.io/repository-name`) always serve from a subpath
2. **Next.js basePath** must be set during build time to handle this correctly
3. **Public assets** require special handling since they don't automatically inherit `assetPrefix`
4. **Environment variables** for client components must use `NEXT_PUBLIC_` prefix

## Future Enhancements

For additional public assets that need basePath support, use the utility function:
```typescript
import { assetUrl } from '@/app/lib/utils';
const imagePath = assetUrl('/images/my-image.jpg');
```

This solution follows Next.js best practices and GitHub Pages requirements for static site deployment.