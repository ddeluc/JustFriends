/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      maxHeight: {
        '172': '43rem',
      },  
      brightness: {
        25: '0.25',
        35: '0.35',
        40: '0.4',
        60: '0.6',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundColor: {
        "main": "#ffffff"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/animeclouds.jpeg')",
        "custom-gradient": "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(34,34,34,0.6923144257703081) 48%, rgba(0,0,0,1) 80%)",
      },
      fontFamily: {
        'shrikhand': ['Shrikhand', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'coming-soon': ['Coming Soon', 'cursive']
      }
    },
  },
  plugins: [],
};

