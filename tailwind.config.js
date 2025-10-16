import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'flip-demo': 'flip 3s infinite alternate ease-in-out',
      },
      maxWidth: {
        'screen-xl': '1280px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
      colors: {
        brand: {
          blue: '#4B7CC2',
          orange: '#FFA857',
          purple: '#8341D5',
        },
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
};