import React from "react";
import BaseCard from "../common/BaseCard";

export default function PortfolioCard(portfolio: {
    id: any,
    name: string,
    description: any,
    href: any,
    imageSrc: any,
    imageAlt: any,
    variant?: 'glass' | 'elevated' | 'flat' | 'outline',
    hoverEffect?: 'zoom' | 'lift' | 'glow' | 'none'
}) {
    const {
        variant = 'elevated',
        hoverEffect = 'lift'
    } = portfolio;

    return (
        <BaseCard
            variant={variant}
            hoverEffect={hoverEffect}
            padding="none"
            className="group flex flex-col h-full overflow-hidden"
        >
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={portfolio.imageSrc}
                    alt={portfolio.imageAlt || portfolio.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white text-sm font-medium line-clamp-2">
                        {portfolio.description}
                    </p>
                </div>
            </div>
            <div className="p-5 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {portfolio.name}
                </h3>
                <a
                    href={portfolio.href}
                    className="text-xs font-bold text-primary-600 uppercase tracking-widest hover:underline"
                >
                    View Project
                </a>
            </div>
        </BaseCard>
    );
}