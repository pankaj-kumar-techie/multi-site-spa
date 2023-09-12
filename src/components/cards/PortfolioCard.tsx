import React, { useContext } from "react";
import { useDynamicTextColor } from "../../themes/DynamicTextColor";
import { ThemeContext } from "../../themes/ThemeProvider";

export default function PortfolioCard(portfolio: {
    id: any,
    name: string,
    description: any,
    href: any,
    imageSrc: any,
    imageAlt: any
}){
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    return(
        <div key={portfolio.id}
             className={`group relative bg-${theme.colors.secondary} my-6 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500`}>
            <div
                className="relative w-full h-80  rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                    src={portfolio.imageSrc}
                    alt={portfolio.imageAlt}
                    className="w-full h-full object-center object-cover"
                />
            </div>
            <div className={'mt-4'}>

                <h3 className="ml-2 mt-6 text-sm text-gray-500">
                    <a href={portfolio.href}>
                        <span className="absolute inset-0"/>
                        {portfolio.name}
                    </a>
                </h3>
                <p className="ml-2 text-base pb-5 font-semibold text-gray-900">{portfolio.description}</p>
            </div>
        </div>
    )
}