import React from "react";

interface PlanProps {
    data: any;
}

/**
 * Plan Component (Pricing Section)
 * A premium, production-ready pricing section.
 * Features:
 * - Glassmorphism for featured plans
 * - Dynamic gradients and micro-animations
 * - Data-driven feature lists
 * - Responsive multi-column layout
 */
const Plan: React.FC<PlanProps> = ({ data }) => {
    const plans = data?.plans || [];

    return (
        <section id="pricing" className="section-padding bg-slate-50 relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-primary-500/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                    {data.subTitle && (
                        <h2 className="text-sm font-bold tracking-[0.2em] text-primary-600 uppercase mb-4">
                            {data.subTitle}
                        </h2>
                    )}
                    {data.title && (
                        <h3 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-8 tracking-tight">
                            {data.title}
                        </h3>
                    )}
                    {data.description && (
                        <p className="text-xl text-slate-500 leading-relaxed">
                            {data.description}
                        </p>
                    )}
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-end">
                    {plans.map((plan: any, index: number) => {
                        const isFeatured = plan.isFeatured;

                        return (
                            <div
                                key={plan.id || index}
                                className={`relative group flex flex-col p-10 rounded-[2.5rem] transition-all duration-700 animate-fade-in-up ${isFeatured
                                    ? "bg-slate-900 text-white shadow-2xl scale-105 z-20 overflow-hidden"
                                    : "bg-white text-slate-900 border border-slate-100 shadow-premium hover:shadow-hard z-10"
                                    }`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Decorative Gradient Overlay for Featured Plan */}
                                {isFeatured && (
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-600/20 blur-[60px] rounded-full group-hover:bg-primary-600/30 transition-colors duration-700" />
                                )}

                                {isFeatured && (
                                    <div className="absolute top-6 right-8">
                                        <span className="bg-primary-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest bg-gradient-to-r from-primary-600 to-indigo-600">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="mb-10">
                                    <div className={`text-xs font-black uppercase tracking-[0.2em] mb-4 ${isFeatured ? "text-primary-400" : "text-primary-600"}`}>
                                        {plan.title}
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-display font-black tracking-tighter">
                                            {plan.price}
                                        </span>
                                        {plan.duration && (
                                            <div className="flex flex-col">
                                                <span className={`text-base font-medium ${isFeatured ? "text-slate-400" : "text-slate-400"}`}>
                                                    /{plan.duration}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <p className={`mb-10 text-base leading-relaxed ${isFeatured ? "text-slate-400" : "text-slate-500"}`}>
                                    {plan.description}
                                </p>

                                <div className={`h-px w-full mb-10 ${isFeatured ? "bg-white/10" : "bg-slate-100"}`} />

                                {plan.features && plan.features.length > 0 && (
                                    <ul className="space-y-5 mb-12 flex-grow">
                                        {plan.features.map((feature: string, i: number) => (
                                            <li key={i} className="flex items-start gap-4 text-sm group/item">
                                                <div className={`mt-1 p-0.5 rounded-full transition-transform duration-300 group-hover/item:scale-125 ${isFeatured ? "bg-primary-500/20 text-primary-400" : "bg-primary-50 text-primary-600"}`}>
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className={`font-medium transition-colors ${isFeatured ? "text-slate-300 group-hover/item:text-white" : "text-slate-600 group-hover/item:text-slate-900"}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {(plan.ctaLabel || data.ctaLabel) && (
                                    <button className={`group/btn w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 active:scale-95 shadow-lg overflow-hidden relative ${isFeatured
                                        ? "bg-primary-600 text-white hover:bg-primary-500 shadow-primary-900/40"
                                        : "bg-slate-900 text-white hover:bg-primary-600 shadow-slate-200"
                                        }`}>
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {plan.ctaLabel || data.ctaLabel || "Get Started"}
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Plan;
