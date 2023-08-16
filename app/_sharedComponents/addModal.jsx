import { Modal } from "react-bootstrap";

export default function AddModal({ setShow, show, title, Form }) {
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar {title.toLowerCase()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onHideModal={handleClose} />
            </Modal.Body>
        </Modal>
    );
}