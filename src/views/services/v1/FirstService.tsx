import {useEffect, useState} from "react";
import ServiceCard from "../../../components/cards/ServiceCard";
import TitleCover from "../../../components/comman/title-cover/TitleCover";

export default function FirstService(props: { data: any }) {

//Todo: get service list form props or api
    const [serviceData, setServiceData] = useState<any>([]);

    const services = [
        {
            id: 1,
            title: 'Parking Space',
            body: 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.',
            imageSrc: 'https://htmldemo.zcubethemes.com/riorelax/img/icon/sve-icon3.png',
            imageAlt: 'parking icon',
        },
        {
            id: 2,
            title: 'Room Service',
            body: 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.',
            imageSrc: 'https://htmldemo.zcubethemes.com/riorelax/img/icon/fe-icon01.png',
            imageAlt: 'parking icon',
        },
        {
            id: 3,
            title: 'Fibre Internet',
            body: 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.',
            imageSrc: 'https://htmldemo.zcubethemes.com/riorelax/img/icon/sve-icon2.png',
            imageAlt: 'parking icon',
        },
        {
            id: 4,
            title: 'Special Offers',
            body: 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.',
            imageSrc: 'https://htmldemo.zcubethemes.com/riorelax/img/icon/fe-icon08.png',
            imageAlt: 'parking icon',
        },
        {
            id: 5,
            title: 'Best Accommodation',
            body: 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.',
            imageSrc: 'https://htmldemo.zcubethemes.com/riorelax/img/icon/fe-icon05.png',
            imageAlt: 'parking icon',
        },
        {
            id: 6,
            title: 'Breakfast',
            body: 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.',
            imageSrc: 'https://htmldemo.zcubethemes.com/riorelax/img/icon/fe-icon05.png',
            imageAlt: 'parking icon',
        },
    ]

    useEffect(() => {
        setServiceData(props.data);
    }, [props.data]);

    return (
        <section className="pt-20 bg-custom-brown p-10 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <TitleCover title={"Our Services"} subtitle={""} paragraph={"There are many " +
                            "variations of passages of Lorem Ipsum available but the majority have suffered alteration " +
                            "in some form."}></TitleCover>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {services.map((s) => (
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
