/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
  sfDark: '#f5ebe0',     // 🎯 Updated from black to your premium cream color
  sfCard: 'rgba(255, 255, 255, 0.7)', // Made the glass cards white-tinted instead of dark-tinted
  sfElectric: '#00A1E0', 
  sfCyan: '#00F2FE',
},
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}