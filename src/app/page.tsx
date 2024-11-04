import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Instructor from "@/components/home/Instructor";
import Rewards from "@/components/home/Rewards";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Features />
				<Rewards />
				<Testimonials />
				<Instructor />
			</main>
		</>
	);
}
