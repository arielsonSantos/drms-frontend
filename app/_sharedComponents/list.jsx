import { Container } from "react-bootstrap";
import Loading from "../dumpsters/loading";
import Error from "../error";

export default function List({ isLoading, error, data, Component }) {
    return (
        isLoading && <Loading />
        ||
        error && <Error error={error} />
        ||
        <Container fluid>
            <Component>
                {data}
            </Component>
        </Container>
    );
}