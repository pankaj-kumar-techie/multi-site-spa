import React, { useState } from "react";

interface FAQAccordionProps {
    data: any;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ data }) => {
    const faqs = data?.faqs || [];
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-16 animate-fade-in">
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

                <div className="space-y-4">
                    {faqs.map((faq: any, index: number) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={faq.id || index}
                                className={`group rounded-2xl border transition-all duration-300 ${isOpen
                                    ? "bg-primary-50 border-primary-100 shadow-md"
                                    : "bg-white border-slate-100 hover:border-primary-200"
                                    } animate-fade-in-up`}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <button
                                    onClick={() => setActiveIndex(isOpen ? null : index)}
                                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                                >
                                    <span className={`text-lg font-bold transition-colors ${isOpen ? "text-primary-700" : "text-slate-900"
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary-600" : "text-slate-400 group-hover:text-primary-400"
                                        }`}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}>
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-primary-100/50">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;

