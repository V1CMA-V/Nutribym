import animations from '@midudev/tailwind-animations'


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				fugazOne: ['Fugaz One', 'system-ui'],
			},
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				accent: "var(--color-accent)",
			},
		},
	},
	plugins: [
		animations,
		({ addComponents }) => {
			addComponents({
			  ".cp-v": {
				clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 50% 100%, 0 85%)",
			  },
			});
		  },
	],
}
