import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import Instructor from "../components/Home/Instructor";
import Rewards from "../components/Home/Rewards";
import Testimonials from "../components/Home/Testimonials";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Features />
			<Rewards />
			<Testimonials />
			<Instructor />
		</>
	);
};

export default Home;
