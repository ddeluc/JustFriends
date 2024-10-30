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
        "custom-gradient": "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(1,24,65,1) 70%, rgba(8,58,147,1) 87%, rgba(6,108,179,1) 100%)",
      },
      fontFamily: {
        'shrikhand': ['Shrikhand', 'serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};

