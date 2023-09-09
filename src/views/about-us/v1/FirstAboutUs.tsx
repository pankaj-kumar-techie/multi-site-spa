import React, { useContext, useEffect, useState } from "react";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";

interface FirstAboutUsProps {
    data: any;
}

const FirstAboutUs: React.FC<FirstAboutUsProps> = ({ data }) => {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");

    const [aboutData, setAboutData] = useState<any>({});

    useEffect(() => {
        setAboutData(data);
    }, [data]);

    if (!aboutData.title) {
        return <SectionShimmer title={"About Us"}></SectionShimmer>;
    }

    return (
        <section className={`bg-${theme.colors.primary} font-bold`}>
            <div className={""}>
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row">
                    <div className="sm:w-1/2 flex justify-center transform transition duration-1000 hover:scale-110">
                        <img
                            src={aboutData?.images?.[0]?.imageSrc || ""}
                            alt="About Us"
                            className="rounded-xl"
                        />
                    </div>
                    <div className="sm:w-1/2 sm:pl-16">
                        <TitleCover
                            title={aboutData.title}
                            paragraph={aboutData.description}
                            textAlign="center" titleColor={`${textColor}`} paragraphColor={`${textColor}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstAboutUs;
