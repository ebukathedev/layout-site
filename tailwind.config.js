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
				cream: "#F7E5A3",
				red: "#E30133",
				brand: {
					100: "#DDC3FF",
					200: "#DCC1FF",
					300: "#BE8BFF",
					400: "#AA66FF",
					500: "#8E34FF",
					600: "#9A4AFF",
					700: "#7518E9",
				},
				gray: {
					100: "#E2E2E2",
					200: "#DADADA",
					300: "#7C7683",
					400: "#7F7F7F",
					500: "#888888",
					600: "#393939",
					700: "#CCCCCC",
					800: "#AFAFAF",
				},
				stroke: {
					brand: "#650DD3",
					"light-brand": "#AB6BFD",
					blue: "#008FCA",
					brown: "#974510",
					gray: "#B2B2B2",
					"light-gray": "#D4D4D4",
					"dark-gray": "#252525",
					borderline: "#BEBEBE",
				},
				shadow: {
					brand: "#4E00AF",
					blue: "#0D80AF",
					brown: "#7A3508",
					gray: "#ABABAB",
				},
			},
			backgroundImage: {
				"brand-gradient":
					"linear-gradient(0deg,  #8E34FF 44%, #AA66FF 100%)",

				"light-brand-gradient":
					"linear-gradient(0deg,  #BE8BFF 44%, #DCC3FF 100%)",

				"blue-gradient": "linear-gradient(#6CD3FD 0%, #00A6EA 100%)",

				"brown-gradient": "linear-gradient(#F09153 0%, #C66526 100%)",

				"gray-gradient": "linear-gradient( #FFFFFF 0%, #DADADA 100%)",

				"dark-gray-gradient":
					"linear-gradient(#848383 0%, #303030 100%)",
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
