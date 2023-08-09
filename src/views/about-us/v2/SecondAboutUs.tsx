import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import TitleCover from "../../../components/common/title-cover/TitleCover";


interface SecondAboutUsProps {
    data: any;
}
const SecondAboutUs: React.FC<SecondAboutUsProps> = ({ data }) => {
    const { theme } = useContext(ThemeContext);
    const [aboutData, setAboutData] = useState<any>({});

    useEffect(() => {
        setAboutData(data);
        console.log("About Data", data);
    }, [data]);

    return (
        <section className={`${theme.background.backgroundColor} font-bold`}>
        <div className="bg-white overflow-hidden relative">
            <img src={aboutData?.images?.[0]?.imageSrc || ""} alt={"h"} className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0 rounded-full"/>
            <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <TitleCover
                    title={aboutData.title}
                    titleSize="text-6xl"
                    paragraph={aboutData.description}
                    textAlign="left"
                    titleColor={theme.typography.firstFontColor}
                    paragraphColor={theme.typography.firstFontColor}
                />
            </div>
        </div>
    </section>
    
    
    )
}
export default SecondAboutUs;
