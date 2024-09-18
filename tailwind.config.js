/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "custom-pink": "#F687AD",
        "primary-text": "#ae1d74",
        "primary-bg": "#ffeaec",
      },
      screens: {
        "support-hover": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
