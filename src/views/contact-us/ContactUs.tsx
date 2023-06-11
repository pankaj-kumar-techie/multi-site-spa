import React from "react";
import FirstContactUs from "./v1/FirstContactUs";
import SecondContactUs from "./v2/SecondContactUs";
import ThirdContactUs from "./v3/ThirdContactUs";

interface ContactUsProps {
    data: any;
    version: "v1" | "v2" | "v3";
}

const bannerComponents = {
    v1: FirstContactUs,
    v2: SecondContactUs,
    v3: ThirdContactUs,
};

const ContactUs: React.FC<ContactUsProps> = ({data, version}) => {
    const BannerComponent = bannerComponents[version];

    return <BannerComponent data={data}/>;
};

export default ContactUs;
