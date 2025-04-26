import React from "react";
import Banner from "../components/Layouts/Banner";
import Stats from "../components/Layouts/Stats";
import ListCourse from "../components/Courses/List";

export default function Home() {
	return (
		<>
			<Banner />
			<Stats />
			<div className="mx-60 flex flex-col justify-center items-center">
				<span className="text-4xl text-gray-700 font-medium hover:text-[#591ab1]">
					Các khóa học phổ biến
				</span>
				<div className="mt-12">
					<ListCourse />
				</div>
			</div>
		</>
	);
}
