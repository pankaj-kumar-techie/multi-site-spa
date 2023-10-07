import React, { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeProvider";
import { useDynamicTextColor } from "../../themes/DynamicTextColor";

export default function ProductCard(product: {
    id: any,
    name: string,
    description: string,
    price: '',
    href: any,
    imageSrc: any,
    imageAlt: any
}) {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");

    return (
        <>
            <div className={`bg-${theme.colors.primary}`}>
                <a key={product.id} href={product.href}
                   className="group hover:shadow-2xl hover:scale-105 transition-all transform duration-500 shadow-xl rounded-xl">
                    <div
                        className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-t-lg rounded-b-none overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="w-full h-[18rem] rounded-t-lg rounded-b-none object-center object-cover group-hover:opacity-75"
                        />
                    </div>
                    <h3 className={`mt-3 pr-2 text-[1.1rem] pl-3 text-left font-medium ${textColor}`}>{product.name}</h3>
                    <p className={`mt-1 pb-3 pr-2 text-left pl-3 text-[.9rem] font-normal text-gray-900 ${textColor}`}>{product.description}</p>
                </a>
            </div>
        </>
    )
}
