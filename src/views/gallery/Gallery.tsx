import React from "react";

interface GalleryProps {
    data: any;
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
    const images = data?.images || [];

    return (
        <section id="gallery" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">
                        {data.subTitle || "Gallery"}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">
                        {data.title || "Visualizing our Success"}
                    </h3>
                    <p className="text-lg text-slate-600">
                        {data.description || "A glimpse into the projects, events, and culture that define our standard of excellence."}
                    </p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {images.map((img: any, index: number) => (
                        <div
                            key={img.id || index}
                            className="relative rounded-3xl overflow-hidden glass border border-white shadow-premium group break-inside-avoid animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <img
                                src={img.imageSrc || `https://images.unsplash.com/photo-1510519133417-c057bfe0ed32?q=80&w=2070&auto=format&fit=crop&index=${index}`}
                                alt={img.imageAlt || "Gallery Image"}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-sm transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="text-xs font-bold text-slate-900 truncate">
                                    {img.imageAlt || "Creative Showcase"}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

