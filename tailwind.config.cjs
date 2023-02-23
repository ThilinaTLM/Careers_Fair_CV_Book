/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#066fcc",
        secondary: "#646464",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
