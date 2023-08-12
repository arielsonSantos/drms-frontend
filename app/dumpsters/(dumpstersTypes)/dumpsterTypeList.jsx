import Container from "react-bootstrap/Container";
import { useGetAllDumpstersTypes } from "./dumpsterTypeServices";
import DumpsterTypeTable from "./dumpsterTypeTable";
import List from "../../_sharedComponents/list";

export default function DumpsterTypeList() {
    const { dumpstersTypes, isLoading, error } = useGetAllDumpstersTypes();

    return (
        <Container fluid className="m-1">
            <List isLoading={isLoading} error={error} data={dumpstersTypes} TableComponent={DumpsterTypeTable} />
        </Container>
    );
}