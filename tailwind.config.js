module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" }
      },
      keyframes: {
        reveal: {
          "0%": { transform: "height: 0;" },
          "100%": { transform: "height: auto;" }
        }
      }
    },
    fontFamily: {
      sans: [
        "Inter",
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif"
      ],
      body: [
        "League Spartan",
        "Inter",
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif"
      ]
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1880px",
      "2xl": "2136px"
    }
  },
  plugins: []
};
