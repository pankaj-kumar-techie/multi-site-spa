import React from "react";
import FirstFooter from "./v1/FirstFooter";
import SecondFooter from "./v1/SecondFooter";

interface FooterProps {
    data: any;
    version: "v1" | "v2";
}

const headerComponents = {
    v1: FirstFooter,
    v2: SecondFooter,
};

const Footer: React.FC<FooterProps> = ({data, version}) => {
    const FooterComponent = headerComponents[version];

    return <FooterComponent data={data}/>;
};

export default Footer;