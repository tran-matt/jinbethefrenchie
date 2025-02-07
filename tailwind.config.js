/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#001f3f',
          800: '#003366',
          700: '#004080',
        },
        'light-blue': {
          100: '#e0f7fa',
          200: '#b2ebf2',
          300: '#80deea',
          400: '#4dd0e1',
          500: '#26c6da',
          600: '#00bcd4',
          700: '#00acc1',
          800: '#0097a7',
          900: '#00838f',
        },
        gray: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e6e6e6',
          300: '#d9d9d9',
          400: '#bfbfbf',
          500: '#a6a6a6',
          600: '#8c8c8c',
          700: '#737373',
          800: '#595959',
          900: '#404040',
        },
      },
      fontFamily: {
        sans: ['Calibri', 'system-ui', 'sans-serif'],
        heading: ['Calibri', 'Helvetica', 'Arial', 'sans-serif'], 
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
