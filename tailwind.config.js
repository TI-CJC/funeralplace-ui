/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",'./node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        primaryGreen: "#15552b"
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'lara': ['Lara', 'serif'],
        'arima': ['Arima', 'cursive'],
        'great-vibes': ['Great Vibes', 'cursive']
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require("tw-elements/dist/plugin.cjs")
  ],
}
