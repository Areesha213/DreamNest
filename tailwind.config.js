/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lavender': '#E6E6FA',
        'blue': {
          800: '#283593',
          900: '#1A237E',
          950: '#0D1239',
        },
        'cloud-white': '#F8F9FA',
      },
      fontFamily: {
        'spectral': ['"Spectral"', 'serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'caveat': ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'sm': '0 4px 6px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 4px 10px rgba(0, 0, 0, 0.08)',
        'md': '0 6px 12px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'floating': 'floating 6s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};