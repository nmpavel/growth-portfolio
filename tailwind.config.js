/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          500: '#1F2336',
          400: '#2A2C47',
          300: '#313552',
        },
        myColor:{
          100: '#FFC576',
          200: '#4C4342',
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
