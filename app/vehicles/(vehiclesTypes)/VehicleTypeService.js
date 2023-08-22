import Services from "@/app/_shared/_services/Services";

class VehicleTypeService extends Services {
    constructor() {
        super("vehicle-type", "Tipo de veículo");
    }
}

const vehicleTypeService = new VehicleTypeService();
export default vehicleTypeService;