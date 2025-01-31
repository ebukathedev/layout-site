import { approach } from "@/data";
import React from "react";

export default function Approach() {
	return (
		<section className="flex flex-col gap-10 md:gap-16 xl:gap-24">
			{approach.map((item, index) => (
				<div
					key={item.id}
					className={`pb-10 md:pb-16 xl:pb-24 ${
						index != approach.length - 1
							? "border-b border-stroke-borderline"
							: ""
					}`}
				>
					<div className="space-y-4 lg:space-y-8">
						<h3 className="leading-8 sub-headline text-left sm:leading-[3rem] md:text-3xl lg:text-4xl xl:text-[2.5rem]">
							{item.title}
						</h3>
						<div className="font-rubik md:text-lg lg:text-xl max-w-3xl lg:max-w-4xl xl:max-w-5xl space-y-6">
							{item.description.map((text, index) => (
								<p key={index}>{text}</p>
							))}
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
