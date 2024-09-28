import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import { Product } from "../../../modal/Section";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";
import AliceCarousel from "react-alice-carousel";

export default function ThirdProductList(props: { data: any }) {
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

                <div className="grid grid-cols-1 gap-6 lg:gap-12">
                    <AliceCarousel
                        items={productData.products.map((product: Product) => (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-white shadow-lg rounded-lg">
                                {/* Product Image */}
                                <div className="relative w-full">
                                    <div className="w-full h-56 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Badge for trending */}
                                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-lg">Trending</div>
                                </div>

                                {/* Product Info */}
                                <div className="flex flex-col justify-center space-y-4 p-4">


                                    {/* Price Section */}
                                    <div className="flex items-baseline space-x-4">
                                        {/* Current Price */}
                                        <p className="text-xl sm:text-2xl font-bold text-green-600">{product.price}</p>

                                        {/* Old Price (if discounted) */}
                                        {product.oldPrice && (
                                            <p className="text-sm sm:text-base text-gray-500 line-through">
                                                {product.oldPrice}
                                            </p>
                                        )}
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{product.name}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        {product.description}
                                    </p>

                                    {/* Order Now Button */}
                                    <div className="pt-4">
                                        <a
                                            href={product.href}
                                            className="inline-block px-6 py-2 text-white bg-blue-600 rounded-md text-sm sm:text-base font-semibold hover:bg-blue-700 transition duration-200 ease-in-out"
                                        >
                                            Order Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        responsive={{
                            0: { items: 1 },
                            1024: { items: 1 },
                        }}
                        disableButtonsControls={true}
                        disableDotsControls={false}
                        autoPlayInterval={2500}
                        animationDuration={1500}
                        autoPlay={true}
                        infinite={true}
                        mouseTracking={true}
                    />
                </div>
            </div>
        </section>
    );
}
