import React from "react";
import FirstBlog from "./v1/FirstBlog";
import SecondBlog from "./v2/SecondBlog";

interface BlogUsProps {
    data: any;
    version: "v1";
}

const blogComponents = {
    v1: SecondBlog,
};

const Blog: React.FC<BlogUsProps> = ({data, version}) => {
    const BlogComponent = blogComponents[version];

    return <BlogComponent data={data}/>;
};

export default Blog;