import Table from "react-bootstrap/Table";

export default function DumpsterTypeTable({ children }) {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {
                    children?.map((dumpsterType) =>
                        <tr key={dumpsterType.id}>
                            <td>{dumpsterType.description}</td>
                            <td><i className="fa fa-pencil"></i></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
}