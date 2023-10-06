import { skills, titleCase } from "./misc";

interface Data {
	name: string;
	prof: string;
	cat: string;
}
export default function Skill({ dark }: { dark: boolean }) {
	const langData = skills.filter((skill) => skill.cat === "lang");
	const feData = skills.filter((skill) => skill.cat === "front end");
	const beData = skills.filter((skill) => skill.cat === "back end");
	const db = skills.filter((skill) => skill.cat === "db");

	const mainData = [
		{
			name: "Programming Language",
			data: langData,
		},
		{
			name: "Front End",
			data: feData,
		},
		{
			name: "Back End",
			data: beData,
		},
		{
			name: "Database",
			data: db,
		},
	];

	const classname = `border-solid border-[1px] ${
		dark ? "border-bgLight" : "border-bgDark"
	} border-opacity-70 gap-8 p-4`;

	const loopData = (data: Data[]) => {
		return data.map((dt, idx) => {
			return (
				<tr key={idx}>
					<td className={classname}>
						<img src={`/${dt.name}.svg`} width={48} className="m-auto" />
					</td>
					<td className={classname}>
						<span>{titleCase(dt.prof)}</span>
					</td>
				</tr>
			);
		});
	};
	return (
		<div className="self-start pl-16 pt-16">
			<p className="text-3xl font-semibold">Skills</p>
			<div className="flex flex-row flex-wrap gap-20 mt-8">
				{mainData.map((data, idx) => {
					return (
						<table key={idx}>
							<thead>
								<tr>
									<td className={classname}>{data.name}</td>
									<td className={classname}>Proficiency</td>
								</tr>
							</thead>
							<tbody>{loopData(data.data)}</tbody>
						</table>
					);
				})}
			</div>
		</div>
	);
}
