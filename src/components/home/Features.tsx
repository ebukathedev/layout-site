"use client";
import { features } from "@/data";
import FeatureCard from "./FeatureCard";
import Link from "next/link";
import Image from "next/image";
import Marquee from "./Marquee";

const MarqueeItem = ({ skill }: { skill: string }) => {
	return (
		<>
			<span className="ml-3">{skill}</span>
			<span className="font-bold"> • </span>
		</>
	);
};

export default function Features() {
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
			<div className="pt-24 border-t bg-[#F7E5A3] border-stroke-borderline">
				<div className="container flex flex-col items-center">
					<h1 className="mb-6 headline md:mb-10 lg:mb-[57px]">
						learn any skill <br /> anytime, anywhere
					</h1>
					<Link
						href="/"
						className="px-8 py-3 text-sm text-white border-black btn bg-dark-gray-gradient shadow-black lg:text-lg"
					>
						Get started
					</Link>
					<div className="mt-20 mb-24 max-w-[800px] lg:mt-24 lg:mb-28">
						<Image
							src="https://res.cloudinary.com/drtebxtdt/image/upload/v1729939948/layout/landing%20page/skateboard_cd8qzn.png"
							alt="illustration"
							className="min-w-full"
							width={954}
							height={531}
						/>
					</div>
				</div>

				<div className="py-4 border-[0.7px] border-y-black flex overflow-hidden">
					<Marquee>
						<div className="space-x-3 text-lg lg:text-xl font-arvo flex flex-shrink-0">
							{skills.map((skill) => (
								<MarqueeItem skill={skill} key={skill} />
							))}
						</div>
					</Marquee>
				</div>
			</div>
		</section>
	);
}
