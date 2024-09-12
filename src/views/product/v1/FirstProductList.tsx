import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../../../components/cards/ProductCard";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { Product } from "../../../modal/Section";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";



export default function FirstProductList(props: { data: any }) {

    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const [productData, setProductData] = useState<any>({
        title: "",
        description: "",
        products: [],
    })

    useEffect(() => {
        setProductData(props.data);
    }, [props.data])

    if (!productData.products) {
        return <SectionShimmer title={productData.title}></SectionShimmer>;
    }
    return (
        <section className={`bg-${theme.colors.primary}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    <TitleCover title={productData.title} titleColor={`${textColor}`} paragraph={productData.description}></TitleCover>
                    <div className="max-w-2xl  mx-auto py-16 px-4 lg:py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="grid  grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                            {productData.products.map((product: Product) => (
                                <ProductCard id={product.id} name={product.name} description={product.description} href={product.href}
                                    imageSrc={product.imageSrc} imageAlt={product.imageAlt} price={''}></ProductCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
