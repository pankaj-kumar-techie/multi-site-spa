import React from "react";
import FirstGallery from "./v1/FirstGallery";

interface GalleryProps {
    data: any;
    version: "v1";
}

const galleryComponents = {
    v1: FirstGallery,
};

const Gallery: React.FC<GalleryProps> = ({data, version}) => {
    const GalleryComponent = galleryComponents[version];

    return <GalleryComponent data={data}/>;
};

export default Gallery;
