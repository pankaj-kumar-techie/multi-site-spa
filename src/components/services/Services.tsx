import React from "react";
import FirstService from "./v1/FirstService";
import SecondService from "./v2/SecondService";

interface ServicesProps {
    data: any;
    version: "v1" | "v2" ;
}

const bannerComponents = {
    v1: FirstService,
    v2: SecondService,
};

const Services: React.FC<ServicesProps> = ({data, version}) => {
    const BannerComponent = bannerComponents[version];

    return <BannerComponent data={data}/>;
};

export default Services;
