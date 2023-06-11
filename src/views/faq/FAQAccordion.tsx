import React from "react";
import FirstFAQAccordion from "./v1/FirstFAQAccordion";

interface FAQAccordionProps {
    data: any;
    version: "v1";
}

const faqComponents = {
    v1: FirstFAQAccordion,
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({data, version}) => {
    const FAQComponent = faqComponents[version];

    return <FAQComponent data={data}/>;
};

export default FAQAccordion;
