import React, {useEffect, useState} from "react";
import GalleryCard from "../../../components/cards/GalleryCard";
import TitleCover from "../../../components/comman/title-cover/TitleCover";
import { Image } from "../../../modal/Section";


function FirstGallery(props: { data: any }) {
    const [galleryData, setGalleryData] = useState<any>({
        title: "",
        description: "",
        images: [],
      });
    useEffect(() => {
        setGalleryData(props.data);
    }, [props.data]);

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TitleCover
                    title={galleryData.title}
                    subtitle=""
                    paragraph={galleryData.paragraph}
                    titleSize={"text-4xl"}
                    textAlign="center"
                />
                <div className="mt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {galleryData.images.map((image: Image) => (
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
