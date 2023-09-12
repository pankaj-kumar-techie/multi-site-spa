import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeProvider";
import { useDynamicTextColor } from "../../themes/DynamicTextColor";

export default function TestimonialCard(props: {
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
        <div className="lg:mb-12 px-12 lg:px-2 md:px-0 mb-0 md:mb-0">
            <div className="mb-6 flex justify-center">
                <img src={props.imageSrc} alt={props.imageAlt}
                    className="w-32 rounded-full shadow-lg dark:shadow-black/20  transform
            transition duration-1000 hover:scale-125"/>
            </div>
            <h5 className={`mb-2 ${textColor} text-lg font-bold`}>{props.name}</h5>
            <h6 className={`${textColor} mb-4 font-medium text-primary dark:text-primary-400`}>
                {props.designation}
            </h6>
            <p className={`mb-4 ${textColor}`}>
                {props.testimonial}
            </p>

        </div>
    )
}