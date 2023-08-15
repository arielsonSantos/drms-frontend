import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
});

const axiosFetcher = (...args) => axiosInstance(...args).then(response => response.data);

export { axiosInstance, axiosFetcher };