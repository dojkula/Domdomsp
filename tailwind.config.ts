import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060f1e',
          900: '#0a1628',
          800: '#0d2040',
          700: '#1b3a5c',
          600: '#2d5986',
        },
        teal: {
          DEFAULT: '#00c4cc',
          light: '#e0fafb',
          dim: '#009ea4',
        },
        slate: {
          text: '#425466',
          light: '#8898aa',
          line: '#e8ecf0',
        },
        off: '#f6f9fc',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(10,22,40,0.08)',
        'card-hover': '0 20px 60px rgba(10,22,40,0.18)',
        teal: '0 4px 24px rgba(0,196,204,0.35)',
        'teal-lg': '0 8px 40px rgba(0,196,204,0.45)',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-mid': 'floatSlow 6s ease-in-out infinite 1s',
        'float-fast': 'floatSlow 5s ease-in-out infinite 0.5s',
        'spin-slow': 'spin 18s linear infinite',
        'marquee': 'marquee 28s linear infinite',
        'blob': 'blob 10s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%,100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%' },
          '75%': { borderRadius: '60% 40% 60% 30% / 70% 30% 50% 60%' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
