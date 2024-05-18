/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				cream: "#F7E5A3",
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
					500: "#393939",
				},
				stroke: {
					"brand-stroke": "#650DD3",
					"light-brand-stroke": "#AB6BFD",
					"blue-stroke": "#008FCA",
					"brown-stroke": "#974510",
					"gray-stroke": "#B2B2B2",
					"light-gray-stroke": "#D4D4D4",
					"dark-gray-stroke": "#252525",
					borderline: "#BEBEBE",
				},
			},
			backgroundImage: {
				"brand-gradient":
					"linear-gradient(0deg,  #8E34FF 44%, #AA66FF 100%)",

				"light-brand-gradient":
					"linear-gradient(0deg,  #BE8BFF 44%, #DCC3FF 100%)",

				"blue-gradient":
					"linear-gradient(0deg, #6CD3FD 0%, #00A6EA 100%)",

				"brown-gradient":
					"linear-gradient(0deg, #F09153 0%, #C66526 100%)",

				"gray-gradient":
					"linear-gradient(0deg, #848383 0%, #303030 100%)",
				"dark-gray-gradient":
					"linear-gradient(0deg, #FFFFFF 0%, #DADADA 100%)",
			},
		},
	},
	plugins: [],
};
