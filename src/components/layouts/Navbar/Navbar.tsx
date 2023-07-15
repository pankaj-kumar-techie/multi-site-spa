import React from "react";

interface HeaderProps {
    data: any;
    version: "v1";
}

const navComponents = {
    v1: ,
};

const Navbar: React.FC<HeaderProps> = ({data, version}) => {
    const NavComponent = navComponents[version];

    return <NavComponent data={data}/>;
};

export default Navbar;
