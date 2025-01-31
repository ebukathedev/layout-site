import { cn } from "@/lib/utils";
import React from "react";

interface SectionListProps {
	heading: string;
	subtitle: string;
	itemsArray: {
		bulletPointColor: string;
		title: string;
		description: string[];
	}[];
}

export default function SectionList({
	heading,
	subtitle,
	itemsArray,
}: SectionListProps) {
	return (
		<div className="mt-5 lg:mt-0">
			<div
				className="border-stroke-gray border-[3px] font-bold text-sm rounded-2xl px-4 w-fit py-2 shadow-[0_3px_0] shadow-stroke-gray md:text-base md:rounded-[20px] md:px-6 md:py-3 lg:text-lg xl:text-xl xl:px-7 xl:py-4
				"
			>
				{subtitle}
			</div>
			<h3 className="headline text-left mt-4 md:mt-6 lg:mt-8">
				{heading}
			</h3>
			<ul className="mt-10 sm:mt-16 md:mt-24 flex flex-col gap-10 xl:mt-32">
				{itemsArray.map((item, index) => (
					<li
						key={index}
						className={cn(
							"pb-7 lg:pb-8 xl:pb-10 flex flex-row gap-8 items-center sm:px-4 lg:gap-14",
							index != itemsArray.length - 1 &&
								"border-stroke-borderline border-b"
						)}
					>
						<div
							style={{
								backgroundColor: item.bulletPointColor,
							}}
							className="hidden sm:block rounded-full w-full sm:max-w-[80px] sm:h-[80px] md:max-w-[100px] md:h-[100px] lg:max-w-[110px] lg:h-[110px]"
						></div>
						<div className="font-rubik space-y-2 md:space-y-3">
							<h4 className="font-bold text-lg sm:text-xl md:text-2xl">
								{item.title}
							</h4>
							<div className="space-y-4 lg:space-y-8">
								{item.description.map((item, index) => (
									<p
										key={index}
										className="md:text-lg lg:text-xl max-w-3xl lg:max-w-[650px]"
									>
										{item}
									</p>
								))}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
