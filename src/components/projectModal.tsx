import { Modal, Button, CloseButton } from "react-bootstrap";
import { data } from "./misc";
import "bootstrap/dist/css/bootstrap.min.css";
export default function ProjectModal({
	modalOpen,
	handleClose,
	title,
}: {
	modalOpen: boolean;
	handleClose: () => void;
	title: string;
}) {
	const filtered = (title: string) => {
		return data.filter((dt) => dt.name === title)[0];
	};
	return (
		<Modal show={modalOpen} onHide={handleClose} className="light-font">
			<Modal.Header>
				<Modal.Title className="w-full">
					<div className="flex flex-row justify-between">
						<span>{title}</span>
						<span className="text-sm flex items-center">
							{modalOpen ? filtered(title).start : ""} -{" "}
							{modalOpen ? filtered(title).end : ""}
						</span>
					</div>
				</Modal.Title>
				<CloseButton onClick={handleClose} />
			</Modal.Header>
			<Modal.Body className="flex flex-col gap-4">
				<div>Role : {modalOpen ? filtered(title).role : ""}</div>
				<div>{modalOpen ? filtered(title).description : ""}</div>
				<div>
					<span>Technology Used:</span>
					<ul className="list-disc list-inside">
						{modalOpen
							? filtered(title).tech.map((stack, idx) => {
									return (
										<li key={idx} className="my-1">
											{stack}
										</li>
									);
							  })
							: ""}
					</ul>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="secondary"
					onClick={handleClose}
					className="light-font"
				>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
