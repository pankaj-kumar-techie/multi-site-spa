import React from "react";
import FirstAboutUs from "../about-us/v1/FirstAboutUs";
import FirstContactUs from "./V1/FirstContactUs";
import SecondContactUs from "./V2/SecondContactUs";

function ContactUs() {
    interface ContactUs {
        childComp?: React.ReactNode;
    }

    const ParentComp: React.FC<ContactUs> = (props) => {
        const {childComp} = props;
        return <div>{childComp}</div>;
    };

    return (
        <>
            <ParentComp childComp={<FirstContactUs></FirstContactUs>}></ParentComp>
            <ParentComp childComp={<SecondContactUs></SecondContactUs>}></ParentComp>

        </>
    );
}

export default ContactUs;
