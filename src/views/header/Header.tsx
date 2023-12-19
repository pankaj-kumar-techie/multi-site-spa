import React from "react";
import FirstHeader from "./v1/FirstHeader";
import SecondHeader from "./v1/SecondHeader";

interface HeaderProps {
    data: any;
    version: "v1" | "v2";
}

const headerComponents = {
    v1: FirstHeader,
    v2: SecondHeader,
};

const Header: React.FC<HeaderProps> = ({data, version}) => {
    const HeaderComponent = headerComponents[version];

    return <HeaderComponent data={data}/>;
};

export default Header;
