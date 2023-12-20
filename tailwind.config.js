/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondaryColor: '#e9b171',
        turkis: '#48eddd',
      },
    },
  },
  plugins: [],
}

