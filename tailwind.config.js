/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite.{js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#843bd7",
      },
      fontFamily: {
        primary: ["Inter"],
      },
    },
  },
  daisyui: {
    themes: [
      "light", // Keep only the light theme or any other theme you want to use
      // Removed 'dark' and other themes to disable them
    ],
    darkTheme: false, // Explicitly disable dark mode
  },
  plugins: [
    "@tailwindcss/forms",
    "@tailwindcss/container-queries",
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
