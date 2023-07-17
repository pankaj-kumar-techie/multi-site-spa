import React, { useEffect, useState } from "react";
import { BlogService } from "../../service/BlogService";
import { useParams } from "react-router-dom";
import { Blog } from "../../modal/Section";

const BlogDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        BlogService.getBlogDetail(id).then((response) => {
            return setBlog(response.data);
        }).catch((error) => {
            console.log("ErrorPage: ", error);
        })
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900">{blog?.title}</h1>
                    <p className="text-gray-500  mt-2">{"April,17,2010"}</p>
                    <div className="my-8">
                        {/*<img className="w-full object-cover" src={} alt={blog?.title} />*/}
                    </div>
                    <div className="text-lg leading-relaxed">{blog?.description}</div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
