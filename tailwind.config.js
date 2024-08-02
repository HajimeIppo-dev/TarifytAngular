/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#9c3', 
        'rif-blue' : '#09c',// Benutzerdefinierter Farbname
      },
    },
  },
  plugins: [],
}

