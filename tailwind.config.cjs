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
    },
  },
  plugins: [],
};
