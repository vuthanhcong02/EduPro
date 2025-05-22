import React from "react";
import ItemBlog from "./Item";
import { blogs } from "../../data/blogs";
export default function ListBlog() {
	return (
		<div className="flex flex-wrap gap-12 justify-start items-center">
			{blogs.map((blog, index) => (
				<ItemBlog blog={blog} key={index} />
			))}
		</div>
	);
}
