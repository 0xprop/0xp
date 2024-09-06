/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'nav-text': '#221D1D',
        'nav-hover': '#f5f5f5',
        'hero-text': '#221D1D',
        'overview-text': '#636161',
      },
      borderRadius: {
        'nav': '50px',
      },
    },
  },
  plugins: [],
}