import { FeatureCardProps } from "../../types";

const FeatureCard = ({ img, title, description }: FeatureCardProps) => {
	return (
		<div className="flex flex-col items-center gap-10 md:justify-center md:flex-row md:odd:flex-row-reverse md:px-4 lg:gap-20">
			<div className="w-64 md:w-80 lg:w-full lg:max-w-sm">
				<img src={img} alt="" className="w-full" />
			</div>
			<div className="space-y-5 md:space-y-8">
				<h3 className="text-xl md:text-3xl lg:text-4xl">{title}</h3>
				<p className="max-w-md pr-4 md:max-w-lg font-rubik md:text-lg lg:max-w-md">
					{description}
				</p>
			</div>
		</div>
	);
};

export default FeatureCard;
