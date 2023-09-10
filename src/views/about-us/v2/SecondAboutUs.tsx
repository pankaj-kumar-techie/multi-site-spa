import React, { useEffect, useState } from "react";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import Container from "../../../components/Container";

interface SecondAboutUsProps {
    data: {
        title: string;
        description: string;
        images: {
            imageSrc: string;
        }[];
    };
    textColor: string;
}

const SecondAboutUs: React.FC<SecondAboutUsProps> = ({ data, textColor }) => {
    const [aboutData, setAboutData] = useState(data);

    useEffect(() => {
        setAboutData(data);
        console.log("About Data", data);
    }, [data]);

    if (!aboutData.title) {
        return <SectionShimmer title="About Us" />;
    }

    return (
        <Container>
            {(containerTextColor: string | undefined) => (
                    <div className="overflow-hidden relative">
                        <img
                            src={aboutData?.images?.[0]?.imageSrc || ""}
                            alt="h"
                            className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0 rounded-full"
                        />
                        <div className=" w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                            <TitleCover
                                title={aboutData.title}
                                titleSize="text-6xl"
                                paragraph={aboutData.description}
                                textAlign="left"
                                titleColor={textColor} // Use dynamic text color here
                                paragraphColor={textColor} // Use dynamic text color here
                            />
                        </div>
                    </div>
            )}
        </Container>
    );
};

export default SecondAboutUs;
