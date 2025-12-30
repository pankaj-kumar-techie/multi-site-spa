import React from "react";

interface OurTeamProps {
    data: any;
}

const OurTeam: React.FC<OurTeamProps> = ({ data }) => {
    const team = data?.ourTeam || [];

    return (
        <section id="team" className="section-padding bg-white relative overflow-hidden">
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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member: any, index: number) => (
                        <div
                            key={member.id || index}
                            className="group p-6 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-premium animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative mb-6 aspect-square rounded-[2rem] overflow-hidden">
                                <img
                                    src={member.imageSrc || `https://ui-avatars.com/api/?name=${member.name}&background=random&size=400`}
                                    alt={member.imageAlt || member.name}
                                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="text-center">
                                <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">
                                    {member.name}
                                </h4>
                                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    {member.role || member.description}
                                </div>

                                <div className="flex justify-center gap-3">
                                    {['Tw', 'Li', 'Gh'].map((social) => (
                                        <div key={social} className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-400 hover:border-primary-500 hover:text-primary-600 cursor-pointer transition-all">
                                            {social}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;

