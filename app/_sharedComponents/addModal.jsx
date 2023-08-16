import { Modal } from "react-bootstrap";

export default function AddModal({ handleClose, show, title, Form }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar {title.toLowerCase()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form hideModal={handleClose} />
            </Modal.Body>
        </Modal>
    );
}