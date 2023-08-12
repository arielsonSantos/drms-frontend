import Table from "react-bootstrap/Table";

export default function DumpsterTable({ children }) {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Identificador</th>
                    <th>Tipo</th>
                    <th>Status</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {
                    children?.map((dumpster) =>
                        <tr key={dumpster.id}>
                            <td>{dumpster.identifier}</td>
                            <td>{dumpster.type?.description}</td>
                            <td>{dumpster.status}</td>
                            <td><i className="fa fa-pencil"></i></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
}