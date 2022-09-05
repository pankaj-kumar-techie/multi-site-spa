import React from "react";
import FirstHeroBanner from "../hero-banner/v1/FirstHeroBanner";
import FirstService from "./v1/FirstService";

interface Services {
    childComp?: React.ReactNode;
}

const ParentComp: React.FC<Services> = (props) => {
    const {childComp} = props;
    return <div>{childComp}</div>;
};

export const Services = (props: any) => {
    return (
        <>
            <ParentComp childComp={<FirstService data={props.data}></FirstService>}></ParentComp>

        </>

    )
}
export default Services;
