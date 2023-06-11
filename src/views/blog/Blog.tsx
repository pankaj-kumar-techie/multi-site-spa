import FirstAboutUs from "../about-us/v1/FirstAboutUs";
import React from "react";

interface BlogUsProps {
    data: any;
    version: "v1";
}

const blogComponents = {
    v1: FirstAboutUs,
};

const Blog: React.FC<BlogUsProps> = ({data, version}) => {
    const BlogComponent = blogComponents[version];

    return <BlogComponent data={data}/>;
};

export default Blog;