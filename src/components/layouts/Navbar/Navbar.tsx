import React from "react";
import FirstNavbar from "./v1/FirstNavbar";

interface HeaderProps {
    data: any;
    version: "v1";
}

const navComponents = {
    v1: FirstNavbar,
};

const Navbar: React.FC<HeaderProps> = ({data, version}) => {
    const NavComponent = navComponents[version];

    return <NavComponent data={data}/>;
};

export default Navbar;
