import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { Service } from "../../../modal/Section";
import ServiceCard2 from "../../../components/cards/ServiceCard2";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";


export default function ThirdService(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const [serviceData, setServiceData] = useState<any>({
        title: "",
        description: "",
        services: [],
    });
    useEffect(() => {
        setServiceData(props.data);
    }, [props.data]);
    if (!serviceData.services) {
        return <SectionShimmer title={serviceData.title}></SectionShimmer>;
    }
    return (
        <>
            <section className="flex items-center py-20 bg-white lg:h-screen dark:bg-gray-800">
                <div className="px-4 mx-auto max-w-7xl">
                    <div className="grid mx-5 grid-cols-1 gap-0 lg:gap-0 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2 mb-10">
                        <div className="">
                            <h1 className="text-6xl font-bold">{serviceData.title}</h1>
                            <span className="text-6xl font-bold text-teal-500">
                                Activities
                            </span>
                        </div>
                        <div className="">
                            <h3 className="text-lg font-bold">{serviceData.subTitle}</h3>
                            <p className="text-lg">{serviceData.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 lg:gap-6 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            serviceData.services.map((item: Service) => (
                                <div key={item.id} className="relative">
                                    <img
                                        className="object-cover w-52 mx-auto transition-all rounded-[3rem] border-[10px] border-teal-400 h-52"
                                        src={item.imageSrc}
                                        alt={item.imageAlt} />
                                    <button className="bg-teal-400 rounded-lg text-white font-bold h-12 w-32 absolute bottom-[30px] left-[60px]">
                                        {item.title}
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            </section></>
    )
}
