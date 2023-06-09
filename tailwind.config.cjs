/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // Example of adding a custom color
      },
      fontFamily: {
        custom: ['Arial', 'sans-serif'], // Example of adding a custom font
      },
      fontSize: {
        '2xl': '1.5rem', // Example of modifying an existing font size
      },
    },
  },
  plugins: [],
};
