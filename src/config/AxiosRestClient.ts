import {Constants} from "./Constant";
import axios, {AxiosInstance} from "axios";

export const axiosClient: AxiosInstance = axios.create({
    baseURL: Constants.API_BASE_URL,
    adapter: require('axios/lib/adapters/http')
});

//
// axiosClient.interceptors.request.use((config: any) => {
//     config.headers['client-id'] = '100'
//     if (SessionManager.isLoggedIn()) {
//         config.headers['Authorization'] = `bearer ${SessionManager.getToken()}`;
//     }
//     if (SessionManager.getUserLocation()) {
//         config.headers['location-id'] = SessionManager.getUserLocation()?.id;
//     }
//     return config;
// }, error => error);
//
//
// axiosClient.interceptors.response.use(function (res) {
//     return res;
// }, function (error) {
//     const request = error.config;
//     if (401 === error.response?.status && !request._retry) {
//         request._retry = true;
//         return AccountRepo.refreshAccessToken(SessionManager.getRefreshToken() || "").then((res: Token) => {
//             SessionManager.updateSession(res.access_token, res.refresh_token);
//             request.headers.Authorization = 'bearer ' + res.access_token;
//             console.log("request: ", request, "\n new Token: ", res);
//             return axiosClient(request);
//         }).catch((error: any) => {
//             //TODO: Put Authorization Check
//             if (400 === error.response?.status || 401 === error.response?.status) {
//                 logOut();
//             }
//             return Promise.reject(error);
//         })
//     } else
//         return Promise.reject(error);
// });
//
// const logOut = () => {
//     SessionManager.clearSession();
//     window.location.reload();
//     history.push("/");
// }
export default axiosClient;
