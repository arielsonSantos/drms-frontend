import Services from "@/app/_shared/_services/Services";

class VehicleService extends Services {
    constructor() {
        super("vehicle", "Veículo");
    }

    getEntityModalDescription(dumpsterType) {
        return dumpsterType.licensePlate;
    }

    getEntityPluralName() {
        return "Veículos";
    }

    getSaveMessage() {
        return this.getEntityName() + " salvo com sucesso!";
    }

    getDeletionMessage() {
        return this.getEntityName() + " excluído com sucesso!";
    }
}

const vehicleService = new VehicleService();
export default vehicleService;