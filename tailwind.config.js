/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		animation: {
  			gradient: 'gradient 8s linear infinite',
  			float: 'float 3s ease-in-out infinite',
  			'spin-slow': 'spin 8s linear infinite',
  			'fade-in': 'fade-in 0.6s ease-out both',
  			'fade-in-up': 'fade-in-up 0.6s ease-out both',
  			'fade-in-left': 'fade-in-left 0.6s ease-out both',
  			'fade-in-right': 'fade-in-right 0.6s ease-out both',
  			'scale-in': 'scale-in 0.25s ease-out both',
  			blink: 'blink 0.8s ease-in-out infinite alternate',
  			typewriter: 'typewriter 2s linear 1s both'
  		},
  		keyframes: {
  			gradient: {
  				'0%, 100%': {
  					'background-size': '200% 200%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'fade-in': {
  				from: { opacity: 0 },
  				to: { opacity: 1 }
  			},
  			'fade-in-up': {
  				from: { opacity: 0, transform: 'translateY(20px)' },
  				to: { opacity: 1, transform: 'translateY(0)' }
  			},
  			'fade-in-left': {
  				from: { opacity: 0, transform: 'translateX(-20px)' },
  				to: { opacity: 1, transform: 'translateX(0)' }
  			},
  			'fade-in-right': {
  				from: { opacity: 0, transform: 'translateX(20px)' },
  				to: { opacity: 1, transform: 'translateX(0)' }
  			},
  			'scale-in': {
  				from: { opacity: 0, transform: 'scale(0.85)' },
  				to: { opacity: 1, transform: 'scale(1)' }
  			},
  			blink: {
  				'0%, 100%': { opacity: 1 },
  				'50%': { opacity: 0 }
  			},
  			typewriter: {
  				from: { maxWidth: '0%' },
  				to: { maxWidth: '100%' }
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
