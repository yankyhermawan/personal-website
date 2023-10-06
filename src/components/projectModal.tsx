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
				<Modal.Title>{title}</Modal.Title>
				<CloseButton onClick={handleClose} />
			</Modal.Header>
			<Modal.Body className="flex flex-col gap-4">
				<div>{modalOpen ? filtered(title).description : ""}</div>
				<div>{modalOpen ? filtered(title).role : ""}</div>
				<div>
					<span>Technology Used:</span>
					<ul className="list-disc mt-2 ml-4">
						{modalOpen
							? filtered(title).tech.map((stack, idx) => {
									return <li key={idx}>{stack}</li>;
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
