import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor"; // Import the hook

interface SecondAboutUsProps {
    data: any;
}

const SecondAboutUs: React.FC<SecondAboutUsProps> = ({ data }) => {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const [aboutData, setAboutData] = useState<any>({});

    useEffect(() => {
        setAboutData(data);
        console.log("About Data", data);
    }, [data]);

    if (!aboutData.title) {
        return <SectionShimmer title={"About Us"}></SectionShimmer>;
    }

    return (
        <section id={'about-us'} className={`bg-${theme.colors.primary} font-bold`}>
            <div className="overflow-hidden relative">
                <img
                    src={aboutData?.images?.[0]?.imageSrc || ""}
                    alt={"h"}
                    className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0 rounded-full"
                />
                <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <TitleCover
                        title={aboutData.title}
                        titleSize="text-6xl"
                        paragraph={aboutData.description}
                        textAlign="left"
                        titleColor={`${textColor}`}
                        paragraphColor={`${textColor}`}
                    />
                </div>
            </div>
        </section>
    );
};

export default SecondAboutUs;
