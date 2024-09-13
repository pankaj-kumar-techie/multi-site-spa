import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { title } from "process";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import { Timeline } from "../../../modal/Section";

export default function FirstTimeline(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const [timelineData, setTimelineData] = useState<any>([]);

    useEffect(() => {
        setTimelineData(props.data);
    }, [props.data]);

    if (!timelineData.timelines) {
        return <SectionShimmer title={timelineData.title} />;
    }

    return (
        <section className={`py-20 bg-gradient-to-r from-${theme.colors.primary}-400 to-${theme.colors.primary}-600 relative`}>
            <div className="container mx-auto px-6 relative z-10">
                {/* Title Section */}
                <TitleCover
                    title={timelineData.title}
                    subtitle="Follow our structured approach step-by-step"
                    titleColor={textColor}
                />

                {/* Timeline Section */}
                <div className="container relative mt-16 xl:max-w-6xl mx-auto px-4">
                    {/* Vertical Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600 z-0"></div>

                    {timelineData.timelines.map((item: Timeline) => (
                        <div
                            key={item.id}
                            className={`timeline-step flex items-center justify-${item.id % 2 === 0 ? "start" : "end"} relative mb-16`}
                        >
                            {/* Connector Line */}
                            <div className={`absolute top-1/2 transform -translate-y-1/2 w-10 h-1 bg-gray-300 ${item.id % 2 === 0 ? "right-1/2" : "left-1/2"} z-0`}></div>

                            {/* Timeline Card */}
                            <div
                                className={`bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-3xl relative z-10 w-96 transform transition-all duration-500 hover:scale-105 ${item.id % 2 === 0 ? "mr-12" : "ml-12"
                                    }`}
                            >
                                {/* Step Icon */}
                                <div
                                    className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg`}
                                >
                                    {item.icon}
                                </div>

                                {/* Step Title and Description */}
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Button */}
                <div className="mt-20 text-center">
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition transform hover:scale-110">
                        Start Your Journey with Us!
                    </button>
                </div>
            </div>
        </section>
    );
}
