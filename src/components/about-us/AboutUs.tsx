import FirstAboutUs from "./v1/FirstAboutUs";
import React from "react";
import SecondAboutUs from "./v2/SecondAboutUs";

interface AboutUs {
    childComp?: React.ReactNode;
}

const ParentComp: React.FC<AboutUs> = (props) => {
    const {childComp} = props;
    return <div>{childComp}</div>;
};


export const AboutUs = (props: any) => {
    return (
        <>
            <ParentComp childComp={<FirstAboutUs data={props.data}></FirstAboutUs>}></ParentComp>
            <ParentComp childComp={<SecondAboutUs></SecondAboutUs>}></ParentComp>
        </>
    );
}
export default AboutUs;
