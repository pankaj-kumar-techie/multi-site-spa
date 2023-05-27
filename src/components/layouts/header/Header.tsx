import React from "react";
import FirstHeader from "./v1/FirstHeader";

interface HeaderProps {
    data: any;
    version: "v1";
}

const headerComponents = {
    v1: FirstHeader,
};

const Header: React.FC<HeaderProps> = ({data, version}) => {
    const HeaderComponent = headerComponents[version];

    return <HeaderComponent data={data}/>;
};

export default Header;
