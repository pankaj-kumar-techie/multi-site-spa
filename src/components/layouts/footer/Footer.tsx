import React from "react";
import FirstFooter from "./v1/FirstFooter";

interface FooterProps {
    data: any;
    version: "v1";
}

const headerComponents = {
    v1: FirstFooter,
};

const Footer: React.FC<FooterProps> = ({data, version}) => {
    const FooterComponent = headerComponents[version];

    return <FooterComponent data={data}/>;
};

export default Footer;