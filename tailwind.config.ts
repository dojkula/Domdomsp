import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: '#7c3aed',
          'violet-light': '#a78bfa',
          'violet-dark': '#5b21b6',
          blue: '#2563eb',
          light: '#faf5ff',
          dark: '#1e1b4b',
          accent: '#ddd6fe',
        },
        surface: {
          white: '#ffffff',
          soft: '#f5f3ff',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'violet-glow': '0 0 40px rgba(124, 58, 237, 0.3)',
        'violet-sm': '0 4px 20px rgba(124, 58, 237, 0.2)',
        'card': '0 8px 32px rgba(30, 27, 75, 0.12)',
        'card-hover': '0 20px 48px rgba(124, 58, 237, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config
