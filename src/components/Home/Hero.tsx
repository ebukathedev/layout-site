import heroImg from "../../assets/hero_img.png";

const Hero = () => {
	return (
		<section className="pt-10">
			<div className="container flex flex-col items-center max-w-[950px] gap-8">
				<h1 className="leading-8 text-center sm:leading-10 headline">
					fun and effective way <br /> to learn digital skills
				</h1>
				<div className="max-w-[570px]">
					<img src={heroImg} alt="banner" className="w-full" />
				</div>
				<div className="flex flex-col items-center w-full gap-3 md:flex-row md:gap-0 lg:text-lg">
					<div className="bg-brand-gradient shadow-shadow-brand border-[3px] border-stroke-brand shadow-[0_4px_0] rounded-[50px] py-3 text-white font-bold text-center max-w-[340px] relative w-full md:-rotate-[0.6deg]">
						Comprehensive training <br /> and mentorship
					</div>
					<div className="bg-blue-gradient shadow-shadow-blue border-[3px] border-stroke-blue shadow-[0_4px_0] rounded-[50px] py-3 text-white font-bold text-center max-w-[340px] relative w-full -z-10 -rotate-[5deg] -translate-y-2 md:rotate-[3.74deg] md:translate-y-9 md:-translate-x-6">
						Ready internship <br /> placement
					</div>
					<div className="bg-brown-gradient shadow-shadow-brown border-[3px] border-stroke-brown shadow-[0_4px_0] rounded-[50px] py-3 text-white font-bold text-center max-w-[340px] relative w-full -z-20  rotate-[2deg] -translate-y-4 md:-rotate-[0.6deg] md:translate-y-0 md:-translate-x-14">
						Supportive 24/7 <br /> community
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
