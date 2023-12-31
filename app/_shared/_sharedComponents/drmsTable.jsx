"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import TableOptions from "./tableOptions";
import DeleteModal from "./deleteModal";
import EditModal from "./editModal";

export default function DRMSTable({ data, TableComponent, FormComponent, service }) {
    const [showDeleteModal, setDeleteModalShow] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedEntity, setSelectedEntity] = useState(null);

    function handleDeleteModalShow(entity) {
        setSelectedEntity(entity);
        setDeleteModalShow(true);
    }

    function handleDeleteModalClose() {
        setDeleteModalShow(false);
    }

    function handleEditModalShow(entity) {
        setSelectedEntity(entity);
        setShowEditModal(true);
    }

    function handleEditModalClose() {
        setShowEditModal(false);
    }

    function deleteById() {
        service.delete(selectedEntity.id)
            .then(() => {
                handleDeleteModalClose();
                service.refreshAll();
                setSelectedEntity(null);
                toast.success(service.getEntityName() + " excluído com sucesso!");
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    return (
        <div>
            <TableOptions title={service.getEntityName()} refresh={() => service.refreshAll()} Form={FormComponent} />
            <br />
            <TableComponent handleDeleteModalShow={handleDeleteModalShow} handleEditModalShow={handleEditModalShow}>
                {data}
            </TableComponent>
            <DeleteModal title={service.getEntityName() /*TODO: Implement service methods for custom descriptions, messages and names*/} handleClose={handleDeleteModalClose} show={showDeleteModal} deleteFunction={deleteById} />
            <EditModal title={service.getEntityName()} handleClose={handleEditModalClose} Form={FormComponent} show={showEditModal} selectedObject={selectedEntity} />
        </div >
    );
}