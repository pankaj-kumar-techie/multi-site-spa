import React from "react";
import FirstPortfolio from "./v1/FirstPortfolio";

interface Portfolio {
    childComp?: React.ReactNode;
}

const ParentComp: React.FC<Portfolio> = (props) => {
    const {childComp} = props;
    return <div>{childComp}</div>;
};

export const  Portfolio = () => {
    return (
        <>
            <ParentComp childComp={<FirstPortfolio></FirstPortfolio>}></ParentComp>
        </>

    )
}
export default Portfolio;
