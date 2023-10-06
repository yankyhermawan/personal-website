export default function ScrollToLink({
	targetId,
	children,
}: {
	targetId: string;
	children: React.ReactNode;
}) {
	const handleClick = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: "smooth",
			});
		} else {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	return (
		<a href={`#${targetId}`} onClick={handleClick}>
			{children}
		</a>
	);
}
