import React from "react";

interface TimelineProps {
    data: any;
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
    const timelines = data?.timelines || [];

    return (
        <section id="timeline" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
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

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2" />

                    <div className="space-y-16">
                        {timelines.map((item: any, index: number) => (
                            <div
                                key={item.id || index}
                                className={`relative flex flex-col md:flex-row items-center gap-12 group animate-fade-in-up ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Content Wrapper */}
                                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className={`p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-premium transition-all duration-500 hover:shadow-hard ${index % 2 !== 0 ? 'md:items-end md:text-right' : ''}`}>
                                        {item.subTitle && (
                                            <div className="text-primary-600 text-xs font-black uppercase tracking-widest mb-4">
                                                {item.subTitle}
                                            </div>
                                        )}
                                        <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Marker */}
                                <div className="absolute left-0 md:left-1/2 w-16 h-16 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center transform md:-translate-x-1/2 z-20 shadow-lg">
                                    <div className="w-4 h-4 rounded-full bg-primary-600 group-hover:scale-150 transition-transform duration-500" />
                                </div>

                                {item.tag && (
                                    <div className="md:w-1/2 hidden md:flex items-center">
                                        <div className="text-6xl font-black text-slate-100 pointer-events-none select-none uppercase">
                                            {item.tag}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

