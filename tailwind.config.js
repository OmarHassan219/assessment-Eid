/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '375': '375px', // Small screens
      '400': '400px', // Small screens
      '480': '480px', // Small screens
      '500': '500px', // Small screens
      '580': '580px', // Small screens
      '600': '600px', // Small screens
      'sm': '640px', // Small screens
      'md': '768px', // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra large screens
      '2xl': '1536px', // Double extra large screens
      // You can add more custom screen sizes as needed
    },
    extend: {},
  },
  plugins: [],
}