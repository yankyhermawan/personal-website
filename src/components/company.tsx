import ExperienceModal from "./experienceModal";
import { companies } from "./misc";
import { useState } from "react";
export default function Company({ dark }: { dark: boolean }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [companyName, setCompanyName] = useState("");
	const handleOpen = (name: string) => {
		setModalOpen(true);
		setCompanyName(name);
	};
	const handleClose = () => {
		setModalOpen(false);
		setCompanyName("");
	};
	return (
		<>
			{companies.map((company, idx) => {
				return (
					<div
						key={idx}
						className={`cursor-pointer p-8 flex flex-col gap-2 mt-4 border-solid border-[1px] ${
							dark ? "border-bgLight" : "border-bgDark"
						} border-opacity-70 gap-8`}
					>
						<div className="flex flex-row justify-between gap-16">
							<p>{company.position}</p>
							<p>{`${company.start}-${company.end}`}</p>
						</div>

						<div className={`flex flex-col gap-2 mt-4`}>
							{company.name}
							<p>{company.industry}</p>
						</div>
						<div
							className={`p-2 w-fit mt-4 hover:bg-slate-500 details rounded-lg border-solid border-[1px] ${
								dark ? "border-bgLight" : "border-bgDark"
							}`}
							onClick={() => handleOpen(company.name)}
						>
							Details
						</div>
					</div>
				);
			})}
			<ExperienceModal
				companyName={companyName}
				modalOpen={modalOpen}
				handleClose={handleClose}
			/>
		</>
	);
}
