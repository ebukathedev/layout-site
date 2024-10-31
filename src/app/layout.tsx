import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer";
import { Arvo, Besley, Rubik } from "next/font/google";
import Head from "next/head";

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
			<Head>
				<link
					rel="preload"
					href={`https://fonts.googleapis.com/css2?family=Besley:wght@400;500;600;700;800;900&display=swap`}
					as="style"
				/>
				<link
					rel="preload"
					href={`https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap`}
					as="style"
				/>
				<link
					rel="preload"
					href={`https://fonts.googleapis.com/css2?family=Arvo:wght@400&display=swap`}
					as="style"
				/>
			</Head>
			<body
				className={`${besley.variable} ${rubik.variable} ${arvo.variable} antialiased`}
			>
				{children}
				<Footer />
			</body>
		</html>
	);
}
