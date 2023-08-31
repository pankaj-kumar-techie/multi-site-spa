import React, { useContext } from "react";
import { Blog } from "../../modal/Section";
import { ThemeContext } from "../../themes/ThemeProvider";

export default function BlogCard(blog: Blog) {
  const { theme } = useContext(ThemeContext);
  return (
    <article
      key={blog.id}
      className="flex max-w-xl  flex-col items-start justify-between"
    >
      <div className="group bg-white rounded-xl  relative">
        <img
          src={blog.imageSrc}
          alt={blog.imageAlt}
          className="w-full h-[13rem] rounded-xl"
        />
        <div className="pl-2 pr-2 pb-2">
          <h3 className={`mt-2 pl-1 mb-2 text-lg font-semibold leading-6 text-custom-dark group-hover:${theme.typography.firstFontColor}`}>
            <a href={`blog/` + blog.id}>
              <span className="absolute inset-0" />
              {blog.title}
            </a>
          </h3>

          <p className="mt-2  pl-1 line-clamp-3 text-sm leading-6 text-custom-dark">
            {blog.description}
          </p>
        </div>
      </div>
    </article>
  );
}
