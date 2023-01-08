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
        academy: "#8C3333",
        navbar : "#1A445E",
      },
    },
    screens: {
      sm: { min: "340px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },
    fontFamily: {
      body: ["Mitr"],
    },
    backgroundImage: {
      "hero-pattern": "url('/asset/image/sanya-bg.png')",
    },
  },
  plugins: [],
};
