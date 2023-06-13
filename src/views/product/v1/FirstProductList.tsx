import React, {useEffect, useState} from "react";
import ProductCard from "../../../components/cards/ProductCard";
import TitleCover from "../../../components/comman/title-cover/TitleCover";

//Todo: get products list form props or api
const products = [
    {
        id: 1,
        name: 'Deluxe Room',
        href: '#',
        price: '₹4800',
        imageSrc: 'http://wahabali.com/work/pearl-demo/imgs/room-img1.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Master Room',
        href: '#',
        price: '₹4000',
        imageSrc: 'http://wahabali.com/work/pearl-demo/imgs/room-img4.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Super Room',
        href: '#',
        price: '₹3000',
        imageSrc: 'http://wahabali.com/work/pearl-demo/imgs/room-img3.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Normal Room',
        href: '#',
        price: '₹2500',
        imageSrc: 'http://wahabali.com/work/pearl-demo/imgs/room-img2.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function FirstProductList(props: { data: any }) {
    const [productData, setProductData] = useState<any>([])

    useEffect(() => {
        setProductData(props.data);
    }, [props.data])
    return (
        <section>
            <div className="bg-custom-brown pt-20">
                <TitleCover title={productData.title} paragraph={productData.subTitle}></TitleCover>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div
                        className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <ProductCard id={product.id} name={product.name} price={product.price} href={product.href}
                                         imageSrc={product.imageSrc} imageAlt={product.imageAlt}></ProductCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
