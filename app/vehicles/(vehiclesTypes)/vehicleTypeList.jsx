import useSWR from "swr";
import vehicleTypeService from "./VehicleTypeService";
import VehicleTypeTable from "./vehicleTypeTable";
import List from "../../_shared/_sharedComponents/list";
import VehicleTypeForm from "./vehicleTypeForm";

export default function VehicleTypeList() {
    const { data: vehiclesTypes, isLoading, error } = vehicleTypeService.useGetAll(useSWR);

    return (
        <List isLoading={isLoading} error={error} data={vehiclesTypes} TableComponent={VehicleTypeTable} FormComponent={VehicleTypeForm} service={vehicleTypeService} />
    );
}