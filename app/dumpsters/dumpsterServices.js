import useSWR, { mutate } from "swr";
import { axiosInstance, axiosFetcher, handleError } from "../fetchConfig";

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

export function refreshAllDumpsters() {
    mutate(dumpsterEndpoint);
}

export async function createDumpster(dumpster) {
    return axiosInstance.post(dumpsterEndpoint, dumpster)
        .then(response => {
            if (response.status != 201)
                throw new Error("Erro ao criar caçamba! => " + response.status + " - " + response.statusText);
        })
        .catch(error => handleError(error));
}

export async function getDumpsters() {
    return axiosInstance.get(dumpsterEndpoint)
        .then(response => {
            if (response.status != 200)
                throw new Error("Erro ao listar caçambas! => " + response.status + " - " + response.statusText);

            return response.data;
        })
        .catch(error => handleError(error));
}

export async function deleteDumpster(id) {
    return axiosInstance.delete(dumpsterEndpoint + "/" + id)
        .then(response => {
            if (response.status != 204)
                throw new Error("Erro ao apagar tipo de caçamba! => " + response.status + " - " + response.statusText);
        })
        .catch(error => handleError(error));
}