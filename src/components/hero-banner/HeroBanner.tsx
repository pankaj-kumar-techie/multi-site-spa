/* This example requires Tailwind CSS v2.0+ */

import FirstHeroBanner from "./v1/FirstHeroBanner";
import React from "react";
import ThirdHeroBanner from "./v3/ThirdHeroBanner";

interface HeroBanner {
    childComp?: React.ReactNode;
}

const ParentComp: React.FC<HeroBanner> = (props) => {
    const {childComp} = props;
    return <div>{childComp}</div>;
};

export const HeroBanner = (props: any) =>  {
    return (
        <>
            <ParentComp childComp={<FirstHeroBanner data={props.data}></FirstHeroBanner>}></ParentComp>
            {/*<ParentComp childComp={<SecondHeroBanner></SecondHeroBanner>}></ParentComp>*/}
            {/*<ParentComp childComp={<ThirdHeroBanner data={props.data}></ThirdHeroBanner>}></ParentComp>*/}
        </>
    )
}
export default HeroBanner;
