import React from "react";
import BaseCard from "../common/BaseCard";

interface TestimonialCardProps {
    name: string;
    designation: string;
    testimonial: string;
    imageSrc: string;
    imageAlt?: string;
    variant?: 'glass' | 'elevated' | 'flat' | 'outline';
    hoverEffect?: 'zoom' | 'lift' | 'glow' | 'none';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    designation,
    testimonial,
    imageSrc,
    imageAlt,
    variant = 'glass',
    hoverEffect = 'lift'
}) => {
    return (
        <BaseCard
            variant={variant}
            hoverEffect={hoverEffect}
            padding="medium"
            className="flex flex-col items-center text-center relative pt-16 mt-12"
        >
            {/* Avatar - Floating above the card */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="p-1 rounded-full border-4 border-white shadow-premium overflow-hidden bg-white">
                    <img
                        src={imageSrc}
                        alt={imageAlt || name}
                        className="w-24 h-24 rounded-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                </div>
            </div>

            {/* Quote Icon Background */}
            <div className="absolute top-10 right-10 opacity-5">
                <svg className="w-16 h-16 fill-primary-600" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21C14.017 19.8954 13.1216 19 12.017 19H9.017C7.91243 19 7.017 19.8954 7.017 21V21C7.017 22.1046 7.91243 23 9.017 23H12.017C13.1216 23 14.017 22.1046 14.017 21ZM3 21V18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21Z" />
                </svg>
            </div>

            <p className="text-lg text-slate-600 italic leading-relaxed mb-8 relative z-10">
                "{testimonial}"
            </p>

            <div className="mt-auto">
                <h5 className="text-xl font-bold text-slate-900">{name}</h5>
                <span className="text-sm font-bold text-primary-600 uppercase tracking-widest">
                    {designation}
                </span>
            </div>
        </BaseCard>
    );
};

export default TestimonialCard;
