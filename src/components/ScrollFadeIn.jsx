import { useEffect, useRef } from "react";

export default function ScrollFadeIn({ children , className }) {
	const ref = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entries]) => {
				if (entries.isIntersecting && ref.current) {
					ref.current.classList.add("animate-fadein");
				} else {
					ref.current.classList.remove("animate-fadein");
				}
			},
			{
				threshold: 0.1,
			},
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className={`${className} opacity-0`}>
			{children}
		</div>
	);
}
