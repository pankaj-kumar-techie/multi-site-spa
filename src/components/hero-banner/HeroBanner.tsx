import React from "react";
import FirstHeroBanner from "./v1/FirstHeroBanner";
import ThirdHeroBanner from "./v3/ThirdHeroBanner";
import SecondHeroBanner from "./v2/SecondHeroBanner";

interface HeroBannerProps {
    data: any;
    version: "v1" | "v2"| "v3" ;
}

const bannerComponents = {
    v1: FirstHeroBanner,
    v2: SecondHeroBanner,
    v3: ThirdHeroBanner,
};

const HeroBanner: React.FC<HeroBannerProps> = ({data, version}) => {
    const BannerComponent = bannerComponents[version];

    return <BannerComponent data={data}/>;
};

export default HeroBanner;
