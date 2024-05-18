import logo from "../assets/logo.svg";

const Navbar = () => {
	return (
		<header className="py-6 border-b border-borderline">
			<nav className="container flex items-center justify-between h-20 px-4 mx-auto bg-red-500">
				<div className="w-28">
					<img src={logo} alt="Layout" />
				</div>
				<div className="hidden">
					<a href="/" className=""></a>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
