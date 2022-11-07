/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        topbar: "#51859D",
        main: "#51859D",
        sub: "#51859D",
        alert: "#FF0000",
      },
    },
    screens: {
      sm: { min: "340px", max: "767px" },
      md: { min: "768px", max: "1023" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
    },
    fontFamily: {
      body: ["Mitr"],
    },
  },
  plugins: [],
};
