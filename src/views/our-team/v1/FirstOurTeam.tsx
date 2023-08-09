import React, {useContext, useEffect, useState} from "react";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import OurTeamMemberCard from "../../../components/cards/OurTeamMemberCard";
import { ThemeContext } from "../../../themes/ThemeProvider";

const callouts = [
    {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]

export default function FirstOurTeam(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const [teemData, setTeemData] = useState<any>([]);
    useEffect(() => {
        setTeemData(props.data);
    }, [props.data]);

    return (
        <section className={`${theme.background.backgroundColor}`}>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                        <TitleCover title={teemData.title}></TitleCover>

                        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                            {callouts.map((callout) => (
                                <OurTeamMemberCard id={callout.name} name={callout.name}
                                                   description={callout.description}
                                                   href={callout.href} imageSrc={callout.imageSrc}
                                                   imageAlt={callout.imageAlt}></OurTeamMemberCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
