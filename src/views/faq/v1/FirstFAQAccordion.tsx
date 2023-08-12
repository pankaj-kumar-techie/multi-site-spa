import React, { useContext, useEffect, useState } from 'react';
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { FAQ } from '../../../modal/Section';
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from '../../../components/common/shimmer/SectionShimmer';

const FirstFAQAccordion = (props: { data: any }) => {
    const { theme } = useContext(ThemeContext);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const [faqData, setFaqData] = useState<any>({
        title: "",
        description: "",
        faqs: [],
    });
    useEffect(() => {
        setFaqData(props.data);
    }, [props.data]);


    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    if (!faqData.faqs) {
        return <SectionShimmer title={faqData.title}></SectionShimmer>;
    }

    return (
        <section className={`${theme.background.backgroundColor} pt-10 pb-10`}>
            <div className='container mx-auto px-3 lg:px-64'>

                <div>
                    <TitleCover title={faqData.title} titleColor={theme.typography.firstFontColor} titleSize={"lg:text-[3rem] text-[1.5rem]"} fontFamily={theme.typography.fontFamily}></TitleCover>
                </div>
                <div className="w-full  ">
                    {faqData.faqs.map((faq: FAQ) => (
                        <div
                            key={faq.id}
                            className="border rounded bg-white shadow mb-4"
                        >
                            <button
                                className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
                                onClick={() => toggleAccordion(faq.id)}
                            >
                                <h3 className="text-lg font-medium">{faq.question}</h3>
                                <svg
                                    className={`w-5 h-5 transition-transform ${activeIndex === faq.id ? 'transform rotate-180' : ''
                                        }`}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M7 10l5 5 5-5z"
                                    />
                                </svg>
                            </button>
                            {activeIndex === faq.id && (
                                <div className="px-4 py-3">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FirstFAQAccordion;
