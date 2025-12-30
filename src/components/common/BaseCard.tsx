import React from 'react';

interface BaseCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'glass' | 'elevated' | 'flat' | 'outline';
    hoverEffect?: 'zoom' | 'lift' | 'glow' | 'none';
    padding?: 'none' | 'small' | 'medium' | 'large';
    as?: React.ElementType;
}

/**
 * BaseCard Component
 * Implements the Composition Design Pattern.
 * Provides a standardized container for all card-based UI elements.
 */
const BaseCard: React.FC<BaseCardProps> = ({
    children,
    className = "",
    variant = 'elevated',
    hoverEffect = 'lift',
    padding = 'medium',
    as: Component = 'div'
}) => {
    const baseStyles = "rounded-[2.5rem] overflow-hidden transition-all duration-500 border border-slate-100";

    const variantStyles = {
        glass: "glass shadow-glass",
        elevated: "bg-white shadow-premium hover:shadow-hard",
        flat: "bg-slate-50 border-transparent",
        outline: "bg-transparent border-2 border-slate-200 hover:border-primary-500"
    };

    const hoverStyles = {
        zoom: "hover:scale-[1.02]",
        lift: "hover:-translate-y-2",
        glow: "hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]",
        none: ""
    };

    const paddingStyles = {
        none: "p-0",
        small: "p-6",
        medium: "p-10",
        large: "p-12 md:p-16"
    };

    return (
        <Component
            className={`
                ${baseStyles} 
                ${variantStyles[variant]} 
                ${hoverStyles[hoverEffect]} 
                ${paddingStyles[padding]} 
                ${className}
            `}
        >
            {children}
        </Component>
    );
};

export default BaseCard;
