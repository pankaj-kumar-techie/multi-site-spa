import React from "react";
import TestimonialCard from "../../components/cards/TestimonialCard";
import { Testimonial } from "../../modal/Section";

interface TestimonialsProps {
    data: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
    const testimonials = data?.testimonials || [];

    return (
        <section id="testimonials" className="section-padding bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary-200/20 blur-3xl rounded-full" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-indigo-200/20 blur-3xl rounded-full" />

            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
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

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-x-12 max-w-6xl mx-auto">
                    {testimonials.map((item: Testimonial, index: number) => (
                        <TestimonialCard
                            key={item.id || index}
                            name={item.name}
                            designation={item.designation}
                            testimonial={item.testimonial}
                            imageSrc={item.imageSrc || `https://ui-avatars.com/api/?name=${item.name}&background=random`}
                            variant={data.cardVariant}
                            hoverEffect={data.cardHoverEffect}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

