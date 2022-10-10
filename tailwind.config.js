/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    minHeight: {
      '10': '10vh',
      '100': '100vh'
    },
    height: {
      '85vh' : '85vh',
      '80': '20rem',
      '5': '5rem',
      '2.5': '2.5rem',
      '90': '90vh',
      '4':'4rem',
      '20' : '20rem',
      '100%': '100%',
      '1' : '1rem'
    },
    width: {
      '30': '30rem',
      '6': '6rem',
      '5': '5rem',
      '10': '10rem',
      '15': '15rem',
      '80': '20rem',
      '64': '16rem',
      '100%': '100%',
      '1.2': '1.2rem',
    },
    letterSpacing:{
      widest : '.3rem'
    },
    extend: {
      rotate: {
        '720': '720deg',
      },
      inset:{
        '152px' : '152px'
      },
    },
  },
  plugins: [],
}
