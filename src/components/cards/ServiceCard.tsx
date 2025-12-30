import React from "react";
import BaseCard from "../common/BaseCard";

interface ServiceCardProps {
    icon?: string;
    iconAlt?: string;
    title: string;
    body: string;
    className?: string;
    variant?: 'glass' | 'elevated' | 'flat' | 'outline';
    hoverEffect?: 'zoom' | 'lift' | 'glow' | 'none';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    iconAlt,
    title,
    body,
    className,
    variant = 'elevated',
    hoverEffect = 'lift'
}) => {
    return (
        <BaseCard
            variant={variant}
            hoverEffect={hoverEffect}
            className={`group h-full ${className}`}
        >
            {icon && (
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-500">
                    <img
                        src={icon}
                        alt={iconAlt || title}
                        className="w-8 h-8 object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
                    />
                </div>
            )}
            <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {title}
            </h4>
            <p className="text-slate-600 leading-relaxed line-clamp-4 text-sm">
                {body}
            </p>
        </BaseCard>
    );
};

export default ServiceCard;

