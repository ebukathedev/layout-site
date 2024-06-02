// import { HamburgerMenuProps } from "../../types";
// { showMenu, onToggleMenu }: HamburgerMenuProps

import { useState } from "react";

const HamburgerButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div
			className="flex flex-col space-y-[.25em] md:hidden pr-0 p-3 cursor-pointer relative z-20"
			onClick={() => setIsOpen(!isOpen)}
		>
			<span
				className={`w-[1.25em] h-[2px] bg-black rounded duration-300 transition-all ease-in-out ${
					isOpen && "rotate-45 translate-y-[7px]"
				}`}
			></span>
			<span
				className={`w-[1.25em] h-[2px] bg-black rounded duration-300 transition-all ease-in-out ${
					isOpen && "opacity-0"
				}`}
			></span>
			<span
				className={`w-[1.25em] h-[2px] bg-black rounded duration-300 transition-all ease-in-out ${
					isOpen && "-rotate-45 -translate-y-[5px]"
				}`}
			></span>
		</div>
	);
};

export default HamburgerButton;
