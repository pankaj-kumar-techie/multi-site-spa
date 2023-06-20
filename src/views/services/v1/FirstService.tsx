import {useEffect, useState} from "react";
import ServiceCard from "../../../components/cards/ServiceCard";
import TitleCover from "../../../components/comman/title-cover/TitleCover";
import { Service } from "../../../modal/Section";

export default function FirstService(props: { data: any }) {

    const [serviceData, setServiceData] = useState<any>({
        title: "",
        description: "",
        services: [],
      });


    useEffect(() => {
        setServiceData(props.data);
    }, [props.data]);

    return (
        <section className="pt-20 bg-custom-brown p-10 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <TitleCover title={serviceData.title} subtitle={""} paragraph={serviceData.description}></TitleCover>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {serviceData.services.map((s:Service) => (
                        <ServiceCard
                            key={s.id}
                            icon={s.imageSrc}
                            iconAlt={s.imageAlt}
                            title={s.title}
                            body={s.body}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
