import Services from "@/app/_shared/_services/Services";

class VehicleTypeService extends Services {
    constructor() {
        super("vehicle-type", "Tipo de veículo");
    }

    getEntityModalDescription(dumpsterType) {
        return dumpsterType.description;
    }

    getEntityPluralName() {
        return "Tipos de veículos";
    }

    getSaveMessage() {
        return this.getEntityName() + " salvo com sucesso!";
    }

    getDeletionMessage() {
        return this.getEntityName() + " excluído com sucesso!";
    }
}

const vehicleTypeService = new VehicleTypeService();
export default vehicleTypeService;