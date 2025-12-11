import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        display: ['var(--font-orbitron)', 'sans-serif'],
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        spartans: {
          red: '#dc2626',
          'red-dark': '#991b1b',
          'red-darker': '#7f1d1d',
          'red-light': '#ef4444',
          black: '#0a0a0a',
          'gray-darker': '#171717',
          'gray-dark': '#262626',
          'gray-medium': '#404040',
          'gray-light': '#a3a3a3',
          gold: '#fbbf24',
        },
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'spartans-glow': 'radial-gradient(circle at center, rgba(220, 38, 38, 0.15), transparent 70%)',
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(220, 38, 38, 0.4)',
        'red-glow-lg': '0 0 40px rgba(220, 38, 38, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideUp: {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
