import { features } from "../../data";
import FeatureCard from "./FeatureCard";
import skateboard from "../../assets/skateboard.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const MarqueeItem = ({ skill }: { skill: string }) => {
	return (
		<>
			<span className="ml-2">{skill}</span>
			<span className="font-bold"> • </span>
		</>
	);
};

const Features = () => {
	const skills = [
		"Lifestyle",
		"Development",
		"Design",
		"Marketing",
		"Music",
		"Photography",
		"Cinematography",
	];

	return (
		<section>
			<div className="container py-20 space-y-20 md:space-y-32 ">
				{features.map((feature) => (
					<FeatureCard key={feature.id} {...feature} odd />
				))}
			</div>
			<div className="pt-24 border-t bg-cream border-stroke-borderline">
				<div className="container flex flex-col items-center">
					<h1 className="mb-6 headline md:mb-10 lg:mb-[57px]">
						learn any skill <br /> anytime, anywhere
					</h1>
					<Link
						to="/"
						className="px-8 py-3 text-sm text-white border-black btn bg-dark-gray-gradient shadow-black lg:text-lg"
					>
						Get started
					</Link>
					<div className="mt-20 mb-24 max-w-[800px] lg:mt-24 lg:mb-28">
						<img src={skateboard} alt="" className="w-full" />
					</div>
				</div>

				<div className="py-4 border-[0.7px] border-black">
					<Marquee autoFill>
						<div className="space-x-2 overflow-y-hidden text-lg lg:text-xl">
							{skills.map((skill) => (
								<MarqueeItem skill={skill} key={skill} />
							))}
						</div>
					</Marquee>
				</div>
			</div>
		</section>
	);
};

export default Features;
