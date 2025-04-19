import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
