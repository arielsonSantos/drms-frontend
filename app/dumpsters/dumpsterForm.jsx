"use client";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import dumpsterService from "./DumpsterService";
import { toast } from "react-toastify";
import { InputGroup } from "react-bootstrap";
import RefreshButton from "../_shared/_sharedComponents/refreshButton";
import dumpsterTypeService from "./(dumpstersTypes)/DumpsterTypeService";

export default function DumpsterForm({ hideModal, method = "post", selectedObject }) {
    const [dumpsterIdentifier, setDumpsterIdentifier] = useState(selectedObject?.identifier || "");
    const [dumpsterType, setDumpsterType] = useState(selectedObject?.type?.id);
    const [dumpstersTypes, setDumpstersTypes] = useState(null);

    useEffect(() => {
        fetchTypes();
    }, [hideModal]);

    function fetchTypes() {
        dumpsterTypeService.getAll()
            .then(data => {
                setDumpstersTypes(data);
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    function onSubmit(e) {
        e.preventDefault();
        dumpsterService.save({ "identifier": dumpsterIdentifier, "type": { "id": dumpsterType } }, method, selectedObject?.id)
            .then(() => {
                e.target.reset();
                hideModal();
                setDumpsterIdentifier(null);
                setDumpsterType(null);
                dumpsterService.refreshAll();
                toast.success(dumpsterService.getSaveMessage());
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
                            <Form.Control autoFocus value={dumpsterIdentifier} type="text" id="identifier" onChange={(e) => setDumpsterIdentifier(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="type">Tipo</Form.Label>
                            <InputGroup>
                                <RefreshButton fetchTypes={fetchTypes} />
                                <Form.Select id="type" onChange={e => setDumpsterType(e.target.value)} value={dumpsterType} defaultValue>
                                    <option value hidden disabled>Escolha um tipo</option>
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