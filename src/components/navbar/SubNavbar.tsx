import Button from "../UI/Button";

interface SubNavbarProps {
	navLinks: string[];
	activeContent: string;
	toggleActiveContent: (label: string) => void;
}

export default function SubNavbar({
	navLinks,
	activeContent,
	toggleActiveContent,
}: SubNavbarProps) {
	return (
		<div className="py-6 md:py-8 bg-[#F0E4FF]">
			<div className="container flex flex-wrap items-center gap-5">
				{navLinks.map((link) => (
					<Button
						key={link}
						variant={
							activeContent === link ? "brand" : "light-brand"
						}
						onClick={() => toggleActiveContent(link)}
						className="max-sm:px-2 max-sm:py-1 max-sm:text-xs sm:px-6 md:px-7"
					>
						{link}
					</Button>
				))}
			</div>
		</div>
	);
}
