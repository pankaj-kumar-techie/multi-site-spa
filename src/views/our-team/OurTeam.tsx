import React from "react";
import FirstOurTeam from "./v1/FirstOurTeam";

interface OurTeamProps {
    data: any;
    version: "v1";
}

const ourTeamComponents = {
    v1: FirstOurTeam,
};

const OurTeam: React.FC<OurTeamProps> = ({data, version}) => {
    const OurTeamComponent = ourTeamComponents[version];

    return <OurTeamComponent data={data}/>;
};

export default OurTeam;
