import React from "react";
import FirstFooter from "./v1/FirstFooter";
import SecondFooter from "./v1/SecondFooter";
import ThirdFooter from "./v1/ThirdFooter";

interface FooterProps {
    data: any;
    version: "v1" | "v2" | "v3";
}

const headerComponents = {
    v1: FirstFooter,
    v2: SecondFooter,
    v3: ThirdFooter
};

const Footer: React.FC<FooterProps> = ({ data, version }) => {
    const FooterComponent = headerComponents[version];

    return <FooterComponent data={data} />;
};

export default Footer;