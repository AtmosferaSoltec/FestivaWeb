/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        colorP1: "#FF4081",
        colorFondo: "#1E1E1E",
        colorFondo2: "#1D1D1D",
        colorFondo3: "#292929",
        colorT2: "#A5A5A5",
        p1: {
          50: "#fef1f6",
          100: "#fee5ef",
          200: "#ffcae1",
          300: "#ff9fc6",
          400: "#ff639f",
          500: "#ff4081",
          600: "#f01253",
          700: "#d1053b",
          800: "#ad0731",
          900: "#8f0c2d",
          950: "#580014",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".input-time": {
          border: "1px solid #d1d5db", // border-gray-300
          borderRadius: "0.5rem", // rounded-lg
          padding: "0.5rem 1rem", // px-4 py-2
          color: "#374151", // text-gray-700
          outline: "none", // focus:outline-none
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)", // shadow-sm
          transition: "all 0.2s ease-in-out", // transition-colors duration-200 ease-in-out
          "&:focus": {
            borderColor: "#3b82f6", // focus:border-blue-500
            boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)", // focus:ring-2 focus:ring-blue-500
          },
        },
      });
    },
  ],
};
