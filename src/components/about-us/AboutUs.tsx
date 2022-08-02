import FirstAboutUs from "./v1/FirstAboutUs";
import React, {useEffect, useState} from "react";
import SecondAboutUs from "./v2/SecondAboutUs";
import {Page} from "../../modal/Page";

interface AboutUs {
    childComp?: React.ReactNode;
}

const ParentComp: React.FC<AboutUs> = (props) => {
    const {childComp} = props;
    return <div>{childComp}</div>;
};


export const AboutUs = (props: any) => {
    // console.log("About Us :"+props.data);
    // const [data, setData] = useState<Page>(props.data);
    // useEffect(() => {
    //     setData(props.data);
    //     console.log('About Us Parent :', props);
    // }, [])
    return (
        <>
            <ParentComp childComp={<FirstAboutUs data={props.data}></FirstAboutUs>}></ParentComp>
            <ParentComp childComp={<SecondAboutUs></SecondAboutUs>}></ParentComp>
        </>
    );
}
export default AboutUs;
