import { useState } from "react";
import { courses } from "../data/courses";
import { ItemCourse } from "../components/Courses/Item";
import { categories } from "../data/categories";
import Paginate from "../components/Paginate/Paginate";

export default function Courses() {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredCourses =
		activeCategory === "all"
			? courses
			: courses.filter((course) => course.category === activeCategory);

	return (
		<div className="mt-20 min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Page Header */}
				<div className="text-center mb-40">
					<h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Explore Our Courses
					</h1>
					<p className="mt-3 text-xl text-gray-500">
						Learn new skills with our professional instructors
					</p>
				</div>

				{/* Categories */}
				<div className="mb-16 overflow-x-auto">
					<div className="flex space-x-4 pb-2">
						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setActiveCategory(category.id)}
								className={`flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
									activeCategory === category.id
										? "bg-[#591ab1] text-white"
										: "bg-white text-gray-700 hover:bg-gray-100"
								}`}
							>
								<span className="mr-2">{category.icon}</span>
								{category.name}
							</button>
						))}
					</div>
				</div>

				{/* Courses Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{filteredCourses.map((course) => (
						<ItemCourse course={course} />
					))}
				</div>
			</div>
			{/* Pagination */}
			<Paginate />
		</div>
	);
}
