"use client";
import { rewards } from "@/data";
import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import Button from "../UI/Button";

const Rewards: React.FC = () => {
	const [activeContent, setActiveContent] = useState(0);
	const reward = rewards[activeContent];
	const rewardCategories = [
		"Tools",
		"Certification",
		"Mentorship",
		"Resources",
	];

	useEffect(() => {
		const slide = setInterval(() => {
			setActiveContent((prevActiveContent) => {
				if (prevActiveContent >= rewards.length - 1) {
					return 0;
				}
				return prevActiveContent + 1;
			});
		}, 7000);
		return () => {
			clearInterval(slide);
		};
	}, [activeContent]);

	const handleActiveContent = (index: number) => {
		setActiveContent(index);
	};

	return (
		<section className="py-24 border-b lg:py-32 border-stroke-gray">
			<div className="container">
				<div className="space-y-6 text-center md:space-y-8 lg:space-y-10">
					<h2 className="headline">
						you don’t need to worry{" "}
						<br className="hidden min-[352px]:block" /> what next
						after your courses
					</h2>
					<p className="max-w-md mx-auto text-lg md:text-2xl font-rubik lg:max-w-[540px]">
						Here is what is up for you upon your completion of your
						courses
					</p>
				</div>
				<div>
					<div className="my-20 md:my-24 h-[450px] md:h-[260px] lg:h-[390px]">
						<FeatureCard {...reward} />
					</div>
					<div className="grid grid-cols-2 gap-6 md:flex md:justify-center">
						{rewardCategories.map((category, index) => (
							<Button
								key={category}
								onClick={() => handleActiveContent(index)}
								variant={
									activeContent === index ? "dark" : "gray"
								}
								className="px-0 min-[380px]:px-8 py-3 text-xs min-[380px]:text-sm btn lg:text-lg sm:min-w-[157.16px]"
							>
								{category}
							</Button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Rewards;
