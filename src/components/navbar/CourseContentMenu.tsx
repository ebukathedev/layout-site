import { courses, bulletPointColors } from "@/data";
import Link from "next/link";

export default function CourseContentMenu() {
	return (
		<div className="bg-white pt-4 pb-8 px-10 rounded-[30px] w-max border-[3px] border-stroke-gray shadow-[0_6px_0] shadow-stroke-gray space-y-5">
			<div className="font-semibold text-gray-500 font-rubik">
				Categories
			</div>
			<ul className="grid grid-cols-2 gap-y-4 gap-x-10">
				{courses.map((course, index) => (
					<li
						key={course}
						className="group flex items-center gap-[14px]"
					>
						<div
							className="rounded-full size-7 lg:size-9"
							style={{
								backgroundColor:
									bulletPointColors[
										index % bulletPointColors.length
									],
							}}
						></div>
						<Link
							className="font-bold transition-colors duration-200 ease-in-out group-hover:text-brand-700"
							href="/courses"
						>
							{course}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
