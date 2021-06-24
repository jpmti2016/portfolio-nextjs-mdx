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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // color: "#0B1928",
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.lh-yellow.600"),
              "&:hover": {
                color: theme("colors.lh-yellow.400"),
              },
            },
            "ul > li::before": { backgroundColor: theme("colors.gray.100") },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            '[class~="lead"]': { color: theme("colors.gray.400") },
            a: {
              color: theme("colors.lh-yellow.600"),
              "&:hover": {
                color: theme("colors.lh-yellow.400"),
              },
            },
            strong: { color: theme("colors.gray.100") },
            "ul > li::before": { backgroundColor: theme("colors.gray.700") },
            hr: { borderColor: theme("colors.gray.800") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.800"),
            },
            p: { color: theme("colors.gray.100") },
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.100") },
            h4: { color: theme("colors.gray.100") },
            code: { color: theme("colors.gray.100") },
            "a code": { color: theme("colors.gray.100") },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.800"),
            },
            li: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.700"),
            },
            "tbody tr": { borderBottomColor: theme("colors.gray.800") },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [require("@tailwindcss/typography")],
};
