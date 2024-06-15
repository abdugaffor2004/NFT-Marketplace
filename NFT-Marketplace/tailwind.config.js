/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "#2B2B2B",
        backgroundSecond: "3B3B3B",
        purple: "#A259FF",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monoscape"],
        workSans: ["Work Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1280px",
      xl: "1700px",
    },
  },
  plugins: [],
};

