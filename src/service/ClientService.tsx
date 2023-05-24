import AxiosRestClient from "../config/AxiosRestClient";


export class ClientService {
    static getClientDetail(domain: string) {
        return AxiosRestClient.get(`/clients/domain/${domain}`);
    }
}