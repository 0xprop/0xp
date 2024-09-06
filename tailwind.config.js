/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        // ... other font families
      },
      colors: {
        'nav-text': '#221D1D',
        'nav-hover': '#f5f5f5',
        // ... other color definitions
      },
      borderRadius: {
        'nav': '50px',
      },
    },
  },
  plugins: [],
}