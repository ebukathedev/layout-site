import React from "react";
import Button from "../UI/Button";

export default function AboutContentMenu() {
	return (
		<div className="bg-white pt-4 pb-8 px-10 rounded-[30px] w-max border-[3px] border-stroke-gray shadow-[0_6px_0] shadow-stroke-gray space-y-5 flex flex-col items-center lg:pt-5 lg:pb-6">
			<p className="text-center">
				Empowering Africa with <br /> digital skills in a fun way.
			</p>
			<Button className="px-8">Learn more</Button>
		</div>
	);
}
