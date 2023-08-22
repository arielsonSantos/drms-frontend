"use client";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import vehicleService from "./VehicleService";
import { toast } from "react-toastify";
import vehicleTypeService from "./(vehiclesTypes)/VehicleTypeService";
import { InputGroup } from "react-bootstrap";
import RefreshButton from "../_shared/_sharedComponents/refreshButton";

export default function VehicleForm({ hideModal, method = "post", selectedObject }) {
    const [licensePlate, setLicensePlate] = useState(selectedObject?.licensePlate || "");
    const [manufacturer, setManufacturer] = useState(selectedObject?.manufacturer || "");
    const [model, setModel] = useState(selectedObject?.model || "");
    const [modelYear, setModelYear] = useState(selectedObject?.modelYear || "");
    const [color, setColor] = useState(selectedObject?.color || "");
    const [vehicleType, setVehicleType] = useState(selectedObject?.type?.id);
    const [vehiclesTypes, setVehiclesTypes] = useState(null);

    useEffect(() => {
        fetchTypes();
    }, [hideModal]);

    function fetchTypes() {
        vehicleTypeService.getAll()
            .then(data => {
                setVehiclesTypes(data);
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    function onSubmit(e) {
        e.preventDefault();
        vehicleService.save({
            "licensePlate": licensePlate,
            "manufacturer": manufacturer,
            "model": model,
            "modelYear": modelYear,
            "color": color,
            "type": {
                "id": vehicleType
            }
        }, method, selectedObject?.id)
            .then(() => {
                e.target.reset();
                hideModal();
                setLicensePlate(null);
                setVehicleType(null);
                vehicleService.refreshAll();
                toast.success(vehicleService.getEntityName() + " cadastrado com sucesso!");
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
                            <Form.Label htmlFor="type">Tipo</Form.Label>
                            <InputGroup>
                                <RefreshButton fetchTypes={fetchTypes} />
                                <Form.Select id="type" onChange={e => setVehicleType(e.target.value)} value={vehicleType || "-1"}>
                                    <option value="-1" hidden disabled>Escolha um tipo</option>
                                    {
                                        vehiclesTypes?.map(vehicleType => {
                                            return (
                                                <option key={vehicleType.id} value={vehicleType.id}>{vehicleType.description}</option>
                                            );
                                        })
                                    }
                                </Form.Select>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="text-center mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="manufacturer">Fabricante</Form.Label>
                            <Form.Control autoFocus value={manufacturer} type="text" id="manufacturer" onChange={e => setManufacturer(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="model">Modelo</Form.Label>
                            <Form.Control value={model} type="text" id="model" onChange={e => setModel(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="text-center mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="licensePlate">Placa</Form.Label>
                            <Form.Control value={licensePlate} type="text" id="licensePlate" onChange={e => setLicensePlate(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="modelYear">Ano</Form.Label>
                            <Form.Control value={modelYear} type="number" id="modelYear" onChange={e => setModelYear(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="color">Cor</Form.Label>
                            <Form.Control value={color} type="text" id="color" onChange={e => setColor(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <Button type="submit" variant="success" className="m-1">Salvar</Button>
                        <Button type="reset" variant="secondary" className="m-1">Limpar</Button>
                    </Col>
                </Row>
            </Form>
        </Container >
    );
}