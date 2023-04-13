/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'accent': "#F86B1C",  //orange
      // "#FF7A2C",
      // "#F07F05",
      'main': "#363636",    //darkgrey
      'sub': "#A0A0A0",     //grey
      'sub2': "#FAFAFA",
      'white': "#ffffff",
      'grey' : "#DFDFDF",
      'midgrey': "#8E8E8E",
      'darkgrey': "#626262",
      'temp': "rgb(157, 151, 139)",
      
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
      lineHeight: {
        'nav' : '50px',
      },
      spacing: {

      },
      
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}