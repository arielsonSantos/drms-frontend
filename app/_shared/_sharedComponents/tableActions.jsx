import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Button, Stack } from "react-bootstrap";

export default function TableActions({ showDeleteModal, showEditModal }) {
    return (
        <Stack direction="horizontal" gap={1} className="justify-content-center">
            <Button onClick={showEditModal}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button variant="danger" onClick={showDeleteModal}>
                <FontAwesomeIcon icon={faTrashCan} />
            </Button>
        </Stack>
    );
}