import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import HamburgerButton from "./Navbar/HamburgerButton";
import Button from "./ui/Button";

const Navbar = () => {
	return (
		<header className="py-6 border-b border-stroke-borderline/40 md:py-8">
			<nav className="container flex items-center justify-between font-bold font-besley lg:text-lg">
				<Link to="/" className="w-28">
					<img src={logo} alt="logo" className="" />
				</Link>

				<HamburgerButton />

				<div className="hidden ml-10 mr-auto space-x-4 md:flex xl:ml-12">
					<div className="relative p-2">
						<span className="transition-colors duration-200 ease-in-out cursor-pointer hover:text-brand-700 ">
							Courses
						</span>
						<div className="absolute rounded-[30px] border-[3px] border-stroke-gray shadow-[0_6px_0] shadow-stroke-gray pt-4 pb-8 px-10 top-24  w-[521px]">
							<span className="font-semibold text-gray-500 font-rubik">
								Categories
							</span>
							<ul className="grid grid-cols-2">
								<li>Development</li>
								<li>Business</li>
								<li>Design</li>
								<li>Data</li>
								<li>Marketing</li>
								<li>Music</li>
							</ul>
						</div>
					</div>
					<div className="p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-brand-700">
						About us
					</div>
				</div>

				<div className="hidden font-extrabold md:block">
					<Button />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
