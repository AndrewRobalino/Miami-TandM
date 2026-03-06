/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8F4EE',
        surface: '#EEEAE3',
        primary: '#1A1A1A',
        accent: '#C9A84C',
        secondary: '#2C2C2C',
        muted: '#6B7280',
        border: '#DDD9D2',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
