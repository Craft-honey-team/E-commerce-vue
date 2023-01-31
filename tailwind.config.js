/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
  	
    extend: { 
         
    	transitionProperty: {
    	
    		'height': 'height'
    	
    	},
    	
    	height: {
    	
    		'128': '32rem',
    	
    	}
    
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [
  
  	plugin(function({ addUtilities }) {
      addUtilities({
        '.drag-none': {
          'user-drag': 'nonez',
        },
      })
    })
  
  ],
}
