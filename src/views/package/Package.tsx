import React from "react";

interface PackageProps {
    data: any;
}

const Package: React.FC<PackageProps> = ({ data }) => {
    const packages = data?.packages || [];

    return (
        <section id="packages" className="section-padding bg-white relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    {data.subTitle && (
                        <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">
                            {data.subTitle}
                        </h2>
                    )}
                    {data.title && (
                        <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">
                            {data.title}
                        </h3>
                    )}
                    {data.description && (
                        <p className="text-lg text-slate-600">
                            {data.description}
                        </p>
                    )}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {packages.map((item: any, index: number) => (
                        <div
                            key={item.id || index}
                            className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-premium overflow-hidden transition-all duration-500 hover:shadow-hard hover:-translate-y-2 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="aspect-[16/10] relative overflow-hidden">
                                <img
                                    src={item.imageSrc || `https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&index=${index}`}
                                    alt={item.imageAlt || item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {item.tag && (
                                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-primary-600 shadow-sm">
                                            {item.tag}
                                        </span>
                                    </div>
                                )}
                                {item.price && (
                                    <div className="absolute bottom-6 right-6 px-4 py-2 rounded-2xl bg-slate-900/90 backdrop-blur-sm text-white font-bold shadow-lg">
                                        {item.price}
                                    </div>
                                )}
                            </div>

                            <div className="p-10">
                                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                                    {item.name}
                                </h4>
                                <p className="text-slate-500 mb-8 line-clamp-2 text-sm leading-relaxed">
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                    {item.duration && (
                                        <div className="flex gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration</span>
                                                <span className="text-sm font-bold text-slate-700">{item.duration}</span>
                                            </div>
                                        </div>
                                    )}
                                    <button className="text-primary-600 font-black text-xs uppercase tracking-widest group/link">
                                        Explore <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Package;

