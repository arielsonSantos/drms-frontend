"use client";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { createDumpster, refreshAllDumpsters } from "./dumpsterServices";
import { toast } from "react-toastify";
import { TAB_KEYS } from "./dumpsterTabKeys";

export default function DumpsterForm({ setKey }) {
    const [dumpsterIdentifier, setDumpsterIdentifier] = useState(null);
    const [dumpsterType, setDumpsterType] = useState(null);

    function onSubmit(e) {
        e.preventDefault();
        createDumpster({ "identifier": dumpsterIdentifier, "type": { "id": dumpsterType } })
            .then(() => {
                e.target.reset();
                setDumpsterIdentifier(null);
                setDumpsterType(null);
                setKey(TAB_KEYS.DUMPSTERS_LIST);
                refreshAllDumpsters();
                toast.success("Caçamba cadastrada com sucesso!");
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    return (
        <Container fluid>
            <Form className="grid" onSubmit={onSubmit}>
                <Row className="d-flex justify-content-center">
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="identifier">Identificador</Form.Label>
                            <Form.Control type="text" id="identifier" onChange={(e) => setDumpsterIdentifier(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="type">Tipo</Form.Label>
                            <Form.Select id="type" onChange={(e) => setDumpsterType(e.target.value)} defaultValue>
                                <option hidden disabled value> -- Selecione um tipo -- </option>
                                <option value="1">Tipo de teste</option>
                                <option value="2">Tipo de teste 2</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="m-2">
                    <Col className="d-flex justify-content-center">
                        <Button type="submit" className="btn btn-success m-1">Salvar</Button>
                        <Button type="reset" className="btn btn-secondary m-1">Limpar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}