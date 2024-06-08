/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./dev/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b',
        secondary: '#64748b',
        background: '#111827'
      },
    },
  },
  plugins: [],
}
