import React, { useContext } from "react";
import { BlogDetail } from "../../modal/Section";
import { ThemeContext } from "../../themes/ThemeProvider";

export default function BlogDetailCard(blog: BlogDetail) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`bg-${theme.colors.primary} container mx-auto px-4 py-8` }>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h1 className="text-2xl font-bold mb-4">{blog.blogs.title}</h1>
                <p className="text-gray-700 leading-relaxed mb-6">
                    {blog.blogs.description}
                </p>
                {/* <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            className="w-12 h-12 rounded-full mr-4"
                            src={blog.blogs.imageSrc}
                            alt="Author"
                        />
                        <div>
                            <p className="text-gray-900 font-semibold">{blog.blogs.}</p>
                            <p className="text-gray-600">{article.author.bio}</p>
                        </div>
                    </div>
                </div> */}
                <div className="bg-gray-100 px-6 py-4">
                    <h2 className="text-lg font-semibold mb-4">Comments</h2>
                    {blog.comments.map((comment) => (
                        <div key={comment.id} className="mb-4">
                            <div className="flex items-center">
                                <img
                                    className="w-8 h-8 rounded-full mr-2"
                                    src={`https://i.pravatar.cc/40?u=${comment.author}`}
                                    alt="Comment Author"
                                />
                                <p className="text-gray-900 font-medium">{comment.author}</p>
                            </div>
                            <p className="text-gray-700">{comment.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}
