import React from "react";
import FirstAboutUs from "./v1/FirstAboutUs";
import SecondAboutUs from "./v2/SecondAboutUs";

interface AboutUsProps {
    data: any;
    version: "v1" | "v2" ;
}

const aboutComponents = {
    v1: FirstAboutUs,
    v2: SecondAboutUs,
};

const AboutUs: React.FC<AboutUsProps> = ({data, version}) => {
    const AboutComponent = aboutComponents[version];

    return <AboutComponent data={data} textColor=""/>;
};

export default AboutUs;
