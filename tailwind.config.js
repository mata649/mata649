/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				back: {
					dark: '#181818',
					light: '#F7F0DD'

				},
				txt: {
					dark: "#ededed;",
					light: "#4B4737"
				},
				primary: "#009177",
				secondary:"#A96334"

			}
		},

	},

	plugins: [],
}