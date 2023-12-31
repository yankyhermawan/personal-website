import { useState, useEffect } from "react";
import ScrollToLink from "./scrollLink";
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
		const aboutPosition = document.getElementById("about")?.offsetTop;
		if (aboutPosition) {
			if (position < 0.95 * aboutPosition) {
				setHeaderFontColor("dark-font");
			} else if (position >= 0.95 * aboutPosition && dark) {
				setHeaderFontColor("dark-font");
			} else if (position > 0.95 * aboutPosition && !dark) {
				setHeaderFontColor("light-font");
			}
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
				<ScrollToLink targetId="">Yanky Hermawan</ScrollToLink>
			</div>
			<div className="w-max flex flex-row gap-4 items-center">
				<button
					id="theme-toggle"
					onClick={handleMode}
					type="button"
					className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
				>
					<svg
						id="theme-toggle-dark-icon"
						className={`w-5 h-5 ${dark ? "" : "hidden"}`}
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
					</svg>
					<svg
						id="theme-toggle-light-icon"
						className={`w-5 h-5 ${dark ? "hidden" : ""}`}
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							fillRule="evenodd"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
				<ScrollToLink targetId="about">About</ScrollToLink>
				<ScrollToLink targetId="projects">Project</ScrollToLink>
				<ScrollToLink targetId="contact">Contact</ScrollToLink>
			</div>
		</div>
	);
}
