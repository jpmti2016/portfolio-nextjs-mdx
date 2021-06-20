module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "fira": ["Fira Code", "monospace"],
        "playfair": ["Playfair Display", "serif"],
        "roboto": ["Roboto Slab", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
