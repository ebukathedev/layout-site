import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/partnership",
		element: <h1>Contact</h1>,
	},
	{
		path: "/courses",
		element: <h1>courses</h1>,
	},
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
