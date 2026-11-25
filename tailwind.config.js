/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dairy: {
          cream: "#fff4e8",
          paper: "#fffaf4",
          brown: "#54200f",
          chocolate: "#713018",
          caramel: "#b86b35",
          gold: "#e4b77f"
        }
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        sans: ["Poppins", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(92, 43, 19, .12)"
      }
    }
  },
  plugins: []
};