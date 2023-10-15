import Services from "@/app/_shared/_services/Services";

class DumpsterService extends Services {
    constructor() {
        super("dumpster", "Caçamba");
    }

    getEntityModalDescription(dumpsterType) {
        return dumpsterType.identifier;
    }

    getEntityPluralName() {
        return "Caçambas";
    }

    getSaveMessage() {
        return this.getEntityName() + " salva com sucesso!";
    }

    getDeletionMessage() {
        return this.getEntityName() + " excluída com sucesso!";
    }
}

const dumpsterService = new DumpsterService();
export default dumpsterService;