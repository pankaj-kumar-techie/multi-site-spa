import {blogServiceClient} from "../config/AxiosRestClient";

export class BlogService{
    static getBlog(query:string){
        return blogServiceClient.get(`/blogs`)
    }
    static getBlogDetail(blogId: string | undefined){
        return blogServiceClient.get(`/blogs/${blogId}`)
    }

}