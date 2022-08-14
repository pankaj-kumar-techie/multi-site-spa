import AxiosRestClient from "../config/AxiosRestClient";

export class PageService {

    static getPage(path: string){
        return AxiosRestClient.get(`/pages/${path}`);
    }

}
