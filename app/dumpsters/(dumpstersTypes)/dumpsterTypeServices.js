import useSWR, { mutate } from "swr";
import { axiosInstance, axiosFetcher } from "../../fetchConfig";

const dumpsterTypeEndpoint = "dumpster-type";

export function useGetAllDumpstersTypes() {
    const { data, error, isLoading } = useSWR(dumpsterTypeEndpoint, url => axiosFetcher({
        method: "get",
        url
    }));

    return {
        dumpstersTypes: data,
        isLoading,
        error
    };
}

export async function createDumpsterType(dumpster) {
    return axiosInstance.post(dumpsterTypeEndpoint, dumpster)
        .then(response => {
            if (response.status != 201)
                throw new Error("Erro ao criar tipo de caçamba! => " + response.status + " - " + response.statusText);
        });
}

export function refreshAllDumpstersTypes() {
    mutate(dumpsterTypeEndpoint);
}