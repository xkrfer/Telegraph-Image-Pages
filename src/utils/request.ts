import axios from "axios";
const service = axios.create({
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
    },
});

service.interceptors.request.use(
    (config) => config,
    (error) => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    async (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const request = service;
