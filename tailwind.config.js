/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "default":"#15141F",
        'Red':'#FF8F71',
        'gray':'#BCBCBC',
        'white':'#FFFFFF',
        'gray-light':'#DADADA'
      },
    },
  },
  plugins: [],
}

