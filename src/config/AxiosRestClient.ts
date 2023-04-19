import {Constants} from "./Constant";
import axios, {AxiosInstance} from "axios";

export const axiosClient: AxiosInstance = axios.create({
    baseURL: Constants.SPA_SERVICE_BASE_URL,
    adapter: require('axios/lib/adapters/http')
});

export const blogServiceClient: AxiosInstance = axios.create({
    baseURL:Constants.BLOG_SERVICE_BASE_URL,
    adapter: require('axios/lib/adapters/http')
})

export default axiosClient;
