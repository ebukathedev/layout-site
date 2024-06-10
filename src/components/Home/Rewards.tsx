import { features } from "../../data";
import FeatureCard from "./FeatureCard";

const Rewards = () => {
	const feature = features[1];

	return (
		<section className="py-24 border border-stroke-gray">
			<div className="container">
				<div className="text-center">
					<h2 className="headline">
						you don’t need to worry <br /> what next after your
						course
					</h2>
					<p className="font-rubik">
						Here is what is up for you upon your completion of your
						courses
					</p>
				</div>
				<div>
					<div>
						<img src="" alt="" />
					</div>
					<div>
						<FeatureCard {...feature} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Rewards;
