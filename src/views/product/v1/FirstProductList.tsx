import React, {useContext, useEffect, useState} from "react";
import ProductCard from "../../../components/cards/ProductCard";
import TitleCover from "../../../components/comman/title-cover/TitleCover";
import { Product } from "../../../modal/Section";
import {ThemeContext} from "../../../themes/ThemeProvider";



export default function FirstProductList(props: { data: any }) {
    const [productData, setProductData] = useState<any>({
        title: "",
        description: "",
        products: [],
      })
    const { theme } = useContext(ThemeContext);

    //Todo : Complete happy path for "theme.colors.primary

    useEffect(() => {
        setProductData(props.data);
    }, [props.data])
    return (
        <section>
            <div className={theme.colors.primary}>
                <TitleCover title={productData.title} paragraph={productData.subTitle}></TitleCover>
                <div className="max-w-2xl  mx-auto py-16 px-4 lg:py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div
                        className="grid  grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                        {productData.products.map((product:Product) => (
                            <ProductCard id={product.id} name={product.name} description={product.description}
                                         href={product.href}
                                         imageSrc={product.imageSrc} imageAlt={product.imageAlt} price={''}></ProductCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
