import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { Service } from "../../../modal/Section";
import ServiceCard2 from "../../../components/cards/ServiceCard2";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";


export default function SecondService(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
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
        <section id="services" className={`bg-${theme.colors.secondary}`}>
            <div className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
                <TitleCover title={serviceData.title} titleColor={`text-${theme.colors.secondary}`}></TitleCover>
                <div className="container xl:max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap flex-row -mx-4 text-center">
                        {serviceData.services.map((s: Service) => (
                            <ServiceCard2 key={s.id} icon={s.imageSrc} iconAlt={s.imageAlt} title={s.title} body={s.body} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
