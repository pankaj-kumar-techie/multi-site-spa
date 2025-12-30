import React from "react";

interface TermsAndConditionsProps {
    data: any;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ data }) => {
    const terms = data?.termAndCondition || [];

    return (
        <section id="terms" className="section-padding bg-white relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20 animate-fade-in">
                        <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">
                            {data.subTitle || "Legal"}
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-8 leading-tight">
                            {data.title || "Terms & Conditions"}
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed italic">
                            {data.description || "Last updated: May 2024. Please read these terms carefully before using our services."}
                        </p>
                    </div>

                    <div className="space-y-16">
                        {terms.map((term: any, index: number) => (
                            <div
                                key={term.id || index}
                                className="group animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex gap-6">
                                    <div className="hidden md:flex text-6xl font-black text-slate-50 group-hover:text-primary-50 transition-colors pointer-events-none select-none">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary-600 transition-colors">
                                            {term.title}
                                        </h4>
                                        <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                                            {term.description?.split('\n').map((para: string, i: number) => (
                                                <p key={i}>{para}</p>
                                            )) || "Detailed terms and conditions content goes here..."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center">
                        <p className="text-slate-500 mb-8">
                            Have questions about our terms? We're here to help you understand your rights and responsibilities.
                        </p>
                        <a href="#contact" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:gap-3 transition-all">
                            Contact our Legal Team
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;

