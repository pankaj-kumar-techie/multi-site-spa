import React, { useEffect, useState } from "react";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import Container from "../../../components/Container";

interface FirstAboutUsProps {
    data: {
        title: string;
        description: string;
        images: {
            imageSrc: string;
        }[];
    };
    textColor: string;
}

const FirstAboutUs: React.FC<FirstAboutUsProps> = ({ data, textColor }) => {
    const [aboutData, setAboutData] = useState<FirstAboutUsProps["data"] | null>(null);

    useEffect(() => {
        setAboutData(data);
    }, [data]);

    if (!aboutData || !aboutData.title) {
        return <SectionShimmer title="About Us" />;
    }

    return (
        <Container>
            {(textColor: string | undefined) => ( // Pass textColor as a prop to Container
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row">
                    <div className="sm:w-1/2 flex justify-center transform transition duration-1000 hover:scale-110">
                        <img
                            src={aboutData.images?.[0]?.imageSrc || ""}
                            alt="About Us"
                            className="rounded-xl"
                        />
                    </div>
                    <div className="sm:w-1/2 sm:pl-16">
                        <TitleCover
                            title={aboutData.title}
                            paragraph={aboutData.description}
                            textAlign="center"
                            titleColor={textColor} // Use textColor prop
                            paragraphColor={textColor} // Use textColor prop
                        />
                    </div>
                </div>
            )}
        </Container>
    );
};

export default FirstAboutUs;
