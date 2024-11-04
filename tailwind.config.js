/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}",flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

