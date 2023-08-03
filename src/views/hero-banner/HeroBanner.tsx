import React from "react";
import FirstHeroBanner from "./v1/FirstHeroBanner";
interface HeroBannerProps {
    data: any;
    version: "v1" ;
}

const bannerComponents = {
    v1: FirstHeroBanner,
};

const HeroBanner: React.FC<HeroBannerProps> = ({data, version}) => {
    const BannerComponent = bannerComponents[version];

    return <BannerComponent data={data}/>;
};

export default HeroBanner;
