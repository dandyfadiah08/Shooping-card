/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode:false,
  content: [],
  theme: {
    extend: {
      color:{
        primary:'#F5F5F5;'
      }
    },
  },
  plugins: [],
}
