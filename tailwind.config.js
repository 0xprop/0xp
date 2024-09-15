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
      },
      colors: {
        'nav-text': '#221D1D',
        'nav-hover': '#f5f5f5',
      },
      borderRadius: {
        'nav': '50px',
      },
      spacing: {
        'site-padding-sm': '2rem',    // 32px
        'site-padding-md': '3rem',    // 48px
        'site-padding-lg': '4rem',    // 64px
        'site-padding-xl': '6rem',    // 96px
        'site-padding-2xl': '8rem',   // 128px
      },
      fontSize: {
        'site-base': '1rem',    // Base font size
        'site-lg': '1.125rem',  // Large font size
        'site-xl': '1.25rem',   // Extra large font size
        'site-2xl': '1.5rem',   // 2x large font size
      },
      maxWidth: {
        '8xl': '90rem', // 1440px
      },
    },
  },
  plugins: [],
}