import React, { useContext, useEffect, useState } from "react";
import { Blog } from "../../modal/Section";
import { ThemeContext } from "../../themes/ThemeProvider";
import DetailsModal from "./DetailsModalCard";
import DetailsModalCard from "./DetailsModalCard";

export default function BlogCard(blog: Blog) {
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setSelectedBlog(blog);

  },);
  console.log("isOpenblog", isModalOpen)
  return (
    <article
      key={blog.id}
      className="flex max-w-xl  flex-col items-start justify-between"
    >
      <div className="group bg-white rounded-xl  relative" onClick={openModal}>
        <img
          src={blog.imageSrc}
          alt={blog.imageAlt}
          className="w-full h-[13rem] rounded-xl"
        />
        <div className="pl-2 pr-2 pb-2">
          <h3 className={`mt-2 pl-1 mb-2 text-lg font-semibold leading-6 text-custom-dark group-hover:text-${theme.colors.primary}`}>
            {/* <a href={`blogs/` + blog.id}> */}
            <span className="absolute inset-0" />
            {blog.title}
            {/* </a> */}
          </h3>

          <p className="mt-2  pl-1 line-clamp-3 text-sm leading-6 text-custom-dark">
            {blog.description}
          </p>
        </div>
      </div>
      <DetailsModalCard isOpen={isModalOpen} onClose={closeModal} blogs={selectedBlog} children={undefined}></DetailsModalCard>
    </article>
  );
}
