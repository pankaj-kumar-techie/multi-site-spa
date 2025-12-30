import React from "react";
import { Product } from "../../modal/Section";
import BaseCard from "../common/BaseCard";

export default function ProductCard(props: Product & {
    variant?: 'glass' | 'elevated' | 'flat' | 'outline',
    hoverEffect?: 'zoom' | 'lift' | 'glow' | 'none'
}) {
    const {
        variant = 'elevated',
        hoverEffect = 'zoom'
    } = props;

    return (
        <BaseCard
            variant={variant}
            hoverEffect={hoverEffect}
            padding="none"
            className="group flex flex-col h-full overflow-hidden"
        >
            <a href={props.href} className="flex flex-col h-full">
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                        src={props.imageSrc}
                        alt={props.imageAlt || props.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {props.price && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                            <span className="text-primary-600 font-bold text-sm">{props.price}</span>
                        </div>
                    )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 truncate group-hover:text-primary-600 transition-colors">
                        {props.name}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                        {props.description}
                    </p>
                </div>
            </a>
        </BaseCard>
    );
}
