module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slideshow: {
          "100%": {transform: "translateX(-200%)"},
        },
        animations: {
          slideshow: "slideshow 12s linear infinite",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
