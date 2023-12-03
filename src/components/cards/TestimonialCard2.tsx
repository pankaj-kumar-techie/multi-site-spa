import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeProvider";
import { useDynamicTextColor } from "../../themes/DynamicTextColor";

export default function TestimonialCard2(props: {
    id: any,
    name: string,
    designation: string,
    testimonial: any,
    imageSrc: any,
    imageAlt: any
}) {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    return (
        <div className="bg-white rounded-md m-3 p-6">
            <div className="flex items-center mb-4">
                <span className="inline-block h-6 w-6 mr-2 overflow-hidden"></span>
                <h5 className="flex text-3xl">{props.name}</h5>
                <div className="border-7 ms-8 border-palette-4-base rounded-full w-16 h-16 overflow-hidden">
                    <img className="h-full w-full object-cover" src={props.imageSrc} alt={props.imageAlt} />
                </div>
            </div>

            {/*<h6 className={`font-medium text-primary dark:text-primary-400`}>*/}
            {/*    {props.designation}*/}
            {/*</h6>*/}



            <p className={`text-4 text-right`}>{props.testimonial}</p>
        </div>
    )
}