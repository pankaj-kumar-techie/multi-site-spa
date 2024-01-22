import React from "react";
import FirstAboutUs from "./v1/FirstAboutUs";
import SecondAboutUs from "./v2/SecondAboutUs";
import ThirdAboutUs from "./v3/ThirdAboutUs";

interface AboutUsProps {
    data: any;
    version: "v1" | "v2" ;
}

const aboutComponents = {
    v1: ThirdAboutUs,
    v2: ThirdAboutUs,
};

const AboutUs: React.FC<AboutUsProps> = ({data, version}) => {
    const AboutComponent = aboutComponents[version];

    return <AboutComponent data={data}/>;
};

export default AboutUs;
