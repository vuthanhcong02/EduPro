import React from "react";
import ItemBlog from "./Item";

export default function ListBlog() {
	const blogs = [
		{
			id: 1,
			title: "10 Mẹo Thiết Kế UI/UX Giúp Tăng Trải Nghiệm Người Dùng",
			image: "https://placehold.co/600x400",
			content:
				"Trong bài viết này, chúng tôi sẽ chia sẻ 10 mẹo thiết kế UI/UX quan trọng giúp cải thiện đáng kể trải nghiệm người dùng trên ứng dụng và website của bạn...",
			author: {
				name: "Nguyễn Thị Minh Anh",
				avatar: "https://placehold.co/600x400",
				position: "Senior UI/UX Designer",
			},
			createdAt: "2023-05-15T09:30:00Z",
			readTime: "8 phút",
			tags: ["Design", "UI/UX", "Frontend"],
			likes: 124,
			comments: 28,
		},
		{
			id: 2,
			title: "React 18: Những Tính Năng Mới Đáng Chú Ý",
			image: "https://placehold.co/600x400",
			content:
				"React 18 mang đến nhiều cải tiến đáng giá như concurrent rendering, automatic batching và các hooks mới. Bài viết sẽ phân tích chi tiết từng tính năng...",
			author: {
				name: "Trần Văn Bách",
				avatar: "https://placehold.co/600x400",
				position: "Frontend Team Lead",
			},
			createdAt: "2023-06-22T14:15:00Z",
			readTime: "12 phút",
			tags: ["React", "JavaScript", "Frontend"],
			likes: 215,
			comments: 42,
		},
		{
			id: 3,
			title: "Xây Dựng REST API với Node.js và Express",
			image: "https://placehold.co/600x400",
			content:
				"Hướng dẫn từ A-Z cách tạo REST API chuẩn mực sử dụng Node.js và Express, bao gồm authentication, validation và error handling...",
			author: {
				name: "Lê Hoàng Nam",
				avatar: "https://placehold.co/600x400",
				position: "Backend Developer",
			},
			createdAt: "2023-07-10T11:00:00Z",
			readTime: "15 phút",
			tags: ["Node.js", "Backend", "API"],
			likes: 178,
			comments: 31,
		},
		{
			id: 4,
			title: "Giới Thiệu Về Machine Learning Cho Người Mới Bắt Đầu",
			image: "https://placehold.co/600x400",
			content:
				"Bài viết giới thiệu các khái niệm cơ bản về Machine Learning, các thuật toán phổ biến và cách áp dụng vào thực tế...",
			author: {
				name: "Phạm Thị Thu Hà",
				avatar: "https://placehold.co/600x400",
				position: "Data Scientist",
			},
			createdAt: "2023-08-05T16:45:00Z",
			readTime: "20 phút",
			tags: ["AI", "Machine Learning", "Data Science"],
			likes: 312,
			comments: 56,
		},
		{
			id: 5,
			title: "Tối Ưu Hiệu Suất Website Với Next.js",
			image: "https://placehold.co/600x400",
			content:
				"Khám phá các kỹ thuật tối ưu hiệu suất trong Next.js bao gồm SSR, SSG, ISR và image optimization để đạt điểm cao trên Lighthouse...",
			author: {
				name: "Vũ Đức Cường",
				avatar: "https://placehold.co/600x400",
				position: "Fullstack Developer",
			},
			createdAt: "2023-09-18T10:20:00Z",
			readTime: "14 phút",
			tags: ["Next.js", "Performance", "Frontend"],
			likes: 198,
			comments: 37,
		},
		{
			id: 6,
			title: "Lập Trình Mobile Với React Native - Kinh Nghiệm Thực Tế",
			image: "https://placehold.co/600x400",
			content:
				"Chia sẻ kinh nghiệm triển khai ứng dụng mobile với React Native, những bài học xương máu và cách giải quyết các vấn đề thường gặp...",
			author: {
				name: "Đỗ Thị Thanh Mai",
				avatar: "https://placehold.co/600x400",
				position: "Mobile Developer",
			},
			createdAt: "2023-10-30T13:10:00Z",
			readTime: "18 phút",
			tags: ["React Native", "Mobile", "Cross-platform"],
			likes: 267,
			comments: 49,
		},
	];
	return (
		<div className="flex flex-wrap gap-12 justify-start items-center">
			{blogs.map((blog, index) => (
				<ItemBlog blog={blog} key={index} />
			))}
		</div>
	);
}
