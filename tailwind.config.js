const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand': '#00A4EF',
      },
      transitionProperty: {
        'height': 'height',
      }
    },
  },
  variants: {
    extend: {
      height: ['hover'],
    },
  },
  plugins: [],
}
