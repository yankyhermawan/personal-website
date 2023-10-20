import { titleCase, education } from "./misc";

export default function Education({ dark }: { dark: boolean }) {
	return (
		<>
			<div className="self-start pl-16 pt-16" id="educations">
				<p className="text-3xl font-semibold">Educations</p>
				<div className="flex flex-row flex-wrap mt-8 font-semibold gap-4">
					{education.map((edu, idx) => {
						return (
							<div
								className={`flex flex-col flex-wrap w-[500px] border-solid border-[1px] ${
									dark ? "border-bgLight" : "border-bgDark"
								} border-opacity-70 gap-8 p-8`}
								key={idx}
							>
								<div className="flex flex-row gap-4 text-3xl">
									<div>
										<p>{titleCase(edu.schoolName)}</p>
										<p className="text-sm">
											{edu.start} - {edu.end}
										</p>
									</div>
								</div>
								{edu.title ? <div>Title : {edu.title}</div> : ""}
								<div className="flex flex-row gap-4">
									<span className="min-w-fit">Major : </span>
									<p>{edu.major}</p>
								</div>
								{edu.grade ? <div>Grade : {edu.grade}</div> : ""}
								{edu.thesis ? (
									<div>Thesis/Final Project : {edu.thesis}</div>
								) : (
									""
								)}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
