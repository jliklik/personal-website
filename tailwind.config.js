/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backdropBrightness: {
        10: '.10',
        25: '.25',
        175: '1.75',
      }
    },
    fontFamily: {
      sans: [
        '"Helvetica Neue"',
        '"Segoe UI"'
      ]
    },
  },
  plugins: [],
}

