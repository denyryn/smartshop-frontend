/** @type {import('tailwindcss').Config} */
import { ColorVariables } from "./constants/ColorVariables";
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      extend: {
        colors: {
          ...ColorVariables,
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

