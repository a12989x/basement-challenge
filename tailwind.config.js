module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slideshow: {
          "100%": {transform: "translateX(-100%)"},
        },
      },
      animation: {
        slideshow: "slideshow 20s linear infinite",
      },
      gridTemplateColumns: {
        modal: "1fr auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
