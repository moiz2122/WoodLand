/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customgrayprimary: "#1F2937",
        customgraysecondary: "#374151",
        customlightgray: "#9CA3AFBF",
        customgreen: "#019376",
        customdarkgreen: "#01936d",
      },
    },
  },
  darkMode: "class", // Enable dark mode using the 'class' strategy
  plugins: [],
};
