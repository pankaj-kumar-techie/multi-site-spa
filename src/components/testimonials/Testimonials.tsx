import React from "react";
import FirstTestimonial from "./v1/FirstTestimonial";


interface TestimonialProps {
    data: any;
    version: "v1";
}

const testimonialComponents: {
    [key in TestimonialProps["version"]]: React.FC<{ data: any }>;
} = {
    v1: FirstTestimonial,
};

const Testimonials: React.FC<TestimonialProps> = ({data, version}) => {
    const TestimonialComponents = testimonialComponents[version];

    return <TestimonialComponents data={data}/>;
};

export default Testimonials;
