import { useState } from "react";
import { FaRegClock, FaRegHeart, FaRegComment, FaSearch } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { blogs } from "../data/blogs";
import Paginate from "../components/Paginate/Paginate";

// Extract all unique tags from blogs
const allTags = [...new Set(blogs.flatMap((blog) => blog.tags))];

export default function Blogs() {
	const [activeTag, setActiveTag] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");

	const filteredBlogs = blogs.filter((blog) => {
		const matchesTag = activeTag ? blog.tags.includes(activeTag) : true;
		const matchesSearch =
			blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			blog.content.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesTag && matchesSearch;
	});

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("vi-VN", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		});
	};

	return (
		<div className="mt-20 min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Page Header */}
				<div className="text-center mb-12">
					<h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Blog Công Nghệ
					</h1>
					<p className="mt-3 text-xl text-gray-500">
						Chia sẻ kiến thức và kinh nghiệm lập trình
					</p>
				</div>
				{/* Main Content */}
				<div className="mt-40 flex flex-col md:flex-row gap-8">
					{/* Tags Sidebar */}
					<div className="w-full md:w-64 flex-shrink-0">
						<div className="bg-white p-6 rounded-lg shadow sticky top-8">
							<h2 className="text-lg font-semibold mb-4 text-gray-900">Tags</h2>
							<div className="space-y-2">
								<button
									onClick={() => setActiveTag(null)}
									className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
										!activeTag
											? "bg-[#591ab1] text-white"
											: "text-gray-700 hover:bg-gray-100"
									}`}
								>
									Tất cả
								</button>
								{allTags.map((tag) => (
									<button
										key={tag}
										onClick={() => setActiveTag(tag)}
										className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
											activeTag === tag
												? "bg-[#591ab1] text-white"
												: "text-gray-700 hover:bg-gray-100"
										}`}
									>
										{tag}
									</button>
								))}
							</div>
						</div>
					</div>

					{/* Blog List */}
					<div className="flex-1">
						{/* Blog Posts */}
						<div className="space-y-8">
							{filteredBlogs.length > 0 ? (
								filteredBlogs.map((blog) => (
									<div
										key={blog.id}
										className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-300"
									>
										<div className="md:flex">
											{/* Blog Image */}
											<div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
												<img
													src={blog.image}
													alt={blog.title}
													className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
												/>
											</div>

											{/* Blog Content */}
											<div className="p-6 md:w-2/3">
												<div className="flex flex-wrap gap-2 mb-3">
													{blog.tags.map((tag) => (
														<span
															key={tag}
															className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#591ab1]/10 text-[#591ab1] hover:bg-[#591ab1]/20 cursor-pointer"
															onClick={() => setActiveTag(tag)}
														>
															{tag}
														</span>
													))}
												</div>

												<h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#591ab1] transition-colors duration-200">
													{blog.title}
												</h2>
												<p className="text-gray-600 mb-4 line-clamp-2">
													{blog.content}
												</p>

												<div className="flex items-center justify-between">
													{/* Author Info */}
													<div className="flex items-center">
														<img
															src={blog.author.avatar}
															alt={blog.author.name}
															className="w-10 h-10 rounded-full mr-3 object-cover"
														/>
														<div>
															<p className="text-sm font-medium text-gray-900">
																{blog.author.name}
															</p>
															<p className="text-xs text-gray-500">
																{blog.author.position}
															</p>
														</div>
													</div>

													{/* Meta Info */}
													<div className="flex items-center space-x-4 text-sm text-gray-500">
														<div className="flex items-center">
															<MdDateRange className="mr-1" />
															{formatDate(blog.createdAt)}
														</div>
														<div className="flex items-center">
															<FaRegClock className="mr-1" />
															{blog.readTime}
														</div>
														<div className="flex items-center">
															<FaRegHeart className="mr-1" />
															{blog.likes}
														</div>
														<div className="flex items-center">
															<FaRegComment className="mr-1" />
															{blog.comments}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								))
							) : (
								<div className="bg-white p-8 rounded-lg shadow text-center">
									<h3 className="text-lg font-medium text-gray-900 mb-2">
										Không tìm thấy bài viết phù hợp
									</h3>
									<p className="text-gray-500">
										Hãy thử với từ khóa hoặc tag khác
									</p>
									<button
										onClick={() => {
											setActiveTag(null);
											setSearchQuery("");
										}}
										className="mt-4 px-4 py-2 bg-[#591ab1] text-white rounded-md hover:bg-[#4a1499] transition-colors"
									>
										Xóa bộ lọc
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			{/* Pagination */}
			<Paginate />
		</div>
	);
}
