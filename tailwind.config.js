/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ee4e2c",
        green: "#4d9d46",
      },
    },
  },
  plugins: [],
};
