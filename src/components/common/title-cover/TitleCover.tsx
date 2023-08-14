import React from 'react';

interface TitleCoverProps {
    title: string;
    subtitle?: string;
    paragraph?: string;
    titleSize?: string;
    subtitleSize?: string;
    paragraphSize?: string;
    fontFamily?: string;
    textAlign?: "left" | "center" | "right";
    titleColor?: string;
    subtitleColor?: string;
    paragraphColor?: string;
}
const TitleCover: React.FC<TitleCoverProps> = ({
    title,
    subtitle = '',
    paragraph = '',
    titleSize = 'text-4xl',
    subtitleSize = 'text-xl',
    paragraphSize = 'text-lg',
    fontFamily = 'font-medium',
    textAlign = 'center',
    titleColor = 'text-gray-800',
    subtitleColor = 'text-gray-800',
    paragraphColor = 'text-gray-600',
}) => {
    const containerClasses = 'text-center';
    const titleClasses = `${titleSize} ${titleColor} text-center md:pb-10 pb-5 ${fontFamily} ${getTextAlignmentClass(textAlign)}`;
    const subtitleClasses = `${subtitleSize} ${subtitleColor} text-center pb-10 ${fontFamily} ${getTextAlignmentClass(textAlign)}`;
    const paragraphClasses = `${paragraphSize} pb-5 md:pb-0 ${paragraphColor} ${fontFamily} ${getTextAlignmentClass(textAlign)}`;

    function getTextAlignmentClass(textAlign: "left" | "center" | "right"): string {
        return `text-${textAlign}`;
    }

    return (
        <div className={containerClasses}>
            <h2 className={titleClasses}>{title}</h2>
            {subtitle && <h4 className={subtitleClasses}>{subtitle}</h4>}
            {paragraph && <p className={paragraphClasses}>{paragraph}</p>}
        </div>
    );
};

export default TitleCover;
