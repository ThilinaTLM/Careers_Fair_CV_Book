/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#5c00ad",
        themePrimary: "#c37fff",
        secondary: "#646464",
        coverBackground: "#212120",
      },
      scale: {
        "-100": "-1",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
      metropolis: ["Metropolis"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
