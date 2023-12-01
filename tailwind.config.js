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
        'gray-light':'rgba(217,217,217,0.49)',
        'white':'#FFFFFF',
        'gray-dark':'rgba(218,218,218,0.2)',
        'token': 'rgba(255,255,255,0.79)',
        'border-gradiant-gray':'#E0E0E0',
        'border-gradiant-transparent':'rgba(254,254,254,0.05)'
      },
    },
  },
  plugins: [],
}

