import useSWR from "swr";
import vehicleService from "./VehicleService";
import VehicleTable from "./vehicleTable";
import List from "../_shared/_sharedComponents/list";
import VehicleForm from "./vehicleForm";

export default function VehicleList() {
    const { data: vehicles, isLoading, error } = vehicleService.useGetAll(useSWR);

    return (
        <List isLoading={isLoading} error={error} data={vehicles} TableComponent={VehicleTable} FormComponent={VehicleForm} service={vehicleService} />
    );
}