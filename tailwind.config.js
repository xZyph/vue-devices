/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./demo/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7E52A0 ',
        secondary: '#818FB4',
        tertiary: '#C42021',
        background: '#1C2826'
      },
    },
  },
  plugins: [],
}
