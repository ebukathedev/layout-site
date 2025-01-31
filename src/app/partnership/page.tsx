import React from "react";
import Navbar from "@/components/navbar/Navbar";

export default function Partnership() {
	return (
		<>
			<Navbar
				logoColor="dark"
				backgroundColor="bg-white"
				hamburgerButtonColor="bg-brand-700"
				showNavLinks={false}
			/>
			<main className="container pt-10 pb-24">Hello world</main>
		</>
	);
}
