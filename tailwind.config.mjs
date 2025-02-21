// import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
const config = {
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
			},
		},
	},
	// plugins: [daisyui], // ✅ Correct ESModules import
	// daisyui: {
	// 	themes: ['light', 'dark', 'synthwave', 'sunset', 'cupcake', 'winter'],
	// },
};

export default config;
