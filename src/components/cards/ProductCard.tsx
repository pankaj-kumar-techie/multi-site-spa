import React from "react";

export default function ProductCard(product: {
    id: any,
    name: string,
    price: any,
    href: any,
    imageSrc: any,
    imageAlt: any
}) {
    return (
        <>
            <a key={product.id} href={product.href} className="group">
                <div
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                </div>
                <h3 className=" mt-2  text-[1.2rem] text-center text-cutom-black font-medium ">{product.name}</h3>
                <p className="mt-1 text-center text-base font-medium text-gray-900">{product.price}</p>
            </a>
        </>
    )
}