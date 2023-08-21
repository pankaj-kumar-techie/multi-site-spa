import React, { useContext, useEffect, useState } from "react";
import GalleryCard from "../../../components/cards/GalleryCard";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { Image } from "../../../modal/Section";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function FirstGallery(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const [galleryData, setGalleryData] = useState<any>({
        title: "",
        description: "",
        images: [],
    });
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setGalleryData(props.data);
    }, [props.data]);

    if (!galleryData.images) {
        return <SectionShimmer title={galleryData.title}></SectionShimmer>;
    }

    return (
        <section className={`${theme.background.backgroundColorPrimary} md:py-16 py-10`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TitleCover
                    title={galleryData.title}
                    subtitle=""
                    titleColor={theme.typography.firstFontColor}
                    paragraph={galleryData.paragraph}
                    paragraphColor={theme.typography.firstFontColor}
                    titleSize={"text-4xl"}
                    textAlign="center"
                />
                <div className="md:mt-20 mt-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {galleryData.images.map((image: Image, index: number) => (
                            <div
                                key={image.id}
                                onClick={() => {
                                    setCurrentImageIndex(index);
                                    setLightboxOpen(true);
                                }}
                            >
                                <GalleryCard
                                    id={image.id}
                                    imageSrc={image.imageSrc}
                                    imageAlt={image.imageAlt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {lightboxOpen && (
                <Lightbox
                    mainSrc={galleryData.images[currentImageIndex].imageSrc}
                    onCloseRequest={() => setLightboxOpen(false)}
                    prevSrc={
                        galleryData.images[
                            (currentImageIndex + galleryData.images.length - 1) % galleryData.images.length
                        ].imageSrc
                    }
                    nextSrc={
                        galleryData.images[(currentImageIndex + 1) % galleryData.images.length].imageSrc
                    }
                    onMovePrevRequest={() =>
                        setCurrentImageIndex(
                            (currentImageIndex + galleryData.images.length - 1) %
                                galleryData.images.length
                        )
                    }
                    onMoveNextRequest={() =>
                        setCurrentImageIndex(
                            (currentImageIndex + 1) % galleryData.images.length
                        )
                    }
                />
            )}
        </section>
    );
}

export default FirstGallery;
