import React from "react";

interface VideoProps {
    data: any;
}

const Video: React.FC<VideoProps> = ({ data }) => {
    const videos = data?.videos || [];

    return (
        <section id="videos" className="section-padding bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-3">
                        {data.subTitle || "Watch"}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
                        {data.title || "Behind the Scenes"}
                    </h3>
                    <p className="text-lg text-slate-400">
                        {data.description || "Take a look at how we craft world-class digital experiences for our global partners."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {videos.map((video: any, index: number) => (
                        <div
                            key={video.id || index}
                            className="group relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5 shadow-hard animate-fade-in-up animate-float"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={`https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2070&auto=format&fit=crop&index=${index}`}
                                    alt={video.title}
                                    className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:opacity-40 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-20 h-20 rounded-full bg-primary-600 text-white flex items-center justify-center transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-xl shadow-primary-600/40">
                                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M4.5 3.5a1 1 0 011.5-.866l11 6.5a1 1 0 010 1.732l-11 6.5a1 1 0 01-1.5-.866v-13z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="p-8 border-t border-white/5">
                                <h4 className="text-xl font-bold text-white mb-1">
                                    {video.title}
                                </h4>
                                <div className="text-sm text-slate-500 flex items-center gap-2">
                                    <span>Production Highlight</span>
                                    <span className="w-1 h-1 bg-primary-500 rounded-full" />
                                    <span>02:45</span>
                                </div>
                            </div>

                            {/* Decorative glass highlight */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Video;

