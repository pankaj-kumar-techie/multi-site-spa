import React from "react";

interface LogoMarqueeProps {
    data: {
        title?: string;
        subTitle?: string;
        images: { imageSrc: string; imageAlt: string }[];
    };
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ data }) => {
    const logos = data?.images || [];

    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                {data.subTitle && (
                    <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-2">
                        {data.subTitle}
                    </h2>
                )}
                {data.title && (
                    <h3 className="text-3xl font-display font-bold text-slate-900">
                        {data.title}
                    </h3>
                )}
            </div>
            
            <div className="relative flex overflow-x-hidden" style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}>
                <div className="py-8 animate-marquee whitespace-nowrap flex items-center">
                    {/* First set of logos */}
                    {logos.map((logo, index) => (
                        <div key={`logo-1-${index}`} className="mx-4 md:mx-8 flex-shrink-0">
                            <div className="p-6 md:p-10 border-[3px] border-dotted border-yellow-500 bg-white rounded-[2rem] shadow-sm hover:border-solid hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-w-[180px] md:min-w-[280px] h-[100px] md:h-[160px] group">
                                <img
                                    src={logo.imageSrc}
                                    alt={logo.imageAlt}
                                    className="h-full w-auto max-w-[150px] md:max-w-[220px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {logos.map((logo, index) => (
                        <div key={`logo-2-${index}`} className="mx-4 md:mx-8 flex-shrink-0">
                            <div className="p-6 md:p-10 border-[3px] border-dotted border-yellow-500 bg-white rounded-[2rem] shadow-sm hover:border-solid hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-w-[180px] md:min-w-[280px] h-[100px] md:h-[160px] group">
                                <img
                                    src={logo.imageSrc}
                                    alt={logo.imageAlt}
                                    className="h-full w-auto max-w-[150px] md:max-w-[220px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 25s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
};

export default LogoMarquee;
