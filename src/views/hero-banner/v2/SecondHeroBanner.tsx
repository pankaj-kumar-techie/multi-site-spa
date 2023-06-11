import {useEffect, useState} from "react";


const styles1 = {
    section: "bg-white dark:bg-gray-800",
    title: "text-4xl font-bold text-white text-center",
    subTitle: "mt-3 max-w-md mx-auto text-xl text-gray-300 sm:text-2xl md:mt-5 md:text-3xl md:max-w-3xl text-center",
    buttonWrapper: "mt-10 sm:flex justify-center",
    button: "w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 md:py-3 md:text-lg md:px-8",
};
const styles2 = {
    section: "bg-white dark:bg-white-800",
    title: "text-4xl font-bold text-white text-center",
    subTitle: "mt-3 max-w-md mx-auto text-xl text-gray-300 sm:text-2xl md:mt-5 md:text-3xl md:max-w-3xl text-center",
    buttonWrapper: "mt-10 sm:flex justify-center",
    button: "w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 md:py-3 md:text-lg md:px-8",
    buttonSecondary: "mt-3 rounded-md shadow sm:mt-0 sm:ml-3",
    buttonSecondaryLink: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-4 md:text-lg md:px-10"
};
export default function SecondHeroBanner(props: { data: any }) {
    const [bannerData, setBannerData] = useState<any>([])
    const [bannerTheme, setBannerTheme] = useState<string>("")
    const styles = {
        Theme1: styles1,
        Theme2: styles2,
    }[bannerTheme] || styles1;
    //TODO: Set Default Style if `props.data.theme is null`
    useEffect(() => {
        setBannerData(props.data);
        setBannerTheme(props.data.theme|| "Theme1")
    }, [props.data])
    return (
        <section className={styles.section}>
            <div className="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
                <div className="flex flex-wrap -mx-8">
                    <div className="w-full lg:w-1/2 px-8">
                        <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                            <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
                                {bannerData.title}
                            </h2>
                            <p className="mb-8 leading-loose text-gray-500 dark:text-gray-30">
                                We offer a variety of travel services to destinations all around the world. Whether
                                you're planning a romantic getaway, a family vacation, or a solo adventure, we've got
                                you covered. Our team of experienced travel experts will work with you to create the
                                perfect itinerary, tailored to your needs and preferences.
                            </p>
                            <p className="mb-8 leading-loose text-gray-500 dark:text-gray-30">
                                With our extensive network of travel partners, we can offer you exclusive deals on
                                flights, hotels, car rentals, and more. And our 24/7 customer support means that we're
                                always here for you, no matter where in the world you are.
                            </p>
                            <div className="w-full md:w-1/3">
                                <button
                                    type="button"
                                    className={styles.button}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-8">
                        <img
                            src="https://source.unsplash.com/600x600/?travel"
                            alt="Travel"
                            className="object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
