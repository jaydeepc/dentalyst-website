/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#2B95C9',
          DEFAULT: '#1B6A94',
          dark: '#0D4A6F',
          gradient: '#083D5F',
        },
        secondary: {
          light: '#FFB74D',
          DEFAULT: '#FFA726',
          dark: '#FB8C00',
          gradient: '#F57C00',
        },
        accent: {
          light: '#FFD180',
          DEFAULT: '#FFAB40',
          dark: '#FF9100',
          gradient: '#FF6D00',
        },
        neutral: {
          light: '#F7FAFC',
          DEFAULT: '#EDF2F7',
          dark: '#E2E8F0',
          gradient: '#CBD5E0',
        },
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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
