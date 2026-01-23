import React from "react";

interface HeroBannerProps {
    data: any;
}

/**
 * HeroBanner Component
 * A highly flexible, production-ready hero section supporting:
 * - Image or Video on either Left or Right
 * - Centered content (no visual asset)
 * - Background video support
 * - Dynamic statistics and badges
 */
const HeroBanner: React.FC<HeroBannerProps> = ({ data }) => {
    const banner = data?.bannerData?.[0] || {};

    // Determine the type of visual asset to display
    const visualType = banner.visualType || (banner.image ? 'image' : banner.videoSrc ? 'video' : 'none');
    const visualPosition = banner.visualPosition || 'right';
    const isCentered = visualType === 'none';
    const isCompact = banner.isCompact || false;
    const heightClass = isCompact ? "py-24 md:py-32" : "min-h-screen flex items-center pt-24 md:pt-32";

    if (!banner.title && !banner.description) return null;

    return (
        <section className={`relative ${heightClass} overflow-hidden bg-slate-950`}>
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/10 blur-[120px] rounded-full animate-float" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className={`container mx-auto px-6 md:px-12 relative z-10 ${isCentered ? 'text-center' : 'grid lg:grid-cols-2 gap-12 items-center'}`}>

                {/* Visual Area - Render first if position is 'left' */}
                {!isCentered && visualPosition === 'left' && (
                    <div className="relative animate-fade-in order-2 lg:order-1" style={{ animationDelay: '0.3s' }}>
                        <HeroVisual visualType={visualType} banner={banner} />
                    </div>
                )}

                {/* Content Area */}
                <div className={`animate-fade-in-up ${isCentered ? 'max-w-4xl mx-auto' : visualPosition === 'left' ? 'order-1 lg:order-2' : ''}`}>
                    {banner.subTitle && (
                        <div className={`inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-500/10 border border-primary-500/20 ${isCentered ? 'mx-auto' : ''}`}>
                            <span className="text-sm font-bold tracking-wider text-primary-400 uppercase">
                                {banner.subTitle}
                            </span>
                        </div>
                    )}

                    <h1 className={`text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8 ${isCentered ? 'mx-auto' : 'text-balance'}`}>
                        {banner.title}
                    </h1>

                    <p className={`text-lg md:text-xl text-slate-400 mb-10 leading-relaxed ${isCentered ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>
                        {banner.description || data.description}
                    </p>

                    <div className={`flex flex-wrap gap-4 ${isCentered ? 'justify-center' : ''}`}>
                        {(banner.buttonLevel || banner.ctaLabel) && (
                            <a href={banner.ctaUrl || "/contact"}>
                                <button className="btn-premium flex items-center gap-2">
                                    <span>{banner.ctaLabel || banner.buttonLevel}</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </a>
                        )}
                        {banner.ctaSecondaryLabel && (
                            <button className="btn-premium-outline !text-white !border-white/20 hover:!bg-white/10">
                                {banner.ctaSecondaryLabel}
                            </button>
                        )}
                    </div>

                    {/* Dynamic stats */}
                    {banner.stats && banner.stats.length > 0 && (
                        <div className={`mt-12 flex flex-wrap items-center gap-8 pt-8 border-t border-white/10 ${isCentered ? 'justify-center' : ''}`}>
                            {banner.stats.map((stat: any, idx: number) => (
                                <React.Fragment key={idx}>
                                    <div>
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-sm text-slate-500">{stat.label}</div>
                                    </div>
                                    {idx < banner.stats.length - 1 && (
                                        <div className="hidden sm:block w-px h-8 bg-white/10" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                </div>

                {/* Visual Area - Render last if position is 'right' (default) */}
                {!isCentered && visualPosition === 'right' && (
                    <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <HeroVisual visualType={visualType} banner={banner} />
                    </div>
                )}
            </div>
        </section>
    );
};

/**
 * Helpher component to render either Image or Video visual
 */
const HeroVisual: React.FC<{ visualType: string, banner: any }> = ({ visualType, banner }) => (
    <div className="relative">
        <div className="relative z-10 rounded-2xl overflow-hidden glass p-2">
            {visualType === 'image' && banner.image && (
                <img
                    src={banner.image.imageSrc}
                    alt={banner.image.imageAlt}
                    className="rounded-xl w-full h-auto shadow-2xl"
                />
            )}
            {visualType === 'video' && banner.videoSrc && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-xl w-full h-auto shadow-2xl"
                >
                    <source src={banner.videoSrc} type="video/mp4" />
                </video>
            )}
        </div>

        {/* Floating decoration card - only if badge provided */}
        {banner.badge && (
            <div className="absolute -bottom-6 -left-6 glass-dark p-4 rounded-xl hidden md:block animate-float">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-xs text-slate-400">Status</div>
                        <div className="text-sm font-bold text-white">{banner.badge}</div>
                    </div>
                </div>
            </div>
        )}
    </div>
);

export default HeroBanner;

