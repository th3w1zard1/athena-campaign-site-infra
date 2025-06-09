# 🎨 Campaign Website Design System

## Overview
This design system implements modern Tailwind CSS v4 best practices with OKLCH color space for perceptual uniformity, accessibility, and systematic color management.

---

## 🎯 **Color Philosophy**

### Primary Strategy: **Trust & Progressive Authority**
- **Primary (Deep Indigo)**: Conveys trust, competence, and stability
- **Secondary (Warm Coral)**: Represents energy, optimism, and action
- **Accent (Professional Slate)**: Provides neutrality and accessibility

### OKLCH Benefits
- **Perceptual Uniformity**: Colors at same lightness appear equally bright
- **Better Accessibility**: More predictable contrast ratios
- **Future-Proof**: Modern web standard for color management

---

## 🎨 **Color Palette**

### Primary Colors (Deep Indigo)
```css
--primary-50:  oklch(0.97 0.015 275.3)  /* Very light backgrounds */
--primary-100: oklch(0.94 0.032 275.8)  /* Light backgrounds */
--primary-200: oklch(0.89 0.061 276.2)  /* Subtle borders */
--primary-300: oklch(0.82 0.105 276.9)  /* UI elements */
--primary-400: oklch(0.71 0.172 277.4)  /* Disabled states */
--primary-500: oklch(0.61 0.228 277.7)  /* 🎯 Base Brand Color */
--primary-600: oklch(0.53 0.258 277.9)  /* Primary buttons */
--primary-700: oklch(0.47 0.245 278.1)  /* Hover states */
--primary-800: oklch(0.41 0.198 278.5)  /* Active states */
--primary-900: oklch(0.36 0.148 279.2)  /* Headers/footers */
--primary-950: oklch(0.26 0.095 280.1)  /* Deep contrast */
```

### Secondary Colors (Warm Coral)
```css
--secondary-50:  oklch(0.97 0.014 42.1)   /* Light accents */
--secondary-100: oklch(0.94 0.029 41.8)   /* Backgrounds */
--secondary-200: oklch(0.89 0.058 41.5)   /* Borders */
--secondary-300: oklch(0.82 0.115 41.2)   /* UI elements */
--secondary-400: oklch(0.72 0.192 40.8)   /* Disabled */
--secondary-500: oklch(0.65 0.235 40.4)   /* 🎯 CTA Base */
--secondary-600: oklch(0.58 0.245 40.1)   /* Action buttons */
--secondary-700: oklch(0.51 0.222 39.8)   /* Hover states */
--secondary-800: oklch(0.44 0.187 39.5)   /* Active states */
--secondary-900: oklch(0.39 0.151 39.2)   /* Strong emphasis */
--secondary-950: oklch(0.28 0.108 38.9)   /* Highest contrast */
```

### Accent Colors (Professional Slate)
```css
--accent-50:  oklch(0.984 0.003 247.9)  /* Light backgrounds */
--accent-100: oklch(0.968 0.007 247.9)  /* Subtle backgrounds */
--accent-200: oklch(0.929 0.013 255.5)  /* Borders */
--accent-300: oklch(0.869 0.022 252.9)  /* Input borders */
--accent-400: oklch(0.704 0.04 256.8)   /* Placeholders */
--accent-500: oklch(0.554 0.046 257.4)  /* 🎯 Professional Base */
--accent-600: oklch(0.446 0.043 257.3)  /* Text colors */
--accent-700: oklch(0.372 0.044 257.3)  /* Headers */
--accent-800: oklch(0.279 0.041 260.0)  /* Strong text */
--accent-900: oklch(0.208 0.042 265.8)  /* Maximum contrast */
--accent-950: oklch(0.129 0.042 264.7)  /* Deep contrast */
```

### Semantic Colors

#### Success (Green)
```css
--success-500: oklch(0.64 0.215 138.9)  /* 🎯 Base Success */
--success-600: oklch(0.56 0.218 137.8)  /* Success buttons */
--success-700: oklch(0.48 0.195 136.5)  /* Success hover */
```

#### Warning (Amber)
```css
--warning-500: oklch(0.68 0.198 80.8)   /* 🎯 Base Warning */
--warning-600: oklch(0.61 0.203 79.3)   /* Warning buttons */
--warning-700: oklch(0.52 0.181 77.6)   /* Warning hover */
```

---

## 🏗️ **Component System**

### Button Hierarchy
```html
<!-- Primary Action (Most Important) -->
<button class="btn-primary">Donate Now</button>

<!-- Secondary Action (Important) -->
<button class="btn-secondary">Get Involved</button>

<!-- Tertiary Action (Supportive) -->
<button class="btn-outline">Learn More</button>

<!-- Subtle Action (Minimal) -->
<button class="btn-ghost">View Details</button>
```

