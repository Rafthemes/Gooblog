const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: [
    "./static/css/*.css",
    "./content/**/*.md",
    "./content/**/*.html",
    "./layouts/**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F73859',
        second: '#00AF91',
        'fs-gray': '#404B69',
        'fs-black': '#283149',
        'fs-white': '#DBEDF3',
        gray: {
          100: '#F4F4F2',
          200: '#E8E8E8',
          300: '#BBBFCA',
          400: '#495464'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
}
