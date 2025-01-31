import Link from "next/link";
import React, { useState } from "react";

interface FlyoutLinkProps {
	href: string;
	children: React.ReactNode;
	FlyoutContent?: () => React.ReactNode;
}

export default function FlyoutLink({
	href,
	children,
	FlyoutContent,
}: FlyoutLinkProps) {
	const [open, setOpen] = useState(false);

	const showFlyout = open && FlyoutContent;

	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			className="relative"
		>
			<Link
				href={href}
				className={`p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-brand-700 ${
					open && "text-brand-700"
				}`}
			>
				{children}
			</Link>
			{showFlyout && (
				<div className="absolute bg-transparent pt-[60px]">
					{FlyoutContent && FlyoutContent()}
				</div>
			)}
		</div>
	);
}
