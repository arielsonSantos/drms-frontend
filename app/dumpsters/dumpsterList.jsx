import Container from "react-bootstrap/Container";
import { useGetAllDumpsters } from "./dumpsterServices";
import DumpsterTable from "./dumpsterTable";
import List from "../_sharedComponents/list";

export default function DumpsterList() {
    const { dumpsters, isLoading, error } = useGetAllDumpsters();

    return (
        <Container fluid className="m-1">
            <List isLoading={isLoading} error={error} data={dumpsters} TableComponent={DumpsterTable} />
        </Container>
    );
}