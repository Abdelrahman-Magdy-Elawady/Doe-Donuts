/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "AE1D74",
      },
      screens: {
        "support-hover": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
