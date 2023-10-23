import React, { useContext } from "react";
import { Blog } from "../../modal/Section";
import { ThemeContext } from "../../themes/ThemeProvider";

export default function BlogDetailCard(blog: Blog) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`bg-${theme.colors.secondary} container mx-auto px-4 py-8 overflow-hidden`}>
            <div className="relative">
                {/* Image Banner */}
                <img
                    src={blog.imageSrc}
                    alt={blog.imageAlt}
                    className="w-full h-64 object-cover object-center"
                />
            </div>
            <div className="px-6 py-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {blog.description}
                </p>
            </div>
        </div>
    );
}
