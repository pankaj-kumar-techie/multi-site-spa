import { useContext, useEffect, useState } from "react";
import ServiceCard from "../../../components/cards/ServiceCard";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { Service } from "../../../modal/Section";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";

export default function FirstService(props: { data: any }) {
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
        <section className={`bg-${theme.colors.primary} md:pt-20 pt-10  p-10 pb-12 lg:pt-[120px] lg:pb-[90px]`} >
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full pb-10 px-4">
                        <TitleCover title={serviceData.title} titleColor={`${textColor}`} subtitle={serviceData.subTitle}
                        subtitleColor={`${textColor}`} paragraphColor={`${textColor}`} paragraph={serviceData.description}></TitleCover>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {serviceData.services.map((s: Service) => (
                        <ServiceCard key={s.id} icon={s.imageSrc} iconAlt={s.imageAlt} title={s.title} body={s.body} />
                    ))}
                </div>
            </div>
        </section>
    );
}
