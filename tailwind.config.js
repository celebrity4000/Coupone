import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [

		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",

	],
	theme: {
		extend: {
			colors: {
				customGray: '#787878',
				customFieldColor: '#D9D9D9',
				customLabelColor: '#404040',
				customGreenColor: '#248D50',
				customgraydark: ' #888888',
				navbarBgColor: '#FAFAFA',
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
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
				},
				'p3-gray': 'color(display-p3 0.949 0.949 0.949)',
				'p3-green': 'color(display-p3 0.675 1.000 0.804)',
			},
			screens: {
				customMax: {
					max: '1124px'
				},
				navBarWidth: {
					max: '1112px'
				},
				brandWidth: {
					max: '1234px'
				},
				searchBar: '771px',
				customlg: '1125px',
				footerWidth: {
					max:'1207px',
				},
				deliveryForm: {
					max:'768px'
,				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				custom: '0px 0px 4px 0px #00000040'
			},
			fontFamily: {
				poppins: [
					'Poppins',
					'sans-serif'
				]
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
			},
			container: {
				center: true,
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(270deg, #00FF9C 0%, #ACFFD6 49.5%)',
				'custom-gradient-p3': 'linear-gradient(270deg, color(display-p3 0.408 1.000 0.647) 0%, color(display-p3 0.749 1.000 0.851) 49.5%)',

				'backGroundGradient': 'linear-gradient(270deg, rgba(0, 255, 156, 0.5) 0%, rgba(255, 255, 255, 0.5) 56.1%)',
				'pricingCardGradient': 'linear-gradient(270deg, #FFFFFF 57.6%, #D0FFE8 100%)',
				'custom-radial-gradient':
					'radial-gradient(50.14% 50% at 50% 50%, #D0FFE8 13.64%, rgba(0, 255, 156, 0.885) 85.8%, rgba(0, 155, 94, 0.77) 100%)',
			},
		}
	},
	plugins: [tailwindcssAnimate],
};
