import { ItemCourse } from "./Item";
import { courses } from "../../data/courses";
export default function ListCourse() {
	return (
		<div className="flex flex-wrap gap-12 justify-start items-center">
			{courses.map((course, index) => (
				<ItemCourse course={course} key={index} />
			))}
		</div>
	);
}
