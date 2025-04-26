import { CiStar } from "react-icons/ci";

export const ItemCourse = ({ course }) => {
	return (
		// <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-[300px] max-h-[385px]">
		<div
			className="bg-white rounded-xl shadow-md overflow-hidden 
               hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
               hover:-translate-y-2 hover:scale-[1.02] active:scale-95
               max-w-[300px] max-h-[385px] relative group
               border border-gray-100 hover:border-primary/20
               before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent 
               before:opacity-0 before:transition-opacity before:duration-500
               hover:before:opacity-100"
		>
			{/* Course Image */}
			<div className="relative h-48 overflow-hidden">
				<img
					src={
						course.imageUrl ||
						"https://source.unsplash.com/random/600x400/?course,education"
					}
					alt={course.title}
					className="w-full h-full object-cover"
				/>
				<div className="absolute bottom-0 left-0 bg-primary text-white px-3 py-1 text-sm font-medium">
					{course.category || "Development"}
				</div>
			</div>

			{/* Course Content */}
			<div className="p-6">
				<div className="flex justify-between items-start">
					<h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 h-[40px]">
						{course.title || "Advanced Web Development"}
					</h3>
					<span className="bg-primary/10 text-primary rounded-md text-sm font-semibold">
						${course.price || "49.99"}
					</span>
				</div>
				<p className="text-gray-600 mb-4 line-clamp-2 text-sm">
					{course.description ||
						"Master modern web development with this comprehensive course covering React, Node.js and more."}
				</p>
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<img
							src={
								course.instructorAvatar ||
								"https://source.unsplash.com/random/100x100/?portrait"
							}
							alt="Instructor"
							className="w-7 h-7 rounded-full mr-3"
						/>
						<div>
							<p className="text-sm font-medium text-gray-900">
								{course.instructor || "John Doe"}
							</p>
						</div>
					</div>
					<div className="flex justify-between items-start border-t border-gray-100">
						<div className="text-sm text-gray-500">
							<span>{course.duration || "8"} hours</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
