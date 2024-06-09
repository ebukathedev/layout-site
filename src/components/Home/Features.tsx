import illustration1 from "../../assets/illustration_1.png";

const Features = () => {
	return (
		<section className="pt-20">
			<div className="container">
				<div className="flex flex-col items-center gap-10">
					<div className="w-60">
						<img src={illustration1} alt="" className="w-full" />
					</div>
					<div className="space-y-5">
						<h3 className="text-xl">fun. simple. effective.</h3>
						<p className="font-rubik">
							Learning with Layout is fun! With quick, bite-sized
							lessons, you’ll earn points and unlock new levels
							while gaining real-world digital skills.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
