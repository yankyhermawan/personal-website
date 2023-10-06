/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,tsx,ts}"],
	theme: {
		extend: {
			colors: {
				bgDark: "#222222",
				bgLight: "#f0f0f0",
				textDark: "#eeeeee",
				textLight: "#333333",
			},
		},
	},
	plugins: [],
};
