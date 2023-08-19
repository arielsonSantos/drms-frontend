"use client";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import VehicleList from "./vehicleList";
import { useState } from "react";
import { TAB_KEYS } from "./vehicleTabKeys";
import VehicleTypeList from "./(vehiclesTypes)/vehicleTypeList";

export default function Vehicles() {
    const [key, setKey] = useState(TAB_KEYS.VEHICLES_LIST);

    return (
        <section>
            <div className="d-flex justify-content-center">
                <h1 className="mb-3">Cadastro de veículos</h1>
            </div>
            <Tabs id="vehicleTabs" activeKey={key} className="mb-3" onSelect={k => setKey(k)}>
                <Tab eventKey={TAB_KEYS.VEHICLES_LIST} title="Veículos">
                    <VehicleList />
                </Tab>
                <Tab eventKey={TAB_KEYS.VEHICLES_TYPE_LIST} title="Tipos de veículos">
                    <VehicleTypeList />
                </Tab>
            </Tabs>
        </section>
    );
}