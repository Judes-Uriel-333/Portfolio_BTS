// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          300: "#B794F4",
          500: "#8B5CF6",
          700: "#6D28D9",
          800: "#5B21B6",
        },
      },
    },
  },
  plugins: [],
};
