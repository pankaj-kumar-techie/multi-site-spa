import React from "react";
import FirstTermsAndConditions from "./v1/FirstTermsAndConditions";

interface TermsAndConditionsProps {
    data: any;
    version: "v1";
}

const components = {
    v1: FirstTermsAndConditions,
};

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({data, version}) => {
    const Component = components[version];

    return <Component data={data}/>;
};

export default TermsAndConditions;
