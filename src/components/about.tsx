export default function About({ dark }: { dark: boolean }) {
	const handleDownload = () => {
		const fileUrl = "/CV.pdf";
		const link = document.createElement("a");
		link.href = fileUrl;
		link.download = "CV-Yanky Hermawan.pdf";
		link.click();
	};
	return (
		<div className="self-start pl-16 pt-16" id="about">
			<p className="text-3xl font-semibold">About Me</p>
			<div className="flex flex-row gap-32 mt-16">
				<div className="flex flex-col justify-around">
					<p className="max-w-screen-xl text-justify">
						I am a Full Stack Developer who experienced as Team Leader of Metal
						Fabrication Workshop. I'm also a Fast Learner, Problem Solver, and I
						like a variety of experiences. I have led various projects, from
						discussing with the owner, project planning, execution, then
						monitoring project. I learned how to lead a team, problem solving,
						and think quickly and efficiently. I'm familiar with Python and
						NodeJS, the basics of Java. Also, efficient communication,
						leadership, problem solver. With skills and experience mentioned, I
						aspire to become a software developer known for my quick and
						efficient problem-solving skills. I'm especially enthusiastic about
						delving into the development of scalable software solutions for
						organizations that have a significant societal impact.
					</p>
					<button
						onClick={handleDownload}
						className={`border-solid border-[1px] p-3 w-fit ${
							dark ? "border-bgLight" : "border-bgDark"
						} hover:bg-cyan-100 hover:text-[#060614] rounded-xl`}
						id="cv"
					>
						Download my CV
					</button>
				</div>

				<img src="/myphoto.png" width={250} />
			</div>
		</div>
	);
}
