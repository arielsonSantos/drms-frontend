import useSWR from "swr";
import DumpsterTypeTable from "./dumpsterTypeTable";
import List from "../../_shared/_sharedComponents/list";
import dumpsterTypeService from "./DumpsterTypeService";
import DumpsterTypeForm from "./dumpsterTypeForm";

export default function DumpsterTypeList() {
    const { data: dumpstersTypes, isLoading, error } = dumpsterTypeService.useGetAll(useSWR);

    return (
        <List isLoading={isLoading} error={error} data={dumpstersTypes} TableComponent={DumpsterTypeTable} FormComponent={DumpsterTypeForm} service={dumpsterTypeService} />
    );
}