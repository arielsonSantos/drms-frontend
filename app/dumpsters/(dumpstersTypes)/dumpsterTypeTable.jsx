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
import EditModal from "@/app/_sharedComponents/editModal";

export default function DumpsterTypeTable({ children }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    let types = children;

    function handleDeleteModalShow(type) {
        setSelectedType(type);
        setShowDeleteModal(true);
    }

    function handleDeleteModalClose() {
        setShowDeleteModal(false);
    }

    function handleEditModalShow(type) {
        setSelectedType(type);
        setShowEditModal(true);
    }

    function handleEditModalClose() {
        setShowEditModal(false);
    }

    function deleteType() {
        deleteDumpsterType(selectedType.id)
            .then(() => {
                handleDeleteModalClose();
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
                                <td><TableActions showDeleteModal={() => handleDeleteModalShow(dumpsterType)} showEditModal={() => handleEditModalShow(dumpsterType)} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <DeleteModal title={selectedType?.description} handleClose={handleDeleteModalClose} show={showDeleteModal} deleteFunction={deleteType} />
            <EditModal title="Tipos de caçambas" handleClose={handleEditModalClose} Form={DumpsterTypeForm} show={showEditModal} selectedObject={selectedType} />
        </div>
    );
}