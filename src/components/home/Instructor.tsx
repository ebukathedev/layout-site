import Image from "next/image";
import Button from "../UI/Button";

const Instructor: React.FC = () => {
	return (
		<section className="py-24 lg:py-28">
			<div className="container">
				<div className="flex flex-col items-center gap-20 md:justify-center md:flex-row md:px-4">
					<div className="flex flex-col items-center text-center md:text-left md:items-start">
						<div className="px-3 py-2 font-semibold text-white font-rubik bg-[#E30133] rounded-[10px] text-sm w-fit">
							Coming soon
						</div>
						<div className="mt-6 space-y-6 md:space-y-8">
							<h2 className="headline text-brand-700 md:text-left">
								become an <br className="hidden md:block" />{" "}
								instructor
							</h2>
							<p className="max-w-md mx-auto md:text-lg lg:text-xl font-rubik">
								At Layout, instructors from across Africa
								educate thousands of learners. We empower you
								with the necessary tools and expertise to teach
								your passion.
							</p>
							<Button>Start teaching today</Button>
						</div>
					</div>
					<div className="flex justify-center max-w-[400px] mx-auto lg:self-end">
						<Image
							src="https://res.cloudinary.com/drtebxtdt/image/upload/v1729939947/layout/landing%20page/illustration_6_xy8wlo.png"
							alt="illustration"
							className="-mr-5"
							width={514}
							height={443}
						/>
					</div>
				</div>
				<div className="text-lg md:text-xl lg:text-2xl text-gray-300 mt-[60px] md:mt-20 md:mb-10 text-center sm:flex gap-3  items-center justify-center lg:mt-[100px]">
					<span>Teach your way</span> <span>|</span>{" "}
					<span>Inspire learners</span>{" "}
					<br className="min-[480px]:hidden" /> <span>|</span>{" "}
					<span>Get rewards</span>
				</div>
			</div>
		</section>
	);
};

export default Instructor;
