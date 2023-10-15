import Services from "@/app/_shared/_services/Services";

class DumpsterTypeService extends Services {
    constructor() {
        super("dumpster-type", "Tipo de caçamba");
    }

    getEntityModalDescription(dumpsterType) {
        return dumpsterType.description;
    }

    getEntityPluralName() {
        return "Tipos de caçambas";
    }

    getSaveMessage() {
        return this.getEntityName() + " salvo com sucesso!";
    }

    getDeletionMessage() {
        return this.getEntityName() + " excluído com sucesso!";
    }
}

const dumpsterTypeService = new DumpsterTypeService();
export default dumpsterTypeService;