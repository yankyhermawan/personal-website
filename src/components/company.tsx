import ExperienceModal from "./experienceModal";
import { companies } from "./misc";
import { useState } from "react";
export default function Company() {
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
						className="cursor-pointer p-8"
						onClick={() => handleOpen(company.name)}
					>
						<div className="flex flex-row justify-between gap-16">
							<p>{company.position}</p>
							<p>{`${company.start}-${company.end}`}</p>
						</div>

						<div className="flex flex-col gap-2 mt-4">
							{company.name}
							<p>{company.industry}</p>
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
