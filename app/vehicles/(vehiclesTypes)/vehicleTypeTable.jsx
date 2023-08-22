import TableActions from "@/app/_shared/_sharedComponents/tableActions";
import Table from "react-bootstrap/Table";
import NoData from "@/app/_shared/_sharedComponents/noData";

export default function VehicleTypeTable({ children, handleDeleteModalShow, handleEditModalShow }) {
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
                    types.map((vehicleType) =>
                        <tr key={vehicleType.id}>
                            <td>{vehicleType.description}</td>
                            <td><TableActions showDeleteModal={() => handleDeleteModalShow(vehicleType)} showEditModal={() => handleEditModalShow(vehicleType)} /></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
}