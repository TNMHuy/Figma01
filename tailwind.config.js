/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee:{
          '0%':{transform:'translateX(0)'},
          '100%':{transform:'translateX(-100%)'},
        }
      },
      animation:{
        marqueeText:  'marquee 12s linear infinite'
      }
    },
  },
  plugins: [],
}