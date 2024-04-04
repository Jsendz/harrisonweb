/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'ocean': "url('assets/fondo5.png')",
      'about': "url('assets/fondo6.png')",
    },
    extend: {
      fontFamily :{
        loos: ["loos-wide", "sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

