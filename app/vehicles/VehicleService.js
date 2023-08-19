import Services from "@/app/_shared/_services/Services";

class VehicleService extends Services {
    constructor() {
        super("vehicle", "Veículo");
    }
}

const vehicleService = new VehicleService();
export default vehicleService;