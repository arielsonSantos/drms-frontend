import Loading from "../dumpsters/loading";
import NoData from "../_sharedComponents/noData";
import Error from "../error";

export default function List({ isLoading, error, data, TableComponent }) {
    return (
        isLoading && <Loading />
        ||
        error && <Error error={error} />
        ||
        (!data || data.length === 0) && <NoData />
        ||
        <TableComponent>
            {data}
        </TableComponent>
    );
}