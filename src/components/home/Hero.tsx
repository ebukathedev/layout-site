import Image from "next/image";
import Head from "next/head";

const Hero: React.FC = () => {
	return (
		<>
			<Head>
				<link
					rel="preload"
					as="image"
					href="https://res.cloudinary.com/drtebxtdt/image/upload/v1729939946/layout/landing%20page/hero_img_wpt85e.png"
					type="image/png"
				/>
			</Head>
			<section className="pt-10 pb-32 border-b">
				<div className="container flex flex-col items-center max-w-[950px] gap-8">
					<h1 className="headline">
						fun and effective way <br /> to learn digital skills
					</h1>
					<div className="max-w-[570px]">
						<Image
							src="https://res.cloudinary.com/drtebxtdt/image/upload/v1729939946/layout/landing%20page/hero_img_wpt85e.png"
							alt="banner"
							className="min-w-full"
							width={694}
							height={447}
							loading="eager"
						/>
					</div>
					<div className="flex flex-col items-center w-full gap-3 md:flex-row md:gap-0 lg:text-lg">
						<div className="bg-brand-gradient shadow-shadow-brand border-[3px] border-stroke-brand shadow-[0_4px_0] rounded-[50px] py-3 text-white font-bold text-center max-w-[340px] relative w-full md:-rotate-[0.6deg] md:translate-x-6">
							Comprehensive training <br /> and mentorship
						</div>
						<div className="bg-blue-gradient shadow-shadow-blue border-[3px] border-stroke-blue shadow-[0_4px_0] rounded-[50px] py-3 text-white font-bold text-center max-w-[340px] relative w-full -z-10 -rotate-[5deg] -translate-y-2 md:rotate-[3.74deg] md:translate-y-9">
							Ready internship <br /> placement
						</div>
						<div className="bg-brown-gradient shadow-shadow-brown border-[3px] border-stroke-brown shadow-[0_4px_0] rounded-[50px] py-3 text-white font-bold text-center max-w-[340px] relative w-full -z-20  rotate-[2deg] -translate-y-4 md:-rotate-[0.6deg] md:translate-y-0 md:-translate-x-14">
							Supportive 24/7 <br /> community
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
