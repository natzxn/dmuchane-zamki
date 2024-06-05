/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        '3xl': '1920px', 
      },
  },
},
  plugins: [],
}

