import WordByWordText from "./hello";
import Experience from "./experience";
import Project from "./projects";
import Skill from "./skills";
import About from "./about";
import Education from "./education";
export default function Main({ dark }: { dark: boolean }) {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<WordByWordText />
			<About dark={dark} />
			<Experience dark={dark} />
			<Project dark={dark} />
			<Education dark={dark} />
			<Skill dark={dark} />
		</div>
	);
}
