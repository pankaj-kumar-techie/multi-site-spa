import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import { Testimonial } from "../../../modal/Section";
import TitleCover from "../../../components/common/title-cover/TitleCover";

export default function SecondTestimonial(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const [testimonialData, setTestimonialData] = useState<any>([])

    useEffect(() => {
        setTestimonialData(props.data);
    }, [props.data])


    if (!testimonialData.testimonials) {
        return <SectionShimmer title={testimonialData.title}></SectionShimmer>;
    }

    return (
        <section className={`${theme.background.secondary} py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TitleCover title={testimonialData.title} titleColor={theme.typography.firstFontColor} subtitle={testimonialData.subTitle}></TitleCover>
                <div className="mt-20">
                    <div className="max-w-md mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {testimonialData.testimonials.map((testimonial: Testimonial) => (
                            <div key={testimonial.id} className="rounded-lg shadow-lg overflow-hidden">
                                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                                    <div className="flex items-center mb-4">
                                        {/*<FaQuoteLeft className="text-3xl text-gray-800 mr-4" />*/}
                                        <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                                    </div>
                                    <p className="text-gray-700 text-base">{testimonial.testimonial}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
