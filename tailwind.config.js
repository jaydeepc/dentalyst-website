/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E88E5', // Medical blue
          dark: '#1565C0',
          light: '#64B5F6'
        },
        secondary: {
          DEFAULT: '#4CAF50', // Healing green
          dark: '#388E3C',
          light: '#81C784'
        },
        neutral: {
          DEFAULT: '#F5F7FA',
          dark: '#E4E7EB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
