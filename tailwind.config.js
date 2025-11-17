/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#7C3AED', 
        accent: '#06B6D4',
        dark: '#1F2937',
        light: '#F9FAFB'
      },
    },
  },
  plugins: [],
}
