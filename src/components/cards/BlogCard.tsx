import React from "react";
import { Blog } from "../../modal/Section";


export default function BlogCard(blog:Blog){
    return(
        <article key={blog.id} className="flex max-w-xl  flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 rounded-2xl bg-slate-200 mb-2 pl-2 p-1 pr-2  text-xs">
          <time dateTime={"2020-03-16"} className="text-gray-500 pl-1">
            Mar 16, 2020
          </time>
        </div>
        <div className="group relative">
         
          <img
            src={blog.imageSrc}
            alt={blog.imageAlt}
            className="w-full h-[12rem] rounded-xl"
          />
           <h3 className="mt-2 pl-1 mb-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={`blog/` + blog.id}>
              <span className="absolute inset-0" />
              {blog.title}
            </a>
          </h3>
          <p className="mt-2 pl-1 line-clamp-3 text-sm leading-6 text-gray-600">
            {blog.description}
          </p>
        </div>
        <div className="relative mt-6 flex items-center gap-x-4">
          <img
            src={blog.imageSrc}
            alt={blog.imageAlt}
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              {/*<a href={post.author.href}>*/}
              {/*    <span className="absolute inset-0"/>*/}
              {/*    {post.author.name}*/}
              {/*</a>*/}
            </p>
            <p className="text-gray-600">{"Co-Founder / CTO"}</p>
          </div>
        </div>
      </article>
      
    )
}