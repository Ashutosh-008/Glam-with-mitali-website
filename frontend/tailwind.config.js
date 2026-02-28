/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
      colors: {
        navy: '#1B2845',
        'navy-light': 'rgba(27, 40, 69, 0.7)',
        'navy-medium': 'rgba(27, 40, 69, 0.8)',
        'navy-lightest': 'rgba(27, 40, 69, 0.5)',
        gold: '#D4AF37',
        pink: '#E8B4BC',
        'pink-light': 'rgba(232, 180, 188, 0.3)',
        'pink-lightest': 'rgba(232, 180, 188, 0.2)',
        cream: '#FFF8F0',
        beige: '#FAF6F1',
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};