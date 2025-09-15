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
      dropShadow: {
        glow: "0 0 5px oklch(0.58 0.245 27.325)"
      },
      maxHeight: {
        '172': '43rem',
      }, 
      spacing: {
        '1/20': '5%',
        '2/20': '10%',
        '3/20': '15%',
        '4/20': '20%',
        '5/20': '25%',
        '6/20': '30%',
        '7/20': '35%',
        '8/20': '40%',
        '9/20': '45%',
        '10/20': '50%',
        '11/20': '55%',
        '12/20': '60%',
        '13/20': '65%',
        '14/20': '70%',
        '15/20': '75%',
        '16/20': '80%',
        '17/20': '85%',
        '18/20': '90%',
        '19/20': '95%',
        '20/20': '100%',        
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
        'coming-soon': ['Coming Soon', 'cursive'],
        'mochiy': ["Mochiy Pop One", 'sans-serif'],
        'anton': ['Anton SC', 'sans-serif'],
        'archivo': ['Archivo Black', 'sans-serif'],
        'perm-marker': ['Permanent Marker', 'cursive'],
        'dot-gothic': ['DotGothic16', 'sans-serif'],
        'noto-mono': ['Noto Sans Mono', 'monospace'],
      }
    },
  },
  plugins: [],
};

