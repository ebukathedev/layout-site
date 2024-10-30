"use client";
import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
	speed?: number;
	direction?: "left" | "right";
	children: React.ReactNode;
}

export default function Marquee({
	speed = 20,
	direction = "left",
	children,
}: MarqueeProps) {
	const marqueeRef = useRef<HTMLDivElement | null>(null);
	const [contentWidth, setContentWidth] = useState<number>(0);
	const [containerWidth, setContainerWidth] = useState<number>(0);

	useEffect(() => {
		if (marqueeRef.current) {
			setContentWidth(marqueeRef.current.scrollWidth);
			setContainerWidth(
				marqueeRef.current.parentElement?.offsetWidth || 0
			);
		}
	}, [children]);

	// Calculate repeat count with a minimum duplication factor to ensure smoother autofill
	const minimumRepeatFactor = 10; // Start with at least 10 duplications for smoother fill
	const repeatCount =
		containerWidth > 0
			? Math.max(
					minimumRepeatFactor,
					Math.ceil(containerWidth / contentWidth) + 1
			  )
			: 1;

	return (
		<div className="overflow-hidden whitespace-nowrap">
			<div
				className={`flex ${
					direction === "right"
						? "animate-scrollRight"
						: "animate-scrollLeft"
				}`}
				style={{
					animationDuration: `${speed}s`,
				}}
				ref={marqueeRef}
			>
				{Array.from({ length: repeatCount }).map((_, index) => (
					<div key={index} className="flex items-center">
						{children}
					</div>
				))}
			</div>
		</div>
	);
}
