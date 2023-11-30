import React from "react";
import FirstTestimonial from "./v1/FirstTestimonial";
import SecondTestimonial from "./v2/SecondTestimonial";


interface TestimonialProps {
    data: any;
    version: "v1" | "v2";
}

const testimonialComponents: {
    [key in TestimonialProps["version"]]: React.FC<{ data: any }>;
} = {
    v1: FirstTestimonial, v2: SecondTestimonial,
};

const Testimonials: React.FC<TestimonialProps> = ({data, version}) => {
    const TestimonialComponents = testimonialComponents[version];

    return <TestimonialComponents data={data}/>;
};

export default Testimonials;
