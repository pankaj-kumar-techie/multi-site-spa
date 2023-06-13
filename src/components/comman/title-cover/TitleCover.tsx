import React from 'react';

interface TitleCoverProps {
    title: string;
    subtitle?: string;
    paragraph?: string;
    fontSize?: string;
    fontFamily?: string;
    textAlign?: "left" | "center" | "right";
}

const TitleCover: React.FC<TitleCoverProps> = ({
                                                   title,
                                                   subtitle = "",
                                                   paragraph = "",
                                                   fontSize = "text-4xl",
                                                   fontFamily = "font-medium",
                                                   textAlign = "center",
                                               }) => {
    const containerClasses = "text-center";
    const textClasses = `${fontSize} text-gray-800 ${fontFamily} ${getTextAlignmentClass(textAlign)}`;

    function getTextAlignmentClass(textAlign: "left" | "center" | "right"): string {
        return `text-${textAlign}`;
    }

    return (
        <div className={containerClasses}>
            <h2 className={textClasses}>{title}</h2>
            {subtitle && <h4 className={textClasses}>{subtitle}</h4>}
            {paragraph &&
                <p className={`mt-2 text-xl text-gray-600 ${fontFamily} ${getTextAlignmentClass(textAlign)}`}>{paragraph}</p>}
        </div>
    );
};

export default TitleCover;
