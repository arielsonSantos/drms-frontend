import TableActions from "@/app/_shared/_sharedComponents/tableActions";
import Table from "react-bootstrap/Table";
import NoData from "@/app/_shared/_sharedComponents/noData";

export default function DumpsterTypeTable({ children, handleDeleteModalShow, handleEditModalShow }) {
    let types = children;

    return (
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
    );
}