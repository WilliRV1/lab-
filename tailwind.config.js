/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dce4ff',
          200: '#c0cdff',
          300: '#95abff',
          400: '#647eff',
          500: '#3b4eff',
          600: '#1e3a8a', // Professional Blue (Approved)
          700: '#1b2d7a',
          800: '#1a2663',
          900: '#1a2353',
          950: '#0f1331',
        },
        accent: {
          navy: '#0f172a',
          teal: '#0d9488',
        },
        slate: {
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
