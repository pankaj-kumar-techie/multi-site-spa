import React, {useEffect, useState} from "react";
import {Blog} from "../../../modal/Blog";
import {BlogService} from "../../../service/BlogService";
import BlogCard from "../../../components/cards/BlogCard";

export default function FirstBlog() {
    const [blogList, setBlogList] = useState<Blog[]>([]);

    useEffect(() => {
        BlogService.getBlog("eho")
            .then((response) => {
                console.log(response);
                setBlogList(response.data.content);
            })
            .catch((error) => {
                console.log("ErrorPage :", error);
            });
    }, []);
    return (<>
        {/* Blog List */}
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {blogList.map((blog) => (
                    <BlogCard id={blog.id} title={blog.title} description={blog.description}
                              descriptionContext={blog.descriptionContext}></BlogCard>
                ))}
            </div>
        </div>

    </>);
}