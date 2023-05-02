import React from "react";
import FirstGallery from "./v1/FirstGallery";

interface Gallery {
    data: any;
    version: "v1"  ;
}

const bannerComponents = {
    v1: FirstGallery,
};

const Gallery: React.FC<Gallery> = ({data, version}) => {
    const BannerComponent = bannerComponents[version];

    return <BannerComponent data={data}/>;
};

export default Gallery;
