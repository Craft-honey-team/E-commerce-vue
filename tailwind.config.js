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
    	
    	},
    	
    	backgroundImage: {
    	
    		'bee': "url('@/assets/Be.png')",
    	
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
        '.scrollClass::-webkit-scrollbar': {
          'display': 'none',
        },
		'.buttonStyle': {
		
			'background-color': '#ffcc00',
			

		},
		'.buttonStyle:hover': {
		
			'background-color': 'rgb(253 230 138)',
			

		}
      })
    })
  
  ],
}
