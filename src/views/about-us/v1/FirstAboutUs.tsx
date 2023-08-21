import React, { useContext, useEffect, useState } from "react";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import FloatingButton from "../../../components/common/button/FloatingButton";

interface FirstAboutUsProps {
    data: any;
}

const FirstAboutUs: React.FC<FirstAboutUsProps> = ({ data }) => {
    const { theme } = useContext(ThemeContext);
    const [aboutData, setAboutData] = useState<any>({});

    useEffect(() => {
        setAboutData(data);
    }, [data]);

    if (!aboutData.title) {
        return <SectionShimmer title={"About Us"}></SectionShimmer>;
    }

    return (
        <section className={`${theme.background.backgroundColorPrimary} font-bold`}>
            <div className={""}>
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row">
                    <div className="sm:w-1/2 flex justify-center transform transition duration-1000 hover:scale-110">
                        <img
                            src={aboutData?.images?.[0]?.imageSrc || ""}
                            alt="About Us"
                            className="rounded-xl"
                        />
                    </div>
                    <FloatingButton></FloatingButton>
                    <div className="sm:w-1/2 sm:pl-16">
                        <TitleCover
                            title={aboutData.title}
                            paragraph={aboutData.description}
                            textAlign="left" titleColor={theme.typography.firstFontColor} paragraphColor={theme.typography.firstFontColor}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstAboutUs;
