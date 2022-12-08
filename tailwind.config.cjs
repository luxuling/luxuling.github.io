/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        myWhite: '#FFFFFF',
        darkPrimary: '#01080E',
        mediumPrimary: '#011221',
        lightPrimary: '#011627',
        mySlate: '#607B96',
        orangeButton: '#FEA55F',
        myGreen: '#43D9AD',
        myBlue: '#4D5BCE',
        linkColor: '#E99287',
        dropDown: '#1E2D3D',
        reactColor: '#86E1F9',
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 2.7s ease-out .8s infinite alternate both',
        blurOne: 'blur1 14s ease-in-out infinite',
        blurTwo: 'blur2 14s ease-in-out infinite',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(10ch)' },
          '5%, 10%': { transform: 'translateX(15ch)' },
          '15%, 20%': { transform: 'translateX(20ch)' },
          '25%, 30%': { transform: 'translateX(22ch)' },
          '35%, 40%': { transform: 'translateX(25ch)' },
          '45%, 50%': { transform: 'translateX(27ch)' },
          '55%, 60%': { transform: 'translateX(30ch)' },
          '65%, 70%': { transform: 'translateX(32ch)' },
          '75%, 80%': { transform: 'translateX(35ch)' },
          '85%, 90%': { transform: 'translateX(38ch)' },
          '95%, 100%': { transform: 'translateX(42ch)' },
        },
        blur1: {
          '0%': { transform: 'translateX(0rem) translateY(0rem) rotate(0deg)' },
          '40%': { transform: 'translateX(-14rem) translateY(-5rem) rotate(30deg)' },
          '50%': { transform: 'translateX(-18rem) translateY(-5rem) rotate(50deg)' },
          '60%': { transform: 'translateX(-14rem) translateY(-7rem) rotate(30deg)' },
          '100%': { transform: 'translateX(0rem) translateY(0rem) rotate(0deg)' },
        },
        blur2: {
          '0%': { transform: 'translateX(0rem) translateY(0rem) rotate(0deg)' },
          '40%': { transform: 'translateX(14rem) translateY(5rem) rotate(30deg)' },
          '50%': { transform: 'translateX(18rem) translateY(5rem) rotate(50deg)' },
          '60%': { transform: 'translateX(14rem) translateY(7rem) rotate(30deg)' },
          '100%': { transform: 'translateX(0rem) translateY(0rem) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};
