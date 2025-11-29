/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#050816",
        bgDarker: "#020617",
        purpleMain: "#7c3aed",
        purpleSoft: "#a855f7",
        cardDark: "#0b1020",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(124, 58, 237, 0.45)",
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
}
