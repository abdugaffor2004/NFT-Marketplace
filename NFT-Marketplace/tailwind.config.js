/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "#2B2B2B",
        backgroundSecond: "#3B3B3B",
        purple: "#A259FF",
        grey: "#858584",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monoscape"],
        workSans: ["Work Sans", "sans-serif"],
      },
      
    },
    screens: {
      ss: "320px",
      xs: "380px",
      xs_sm: "500px",
      sm: "680px",
      md: "866px",
      lg: "1279px",
      xl: "1400px",
    },
  },
  plugins: [],
};

