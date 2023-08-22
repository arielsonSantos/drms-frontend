import useSWR from "swr";
import dumpsterService from "./DumpsterService";
import DumpsterTable from "./dumpsterTable";
import List from "../_shared/_sharedComponents/list";
import DumpsterForm from "./dumpsterForm";

export default function DumpsterList() {
    const { data: dumpsters, isLoading, error } = dumpsterService.useGetAll(useSWR);

    return (
        <List isLoading={isLoading} error={error} data={dumpsters} TableComponent={DumpsterTable} FormComponent={DumpsterForm} service={dumpsterService} />
    );
}