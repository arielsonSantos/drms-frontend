"use client";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { createDumpsterType, refreshAllDumpstersTypes } from "./dumpsterTypeServices";
import { toast } from "react-toastify";

export default function DumpsterTypeForm({ hideModal, method = "post", selectedObject }) {
    const [dumpsterTypesDescription, setDumpsterTypesDescription] = useState(selectedObject?.description);

    function onSubmit(e) {
        e.preventDefault();
        createDumpsterType({ "description": dumpsterTypesDescription }, method, selectedObject?.id)
            .then(() => {
                e.target.reset();
                hideModal();
                setDumpsterTypesDescription(null);
                refreshAllDumpstersTypes();
                toast.success("Tipo de caçamba cadastrado com sucesso!");
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
                            <Form.Control autoFocus value={dumpsterTypesDescription || ""} type="text" id="description" onChange={(e) => setDumpsterTypesDescription(e.target.value)}></Form.Control>
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