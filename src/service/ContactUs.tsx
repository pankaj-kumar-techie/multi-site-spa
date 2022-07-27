import AxiosRestClient from "../config/AxiosRestClient";
import {CreateContactUsPayload} from "../modal/ContactUs";

export class ContactUs {

    static createContactUsRequest(payload: CreateContactUsPayload) {
        return AxiosRestClient.post(`admin/blogs/`, payload);
    }
}
