import { useGetAllDumpstersTypes } from "./dumpsterTypeServices";
import DumpsterTypeTable from "./dumpsterTypeTable";
import List from "../../_sharedComponents/list";

export default function DumpsterTypeList() {
    const { dumpstersTypes, isLoading, error } = useGetAllDumpstersTypes();

    return (
        <List isLoading={isLoading} error={error} data={dumpstersTypes} Component={DumpsterTypeTable} />
    );
}