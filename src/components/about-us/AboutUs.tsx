import FirstAboutUs from "./v1/FirstAboutUs";
import React from "react";
import SecondAboutUs from "./v2/SecondAboutUs";

interface AboutUs {
    childComp?: React.ReactNode;
}

const ParentComp: React.FC<AboutUs> = (props) => {
    const {childComp} = props;
    return <div className={"bg-transparent"}>{childComp}</div>;
};

//ToDo: Refactor if else statement

export const AboutUs = (props: any) => {
    console.log("Version " + props.version);
    if (props.version == "v1"){
        return (
           <>
               <ParentComp childComp={<FirstAboutUs data={props.data}></FirstAboutUs>}></ParentComp>
           </>
        )
    }else {

        return (
            <>
                <ParentComp childComp={<SecondAboutUs></SecondAboutUs>}></ParentComp>
            </>
        );

    }
}
export default AboutUs;
