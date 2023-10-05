import { titleCase, data } from "./misc";

export default function Project({ dark }: { dark: boolean }) {
	return (
		<div className="self-start pl-16 pt-16">
			<p className="text-3xl font-semibold">Projects</p>
			<div className="flex flex-row flex-wrap mt-8 font-semibold gap-4">
				{data.map((dt, idx) => {
					return (
						<div
							className={`flex flex-col flex-wrap w-[500px] border-solid border-[1px] ${
								dark ? "border-bgLight" : "border-bgDark"
							} border-opacity-70 gap-8 p-8`}
							key={idx}
						>
							<div className="flex flex-row gap-4">
								<span className="min-w-fit">Project Name:</span>
								<p>{titleCase(dt.name)}</p>
							</div>
							<div className="flex flex-row gap-4">
								<span className="min-w-fit">Role: </span>
								<p>{dt.role}</p>
							</div>
							<div className="flex flex-row gap-4">
								<span className="min-w-fit">URL: </span>
								<ul className="list-disc ml-4">
									<li>
										<a href={dt.github}>Github</a>
									</li>
									<li>
										<a href={dt.url}>Web/Paper</a>
									</li>
								</ul>
							</div>
							<div className="flex flex-row gap-4">
								<span className="min-w-fit">Tech: </span>
								<ul className="list-disc ml-4">
									{dt.tech.map((techs, idx) => {
										return <li key={idx}>{techs}</li>;
									})}
								</ul>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
