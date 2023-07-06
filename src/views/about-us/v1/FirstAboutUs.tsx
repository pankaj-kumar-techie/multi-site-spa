import React, {useEffect, useState} from "react";
import SectionStyle from "../../../modal/SectionStyle";

interface FirstAboutUsProps {
    data: any;
}



const styles: { [key: string]: SectionStyle } = {
    CLASSIC: {
        section: "text-gray-600 body-font",
        backgroundColor: "bg-purssian-blue",
        title:
            "text-3xl font-extrabold text-center mt-10 text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
        imageWrapper: "hidden",
        bodyWrapper: "sm:w-1/2 sm:pl-16",
        aboutImage:
            "https://www.gotahoenorth.com/wp-content/uploads/2014/12/mainphoto-640x440.jpg",
        aboutImageWrapper: "w-full h-full rounded-lg shadow-lg object-cover",
        buttonWrapper: "mt-10 sm:flex justify-center",
        button: "flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white md:text-lg",
        buttonSecondary: "mt-3 sm:w-[250px] rounded-md flex justify-center content-center sm:mt-0 sm:ml-3",
        buttonSecondaryLink: "w-[250px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:text-white hover:from-pink-500 hover:bg-custom-blue md:py-4 md:text-lg md:px-10",
    },
    MODERN: {
        section: "text-gray-600 body-font relative overflow-hidden",
        backgroundColor: "bg-white-900",
        title: "text-3xl font-extrabold text-black sm:text-4xl mb-6",
        subTitle: "text-black text-lg mb-6",
        imageWrapper: "absolute top-[10%] z-0 left-[-30%] h-[1500px] translate-x-[-50%]",
        bodyWrapper: "sm:w-1/2 z-[9] sm:pl-16",
        aboutImage:
            "https://beeready.in/wp-content/uploads/2022/05/Diwali-Hamper-1-scaled.jpg",
        aboutImageWrapper: "w-80 z-50 h-80 rounded-full object-cover",
    },
    PLAIN: {
        section: "text-gray-600 body-font",
        backgroundColor: "bg-red-500",
        title:
            "text-3xl font-extrabold text-center mt-10 text-black sm:text-4xl mb-6",
        subTitle: "text-black text-lg mb-6",
        imageWrapper: "hidden",
        bodyWrapper: "sm:w-1/2 sm:pl-16",
        aboutImage: "https://example.com/image.jpg",
        aboutImageWrapper: "w-full h-full rounded-lg shadow-lg object-cover",
    },
    // Add more styles for additional themes as needed
};

const FirstAboutUs: React.FC<FirstAboutUsProps> = ({ data }) => {
    const [aboutData, setAboutData] = useState<any>({});
    const [bannerTheme, setBannerTheme] = useState<string>("CLASSIC");

    useEffect(() => {
        setAboutData(data);
        setBannerTheme(data.style || "CLASSIC");
    }, [data]);

    const selectedStyle: SectionStyle = styles[bannerTheme] || styles.CLASSIC;

    return (
        <section className={selectedStyle.section}>
            <div className={selectedStyle.backgroundColor}>
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row">
                    <div className="sm:w-1/2 flex justify-center transform transition duration-1000 hover:scale-110">
                        <img
                            src={aboutData?.images?.[0]?.imageSrc||selectedStyle.aboutImage}
                            alt="About Us"
                            className={selectedStyle.aboutImageWrapper}
                        />
                    </div>
                    <div className={selectedStyle.bodyWrapper}>
                        <h2 className={selectedStyle.title}>{aboutData.title}</h2>
                        <p className={selectedStyle.subTitle}>{aboutData.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstAboutUs;
