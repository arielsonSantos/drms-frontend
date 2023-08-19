import Services from "@/app/_shared/_services/Services";

class DumpsterTypeService extends Services {
    constructor() {
        super("dumpster-type", "Tipo de caçamba");
    }
}

const dumpsterTypeService = new DumpsterTypeService();
export default dumpsterTypeService;