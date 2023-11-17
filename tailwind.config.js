/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        roxoBorda: "#8f60fc",
        fundoContato: "#32324b",
        azulPadrao: "#13131f",
      },
      borderRadius: {
        perfil: "80px",
      },
      fontFamily: {
        roboto1: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
