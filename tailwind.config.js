/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        topbar: "#1A445E",
        main: "#366A82",
        sub: "#51859D",
      },
    },
  },
  plugins: [],
};
