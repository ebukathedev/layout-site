import Image from "next/image";
import { type Mission } from "@/types";

interface MissionCardProps {
	item: Mission;
	isLast: boolean;
	isEven: boolean;
}

export function MissionCard({ item, isLast, isEven }: MissionCardProps) {
	return (
		<div
			className={`flex flex-col gap-[37px] md:gap-6 xl:gap-[37px] md:items-center ${
				!isLast ? "border-b border-stroke-borderline" : ""
			} py-10 md:py-16 xl:py-24 ${
				isEven ? "md:flex-row-reverse" : "md:flex-row"
			}`}
		>
			<div className="md:w-[40%] flex justify-center">
				<Image
					src={item.image}
					alt={`${item.title} illustration`}
					width={407}
					height={263}
					className="w-full max-w-[400px] lg:max-w-none"
				/>
			</div>
			<div className="space-y-4 md:flex-1 lg:space-y-8">
				<h3 className="leading-8 sub-headline text-left sm:leading-[3rem] md:text-3xl lg:text-4xl xl:text-[2.5rem]">
					{item.title}
				</h3>
				<div className="font-rubik md:text-lg lg:text-xl max-w-xl lg:max-w-[520px] xl:max-w-xl space-y-6">
					{item.description.map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>
			</div>
		</div>
	);
}
