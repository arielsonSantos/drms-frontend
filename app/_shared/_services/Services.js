import { mutate } from "swr";
import { axiosFetcher, axiosInstance, handleError } from "./fetchConfig";

export default class Services {

    #endpoint;
    #entityName;

    constructor(endpoint, entityName) {
        if (this.contructor === Services)
            throw new Error("Abstract classes can't be instantiate");

        this.#endpoint = endpoint;
        this.#entityName = entityName;
    }

    getEntityName() {
        return this.#entityName;
    }

    getEntityModalDescription(_entity) {
        throw new Error("Method 'getEntityModalDescription()' must be implemented");
    }

    getEntityPluralName() {
        throw new Error("Method 'getEntityPluralName()' must be implemented");
    }

    getSaveMessage() {
        throw new Error("Method 'getSaveMessage()' must be implemented");
    }

    getDeletionMessage() {
        throw new Error("Method 'getDeletionMessage()' must be implemented");
    }

    useGetAll(swr) {
        const { data, error, isLoading } = swr(this.#endpoint, url => axiosFetcher({
            method: "get",
            url
        }));

        return {
            data,
            isLoading,
            error
        };
    }

    async getAll() {
        return axiosInstance.get(this.#endpoint)
            .then(response => {
                if (response.status != 200)
                    throw new Error("Erro ao listar " + this.#entityName.toLowerCase() + "! => " + response.status + " - " + response.statusText);

                return response.data;
            })
            .catch(error => handleError(error));
    }

    refreshAll() {
        mutate(this.#endpoint);
    }

    async save(entity, method, id = "") {
        return axiosInstance({
            method: method,
            url: this.#endpoint + "/" + id,
            data: entity
        })
            .then(response => {
                if (response.status != 201)
                    throw new Error("Erro ao salvar " + this.#entityName.toLowerCase() + "! => " + response.status + " - " + response.statusText);
            })
            .catch(error => handleError(error));
    }

    async delete(id) {
        return axiosInstance.delete(this.#endpoint + "/" + id)
            .then(response => {
                if (response.status != 204)
                    throw new Error("Erro ao excluir " + this.#entityName.toLowerCase() + "! => " + response.status + " - " + response.statusText);
            })
            .catch(error => handleError(error));
    }
}