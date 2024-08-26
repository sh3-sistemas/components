import tailwindTheme from "./src/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./index.html",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    ...tailwindTheme
  },
  // plugins: [require("flowbite/plugin")],
}

