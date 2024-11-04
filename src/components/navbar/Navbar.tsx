"use client";
import HamburgerButton from "@/components/navbar/HamburgerButton";
// import Button from "@/components/UI/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import FlyoutLink from "./FlyoutLink";
import CourseContentMenu from "./CourseContentMenu";
import AboutContentMenu from "./AboutContentMenu";
import Button from "../UI/Button";
import { clsx } from "clsx";

interface NavbarProps {
	showNavLinks?: boolean;
	hamburgerButtonColor?: string;
	backgroundColor?: string;
	logoColor?: "dark" | "light";
}

const Navbar = ({
	showNavLinks = true,
	hamburgerButtonColor,
	backgroundColor,
	logoColor = "dark",
}: NavbarProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<header
			className={clsx(
				"py-6 border-b border-stroke-borderline/40 md:py-8",
				backgroundColor
			)}
		>
			<nav className="container flex items-center justify-between font-bold font-besley lg:text-lg">
				<Link href="/" className="w-20 md:w-24 lg:w-28">
					{logoColor === "dark" ? (
						<Image
							src={"logo.svg"}
							alt="Layout"
							width={140}
							height={40}
						/>
					) : (
						<Image
							src={"logo-light.svg"}
							alt="Layout"
							width={140}
							height={40}
						/>
					)}
				</Link>

				<HamburgerButton
					isOpen={isOpen}
					toggleMenu={toggleMenu}
					hamburgerButtonColor={hamburgerButtonColor}
				/>

				{showNavLinks && (
					<div className="hidden ml-10 mr-auto space-x-4 md:flex xl:ml-12">
						<FlyoutLink
							href={"/courses"}
							FlyoutContent={CourseContentMenu}
						>
							Courses
						</FlyoutLink>
						<FlyoutLink
							href={"/about"}
							FlyoutContent={AboutContentMenu}
						>
							About us
						</FlyoutLink>
					</div>
				)}

				<div className="hidden font-extrabold md:block">
					<Button href="/">Get started</Button>
				</div>
			</nav>
			<MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
		</header>
	);
};

export default Navbar;
