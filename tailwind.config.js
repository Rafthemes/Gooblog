module.exports = {
  content: [
    "./layouts/**/*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F0F1F4'
        },
        primary: {
          blue: '#4C86F9',
          black: '#121212'
        },
        secondary: {
          blue: '#72A0FD',
          black: '#1D1D1D'
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0rem',
          sm: '2rem',
          md: '6rem',
          lg: '10rem',
          xl: '12rem',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
