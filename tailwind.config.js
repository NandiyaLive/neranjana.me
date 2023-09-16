/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      maxWidth: {
        avatar: "420px",
      },
      fontFamily: {
        jb: ['"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        xsm: "0.75rem",
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
