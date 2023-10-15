"use client";

import { faCirclePlus, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import AddModal from "./addModal";
import { toast } from "react-toastify";

export default function TableOptions({ service, refresh, Form }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>
            <Row>
                <Col>
                    <h1>{service.getEntityPluralName()}</h1>
                </Col>
                <Col>
                    <Stack direction="horizontal" gap={2} className="float-end">
                        <Button variant="success" onClick={handleShow}>
                            <FontAwesomeIcon icon={faCirclePlus} />
                            <span> Adicionar</span>
                        </Button>
                        <Button variant="outline-success" onClick={() => {
                            refresh();
                            toast.info("Lista atualizada!");
                        }}>
                            <FontAwesomeIcon icon={faRotate} />
                            <span> Atualizar</span>
                        </Button>
                    </Stack>
                </Col>
            </Row>

            <AddModal title={service.getEntityName()} handleClose={handleClose} Form={Form} show={show} />
        </div>
    );
}