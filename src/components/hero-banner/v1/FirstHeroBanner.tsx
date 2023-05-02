import React, {useEffect, useState} from "react";
import Weather from "../../comman/Weather";

const styles1 = {
    section: "bg-gray-800 min-h-screen flex flex-col justify-center",
    title: "text-4xl font-bold text-white text-center",
    subTitle: "mt-3 max-w-md mx-auto text-xl text-gray-300 sm:text-2xl md:mt-5 md:text-3xl md:max-w-3xl text-center",
    buttonWrapper: "mt-10 sm:flex justify-center",
    button: "w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 md:py-3 md:text-lg md:px-8",
    buttonSecondary: "mt-3 rounded-md shadow sm:mt-0 sm:ml-3",
    buttonSecondaryLink: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-4 md:text-lg md:px-10"
};

const styles2 = {
    section: "bg-white-800 min-h-screen flex flex-col justify-center",
    title: "text-4xl font-bold text-gray-800 text-center",
    subTitle: "mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:text-3xl md:max-w-3xl text-right",
    buttonWrapper: "mt-10 sm:flex justify-center",
    button: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10",
    buttonSecondary: "mt-3 rounded-md shadow sm:mt-0 sm:ml-3",
    buttonSecondaryLink: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
};
export default function FirstHeroBanner(props: { data: any }) {
    const [bannerData, setBannerData] = useState<any>([])
    const [bannerTheme, setBannerTheme] = useState<string>("")
    const styles = {
        Theme1: styles1,
        Theme2: styles2,
    }[bannerTheme] || styles1;
    useEffect(() => {
        setBannerData(props.data);
        setBannerTheme(props.data.theme || "Theme1")
    }, [props.data])

    return (
        <section className={styles.section}>
            <Weather city={"Leh"} country={"India"}></Weather>
            <div className=" py-12 flex flex-col justify-center items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-right">
                        <h1 className={styles.title}>
                            {bannerData.title}
                        </h1>
                        <p className={styles.subTitle}>
                            {bannerData.subTitle}
                        </p>

                        <div className={styles.buttonWrapper}>
                            <div className={styles.button}>
                                <a
                                    href="/echo"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Get started
                                </a>
                            </div>
                            <div className={styles.buttonSecondary}>
                                <a
                                    href="/echo"
                                    className={styles.buttonSecondaryLink}
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
