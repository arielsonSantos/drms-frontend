import Services from "@/app/_shared/_services/Services";

class DumpsterService extends Services {
    constructor() {
        super("dumpster", "Caçamba");
    }
}

const dumpsterService = new DumpsterService();
export default dumpsterService;