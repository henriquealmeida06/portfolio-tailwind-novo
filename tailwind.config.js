/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        roxoBorda: "#8f60fc",
        fundoContato: "#32324b",
        azulPadrao: "#13131f",
        cinzaChumbo: "#212121",
      },
      borderRadius: {
        perfil: "80px",
        iconesContato: "30px",
        px40: '40px'
      },
      borderWidth:{
        px3:'3px'
      },
      fontFamily: {
        roboto1: ["Roboto", "sans-serif"],
      },
      screens: {
        mc: '312px',
      },
      width: {
        vh18: '18vh',
      },
      height:{
        vh19: '19vh',
      },
      fontSize: {
        px55: '55px',
        px40: '40px',
      },
      margin: {
        martop: '-15px',
      }
      
    },
  },
  plugins: [],
};
