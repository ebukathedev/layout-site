import Link from "next/link";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="pb-[58px] bg-brand-700">
			<div className="bg-brand-600">
				<h2 className="p-4 text-white headline md:py-6 lg:py-8">
					making learning fun
				</h2>
			</div>
			<div className="container pt-[58px]">
				<div className="flex flex-col gap-[45px] md:flex-row md:justify-center md:gap-24">
					<div className="space-y-[31px]">
						<div className="text-lg font-bold text-white lg:text-xl">
							Company
						</div>
						<ul className="space-y-4 text-brand-200 font-rubik lg:text-lg">
							<li>
								<Link
									className="transition-all duration-200 ease-in-out hover:text-white"
									href={"/about"}
								>
									About us
								</Link>
							</li>
							<li>
								<Link
									className="transition-all duration-200 ease-in-out hover:text-white"
									href={"/partnership"}
								>
									Partnership
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-[31px]">
						<div className="text-lg font-bold text-white lg:text-xl">
							Products
						</div>
						<ul className="space-y-4 text-brand-200 font-rubik lg:text-lg">
							<li>
								<Link
									className="transition-all duration-200 ease-in-out hover:text-white"
									href={"/courses"}
								>
									Courses
								</Link>
							</li>
							<li>
								<Link
									className="transition-all duration-200 ease-in-out hover:text-white"
									href={"/"}
								>
									Bootcamp
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-[31px]">
						<div className="text-lg font-bold text-white lg:text-xl">
							Privacy
						</div>
						<ul className="space-y-4 text-brand-200 font-rubik lg:text-lg">
							<li>
								<Link
									className="transition-all duration-200 ease-in-out hover:text-white"
									href={"/terms-and-conditions"}
								>
									Terms
								</Link>
							</li>
							<li>
								<Link
									className="transition-all duration-200 ease-in-out hover:text-white"
									href={"/"}
								>
									Privacy
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-[31px]">
						<div className="text-lg font-bold text-white lg:text-xl">
							Social
						</div>
						<ul className="space-y-4 text-brand-200 font-rubik lg:text-lg">
							<li>
								<Link
									className="transition-all duration-200 ease-in-out hover:text-white"
									href={"/"}
								>
									Instagram
								</Link>
							</li>
							<li>
								<Link
									className="transition-all duration-200 ease-in-out hover:text-white"
									href={"/"}
								>
									Facebook
								</Link>
							</li>
							<li>
								<Link
									className="transition-all duration-200 ease-in-out hover:text-white"
									href={"/"}
								>
									Twitter
								</Link>
							</li>
							<li>
								<Link
									className="transition-all duration-200 ease-in-out hover:text-white"
									href={"/"}
								>
									LinkedIn
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="w-full mt-24 mb-16 mb md:my-16 h-[0.7px] bg-brand-200"></div>
			</div>
			<div className="text-center font-rubik text-brand-200 lg:text-lg">
				© {year} Layout. All right reserved.
			</div>
		</footer>
	);
}
