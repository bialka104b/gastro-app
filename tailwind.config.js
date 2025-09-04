/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./components/**/*.{vue,js}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}"],
	theme: {
		extend: {
			colors: {
				red: {
					// nadpisanie Tailwindowego red-500
					500: "#ff00ff",
				},
				// własny dodatkowe kolory (np. text-primary)
				primary: "#1e40af",
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
