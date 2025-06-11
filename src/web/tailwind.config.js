/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: "#e6f7ff",   // Very light blue
          100: "#bae7ff",  // Light blue
          200: "#91d5ff",  // Lighter blue
          300: "#69c0ff",  // Light blue
          400: "#40a9ff",  // Medium light blue
          500: "#1E90FF",  // Bright Blue (Dodger Blue) - Main brand color
          600: "#1c7ed6",  // Slightly darker
          700: "#1864ab",  // Darker blue
          800: "#00008B",  // Dark Blue - Secondary brand color
          900: "#000066",  // Very dark blue
          950: "#000033",  // Darkest blue
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          50: "#e6ffff",   // Very light cyan
          100: "#b3ffff",  // Light cyan
          200: "#80ffff",  // Lighter cyan
          300: "#4dffff",  // Light cyan
          400: "#1affff",  // Medium cyan
          500: "#00BFFF",  // Light Blue (Deep Sky Blue) - Accent color
          600: "#00a6e6",  // Slightly darker
          700: "#008ccc",  // Darker cyan
          800: "#0073b3",  // Dark cyan
          900: "#005999",  // Very dark cyan
          950: "#004080",  // Darkest cyan
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          50: "#f8fafc",   // Very light slate
          100: "#f1f5f9",  // Light slate
          200: "#e2e8f0",  // Lighter slate
          300: "#cbd5e1",  // Light slate
          400: "#94a3b8",  // Medium slate
          500: "#64748b",  // Professional Slate
          600: "#475569",  // Darker slate
          700: "#334155",  // Dark slate
          800: "#1e293b",  // Very dark slate
          900: "#0f172a",  // Darkest slate
          950: "#020617",  // Almost black
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // Campaign-specific semantic colors
        success: {
          50: "#f0fdf4",   // Very light green
          100: "#dcfce7",  // Light green
          200: "#bbf7d0",  // Lighter green
          300: "#86efac",  // Light green
          400: "#4ade80",  // Medium green
          500: "#22c55e",  // Success Green
          600: "#16a34a",  // Darker green
          700: "#15803d",  // Dark green
          800: "#166534",  // Very dark green
          900: "#14532d",  // Darkest green
          950: "#052e16",  // Almost black green
        },
        warning: {
          50: "#fffbeb",   // Very light amber
          100: "#fef3c7",  // Light amber
          200: "#fde68a",  // Lighter amber
          300: "#fcd34d",  // Light amber
          400: "#fbbf24",  // Medium amber
          500: "#f59e0b",  // Warning Amber
          600: "#d97706",  // Darker amber
          700: "#b45309",  // Dark amber
          800: "#92400e",  // Very dark amber
          900: "#78350f",  // Darkest amber
          950: "#451a03",  // Almost black amber
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Extended neutrals for better design flexibility
        neutral: {
          50: "#fafafa",   // Very light gray
          100: "#f5f5f5",  // Light gray
          200: "#e5e5e5",  // Lighter gray
          300: "#d4d4d4",  // Light gray
          400: "#a3a3a3",  // Medium gray
          500: "#737373",  // Gray
          600: "#525252",  // Darker gray
          700: "#404040",  // Dark gray
          800: "#262626",  // Very dark gray
          900: "#171717",  // Darkest gray
          950: "#0a0a0a",  // Almost black
        },
        // Campaign brand colors - matching logo
        brand: {
          primary: "#1E90FF",      // Bright Blue (Dodger Blue) - Main campaign color
          secondary: "#00BFFF",    // Light Blue (Deep Sky Blue) - Accent color
          dark: "#00008B",         // Dark Blue - For emphasis and contrast
          light: "#e6f7ff",        // Very light blue - For backgrounds
          neutral: "#64748b",      // Professional gray - For text
          white: "#FFFFFF",        // Pure white
          black: "#000000",        // Pure black
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)", 
          "Inter", 
          "-apple-system", 
          "BlinkMacSystemFont", 
          "Segoe UI", 
          "Roboto", 
          "Oxygen", 
          "Ubuntu", 
          "Cantarell", 
          "sans-serif"
        ],
        display: [
          "var(--font-montserrat)",
          "Montserrat",
          "-apple-system",
          "BlinkMacSystemFont", 
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
        // Political campaign fonts - clean, trustworthy, readable
        heading: [
          "var(--font-source-sans)",
          "Source Sans Pro",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif"
        ],
        body: [
          "var(--font-open-sans)",
          "Open Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif"
        ],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "float-delayed": {
          "0%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px #1E90FF33" },
          "50%": { boxShadow: "0 0 30px #1E90FF66" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 8s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-in": "slide-in 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.neutral.800"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: theme("colors.primary.600"),
              },
            },
            h1: {
              color: theme("colors.neutral.900"),
              fontFamily: theme("fontFamily.display").join(", "),
              fontWeight: "700",
            },
            h2: {
              color: theme("colors.neutral.900"),
              fontFamily: theme("fontFamily.display").join(", "),
              fontWeight: "600",
            },
            h3: {
              color: theme("colors.neutral.800"),
              fontFamily: theme("fontFamily.display").join(", "),
              fontWeight: "600",
            },
            strong: {
              color: theme("colors.neutral.900"),
              fontWeight: "600",
            },
            blockquote: {
              color: theme("colors.neutral.700"),
              borderLeftColor: theme("colors.primary.500"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.neutral.200"),
            a: {
              color: theme("colors.primary.400"),
              "&:hover": {
                color: theme("colors.primary.300"),
              },
            },
            h1: {
              color: theme("colors.neutral.100"),
            },
            h2: {
              color: theme("colors.neutral.100"),
            },
            h3: {
              color: theme("colors.neutral.200"),
            },
            strong: {
              color: theme("colors.neutral.100"),
            },
            blockquote: {
              color: theme("colors.neutral.300"),
              borderLeftColor: theme("colors.primary.400"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
