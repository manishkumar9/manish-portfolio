/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sfDark: '#0B0F19',
        sfCard: 'rgba(17, 24, 39, 0.7)',
        sfElectric: '#00A1E0', // Salesforce Blue inspired accent
        sfCyan: '#00F2FE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}