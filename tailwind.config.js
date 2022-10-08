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
      '5' : '5rem',
      '1.5': '1.5rem'
    },
    width: {
      '30': '30rem',
      '6' : '6rem',
      '5' : '5rem',
      '10' : '10rem'
    },
    extend: {
      rotate:{
        '720':'720deg',
      }
    },
  },
  plugins: [],
}
