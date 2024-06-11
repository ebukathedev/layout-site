import { testimonials } from "../../data";

const Testimonials = () => {
	return (
		<section className="py-24 border-b border-stroke-gray">
			<div className="container space-y-10 lg:space-y-20">
				<h2 className="headline">
					join learners that <br /> love layout
				</h2>
				<div className="font-besely">
					<div className="flex pb-4 overflow-x-scroll gap-9 max-w-[400px] mx-auto md:max-w-[500px] lg:max-w-[860px]">
						{testimonials.map((testimonial) => (
							<div className="text-center rounded-[30px] border-[3px] border-stroke-gray px-6 py-8 flex flex-col justify-between gap-4 shadow-[0_8px_0] shadow-stroke-gray md:text-lg lg:text-xl font-medium lg:px-10 lg:py-14 min-w-full lg:min-w-[410px] md:gap-8">
								<p>“{testimonial.description}"</p>
								<span>{testimonial.author}</span>
							</div>
						))}
					</div>
					<div className="flex justify-center ">
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6"
							>
								<path
									fillRule="evenodd"
									d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
