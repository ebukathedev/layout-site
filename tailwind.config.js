/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1120px",
			},
			center: true,
			padding: "1rem",
		},
		extend: {
			colors: {
				brand: {
					100: "var(--brand-100)",
					200: "var(--brand-200)",
					300: "var(--brand-300)",
					400: "var(--brand-400)",
					500: "var(--brand-500)",
					600: "var(--brand-600)",
					700: "var(--brand-700)",
				},
				gray: {
					100: "var(--gray-100)",
					200: "var(--gray-200)",
					300: "var(--gray-300)",
					400: "var(--gray-400)",
					500: "var(--gray-500)",
					600: "var(--gray-600)",
					700: "var(--gray-700)",
					800: "var(--gray-800)",
				},
				stroke: {
					brand: "var(--stroke-brand)",
					"light-brand": "var(--stroke-light-brand)",
					blue: "var(--stroke-blue)",
					brown: "var(--stroke-brown)",
					gray: "var(--stroke-gray)",
					"light-gray": "var(--stroke-light-gray)",
					"dark-gray": "var(--stroke-dark-gray)",
					borderline: "var(--stroke-borderline)",
				},
				shadow: {
					brand: "var(--shadow-brand)",
					blue: "var(--shadow-blue)",
					brown: "var(--shadow-brown)",
					gray: "var(--shadow-gray)",
				},
			},
			backgroundImage: {
				"brand-gradient": "var(--brand-gradient)",

				"light-brand-gradient": "var(--light-brand-gradient)",

				"blue-gradient": "var(--blue-gradient)",

				"brown-gradient": "var(--brown-gradient)",

				"gray-gradient": "var(--gray-gradient)",

				"dark-gray-gradient": "var(--dark-gray-gradient)",
			},
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
				besley: ["Besley", "serif"],
				arvo: ["Arvo", "serif"],
			},
		},
	},
	plugins: [],
};
