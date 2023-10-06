import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import { useState } from "react";
import "./index.css";

function App() {
	const [dark, setDark] = useState(true);
	return (
		<div
			className={`App h-full flex flex-col justify-between ${
				dark ? "dark-bg dark-font" : "light-bg light-font"
			}`}
		>
			<Header dark={dark} setDark={setDark} />
			<Main dark={dark} />
			<Footer dark={dark} />
		</div>
	);
}

export default App;
