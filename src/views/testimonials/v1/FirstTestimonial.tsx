import React, { useContext, useEffect, useState } from "react";
import TestimonialCard from "../../../components/cards/TestimonialCard";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { Testimonial } from "../../../modal/Section";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import NavigationButtons from "../../../components/common/button/NavigationButtons";

export default function FirstTestimonial(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const [testimonialData, setTestimonialData] = useState<any>({
        title: "",
        description: "",
        testimonials: [],
    });
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        setTestimonialData(props.data);
    }, [props.data]);

    const shouldRenderSingleTestimonial = window.innerWidth < 768; // Check for mobile view
    const testimonialsToShow = shouldRenderSingleTestimonial
        ? testimonialData.testimonials.slice(startIndex, startIndex + 1)
        : testimonialData.testimonials.slice(startIndex, startIndex + 3);

    const handlePrev = () => {
        setStartIndex(Math.max(0, startIndex - (shouldRenderSingleTestimonial ? 1 : 3)));
    };

    const handleNext = () => {
        setStartIndex(Math.min(testimonialData.testimonials.length - (shouldRenderSingleTestimonial ? 1 : 3), startIndex + (shouldRenderSingleTestimonial ? 1 : 3)));
    };

    return (
        <section className={`${theme.background.backgroundColorSecondary} text-center`}>
            <div className="container pb-12 md:pt-16 pt-5 mx-auto md:px-6">
                <TitleCover title={testimonialData.title} titleColor={theme.typography.firstFontColor} subtitle={""} paragraph={""}></TitleCover>
                <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                    {testimonialsToShow.map((testimonial: Testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            id={testimonial.id}
                            name={testimonial.name}
                            designation={testimonial.designation}
                            testimonial={testimonial.testimonial}
                            imageSrc={testimonial.imageSrc}
                            imageAlt={testimonial.imageAlt}
                        />
                    ))}
                </div>
                <NavigationButtons
                    onPrev={handlePrev}
                    onNext={handleNext}
                    isPrevDisabled={startIndex === 0}
                    isNextDisabled={startIndex + (shouldRenderSingleTestimonial ? 1 : 3) >= testimonialData.testimonials.length}
                />
            </div>
        </section>
    );
}
