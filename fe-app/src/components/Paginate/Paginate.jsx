import React from "react";

export default function Paginate() {
	return (
		<>
			{/* Pagination */}
			<div className="mt-40 flex justify-center">
				<nav className="inline-flex rounded-md shadow">
					<a
						href="#"
						className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
					>
						Previous
					</a>
					<a
						href="#"
						className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-[#591ab1] hover:bg-gray-50"
					>
						1
					</a>
					<a
						href="#"
						className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
					>
						2
					</a>
					<a
						href="#"
						className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
					>
						3
					</a>
					<a
						href="#"
						className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
					>
						Next
					</a>
				</nav>
			</div>
		</>
	);
}
