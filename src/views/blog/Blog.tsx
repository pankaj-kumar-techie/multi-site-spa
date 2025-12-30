import BlogCard from "../../components/cards/BlogCard";

interface BlogProps {
    data: any;
}

const Blog: React.FC<BlogProps> = ({ data }) => {
    const blogs = data?.blogs || [];

    return (
        <section id="blog" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">
                        {data.subTitle || "Articles"}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">
                        {data.title || "Latest From Our Blog"}
                    </h3>
                    <p className="text-lg text-slate-600">
                        {data.description || "Stay updated with the latest trends, tips, and insights in modern web development."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs.map((blog: any, index: number) => (
                        <BlogCard
                            key={blog.id || index}
                            {...blog}
                            variant={data.cardVariant}
                            hoverEffect={data.cardHoverEffect}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
