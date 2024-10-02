import tailwindTheme from "./src/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./index.html",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/views/**/*.{vue,js,ts,jsx,tsx}",
    "./vueform.config.js",
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.vue",
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.js",
  ],
  theme: {
    ...tailwindTheme,
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("flowbite/plugin"), require("@vueform/vueform/tailwind")],
};
