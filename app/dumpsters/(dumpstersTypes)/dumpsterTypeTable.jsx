"use client";

import TableActions from "@/app/_sharedComponents/tableActions";
import TableOptions from "@/app/_sharedComponents/tableOptions";
import Table from "react-bootstrap/Table";
import { deleteDumpsterType, refreshAllDumpstersTypes } from "./dumpsterTypeServices";
import DumpsterTypeForm from "./dumpsterTypeForm";
import DeleteModal from "@/app/_sharedComponents/deleteModal";
import { useState } from "react";
import NoData from "@/app/_sharedComponents/noData";
import { toast } from "react-toastify";

export default function DumpsterTypeTable({ children }) {
    const [show, setShow] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    let types = children;

    function handleShow(type) {
        setSelectedType(type);
        setShow(true);
    }

    function handleClose() {
        setShow(false);
    }

    function deleteType() {
        deleteDumpsterType(selectedType.id)
            .then(() => {
                handleClose();
                refreshAllDumpstersTypes();
                setSelectedType(null);
                toast.success("Tipo de caçamba excluído com sucesso!");
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    return (
        <div>
            <TableOptions title="Tipos de caçambas" refresh={refreshAllDumpstersTypes} Form={DumpsterTypeForm} />
            <br />
            <Table responsive>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className="text-center">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (!types || types.length === 0) && <NoData />
                        ||
                        types.map((dumpsterType) =>
                            <tr key={dumpsterType.id}>
                                <td>{dumpsterType.description}</td>
                                <td><TableActions showDeleteModal={() => handleShow(dumpsterType)} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <DeleteModal title={selectedType?.description} handleClose={handleClose} show={show} deleteFunction={deleteType} />
        </div>
    );
}