import { useState, useEffect } from "react";
export default function Header({
	dark,
	setDark,
}: {
	dark: boolean;
	setDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const handleMode = () => {
		setDark(!dark);
	};
	const [position, setPosition] = useState(0);
	const [headerFontColor, setHeaderFontColor] = useState("dark-font");

	const handleScroll = () => {
		setPosition(window.scrollY);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		if (position < 690) {
			setHeaderFontColor("dark-font");
		} else if (position >= 690 && dark) {
			setHeaderFontColor("dark-font");
		} else if (position >= 690 && !dark) {
			setHeaderFontColor("light-font");
		}
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [dark, position]);
	return (
		<div
			className={`py-4 flex flex-row justify-between px-8 backdrop-blur-md fixed w-full ${headerFontColor}`}
		>
			<div className="w-max">
				<span>Yanky Hermawan</span>
			</div>
			<div className="w-max flex flex-row gap-4">
				<input type="checkbox" onClick={handleMode} />
				<span>About</span>
				<span>Project</span>
				<span>Contact</span>
			</div>
		</div>
	);
}
