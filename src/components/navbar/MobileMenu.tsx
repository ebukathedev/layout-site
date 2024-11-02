import Link from "next/link";
// import Button from "../UI/Button";
import { courses, bulletPointColors } from "@/data";
import Button from "../UI/Button";

interface MobileMenuProps {
	isOpen: boolean;
	toggleMenu: () => void;
}

export default function MobileMenu({ isOpen, toggleMenu }: MobileMenuProps) {
	return (
		<>
			<nav
				className={`fixed right-0 z-20 bg-white top-0 inset-y-0 w-[70%] pt-[90px] md:hidden transform transition-transform duration-300 ease-in-out p-4 max-w-[345px] ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<ul className="space-y-5 text-black">
					<li>
						<Link
							href={"/about"}
							className="block py-1 font-bold text-black transition-colors duration-200 ease-in-out hover:text-brand-700"
						>
							About us
						</Link>
					</li>
					<li className="space-y-2">
						<Link
							href={"/courses"}
							className="block py-1 font-bold text-black transition-colors duration-200 ease-in-out hover:text-brand-700"
						>
							Courses
						</Link>

						<ul className="px-4 space-y-2">
							{courses.map((course, index) => (
								<li
									key={course}
									className="flex items-center gap-2"
								>
									<div
										className="rounded-full size-4"
										style={{
											backgroundColor:
												bulletPointColors[
													index %
														bulletPointColors.length
												],
										}}
									></div>
									<Link
										className="flex-1 block py-1 font-medium transition-colors duration-200 ease-in-out hover:text-brand-700"
										href="/courses"
									>
										{course}
									</Link>
								</li>
							))}
						</ul>
					</li>

					<li className="pt-4">
						<Button href="/" className="w-full text-center">
							Get started
						</Button>
					</li>
				</ul>
			</nav>
			{isOpen && (
				<div
					className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
					onClick={toggleMenu}
				/>
			)}
		</>
	);
}
