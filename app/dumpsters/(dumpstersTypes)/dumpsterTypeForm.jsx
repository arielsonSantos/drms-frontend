"use client";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { createDumpsterType, refreshAllDumpstersTypes } from "./dumpsterTypeServices";
import { toast } from "react-toastify";
import { TAB_KEYS } from "../dumpsterTabKeys";

export default function DumpsterTypeForm({ setKey }) {
    const [dumpsterTypesDescription, setDumpsterTypesDescription] = useState(null);

    function onSubmit(e) {
        e.preventDefault();
        createDumpsterType({ "description": dumpsterTypesDescription })
            .then(() => {
                e.target.reset();
                setDumpsterTypesDescription(null);
                setKey(TAB_KEYS.DUMPSTERS_TYPE_LIST);
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
                <Row className="d-flex justify-content-center" >
                    <Col xs={1}>
                        <Form.Group >
                            <Form.Label htmlFor="description">Descrição</Form.Label>
                        </Form.Group>
                    </Col>
                    <Col xs={2}>
                        <Form.Group>
                            <Form.Control type="text" id="description" onChange={(e) => setDumpsterTypesDescription(e.target.value)}></Form.Control>
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