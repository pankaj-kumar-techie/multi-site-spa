import React, { useEffect, useState } from "react";
import { Blog } from "../../../modal/Blog";
import { BlogService } from "../../../service/BlogService";
import BlogCard from "../../../components/cards/BlogCard";
import TitleCover from "../../../components/comman/title-cover/TitleCover";

export default function FirstBlog(props: { data: any }) {
  const [blogList, setBlogList] = useState<Blog[]>([]);

  useEffect(() => {
    // BlogService.getBlog("eho")
    //     .then((response) => {
    //         console.log(response);
    //         setBlogList(response.data.content);
    //     })
    //     .catch((error) => {
    //         console.log("ErrorPage :", error);
    //     });

    const dummyData = [
      {
        id: "1",
        title: "Blog Post 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        descriptionContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.",
        imageSrc: 'http://wahabali.com/work/pearl-demo/imgs/room-img1.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: "2",
        title: "Blog Post 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        descriptionContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.",
        imageSrc: 'http://wahabali.com/work/pearl-demo/imgs/room-img1.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: "3",
        title: "Blog Post 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        descriptionContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.",
        imageSrc: 'http://wahabali.com/work/pearl-demo/imgs/room-img1.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: "4",
        title: "Blog Post 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        descriptionContext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy tincidunt ut lacreet dolore magna aliguam erat volutpat.",
        imageSrc: 'http://wahabali.com/work/pearl-demo/imgs/room-img1.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
    ];

    setBlogList(dummyData);
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <TitleCover title="Latest Blog Posts" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogList.map((blog) => (
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
