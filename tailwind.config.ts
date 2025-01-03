import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				accent: '#0f0',
				variant: colors.lime['400'],
			},
			animation: {
				heartbeat: 'heartbeat .25s infinite alternate',
				blink: 'blink 11s linear infinite',
			},
			keyframes: {
				heartbeat: {
					to: {
						transform: 'scale(1.2)',
					},
				},
				blink: {
					'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
						opacity: '0.99',
						textShadow: '0 0 80px green, 0 0 30px lime, 0 0 6px olive',
					},
					'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
						opacity: '0.4',
						textShadow: 'none',
					},
				},
			},
		},
	},
	plugins: [],
} satisfies Config
