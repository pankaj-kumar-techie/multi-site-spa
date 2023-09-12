import React, { useContext, useEffect, useState } from "react";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";
import { VideoModel } from "../../../modal/Section";

function FirstVideo(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const [videoData, setVideoData] = useState<any>({
        title: "",
        description: "",
        images: [],
    });

    useEffect(() => {
        setVideoData(props.data);
    }, [props.data]);

    if (!videoData.videos) {
        return <SectionShimmer title={videoData.title}></SectionShimmer>;
    }

    return (
        <section className={`bg-${theme.colors.primary} md:py-16 py-10`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TitleCover
                    title={videoData.title}
                    subtitle=""
                    titleColor={textColor}
                    paragraph={videoData.paragraph}
                    paragraphColor={textColor}
                    titleSize={"text-4xl"}
                    textAlign="center"
                />
                <div className="md:mt-20 mt-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {videoData.videos.map((video:VideoModel) => (
                            <div className="aspect-w-16 aspect-h-9" key={video.id}>
                                <iframe
                                    title="YouTube Video"
                                    src={video.url}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirstVideo;
