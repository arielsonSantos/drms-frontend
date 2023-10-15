"use client";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import dumpsterTypeService from "./DumpsterTypeService";

export default function DumpsterTypeForm({ hideModal, method = "post", selectedObject }) {
    const [dumpsterTypeDescription, setDumpsterTypeDescription] = useState(selectedObject?.description || "");

    function onSubmit(e) {
        e.preventDefault();
        dumpsterTypeService.save({ "description": dumpsterTypeDescription }, method, selectedObject?.id)
            .then(() => {
                e.target.reset();
                hideModal();
                setDumpsterTypeDescription(null);
                dumpsterTypeService.refreshAll();
                toast.success(dumpsterTypeService.getSaveMessage());
            })
            .catch(error => {
                toast.error(error);
            });
    }

    return (
        <Container fluid>
            <Form className="grid" onSubmit={onSubmit}>
                <Row className="text-center">
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="description">Descrição</Form.Label>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control autoFocus value={dumpsterTypeDescription} type="text" id="description" onChange={(e) => setDumpsterTypeDescription(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="m-2">
                    <Col className="text-center">
                        <Button type="submit" variant="success" className="m-1">Salvar</Button>
                        <Button type="reset" variant="secondary" className="m-1">Limpar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}