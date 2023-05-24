import {Config} from "./Config";
import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

export const axiosClient: AxiosInstance = axios.create({
    baseURL: Config.SPA_SERVICE_BASE_URL,
    adapter: require('axios/lib/adapters/http')
});

export const blogServiceClient: AxiosInstance = axios.create({
    baseURL: Config.BLOG_SERVICE_BASE_URL,
    adapter: require('axios/lib/adapters/http')
});

//Todo: client-id make dynamic
axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
    // Ensure that the "headers" object is defined
    config.headers = config.headers || {};

    // Set the "client-id" header with your desired value
    // config.headers['client-id'] = '7a1fcf37-c19b-4af0-8b81-992098591a1c';
    config.headers['client-id'] = `${localStorage.getItem('client-id')}`;
    return config;
});

// Add a response interceptor to axiosClient
axiosClient.interceptors.response.use(
    response => response,
    error => {
        // Handle network errors
        if (!error.response) {
            throw new Error('Network error');
        }
        // Handle unauthorized errors
        if (error.response.status === 401) {
            throw new Error('Unauthorized error');
        }
        // Throw any other errors
        throw error;
    }
);

// Add a request interceptor to axiosClient
// axiosClient.interceptors.request.use(config => {
//     // Set headers, etc.
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config;
// });

// Add a response interceptor to blogServiceClient
blogServiceClient.interceptors.response.use(
    response => response,
    error => {
        // Handle network errors
        if (!error.response) {
            throw new Error('Network error');
        }
        // Handle unauthorized errors
        if (error.response.status === 401) {
            throw new Error('Unauthorized error');
        }
        // Throw any other errors
        throw error;
    }
);

// Add a request interceptor to blogServiceClient
// blogServiceClient.interceptors.request.use(config => {
//     // Set headers, etc.
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config;
// });

export default axiosClient;
