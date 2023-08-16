import useSWR, { mutate } from "swr";
import { axiosInstance, axiosFetcher, handleError } from "../../fetchConfig";

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

export function refreshAllDumpstersTypes() {
    mutate(dumpsterTypeEndpoint);
}

export async function createDumpsterType(dumpster) {
    return axiosInstance.post(dumpsterTypeEndpoint, dumpster)
        .then(response => {
            if (response.status != 201)
                throw new Error("Erro ao criar tipo de caçamba! => " + response.status + " - " + response.statusText);
        })
        .catch(error => handleError(error));
}

export async function getDumpstersTypes() {
    return axiosInstance.get(dumpsterTypeEndpoint)
        .then(response => {
            if (response.status != 200)
                throw new Error("Erro ao listar tipos de caçambas! => " + response.status + " - " + response.statusText);

            return response.data;
        })
        .catch(error => handleError(error));
}

export async function deleteDumpsterType(id) {
    return axiosInstance.delete(dumpsterTypeEndpoint + "/" + id)
        .then(response => {
            if (response.status != 204)
                throw new Error("Erro ao apagar tipo de caçamba! => " + response.status + " - " + response.statusText);
        })
        .catch(error => handleError(error));
}