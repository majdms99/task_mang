/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'josefin': ['Josefin Sans']
    },
    extend: {
      colors: {
        light: 'hsl(0, 0%, 98%)',
        lighttext: 'hsl(236, 33%, 92%)',
        darkbg: 'hsl(235, 21%, 11%)',
        darktext: 'hsl(235, 24%, 19%)',
        darktext2: 'hsl(235, 21%, 11%)',
      },
    },
  },
  plugins: [],
}