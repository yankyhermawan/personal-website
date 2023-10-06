import { titleCase, data } from "./misc";
import { useState } from "react";
import ProjectModal from "./projectModal";

export default function Project({ dark }: { dark: boolean }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [title, setTitle] = useState("");
	const handleClose = () => {
		setModalOpen(false);
		setTitle("");
	};
	const handleOpen = (name: string) => {
		setModalOpen(true);
		setTitle(name);
	};
	return (
		<>
			<div className="self-start pl-16 pt-16" id="projects">
				<p className="text-3xl font-semibold">Projects</p>
				<div className="flex flex-row flex-wrap mt-8 font-semibold gap-4">
					{data.map((dt, idx) => {
						return (
							<div
								className={`flex flex-col flex-wrap w-[500px] border-solid border-[1px] ${
									dark ? "border-bgLight" : "border-bgDark"
								} border-opacity-70 gap-8 p-8 cursor-pointer`}
								key={idx}
								onClick={() => handleOpen(dt.name)}
							>
								<div className="flex flex-row gap-4">
									<span className="min-w-fit">Project Name :</span>
									<p>{titleCase(dt.name)}</p>
								</div>
								<div className="flex flex-row gap-4">
									<span className="min-w-fit">Role : </span>
									<p>{dt.role}</p>
								</div>
								<div className="flex flex-row gap-4">
									<span className="min-w-fit">URL : </span>
									<ul className="list-disc ml-4">
										<li>
											<a
												href={dt.github}
												className="underline-offset-4 underline"
											>
												Github
											</a>
										</li>
										<li>
											<a href={dt.url} className="underline-offset-4 underline">
												Web/Paper
											</a>
										</li>
									</ul>
								</div>
							</div>
						);
					})}
					<ProjectModal
						title={title}
						modalOpen={modalOpen}
						handleClose={handleClose}
					></ProjectModal>
				</div>
			</div>
		</>
	);
}
