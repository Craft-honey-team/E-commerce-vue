/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}
