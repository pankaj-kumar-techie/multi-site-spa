import React from "react";
import FirstService from "./v1/FirstService";
import SecondService from "./v2/SecondService";
import ThirdService from "./v3/ThirdService";

interface ServicesProps {
    data: any;
    version: "v1" | "v2" | "v3" ;
}

const serviceComponents: {
    [key in ServicesProps["version"]]: React.FC<{ data: any }>;
} = {
    v1: FirstService,
    v2: SecondService,
    v3: ThirdService,
};

const Services: React.FC<ServicesProps> = ({data, version}) => {
    const ServiceComponent = serviceComponents[version];

    return <ServiceComponent data={data}/>;
};

export default Services;
