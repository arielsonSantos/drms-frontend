import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

export default function RefreshButton({ fetchTypes }) {
    return (
        <Button size="sm" variant="outline-success" onClick={fetchTypes}>
            <FontAwesomeIcon icon={faRotate} />
        </Button>
    );
}