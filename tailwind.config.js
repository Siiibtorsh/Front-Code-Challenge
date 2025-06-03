/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          100: "#24ff74",
          200: "#22c55e",
          300: "#15803d",
        },
      },
    },
  },
  plugins: [],
};
