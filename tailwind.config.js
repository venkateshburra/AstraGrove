/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/banner_bg.png')",
      },
      fontFamily: {
        kanit: "var(--font-code)",
      },
    },
  },
  plugins: [],
};
