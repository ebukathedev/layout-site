import type { Metadata } from "next";
import "./globals.css";

import { Besley, Rubik, Arvo } from "next/font/google";
import Footer from "@/components/Footer";

const besley = Besley({
	subsets: ["latin"],
	variable: "--font-besley",
	weight: ["400", "500", "600", "700", "800", "900"],
	display: "swap",
});
const rubik = Rubik({
	subsets: ["latin"],
	variable: "--font-rubik",
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
});
const arvo = Arvo({
	subsets: ["latin"],
	variable: "--font-arvo",
	weight: "400",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Layout",
	description: "fun and effective way to learn digital skills",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${besley.variable} ${rubik.variable} ${arvo.variable} antialiased`}
			>
				{children}
				<Footer />
			</body>
		</html>
	);
}
