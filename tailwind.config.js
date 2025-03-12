/** @type {import('tailwindcss').Config} */
import { ColorVariables } from "./constants/ColorVariables";
import { TypographyVariables } from "./constants/TypographyVariables";

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ...ColorVariables,
      },
    },
  },
  plugins: [require("daisyui")],
}

