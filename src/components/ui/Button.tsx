import { Link } from "react-router-dom";

const Button = () => {
	return (
		<Link
			to="/"
			className="px-4 py-3 text-sm font-extrabold text-white rounded-[50px] bg-brand-gradient border-2 border-stroke-brand shadow-[0_4px_0] shadow-shadow-brand font-besley lg:text-base"
		>
			Get started
		</Link>
	);
};

export default Button;
