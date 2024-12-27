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
			},
			keyframes: {
				heartbeat: {
					to: {
						transform: 'scale(1.2)',
					},
				},
			},
		},
	},
	plugins: [],
} satisfies Config
