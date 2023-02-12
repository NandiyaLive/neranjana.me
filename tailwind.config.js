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
      width: {
        avatar: "6rem",
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
