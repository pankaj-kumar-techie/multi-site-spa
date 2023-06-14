import React from "react";
import FirstComingSoon from "./v1/FirstComingSoon";

interface ComingSoonProps {
    data: any;
    version: "v1";
}

const comingSoonComponents = {
    v1: FirstComingSoon
};

const ComingSoon: React.FC<ComingSoonProps> = ({data, version}) => {
    const ComingSoonComponent = comingSoonComponents[version];

    return <ComingSoonComponent data={data}/>;
};

export default ComingSoon;

