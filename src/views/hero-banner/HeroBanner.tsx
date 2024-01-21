import React from "react";
import SecondHeroBanner from "./v2/SecondHeroBanner";
import ThirdHeroBanner from "./v3/ThirdHeroBanner";
interface HeroBannerProps {
    data: any;
    version: "v3" ;
}

const bannerComponents = {
    v1: ThirdHeroBanner,
    v2: SecondHeroBanner,
    v3: ThirdHeroBanner,
};

const HeroBanner: React.FC<HeroBannerProps> = ({data, version}) => {
    const BannerComponent = bannerComponents[version];

    return <BannerComponent data={data}/>;
};

export default HeroBanner;
