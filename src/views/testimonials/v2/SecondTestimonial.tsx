import React, { useContext, useEffect, useState } from "react";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { Testimonial } from "../../../modal/Section";
import { ThemeContext } from "../../../themes/ThemeProvider";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";
import TestimonialCard2 from "../../../components/cards/TestimonialCard2";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

export default function SecondTestimonial(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const [testimonialData, setTestimonialData] = useState<any>({
        title: "",
        description: "",
        testimonials: [],
    });
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        setTestimonialData(props.data);
    }, [props.data]);

    const shouldRenderSingleTestimonial = window.innerWidth < 768;
    const testimonialsToShow = shouldRenderSingleTestimonial
        ? testimonialData.testimonials.slice(startIndex, startIndex + 1)
        : testimonialData.testimonials.slice(startIndex, startIndex + 3);


    return (
        <section className={`bg-${theme.colors.primary} text-center`}>
            <div className="max-w-7xl mx-auto pb-12 md:pt-16 pt-5 px-4 sm:px-6 md:px-8">
                <TitleCover
                    title={testimonialData.title}
                    titleColor={textColor}
                    subtitle={testimonialData.subTitle || ""}
                    paragraph={testimonialData.description}
                />

                <div className="grid grid-cols-1 gap-6 lg:gap-12">
                    <AliceCarousel
                        items={testimonialsToShow.map((testimonial: Testimonial) => (
                            <TestimonialCard2
                                key={testimonial.id}
                                id={testimonial.id}
                                name={testimonial.name}
                                designation={testimonial.designation}
                                testimonial={testimonial.testimonial}
                                imageSrc={testimonial.imageSrc}
                                imageAlt={testimonial.imageAlt}
                            />
                        ))}
                        responsive={{
                            0: { items: 1 },
                            1024: { items: 3 },
                        }}
                        disableButtonsControls={true}
                        disableDotsControls={false}
                        autoPlayInterval={1500}
                        animationDuration={1000}
                        autoPlay={true}
                        infinite={true}
                        mouseTracking={true}
                    />
                </div>
            </div>
        </section>
    );
}