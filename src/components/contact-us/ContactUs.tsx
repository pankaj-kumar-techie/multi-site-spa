import React from "react";
import FirstContactUs from "./v1/FirstContactUs";
import SecondContactUs from "./V2/SecondContactUs";

interface ContactUs {
    childComp?: React.ReactNode;
}

const ParentComp: React.FC<ContactUs> = (props) => {
    const {childComp} = props;
    return <div>{childComp}</div>;
};

export const ContactUs = (props: any) => {
    return (
        <>
            {/*<ParentComp childComp={<FirstContactUs data={props.data}></FirstContactUs>}></ParentComp>*/}
            <ParentComp childComp={<SecondContactUs data={props.data}></SecondContactUs>}></ParentComp>
        </>
    );
}


export default ContactUs;
