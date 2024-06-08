/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,ts,tsx,css,scss,sass,less,styl}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        "montserrat-b": ["Montserrat-Bold", "sans-serif"],
        "montserrat-s": ["Montserrat-SemiBold", "sans-serif"],
        "montserrat-r": ["Montserrat-Regular", "sans-serif"],
        "montserrat-l": ["Montserrat-Light", "sans-serif"],
        "montserrat-t": ["Montserrat-Thin", "sans-serif"]
      }
    }
  },
  plugins: []
};
