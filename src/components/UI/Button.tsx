import clsx from "clsx";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "brand" | "dark";

type ButtonProps = {
	children: React.ReactNode;
	href?: string;
	onClick?: () => void;
	className?: string;
	variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({
	children,
	href,
	onClick,
	className,
	variant = "brand",
	...props
}) => {
	const buttonClasses = twMerge(
		clsx(
			"px-4 py-3 text-sm lg:text-base font-extrabold border-2 shadow-[0_4px_0] inline-block font-besley rounded-[50px] text-white transition-all duration-200", // base styles
			{
				"bg-brand-gradient border-stroke-brand shadow-shadow-brand":
					variant === "brand",
				"bg-dark-gray-gradient border-black shadow-black":
					variant === "dark",
			},
			className
		)
	);

	if (href) {
		return (
			<Link href={href} className={buttonClasses} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={buttonClasses} {...props}>
			{children}
		</button>
	);
};

export default Button;
