"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import SubNavbar from "@/components/navbar/SubNavbar";
import Mission from "@/components/about/Mission";
import Story from "@/components/about/Story";
import Approach from "@/components/about/Approach";

const navLinks = ["Mission", "Approach", "Our story"];

export default function About() {
	const [activeContent, setActiveContent] = useState(navLinks[0]);

	const toggleActiveContent = (label: string) => {
		setActiveContent(label);
	};

	return (
		<>
			<Navbar
				logoColor="light"
				backgroundColor="bg-brand-700"
				hamburgerButtonColor="bg-white"
				showNavLinks={false}
			/>
			<SubNavbar
				navLinks={navLinks}
				activeContent={activeContent}
				toggleActiveContent={toggleActiveContent}
			/>
			<main>
				{activeContent === "Mission" && <Mission />}
				{activeContent === "Approach" && <Approach />}
				{activeContent === "Our story" && <Story />}
			</main>
		</>
	);
}
