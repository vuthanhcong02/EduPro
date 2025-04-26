import React from "react";
import Banner from "../components/Layouts/Banner";
import Stats from "../components/Layouts/Stats";
import ListCourse from "../components/Courses/List";
import ListBlog from "../components/Blog/List";

export default function Home() {
	return (
		<>
			<Banner />
			<Stats />
			<div className="mx-60 flex flex-col justify-center items-center">
				<span className="text-2xl text-gray-700 font-medium relative group">
					<span className="relative z-10 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#591ab1] to-[#9d4edd] transition-all duration-500">
						Các khóa học phổ biến
					</span>
					<span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-[#591ab1] to-[#9d4edd] group-hover:w-full transition-all duration-300"></span>
				</span>
				<div className="mt-12">
					<ListCourse />
					<div className="text-center mt-16">
						<button className="px-10 py-4 rounded-[8px] border-gray-300 border hover:bg-[#591ab1] text-[#591ab1] hover:text-white transition-colors duration-300">
							Xem tất cả
						</button>
					</div>
				</div>
			</div>
			<div className="mt-40 mx-60 flex flex-col justify-center items-center">
				<span className="text-2xl text-gray-700 font-medium relative group">
					<span className="relative z-10 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#591ab1] to-[#9d4edd] transition-all duration-500">
						Các bài viết nổi bật
					</span>
					<span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-[#591ab1] to-[#9d4edd] group-hover:w-full transition-all duration-300"></span>
				</span>
				<div className="mt-12">
					<ListBlog />
					<div className="text-center mt-16">
						<button className="px-10 py-4 rounded-[8px] border-gray-300 border hover:bg-[#591ab1] text-[#591ab1] hover:text-white transition-colors duration-300">
							Xem tất cả
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
