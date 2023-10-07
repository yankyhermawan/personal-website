import "bootstrap/dist/css/bootstrap.min.css";
import { companies } from "./misc";
import { Modal, CloseButton, Button } from "react-bootstrap";

export default function ExperienceModal({
	companyName,
	modalOpen,
	handleClose,
}: {
	companyName: string;
	modalOpen: boolean;
	handleClose: () => void;
}) {
	const filtered = (name: string) =>
		companies.filter((company) => company.name === name)[0];
	return (
		<Modal show={modalOpen} onHide={handleClose} className="light-font">
			<Modal.Header>
				<Modal.Title className="w-full">
					<div className="flex flex-row justify-between">
						<span>{companyName}</span>
						<span className="text-sm flex items-center">
							{modalOpen ? filtered(companyName).start : ""} -{" "}
							{modalOpen ? filtered(companyName).end : ""}
						</span>
					</div>
				</Modal.Title>
				<CloseButton onClick={handleClose} />
			</Modal.Header>
			<Modal.Body className="flex flex-col gap-4">
				<div>Role : {modalOpen ? filtered(companyName).position : ""}</div>
				<ul className="list-disc list-inside">
					{modalOpen
						? filtered(companyName).jobDesc.map((job, idx) => {
								return (
									<li key={idx} className="my-1">
										{job}
									</li>
								);
						  })
						: ""}
				</ul>
			</Modal.Body>
		</Modal>
	);
}
