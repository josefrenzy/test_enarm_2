const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      poppins: ["Poppins", "sans-serif"],
      dropShadow: {
        "3xl": "0px 4px 4px rgba(56, 59, 122, 0.37)",
      },
    },
    colors: colors,
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover','focus'],
    },
  },
  plugins: [],
};
