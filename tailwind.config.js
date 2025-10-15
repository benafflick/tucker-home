/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          50: "#fdfaf5",
          100: "#f5efe4",
          600: "#c4a77d",
          700: "#b48b5e",
        },
        sand: "#e9dfd1",
        accent: "#d6c8b4",
      },
    },
  },
  plugins: [],
};
