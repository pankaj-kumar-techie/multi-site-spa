import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import { Product } from "../../../modal/Section";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";

export default function SecondProductList(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const [productData, setProductData] = useState<any>({
        title: "",
        description: "",
        products: [],
    });

    useEffect(() => {
        setProductData(props.data);
    }, [props.data]);

    if (!productData.products) {
        return <SectionShimmer title={productData.title} />;
    }

    return (
        <section className={`bg-${theme.colors.primary} py-8 sm:py-16`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title & Description */}
                <TitleCover
                    title={productData.title}
                    titleColor={`${textColor}`}
                    paragraph={productData.description}
                />

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-x-6 xl:gap-x-8 mt-8">
                    {productData.products.map((product: Product) => (
                        <a key={product.id} href={product.href} className="group block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                            <div className="relative w-full">
                                <div className="w-full h-56 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="p-4">


                                {/* Enhanced Price Section */}
                                <div className="flex items-baseline justify-between mt-4">
                                    {/* Current Price */}
                                    <p className="text-xl font-bold text-green-600">{product.price}</p>

                                    {/* Discount Tag (if applicable) */}
                                    {product.discount && (
                                        <div className="bg-red-200 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
                                            {product.discount}% OFF
                                        </div>
                                    )}
                                </div>

                                {/* Previous Price for Discounted Items */}
                                {product.oldPrice && (
                                    <p className="text-sm text-gray-500 line-through mt-1">{product.oldPrice}</p>
                                )}
                                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 group-hover:text-red-500 transition-colors">{product.name}</h3>
                                <p className="mt-1 text-xs sm:text-sm text-gray-600">{product.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
