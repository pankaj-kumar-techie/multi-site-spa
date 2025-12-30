import React from "react";
import { Blog } from "../../modal/Section";
import BaseCard from "../common/BaseCard";

const BlogCard: React.FC<Blog & {
  variant?: 'glass' | 'elevated' | 'flat' | 'outline',
  hoverEffect?: 'zoom' | 'lift' | 'glow' | 'none'
}> = (blog) => {
  const {
    variant = 'elevated',
    hoverEffect = 'zoom'
  } = blog;

  return (
    <BaseCard
      variant={variant}
      hoverEffect={hoverEffect}
      padding="none"
      className="group flex flex-col h-full bg-white animate-fade-in-up"
    >
      {/* Image Container */}
      <div className="aspect-video relative overflow-hidden">
        <img
          src={blog.imageSrc}
          alt={blog.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-primary-600 shadow-sm">
            Insights
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
          May 15, 2024 • 5 min read
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
          <a href={`/blogs/${blog.id}`} className="hover:underline decoration-primary-600 underline-offset-4">
            {blog.title}
          </a>
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
          {blog.description}
        </p>

        <div className="mt-auto pt-6 border-t border-slate-50">
          <button className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 group/btn">
            Read More
            <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </BaseCard>
  );
};

export default BlogCard;

