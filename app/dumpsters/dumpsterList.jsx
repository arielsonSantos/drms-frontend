import { useGetAllDumpsters } from "./dumpsterServices";
import DumpsterTable from "./dumpsterTable";
import List from "../_sharedComponents/list";

export default function DumpsterList() {
    const { dumpsters, isLoading, error } = useGetAllDumpsters();

    return (
        <List isLoading={isLoading} error={error} data={dumpsters} Component={DumpsterTable} />
    );
}