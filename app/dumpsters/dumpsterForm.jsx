"use client";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { createDumpster, refreshAllDumpsters } from "./dumpsterServices";
import { toast } from "react-toastify";
import { getDumpstersTypes } from "./(dumpstersTypes)/dumpsterTypeServices";
import { InputGroup } from "react-bootstrap";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DumpsterForm({ onHideModal }) {
    const [dumpsterIdentifier, setDumpsterIdentifier] = useState(null);
    const [dumpsterType, setDumpsterType] = useState(null);
    const [dumpstersTypes, setDumpstersTypes] = useState(null);

    useEffect(() => {
        refreshTypes();
    }, [onHideModal]);

    function refreshTypes() {
        getDumpstersTypes()
            .then(data => {
                setDumpsterType(data[0]?.id);
                setDumpstersTypes(data);
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    function onSubmit(e) {
        e.preventDefault();
        createDumpster({ "identifier": dumpsterIdentifier, "type": { "id": dumpsterType } })
            .then(() => {
                e.target.reset();
                setDumpsterIdentifier(null);
                setDumpsterType(null);
                onHideModal();
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
                <Row className="text-center">
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="identifier">Identificador</Form.Label>
                            <Form.Control autoFocus type="text" id="identifier" onChange={(e) => setDumpsterIdentifier(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="type">Tipo</Form.Label>
                            <InputGroup>
                                <Button variant="outline-success" onClick={refreshTypes}>
                                    <FontAwesomeIcon icon={faRotate} />
                                </Button>
                                <Form.Select id="type" onChange={e => setDumpsterType(e.target.value)}>
                                    {
                                        dumpstersTypes?.map(dumpsterType => {
                                            return (
                                                <option key={dumpsterType.id} value={dumpsterType.id}>{dumpsterType.description}</option>
                                            );
                                        })
                                    }
                                </Form.Select>
                            </InputGroup>
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
        </Container >
    );
}