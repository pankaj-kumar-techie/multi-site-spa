import React, { useEffect, useState } from "react";
import { BlogService } from "../../../service/BlogService";
import BlogCard from "../../../components/cards/BlogCard";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { Blog } from "../../../modal/Section";

export default function FirstBlog(props: { data: any }) {
  const [blogList, setBlogList] = useState<any>({
    title: "",
    description: "",
    blogs: [],
  });

  useEffect(() => {
    // BlogService.getBlog("eho")
    //     .then((response) => {
    //         console.log(response);
    //         setBlogList(response.data.content);
    //     })
    //     .catch((error) => {
    //         console.log("ErrorPage :", error);
    //     });


    setBlogList(props.data);
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <TitleCover title="Latest Blog Posts" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogList.blogs.map((blog:Blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              descriptionContext={blog.descriptionContext}
              imageSrc={blog.imageSrc} // Update to imageSrc
              imageAlt={blog.imageAlt}
            ></BlogCard>
          ))}
        </div>
      </div>
    </>
  );
}
