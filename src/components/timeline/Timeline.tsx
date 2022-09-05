import React from "react";
import SecondTimeline from "./v2/SecondTimeline";

interface TimeLine {
    childComp?: React.ReactNode;
}

const ParentComp: React.FC<TimeLine> = (props) => {
    const {childComp} = props;
    return <div>{childComp}</div>;
};

export const HeroBanner = (props: any) =>  {
    return (
        <>
            {/*<ParentComp childComp={<FirstTimeline></FirstTimeline>}></ParentComp>*/}
            <ParentComp childComp={<SecondTimeline data={props.data}></SecondTimeline>}></ParentComp>
        </>

    )
}
export default HeroBanner;
