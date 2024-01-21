import React from "react";
import FirstHeader from "./v1/FirstHeader";
import SecondHeader from "./v1/SecondHeader";
import SecondaryHeader from "./v2/SecondaryHeader";

interface HeaderProps {
    data: any;
    version: "v1" | "v2";
}

const headerComponents = {
    v1: SecondaryHeader,
    v2: SecondaryHeader,
};

const Header: React.FC<HeaderProps> = ({data, version}) => {
    const HeaderComponent = headerComponents[version];

    return <HeaderComponent />;
};

export default Header;
