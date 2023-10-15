import { Button, Modal } from "react-bootstrap";

export default function DeleteModal({ handleClose, show, title, deleteFunction }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Excluir {`"${title}"`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Confirma <strong>exclusão</strong> do item?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={deleteFunction}>Confirmar</Button>
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );
}