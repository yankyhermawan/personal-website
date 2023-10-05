import { useState, useEffect } from "react";
import galaxy from "../assets/galaxy.jpg";

function WordByWordText() {
	const text = "Hello, I'm Yanky Hermawan";
	const secondaryText =
		"Introvert when face to face meet up, Extrovert when online meet up";
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [displaySecondary, setDisplaySecondary] = useState("");
	const [secondaryIndex, setSecondaryIndex] = useState(0);

	useEffect(() => {
		const delay = Math.floor(Math.random() * (500 - 100 + 1)) + 100; // Adjust the character delay range as needed
		const secondaryDelay = Math.floor(Math.random() * (200 - 50) + 1) + 50;
		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prevText) => prevText + text[currentIndex]);
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}, delay);

			return () => clearTimeout(timeout);
		}
		if (secondaryIndex < secondaryText.length) {
			const secondaryTimeout = setTimeout(() => {
				setDisplaySecondary(
					(prevText) => prevText + secondaryText[secondaryIndex]
				);
				setSecondaryIndex((prevIndex) => prevIndex + 1);
			}, secondaryDelay);
			return () => clearTimeout(secondaryTimeout);
		}
	}, [currentIndex, secondaryIndex, text]);

	return (
		<div
			className="dark-font font-semibold text-2xl flex flex-col justify-center items-center"
			style={{
				backgroundImage: `url(${galaxy})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "100% 100%",
				width: "100%",
				height: "37.5vw",
				color: "#a9fff0",
			}}
		>
			<div>{displayedText}</div>
			<div>{displaySecondary}</div>
		</div>
	);
}

export default WordByWordText;
