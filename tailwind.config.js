module.exports = {
  content: ["index.html",
  "activities.html",
  "node_modules/@themesberg/flowbite/dist/flowbite.bundle.js",],
  // "node_modules/tailwindcss-animatecss/index.js"],
  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        't-black':'#05051e',
        //'t-purple':'#2F2E48',
        't-purple': '#281c2a',
        't-red': '#f0324d',
        't-blue': '#180DDB'//'#2b55b8' 
         
      },
      container: {
        // you can configure the container to be centered
        center: true,
  
        // or have default horizontal padding
        padding: '1.5rem',
  
        // default breakpoints but with 40px removed
        screens: {
          // sm: '600px',
          // md: '728px',
          // lg: '984px',
          xl: '1080px',
          '2xl': '1080px',
        },
      },
      lineHeight: {
        'neg': '0.85',
        
      },
      
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin'),
    require('animated-tailwindcss'),
    

],
}
