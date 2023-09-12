import React from "react";
import FirstVideo from "./v1/FirstVideo";

interface VideoProps {
    data: any;
    version: "v1";
}

const videoComponents = {
    v1: FirstVideo,
};

const Video: React.FC<VideoProps> = ({data, version}) => {
    const VideoComponent = videoComponents[version];

    return <VideoComponent data={data}/>;
};

export default Video;
