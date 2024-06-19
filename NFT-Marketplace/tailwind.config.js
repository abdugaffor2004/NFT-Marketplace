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
      md_lg: "1020px",
      lg: "1279px",
      xl: "1400px",
    },
  },
  plugins: [],
};

