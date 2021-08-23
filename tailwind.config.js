module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slideshow: {
          "100%": {transform: "translateX(-33.8%)"},
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        slideshow: "slideshow 10s linear infinite",
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
