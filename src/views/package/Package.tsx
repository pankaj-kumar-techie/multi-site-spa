import React from "react";
import FirstPackage from "./v1/FirstPackage";

interface PackageProps {
    data: any;
    version: "v1";
}

const packageComponents = {
    v1: FirstPackage,
};

const Package: React.FC<PackageProps> = ({data, version}) => {
    const PackageComponent = packageComponents[version];
    return <PackageComponent data={data}/>;
};

export default Package;
