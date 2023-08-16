"use client";

import Table from "react-bootstrap/Table";
import TableActions from "../_sharedComponents/tableActions";
import TableOptions from "../_sharedComponents/tableOptions";
import { deleteDumpster, refreshAllDumpsters } from "./dumpsterServices";
import DumpsterForm from "./dumpsterForm";
import NoData from "../_sharedComponents/noData";
import { toast } from "react-toastify";
import { useState } from "react";
import DeleteModal from "../_sharedComponents/deleteModal";

export default function DumpsterTable({ children }) {
    const [show, setShow] = useState(false);
    const [selectedDumpster, setSelectedDumpster] = useState(null);
    let dumpsters = children;

    function handleShow(type) {
        setSelectedDumpster(type);
        setShow(true);
    }

    function handleClose() {
        setShow(false);
    }

    function deleteDumpsterById() {
        deleteDumpster(selectedDumpster.id)
            .then(() => {
                handleClose();
                refreshAllDumpsters();
                setSelectedDumpster(null);
                toast.success("Caçamba excluída com sucesso!");
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    return (
        <div>
            <TableOptions title="Caçambas" refresh={refreshAllDumpsters} Form={DumpsterForm} />
            <br />
            <Table responsive>
                <thead>
                    <tr>
                        <th>Identificador</th>
                        <th>Tipo</th>
                        <th>Status</th>
                        <th className="text-center">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (!dumpsters || dumpsters.length === 0) && <NoData />
                        ||
                        dumpsters.map((dumpster) =>
                            <tr key={dumpster.id}>
                                <td>{dumpster.identifier}</td>
                                <td>{dumpster.type?.description}</td>
                                <td>{dumpster.status}</td>
                                <td><TableActions showDeleteModal={() => handleShow(dumpster)} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <DeleteModal title={selectedDumpster?.identifier} handleClose={handleClose} show={show} deleteFunction={deleteDumpsterById} />
        </div>
    );
}