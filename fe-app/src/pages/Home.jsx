import React from "react";
import Banner from "../components/Layouts/Banner";
import Stats from "../components/Layouts/Stats";

export default function Home() {
	return (
		<>
			<Banner />
			<Stats />
			<div className="text-center">Home</div>
		</>
	);
}
