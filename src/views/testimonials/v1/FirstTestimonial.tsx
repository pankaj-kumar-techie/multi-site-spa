import React, { useContext, useEffect, useState } from "react";
import TestimonialCard from "../../../components/cards/TestimonialCard";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { Testimonial } from "../../../modal/Section";
import { ThemeContext } from "../../../themes/ThemeProvider";
import { error } from "console";
import ErrorPage from "../../../components/common/error/ErrorPage";
import Loader from "../../../components/common/loader/Loader";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";

export default function FirstTestimonial(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const [testimonialData, setTestimonialData] = useState<any>({
        title: "",
        description: "",
        testimonials: [],
    })

    useEffect(() => {
        setTestimonialData(props.data);
    }, [props.data])

    if (!testimonialData.testimonials) {
        return <SectionShimmer title={testimonialData.title}></SectionShimmer>;
    }

    return (
        <section className={`${theme.background.backgroundColorSecondary} text-center`}>
            <div className="container  pb-12 md:pt-16  pt-5 mx-auto md:px-6">
                <TitleCover title={testimonialData.title} titleColor={theme.typography.firstFontColor} subtitle={""} paragraph={""}></TitleCover>
                <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                    {testimonialData.testimonials.map((testimonial: Testimonial) => (
                        <TestimonialCard id={testimonial.id} name={testimonial.name}
                            designation={testimonial.designation} testimonial={testimonial.testimonial}
                            imageSrc={testimonial.imageSrc}
                            imageAlt={testimonial.imageAlt}></TestimonialCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
