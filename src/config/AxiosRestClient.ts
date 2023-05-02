import {Constants} from "./Constant";
import axios, {AxiosInstance} from "axios";

export const axiosClient: AxiosInstance = axios.create({
    baseURL: Constants.SPA_SERVICE_BASE_URL,
    adapter: require('axios/lib/adapters/http')
});

export const blogServiceClient: AxiosInstance = axios.create({
    baseURL:Constants.BLOG_SERVICE_BASE_URL,
    adapter: require('axios/lib/adapters/http')
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
