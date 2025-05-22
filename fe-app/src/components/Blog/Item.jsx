import React from "react";

export default function ItemBlog({ blog }) {
	return (
		<div
			className="rounded-xl shadow-md overflow-hidden 
           hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
           hover:-translate-y-2 hover:scale-[1.02] active:scale-95
           max-w-[300px] max-h-[385px] relative group
           hover:border-primary/20
           before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent 
           before:opacity-0 before:transition-opacity before:duration-500
           hover:before:opacity-100"
		>
			{/* Blog Image */}
			<div className="relative h-48 overflow-hidden">
				<img
					src={
						blog.image ||
						"https://source.unsplash.com/random/600x400/?blog,education"
					}
					alt={blog.title}
					className="w-full h-full object-cover"
				/>
				<div className="absolute bottom-0 left-0 bg-primary text-white px-3 py-1 text-sm font-medium">
					{blog.category || "Development"}
				</div>
			</div>

			{/* blog Content */}
			<div className="p-6">
				<div className="flex justify-between items-start">
					<h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 h-[40px]">
						{blog.title || "Advanced Web Development"}
					</h3>
					<span className="bg-primary/10 text-primary rounded-md text-sm font-semibold">
						${blog.price || "49.99"}
					</span>
				</div>
				<p className="text-gray-600 mb-4 line-clamp-2 text-sm">
					{blog.description ||
						"Master modern web development with this comprehensive blog covering React, Node.js and more."}
				</p>
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<img
							src={
								blog.author.avatar ||
								"https://source.unsplash.com/random/100x100/?portrait"
							}
							alt="Instructor"
							className="w-7 h-7 rounded-full mr-3"
						/>
						<div>
							<p className="text-sm font-medium text-gray-900">
								{blog.instructor || "John Doe"}
							</p>
						</div>
					</div>
					<div className="flex justify-between items-start">
						<div className="text-sm text-gray-500">
							<span>{blog.duration || "8"} hours</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
