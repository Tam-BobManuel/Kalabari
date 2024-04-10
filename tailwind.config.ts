import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    fontSize: {
      sm: ['0.8rem', {
        lineHeight: '1.25rem', // Line height for 'sm'
        letterSpacing: '0', // Letter spacing for 'sm'
        fontWeight: '400' // Font weight for 'sm'
      }],
      base: ['1rem', {
        lineHeight: '1.5rem', // Line height for 'base'
        letterSpacing: '0', // Letter spacing for 'base'
        fontWeight: '400' // Font weight for 'base'
      }],
      xl: ['1.25rem', {
        lineHeight: '1.75rem', // Line height for 'xl'
        letterSpacing: '-0.01em', // Letter spacing for 'xl'
        fontWeight: '400' // Font weight for 'xl'
      }],
      '2xl': ['1.563rem', {
        lineHeight: '2rem', // Line height for '2xl'
        letterSpacing: '-0.01em', // Letter spacing for '2xl'
        fontWeight: '500' // Font weight for '2xl'
      }],
      '3xl': ['1.953rem', {
        lineHeight: '2.25rem', // Line height for '3xl'
        letterSpacing: '-0.02em', // Letter spacing for '3xl'
        fontWeight: '500' // Font weight for '3xl'
      }],
      '4xl': ['2.441rem', {
        lineHeight: '2.75rem', // Line height for '4xl'
        letterSpacing: '-0.02em', // Letter spacing for '4xl'
        fontWeight: '500' // Font weight for '4xl'
      }],
      '5xl': ['3.052rem', {
        lineHeight: '3.5rem', // Line height for '5xl'
        letterSpacing: '-0.02em', // Letter spacing for '5xl'
        fontWeight: '500' // Font weight for '5xl'
      }],
      '6xl': ['3.815rem', {
        lineHeight: '4.5rem', // Line height for '6xl'
        letterSpacing: '-0.02em', // Letter spacing for '6xl'
        fontWeight: '500' // Font weight for '6xl'
      }],
      '7xl': ['4.768rem', {
        lineHeight: '5.5rem', // Line height for '7xl'
        letterSpacing: '-0.02em', // Letter spacing for '7xl'
        fontWeight: '500' // Font weight for '7xl'
      }],
      '8xl': ['6.144rem', {
        lineHeight: '7rem', // Line height for '8xl'
        letterSpacing: '-0.02em', // Letter spacing for '8xl'
        fontWeight: '500' // Font weight for '8xl'
      }],
      '9xl': ['8.256rem', {
        lineHeight: '9rem', // Line height for '9xl'
        letterSpacing: '-0.02em', // Letter spacing for '9xl'
        fontWeight: '500' // Font weight for '9xl'
      }]
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'drawer-right-to-left': {
          from: { width: '0' },
          to: { width: 'var(--drawer-width)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'drawer-right-to-left': 'drawer-right-to-left 0.3s ease-in-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config