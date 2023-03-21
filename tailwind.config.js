/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'accent': "#F07F05",
      'main': "#0f172a",
      'sub': "#64748b",
      'sub2': "#f1f5f9",
    },
    fontFamily: {
      'animoly1': ['Gugi'],
      'animoly2': ['Black Han Sans'],
      'animoly3': ['Kirang Haerang'],
      'animoly4': ['farsan'],
      'kor' : ['IBM Plex Sans KR'],
    },

    minWidth: {
      'half': '500px',
    },
    extend: {
      spacing: {

      }
      
    },
  },
  plugins: [],
}