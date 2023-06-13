import React, {useEffect, useState} from "react";
import GalleryCard from "../../../components/cards/GalleryCard";
import TitleCover from "../../../components/comman/title-cover/TitleCover";

const images = [
    {
        id: '1',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        id: '2',

        imageSrc: 'https://images.unsplash.com/photo-1684752097893-13785863f9a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        id: '3',
        imageSrc: 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
];

function FirstGallery(props: { data: any }) {
    const [galleryData, setGalleryData] = useState<any>([]);
    useEffect(() => {
        setGalleryData(props.data);
    }, [props.data]);

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TitleCover
                    title={galleryData.title}
                    subtitle=""
                    paragraph={galleryData.paragraph}
                    fontSize="text-4xl"
                    textAlign="center"
                />
                <div className="mt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {images.map((image, index) => (
                            <GalleryCard id={image.id} imageSrc={image.imageSrc}
                                         imageAlt={image.imageAlt}></GalleryCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirstGallery;
