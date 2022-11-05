/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {
      fontSize: {
        nav: "0.85rem",
      },
      gridTemplateColumns: {
        home: "1.25fr 1fr",
      },
      maxWidth: {
        main: "68rem",
      },
      colors: {
        bgColor: {
          light: "#eeeeee",
          dark: "#0b0b0b",
        },
        card: {
          light: "#e0e0e0",
          dark: "#131313",
        },
      },
      fontFamily: {
        jbmono: ['"JetBrains Mono"', "monospace"],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      xmd: { max: "830px" },
      sm: { max: "639px" },
      mobile: "640px",
    },
  },
  plugins: [],
};
