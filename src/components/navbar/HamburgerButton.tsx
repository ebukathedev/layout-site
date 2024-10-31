import { Dispatch, SetStateAction } from "react";

interface HamburgerButtonProps {
	isOpen: boolean;
	toggleMenu: () => void;
}

const HamburgerButton = ({ isOpen, toggleMenu }: HamburgerButtonProps) => {
	return (
		<div
			className="flex flex-col space-y-[6px] md:hidden pr-0 p-3 cursor-pointer relative z-30"
			onClick={toggleMenu}
		>
			<span
				className={`w-7 h-[3px] bg-brand-600 rounded duration-300 transition-all ease-in-out ${
					isOpen && "rotate-45 translate-y-[5px]"
				}`}
			></span>

			<span
				className={`w-7 h-[3px] bg-brand-600 rounded duration-300 transition-all ease-in-out ${
					isOpen && "-rotate-45 -translate-y-[4px]"
				}`}
			></span>
		</div>
	);
};

export default HamburgerButton;
