import React, { useContext, useEffect, useState } from 'react';
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { FAQ } from '../../../modal/Section';
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from '../../../components/common/shimmer/SectionShimmer';
import { useDynamicTextColor } from '../../../themes/DynamicTextColor';

const FirstFAQAccordion = (props: { data: any }) => {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
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
        <section className={`bg-${theme.colors.primary} pt-10 pb-10`}>
            <div className='container mx-auto px-3 lg:px-64'>

                <div>
                    <TitleCover title={faqData.title} titleColor={`${textColor}`} titleSize={"lg:text-[3rem] text-[1.5rem]"} fontFamily={theme.typography.fontFamily}></TitleCover>
                </div>
                <div className="w-full  ">
                    {faqData.faqs.map((faq: FAQ) => (
                        <div
                            key={faq.id}
                            className="border rounded shadow mb-4"
                        >
                            <button
                                className={`w-full flex items-center justify-between px-4 py-3 focus:outline-none ${textColor}`} // Use dynamic text color
                                onClick={() => toggleAccordion(faq.id)}
                            >
                                <h3 className={`text-lg font-medium ${textColor}`}>{faq.question}</h3> {/* Use dynamic text color */}
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
                                <div className={`px-4 py-3 ${textColor}`}> {/* Use dynamic text color */}
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
