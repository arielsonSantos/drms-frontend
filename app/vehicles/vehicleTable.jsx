import Table from "react-bootstrap/Table";
import TableActions from "../_shared/_sharedComponents/tableActions";
import NoData from "../_shared/_sharedComponents/noData";

export default function VehicleTable({ children, handleDeleteModalShow, handleEditModalShow }) {
    let vehicles = children;

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Placa</th>
                    <th>Fabricante</th>
                    <th>Modelo</th>
                    <th>Ano</th>
                    <th>Cor</th>
                    <th>Tipo</th>
                    <th>Status</th>
                    <th className="text-center">Ação</th>
                </tr>
            </thead>
            <tbody>
                {
                    (!vehicles || vehicles.length === 0) && <NoData />
                    ||
                    vehicles.map((vehicle) =>
                        <tr key={vehicle.id}>
                            <td>{vehicle.licensePlate}</td>
                            <td>{vehicle.manufacturer}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.modelYear}</td>
                            <td>{vehicle.color}</td>
                            <td>{vehicle.type?.description}</td>
                            <td>{vehicle.status}</td>
                            <td><TableActions showDeleteModal={() => handleDeleteModalShow(vehicle)} showEditModal={() => handleEditModalShow(vehicle)} /></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
}