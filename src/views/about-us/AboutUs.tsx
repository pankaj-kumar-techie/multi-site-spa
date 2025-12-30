import React from "react";

interface AboutUsProps {
    data: any;
}

const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="relative animate-fade-in">
                    <div className="relative z-10 rounded-3xl overflow-hidden glass p-3">
                        <img
                            src={data.image?.imageSrc || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"}
                            alt={data.image?.imageAlt || "About Us"}
                            className="rounded-2xl w-full h-[500px] object-cover"
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-100 rounded-full blur-3xl" />
                </div>

                <div className="animate-fade-in-up">
                    {data.subTitle && (
                        <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">
                            {data.subTitle}
                        </h2>
                    )}
                    {data.title && (
                        <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-8 leading-tight">
                            {data.title}
                        </h3>
                    )}
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
                        {data.description && <p>{data.description}</p>}
                    </div>

                    {data.highlights && data.highlights.length > 0 && (
                        <div className="grid grid-cols-2 gap-10">
                            {data.highlights.map((item: any, idx: number) => (
                                <div key={idx}>
                                    <div className={`text-4xl font-black mb-2 ${item.className || 'text-primary-600'}`}>
                                        {item.value}
                                    </div>
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

