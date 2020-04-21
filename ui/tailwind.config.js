const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
	screens:{
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		'2xl': '1440px',
	},
	fontFamily: {
	      display: ['Helvetica', 'sans-serif'],
	      body: ['Graphik', 'sans-serif'],
	},
	borderWidth: {
    	default: '1px',
    	'0': '0',
    	'2': '2px',
    	'4': '4px',
	},
	borderRadius: {
		'none': '0',
		'sm': '.125rem',
		default: '.25rem',
		'lg': '.5rem',
		'full': '9999px',
	},
    extend: {
      colors: {
        'cv19teal': {
        	default: '#0c687f',
        	dark: '#094c5d',
        }
      },
    },
  },
  variants: {},
  plugins: [],
}
