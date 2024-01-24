import React from "react";
import FirstHeader from "./v1/FirstHeader";
import SecondHeader from "./v2/SecondHeader";
import ThirdHeader from "./v3/ThirdHeader";

interface HeaderProps {
    data: any;
    version: "v1" | "v2" | "v3";
}

const headerComponents = {
    v1: FirstHeader,
    v2: SecondHeader,
    v3: ThirdHeader,
};

const Header: React.FC<HeaderProps> = ({data, version}) => {
    const HeaderComponent = headerComponents[version];

    return <HeaderComponent data={data}/>;
};

export default Header;
