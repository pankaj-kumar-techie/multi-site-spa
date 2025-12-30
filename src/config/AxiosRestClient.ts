import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { Config } from './Config';

// Axios client for the main SPA service
export const axiosClient: AxiosInstance = axios.create({
    baseURL: Config.SPA_SERVICE_BASE_URL
});

// Axios client for the blog service
export const blogServiceClient: AxiosInstance = axios.create({
    baseURL: Config.BLOG_SERVICE_BASE_URL
});

// Axios client for the chatbot service
export const chatbotServiceClient: AxiosInstance = axios.create({
    baseURL: Config.CHATBOT_SERVICE_BASE_URL
});

// Interceptor for setting headers in SPA requests
axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers = config.headers || {};
    config.headers['client-id'] = `${localStorage.getItem('client-id')}`;
    return config;
});

// Interceptor for setting headers in blog service requests
blogServiceClient.interceptors.request.use(config => {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

// Interceptor for setting headers in chatbot service requests
chatbotServiceClient.interceptors.request.use(config => {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

// Interceptors for handling responses for all clients
axiosClient.interceptors.response.use(
    response => response,
    error => {
        if (!error.response) {
            throw new Error('Network error');
        }
        if (error.response.status === 401) {
            throw new Error('Unauthorized error');
        }
        throw error;
    }
);

blogServiceClient.interceptors.response.use(
    response => response,
    error => {
        if (!error.response) {
            throw new Error('Network error');
        }
        if (error.response.status === 401) {
            throw new Error('Unauthorized error');
        }
        throw error;
    }
);

chatbotServiceClient.interceptors.response.use(
    response => response,
    error => {
        if (!error.response) {
            throw new Error('Network error');
        }
        if (error.response.status === 401) {
            throw new Error('Unauthorized error');
        }
        throw error;
    }
);

// Default export for the main axios client
export default axiosClient;
