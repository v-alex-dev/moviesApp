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
        'gray-light':'#DADADA',
        'linear': 'linear-gradient(90deg, rgba(200,200,200,1) 51%, rgba(255,255,255,1) 100%)',
      },
    },
  },
  plugins: [],
}

