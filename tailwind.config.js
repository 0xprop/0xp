/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'nav-text': '#221d1d',
        'nav-hover': '#f5f5f5',
      },
      borderRadius: {
        'nav': '50px',
      },
    },
  },
  plugins: [],
}