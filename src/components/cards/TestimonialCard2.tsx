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
        <div className="bg-white rounded-md m-3 p-6 md:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-4 space-y-4 md:space-y-0">
                <span className="inline-block h-6 w-6 mr-2 overflow-hidden"></span>
                <h5 className="text-xl md:text-2xl lg:text-3xl font-bold">{props.name}</h5>
                <div className="border-4 md:ml-8 border-palette-4-base rounded-full w-12 h-12 md:w-16 md:h-16 overflow-hidden mt-3 md:mt-0">
                    <img className="h-full w-full object-cover" src={props.imageSrc} alt={props.imageAlt} />
                </div>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-center">{props.testimonial}</p>
        </div>
    )
}