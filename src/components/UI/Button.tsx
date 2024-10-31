import Link from "next/link";

interface ButtonProps {
	className?: string;
}

const Button = ({ className }: ButtonProps) => {
	return (
		<Link
			href="/"
			className={`px-4 py-3 text-sm bg-brand-gradient border-stroke-brand shadow-shadow-brand lg:text-base btn ${className}`}
		>
			Get started
		</Link>
	);
};

export default Button;
