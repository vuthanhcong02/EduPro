import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../components/Layouts/Banner";

export default function DefaultLayout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1">
				<Banner />
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
