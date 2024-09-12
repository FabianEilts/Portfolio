/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				secondaryColor: '#C4421A',
				turkis: '#48eddd',
				darkGray: '#222',
				gray: '#555',
			},
			fontSize: {
				2: '2rem',
			},
			inset: {
				152: '38rem',
			},
		},
	},
	plugins: [],
}
