import React from "react";
import { ItemCourse } from "./Item";
export default function ListCourse() {
	const courses = [
		{
			id: 1,
			title:
				"React từ Cơ bản đến Nâng cao React từ Cơ bản đến Nâng cao React từ Cơ bản đến Nâng cao React từ Cơ bản đến Nâng cao React từ Cơ bản đến Nâng cao React từ Cơ bản đến Nâng cao",
			description:
				"Học React.js qua các dự án thực tế, bao gồm Hooks, Context API và Redux",
			price: "29.99",
			category: "Frontend",
			rating: "4.9",
			reviews: "356",
			duration: "12",
			instructor: "Nguyễn Văn A",
			instructorAvatar: "https://placehold.co/400x400",
			imageUrl: "https://placehold.co/600x400",
		},
		{
			id: 2,
			title: "Vue từ Cơ bản đến Nâng cao",
			description:
				"Học React.js qua các dự án thực tế, bao gồm Hooks, Context API và Redux",
			price: "29.99",
			category: "Frontend",
			rating: "4.9",
			reviews: "356",
			duration: "12",
			instructor: "Nguyễn Văn A",
			instructorAvatar: "https://placehold.co/400x400",
			imageUrl: "https://placehold.co/600x400",
		},
		{
			id: 3,
			title: "PHP từ Cơ bản đến Nâng cao",
			description:
				"Học React.js qua các dự án thực tế, bao gồm Hooks, Context API và Redux",
			price: "29.99",
			category: "Frontend",
			rating: "4.9",
			reviews: "356",
			duration: "12",
			instructor: "Nguyễn Văn A",
			instructorAvatar: "https://placehold.co/400x400",
			imageUrl: "https://placehold.co/600x400",
		},
		{
			id: 4,
			title: "Java từ Cơ bản đến Nâng cao",
			description:
				"Học React.js qua các dự án thực tế, bao gồm Hooks, Context API và Redux",
			price: "29.99",
			category: "Frontend",
			rating: "4.9",
			reviews: "356",
			duration: "12",
			instructor: "Nguyễn Văn A",
			instructorAvatar: "https://placehold.co/400x400",
			imageUrl: "https://placehold.co/600x400",
		},
		{
			id: 4,
			title: "Java từ Cơ bản đến Nâng cao",
			description:
				"Học React.js qua các dự án thực tế, bao gồm Hooks, Context API và Redux",
			price: "29.99",
			category: "Frontend",
			rating: "4.9",
			reviews: "356",
			duration: "12",
			instructor: "Nguyễn Văn A",
			instructorAvatar: "https://placehold.co/400x400",
			imageUrl: "https://placehold.co/600x400",
		},
		{
			id: 4,
			title: "Java từ Cơ bản đến Nâng cao",
			description:
				"Học React.js qua các dự án thực tế, bao gồm Hooks, Context API và Redux",
			price: "29.99",
			category: "Frontend",
			rating: "4.9",
			reviews: "356",
			duration: "12",
			instructor: "Nguyễn Văn A",
			instructorAvatar: "https://placehold.co/400x400",
			imageUrl: "https://placehold.co/600x400",
		},
		{
			id: 4,
			title: "Java từ Cơ bản đến Nâng cao",
			description:
				"Học React.js qua các dự án thực tế, bao gồm Hooks, Context API và Redux",
			price: "29.99",
			category: "Frontend",
			rating: "4.9",
			reviews: "356",
			duration: "12",
			instructor: "Nguyễn Văn A",
			instructorAvatar: "https://placehold.co/400x400",
			imageUrl: "https://placehold.co/600x400",
		},
	];
	return (
		<div className="flex flex-wrap gap-12 justify-start items-center">
			{courses.map((course, index) => (
				<ItemCourse course={course} key={index} />
			))}
		</div>
	);
}
