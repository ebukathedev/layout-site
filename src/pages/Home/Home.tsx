import Features from "./components/Features";
import Hero from "./components/Hero";
import Instructor from "./components/Instructor";
import Rewards from "./components/Rewards";
import Testimonials from "./components/Testimonials";
import Navbar from "../../components/Navbar";

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
