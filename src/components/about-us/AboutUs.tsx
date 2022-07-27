import FirstAboutUs from "./v1/FirstAboutUs";
import React from "react";

interface AboutUs {
    childComp?: React.ReactNode;
}

const ParentComp: React.FC<AboutUs> = (props) => {
    const {childComp} = props;
    return <div>{childComp}</div>;
};

export default function AboutUs() {
    return (
        <>
            <ParentComp childComp={<FirstAboutUs></FirstAboutUs>}></ParentComp>
        </>
    );
}
