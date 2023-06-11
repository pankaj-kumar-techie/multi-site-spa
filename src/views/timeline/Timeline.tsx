import React from "react";
import FirstTimeline from "./v1/FirstTimeline";
import SecondTimeline from "./v2/SecondTimeline";

interface HeroBannerProps {
    data: any;
    version: "v1" | "v2" ;
}

const bannerComponents = {
    v1: FirstTimeline,
    v2: SecondTimeline,
};

const Timeline: React.FC<HeroBannerProps> = ({data, version}) => {
    const BannerComponent = bannerComponents[version];

    return <BannerComponent data={data}/>;
};

export default Timeline;
