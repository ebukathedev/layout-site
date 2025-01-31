import { mission } from "@/data";
import { MissionHero } from "./MissionHero";
import { MissionCard } from "./MissionCard";

export default function Mission() {
	return (
		<section>
			<MissionHero />
			<section className="mt-20 xl:mt-8 space-y-10">
				{mission.map((item, index) => (
					<MissionCard
						key={item.id}
						item={{
							...item,
							image: "https://res.cloudinary.com/drtebxtdt/image/upload/v1730740369/layout/landing%20page/dj.png", // Added missing required image property
						}}
						isLast={index === mission.length - 1}
						isEven={item.id % 2 === 0}
					/>
				))}
			</section>
		</section>
	);
}
