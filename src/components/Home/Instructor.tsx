import illustration6 from "../../assets/illustration_6.png";

const Instructor = () => {
	return (
		<section className="py-24 lg:py-28">
			<div className="container">
				<div className="flex flex-col items-center gap-20 md:justify-center md:flex-row md:px-4">
					<div className="flex flex-col items-center text-center lg:text-left lg:items-start">
						<div className="px-3 py-2 font-semibold text-white font-rubik bg-[#E30133] rounded-[10px] text-sm w-fit">
							Coming soon
						</div>
						<div className="mt-6 space-y-6 md:space-y-8">
							<h2 className="headline text-brand-700 lg:text-left">
								become an <br className="hidden lg:block" />{" "}
								instructor
							</h2>
							<p className="max-w-md mx-auto md:text-lg lg:text-xl font-rubik">
								At Layout, instructors from across Africa
								educate thousands of learners. We empower you
								with the necessary tools and expertise to teach
								your passion.
							</p>
							<button className="px-4 py-3 text-sm bg-brand-gradient border-stroke-brand shadow-shadow-brand lg:text-base btn">
								Start teaching today
							</button>
						</div>
					</div>
					<div className="flex justify-center max-w-[400px] mx-auto">
						<img src={illustration6} alt="" className="-mr-5" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Instructor;
