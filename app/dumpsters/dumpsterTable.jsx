import Table from "react-bootstrap/Table";
import TableActions from "../_shared/_sharedComponents/tableActions";
import NoData from "../_shared/_sharedComponents/noData";

export default function DumpsterTable({ children, handleDeleteModalShow, handleEditModalShow }) {
    let dumpsters = children;

    return (
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
                            <td><TableActions showDeleteModal={() => handleDeleteModalShow(dumpster)} showEditModal={() => handleEditModalShow(dumpster)} /></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
}