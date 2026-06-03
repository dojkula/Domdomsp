import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563eb',
          'blue-light': '#dbeafe',
          'blue-mid': '#60a5fa',
          sky: '#0ea5e9',
          'sky-light': '#e0f2fe',
          teal: '#0891b2',
          'teal-light': '#cffafe',
        },
        surface: {
          DEFAULT: '#f8faff',
          soft: '#f0f7ff',
          card: '#ffffff',
        },
        ink: {
          dark: '#1e293b',
          mid: '#475569',
          light: '#94a3b8',
          line: '#e2e8f0',
        },
        warm: '#fffbeb',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 16px rgba(37,99,235,0.07)',
        card: '0 4px 24px rgba(37,99,235,0.09)',
        'card-hover': '0 12px 40px rgba(37,99,235,0.18)',
        blue: '0 4px 20px rgba(37,99,235,0.3)',
        'blue-lg': '0 8px 40px rgba(37,99,235,0.38)',
      },
      backgroundImage: {
        'hero-grad': 'linear-gradient(135deg, #f8faff 0%, #e0f2fe 50%, #f0f7ff 100%)',
        'blue-grad': 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
        'soft-grad': 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)',
      },
      animation: {
        'float-a': 'floatA 7s ease-in-out infinite',
        'float-b': 'floatA 9s ease-in-out infinite 1.5s',
        'float-c': 'floatA 6s ease-in-out infinite 0.8s',
        'marquee': 'marquee 30s linear infinite',
        'blob': 'blob 12s ease-in-out infinite',
        'blob-delay': 'blob 14s ease-in-out infinite 4s',
        'count': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        floatA: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%,100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '33%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '66%': { borderRadius: '50% 60% 30% 60%/30% 60% 70% 40%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
