/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      screens: {
        'iphone3': {'max': '399px'},
        'nokia': {'max': '360px'},
        'blackberry': {'min': '361px'},
        'mobile': {'min': '400px'},
        'tablette': {'min': '727px'},
        
  
        '2xl': {'min': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'min': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'min': '960px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
  
        'xs': {'max': '447px'},
  
        'xs': {'max': '335px'},
  
  
        // => @media (max-width: 639px) { ... }
      },
    extend: {},
  },
  plugins: [],
}
