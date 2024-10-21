/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        colorP1: "#FF4081",
        colorFondo: "#1E1E1E",
        colorFondo2: "#1D1D1D",
        colorFondo3: '#292929',
        colorT2: '#A5A5A5',
        p1: {
        '50': '#fef1f6',
        '100': '#fee5ef',
        '200': '#ffcae1',
        '300': '#ff9fc6',
        '400': '#ff639f',
        '500': '#ff4081',
        '600': '#f01253',
        '700': '#d1053b',
        '800': '#ad0731',
        '900': '#8f0c2d',
        '950': '#580014',
    },
    
      },
    },
  },
  plugins: [],
};
