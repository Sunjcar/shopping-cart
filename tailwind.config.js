/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    minHeight: {
      '10': '10vh'
    },
    height: {
      '85.5': '85.5vh',
      '80': '20rem',
      '5': '5rem',
      '1.5': '1.5rem',
      '90': '90vh',
      '4':'4rem',
      '20' : '20rem'
    },
    width: {
      '30': '30rem',
      '6': '6rem',
      '5': '5rem',
      '10': '10rem',
      '15': '15rem',
      '80': '20rem',
      '64': '16rem',
    },
    letterSpacing:{
      widest : '.3rem'
    },
    extend: {
      rotate: {
        '720': '720deg',
      }
    },
  },
  plugins: [],
}
