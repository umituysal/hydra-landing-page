/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image' : "url('../public/assets/techBgImage.jpeg')",
        'downArrow': "url('../public/assets/arrow-down.svg')",
        'wave':"url('../public/assets/wave.svg')"
      },
      fontFamily:{
        montserrat:["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
}