import { Container } from "react-bootstrap";
import Error from "../../error";
import LoadingSpinner from "./loadingSpinner";
import DRMSTable from "./drmsTable";

export default function List({ isLoading, error, data, TableComponent, FormComponent, service }) {
    return (
        isLoading && <LoadingSpinner />
        ||
        error && <Error error={error} />
        ||
        <Container fluid>
            <DRMSTable service={service} FormComponent={FormComponent} TableComponent={TableComponent} data={data} />
        </Container>
    );
}