import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
});

const axiosFetcher = (...args) => axiosInstance(...args).then(response => response.data).catch(error => handleError(error));

export function handleError(error) {
    const newError = new Error("Ocorreu um erro! => ", { cause: error });

    if (error.response) {
        newError.status = error.response.data.status;
        newError.message += error.response.status + " - " + error.response.data.error;
    } else if (error.request) {
        newError.status = 500;
        newError.message += error.toJSON();
    } else {
        newError.status = 500;
        newError.message += error.message;
    }

    throw newError;
}

export { axiosInstance, axiosFetcher };