/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
          "2xl": "1630px",
        },
      },
      zIndex: {
        modalZIndex: 1000,
      },
    },
  },
  plugins: [],
};
