import React from "react";
import ServiceCard from "../../components/cards/ServiceCard";
import { Service } from "../../modal/Section";

interface ServicesProps {
    data: any;
}

const Services: React.FC<ServicesProps> = ({ data }) => {
    const services = data?.services || [];

    return (
        <section id="features" className="section-padding bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 blur-3xl rounded-full" />

            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service: Service, index: number) => (
                        <ServiceCard
                            key={service.id || index}
                            icon={service.imageSrc}
                            title={service.title}
                            body={service.body || (service as any).description}
                            className="animate-fade-in-up"
                            variant={data.cardVariant}
                            hoverEffect={data.cardHoverEffect}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

