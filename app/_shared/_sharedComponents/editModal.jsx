import { Modal } from "react-bootstrap";

export default function EditModal({ handleClose, show, title, Form, selectedObject, service }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar {title.toLowerCase()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form hideModal={handleClose} method="put" selectedObject={selectedObject} service={service} />
            </Modal.Body>
        </Modal>
    );
}