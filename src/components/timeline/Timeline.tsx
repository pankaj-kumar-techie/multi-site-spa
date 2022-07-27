import React from "react";
import SecondTimeline from "./v2/SecondTimeline";

interface TimeLine {
    childComp?: React.ReactNode;
}

const ParentComp: React.FC<TimeLine> = (props) => {
    const {childComp} = props;
    return <div>{childComp}</div>;
};

export default function Timeline() {
    return (
        <>
            {/*<ParentComp childComp={<FirstTimeline></FirstTimeline>}></ParentComp>*/}
            <ParentComp childComp={<SecondTimeline></SecondTimeline>}></ParentComp>
        </>

    )
}
