import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Crimson Pro', 'serif'],
        sans: ['Nunito', 'Inter', 'sans-serif'],
        display: ['Lora', 'Crimson Pro', 'serif'],
        body: ['Nunito', 'Inter', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFCFB',
          100: '#FAF8F4',
          200: '#F4EFE7',
          300: '#EAE2D6',
        },
        terra: {
          50: '#FDF5F1',
          100: '#FAE6DC',
          200: '#F2C8B4',
          300: '#E5A285',
          400: '#C96B45',
          500: '#B35A35',
          600: '#8F4528',
        },
        honey: {
          50: '#FDF8EE',
          100: '#FAF0D5',
          200: '#F3DDA0',
          300: '#E8C365',
          400: '#D4A041',
          500: '#C49030',
        },
        sage: {
          50: '#F2F6F2',
          100: '#DFEADF',
          200: '#BDD3BF',
          300: '#95B898',
          400: '#6B8B6E',
          500: '#567859',
        },
        warmBeige: {
          50: '#F9F5EF',
          100: '#F2E9DD',
          200: '#E5D4BD',
          300: '#D4BC9A',
        },
        coral: {
          50: '#FFF5F3',
          100: '#FFE8E3',
          200: '#FFCFC4',
          300: '#F4A261',
          400: '#E8766A',
          500: '#D95F52',
        },
        teal: {
          50: '#F0F7F7',
          100: '#D9EEED',
          200: '#B3D8D7',
          300: '#7DBDBB',
          400: '#4A9E9B',
          500: '#368785',
        },
        sand: {
          50: '#FDFAF6',
          100: '#F5EFE3',
          200: '#E8D9C4',
          300: '#D4BFA0',
          400: '#BC9F7B',
        },
        ink: {
          100: '#EDE8E3',
          200: '#C9BFB5',
          500: '#4A3F36',
          900: '#2D2520',
        },
      },
      boxShadow: {
        soft: '0 2px 16px rgba(0,0,0,0.06)',
        premium: '0 8px 32px rgba(0,0,0,0.10)',
        warm: '0 4px 20px rgba(201,107,69,0.15)',
        glow: '0 6px 24px rgba(201,107,69,0.20)',
        deep: '0 20px 60px rgba(45,37,32,0.18)',
        magazine: '0 12px 40px rgba(45,37,32,0.14)',
        glass: '0 8px 32px rgba(255,255,255,0.15)',
      },
    },
  },
  plugins: [],
} satisfies Config;
