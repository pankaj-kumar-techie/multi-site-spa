import React, { useContext, useEffect, useState } from "react";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import OurTeamMemberCard from "../../../components/cards/OurTeamMemberCard";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import { OurTeam } from "../../../modal/Section";


export default function FirstOurTeam(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const [teemData, setTeemData] = useState<any>([]);
    useEffect(() => {
        setTeemData(props.data);
    }, [props.data]);

    if (!teemData.ourTeam) {
        return <SectionShimmer title={teemData.title}></SectionShimmer>;
    }

    return (
        <section className={`${theme.background.backgroundColor}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    <TitleCover title={teemData.title} titleColor={theme.typography.firstFontColor}></TitleCover>

                    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                        {teemData.ourTeam.map((callout: OurTeam) => (
                            <OurTeamMemberCard id={callout.name} name={callout.name}
                                description={callout.description}
                                href={callout.href} imageSrc={callout.imageSrc}
                                imageAlt={callout.imageAlt}></OurTeamMemberCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
