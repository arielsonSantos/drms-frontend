import useSWR, { mutate } from "swr";
import { axiosInstance, axiosFetcher } from "../fetchConfig";

const dumpsterEndpoint = "dumpster";

export function useGetAllDumpsters() {
    const { data, error, isLoading } = useSWR(dumpsterEndpoint, url => axiosFetcher({
        method: "get",
        url
    }));

    return {
        dumpsters: data,
        isLoading,
        error
    };
}

export async function createDumpster(dumpster) {
    return axiosInstance.post(dumpsterEndpoint, dumpster)
        .then(response => {
            if (response.status != 201)
                throw new Error("Erro ao criar nova caçamba! => " + response.status + " - " + response.statusText);
        });
}

export function refreshAllDumpsters() {
    mutate(dumpsterEndpoint);
}