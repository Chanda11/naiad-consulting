/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#136f3c",
          light: "#e8f5ee",
          dark: "#0d4a29",
        },
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
