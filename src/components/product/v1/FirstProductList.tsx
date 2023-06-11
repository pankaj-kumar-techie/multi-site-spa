import React, {useEffect, useState} from "react";


const products = [
    {
        id: 1,
        name: 'Deluxe Room',
        href: '#',
        price: 'Spacious, elegant, and luxurious accommodation for ultimate comfort.',
        imageSrc: 'http://wahabali.com/work/pearl-demo/imgs/room-img1.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Master Room',
        href: '#',
        price: 'Opulent, indulgent, and exclusive retreat for discerning guests',
        imageSrc: 'http://wahabali.com/work/pearl-demo/imgs/room-img4.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Super Room',
        href: '#',
        price: ' Upgraded, luxurious, and lavish accommodation for a remarkable stay.',
        imageSrc: 'http://wahabali.com/work/pearl-demo/imgs/room-img3.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Normal Room',
        href: '#',
        price: 'Comfortable, affordable, and practical choice for a pleasant stay.',
        imageSrc: 'http://wahabali.com/work/pearl-demo/imgs/room-img2.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]


export default function FirstProductList(props: { data :any}){
    const[productData,setProductData] = useState<any>([])

    useEffect(() => {
        setProductData(props.data);
    },[props.data])
    return(
        <section>
            <div className="bg-custom-brown pt-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Rooms</h2>
                    <p className="mt-2 text-xl text-gray-600">
                        Check out some of our favorite travel Product
                    </p>
                </div>

                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products{productData?.title}</h2>

                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                        {products.map((product) => (
                            <a key={product.id} href={product.href} className="group shadow-xl hover:scale-105 transition-all transform duration-500 hover:shadow-2xl rounded-lg pb-4">
                                <div className="w-full  aspect-w-1 aspect-h-1 bg-gray-200 rounded-t-lg rounded-b-none overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className=" mt-4  text-[1.2rem] text-left pl-4 text-cutom-black font-medium ">{product.name}</h3>
                                <p className="mt-1 pl-4 pr-4  text-base font-normal text-left text-gray-900">{product.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
