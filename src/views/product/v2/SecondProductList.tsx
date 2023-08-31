import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import { Product } from "../../../modal/Section";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";


export default function SecondProductList(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
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
        <section>
            <div className={`${theme.background.secondary}`}>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <TitleCover title={productData.title} titleColor={theme.typography.firstFontColor}></TitleCover>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {productData.products.map((product: Product) => (
                            <a key={product.id} href={product.href} className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
