import React, {useEffect, useState} from "react";
import GalleryCard from "../../../components/cards/GalleryCard";
import TitleCover from "../../../components/common/title-cover/TitleCover";
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
        <section className="md:py-16 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TitleCover
                    title={galleryData.title}
                    subtitle=""
                    paragraph={galleryData.paragraph}
                    titleSize={"text-4xl"}
                    textAlign="center"
                />
                <div className="md:mt-20 mt-5">
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
