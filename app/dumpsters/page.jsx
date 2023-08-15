"use client";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DumpsterList from "./dumpsterList";
import DumpsterForm from "./dumpsterForm";
import { useState } from "react";
import { TAB_KEYS } from "./dumpsterTabKeys";
import DumpsterTypeList from "./(dumpstersTypes)/dumpsterTypeList";
import DumpsterTypeForm from "./(dumpstersTypes)/dumpsterTypeForm";

export default function Dumpsters() {
    const [key, setKey] = useState(TAB_KEYS.DUMPSTERS_LIST);

    return (
        <section>
            <div className="d-flex justify-content-center">
                <h1 className="mb-3">Caçambas</h1>
            </div>
            <Tabs
                id="dumpsterTabs"
                activeKey={key}
                className="mb-3"
                onSelect={k => setKey(k)}
            >
                <Tab eventKey={TAB_KEYS.DUMPSTERS_LIST} title="Caçambas">
                    <DumpsterList />
                </Tab>
                <Tab eventKey={TAB_KEYS.DUMPSTERS_FORM} title="Cadastrar caçamba">
                    <DumpsterForm setKey={setKey} />
                </Tab>
                <Tab eventKey={TAB_KEYS.DUMPSTERS_TYPE_LIST} title="Tipos de caçambas">
                    <DumpsterTypeList />
                </Tab>
                <Tab eventKey={TAB_KEYS.DUMPSTERS_TYPE_FORM} title="Cadastrar tipo de caçamba">
                    <DumpsterTypeForm setKey={setKey} />
                </Tab>
            </Tabs>
        </section>
    );
}