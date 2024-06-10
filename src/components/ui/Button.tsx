import { Link } from "react-router-dom";

const Button = () => {
	return (
		<Link
			to="/"
			className="px-4 py-3 text-sm bg-brand-gradient border-stroke-brand shadow-shadow-brand lg:text-base btn"
		>
			Get started
		</Link>
	);
};

export default Button;