### Card System
```html
<!-- Basic Card -->
<div class="card">Standard content card</div>

<!-- Elevated Card (More Emphasis) -->
<div class="card-elevated">Important content</div>

<!-- Feature Card (Hero/Spotlight) -->
<div class="card-feature">Key feature or testimonial</div>

<!-- Interactive Card -->
<div class="interactive-card">Clickable content</div>
```

### Typography Scale
```html
<!-- Page/Section Titles -->
<h1 class="section-title">Main Heading</h1>

<!-- Subtitles/Descriptions -->
<p class="section-subtitle">Supporting description</p>

<!-- Rich Content -->
<div class="prose-campaign">Article content</div>
```

---

## 📱 **Layout Patterns**

### Hero Section
```html
<section class="hero-section">
  <div class="container-custom">
    <!-- Hero content with automatic gradient overlay -->
  </div>
</section>
```

### Page Headers
```html
<header class="page-header">
  <div class="container-custom">
    <!-- Page title and navigation -->
  </div>
</header>
```

### Content Sections
```html
<!-- Standard Section -->
<section class="content-section">...</section>

<!-- Alternating Background -->
<section class="content-section-alt">...</section>

<!-- Primary Brand Section -->
<section class="content-section-primary">...</section>
```

---

## 🎨 **Usage Guidelines**

### Color Application Rules

#### Primary Color Use
- **Primary buttons** and main CTAs
- **Navigation** active states
- **Links** and interactive elements
- **Hero sections** and headers
- **Focus states** and accessibility

#### Secondary Color Use
- **Action buttons** (Donate, Sign Up)
- **Success states** and confirmations
- **Call-out boxes** and highlights
- **Progress indicators**
- **Badge** and notification elements

#### Accent Color Use
- **Body text** and content
- **Form elements** and inputs
- **Borders** and dividers
- **Subtle backgrounds**
- **Professional content**

### Accessibility Standards

#### Contrast Ratios (WCAG 2.1 AA)
- **Normal text**: 4.5:1 minimum
- **Large text**: 3:1 minimum
- **UI components**: 3:1 minimum

#### Color-Blind Considerations
- Never use color alone to convey information
- Provide alternative indicators (icons, text, patterns)
- Test with color-blind simulation tools

---

## 🚀 **Implementation Strategy**

### Phase 1: Core Foundation ✅
- [x] Update Tailwind config with OKLCH colors
- [x] Migrate CSS variables to new system
- [x] Create component utility classes
- [x] Document design system

### Phase 2: Component Migration
- [ ] Update Button components
- [ ] Migrate Card components
- [ ] Refresh Typography system
- [ ] Update Form elements

### Phase 3: Page-by-Page Rollout
- [ ] Homepage redesign
- [ ] About page refresh
- [ ] Issues/Platform pages
- [ ] Contact and donation flows

### Phase 4: Advanced Features
- [ ] Dark mode optimization
- [ ] Animation integration
- [ ] Performance optimization
- [ ] Accessibility audit

---

## 🛠️ **Development Tools**

### Color Utilities
```html
<!-- Brand Color Shortcuts -->
<div class="text-primary-campaign">Primary text</div>
<div class="bg-secondary-campaign">Secondary background</div>
<div class="hover-primary-campaign">Primary hover</div>

<!-- State Utilities -->
<div class="alert-success">Success message</div>
<div class="alert-warning">Warning message</div>

<!-- Focus Management -->
<button class="focus-ring">Accessible button</button>
```

### Animation Classes
```html
<!-- Entrance Animations -->
<div class="animate-fade-in">Fade in content</div>
<div class="animate-slide-up">Slide up content</div>
<div class="animate-scale-in">Scale in content</div>

<!-- Interactive Effects -->
<div class="animate-pulse-glow">Glowing CTA</div>
```

---

## 📊 **Before/After Comparison**

### Old System Issues
- ❌ Inconsistent color application
- ❌ Poor contrast ratios in some areas
- ❌ Limited semantic color options
- ❌ No systematic approach to variants
- ❌ Hard-coded color values

### New System Benefits
- ✅ OKLCH perceptual uniformity
- ✅ Systematic 11-step color scales
- ✅ Semantic color categories
- ✅ Accessibility-first approach
- ✅ CSS custom properties for flexibility
- ✅ Dark mode optimization
- ✅ Component-based architecture

---

## 🎯 **Next Steps**

1. **Review** this design system with your team
2. **Test** the new colors on existing components
3. **Prioritize** which pages to migrate first
4. **Implement** component by component
5. **Validate** accessibility with testing tools
6. **Iterate** based on user feedback

---

## 🔗 **Resources**

- [OKLCH Color Picker](https://oklch.com/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)

---

*This design system prioritizes accessibility, user experience, and brand consistency while leveraging modern CSS capabilities for a campaign website that inspires trust and action.* 