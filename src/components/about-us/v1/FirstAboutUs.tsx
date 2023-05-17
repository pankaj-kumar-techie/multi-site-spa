import React, {useEffect, useState} from "react";

export default function FirstAboutUs(props: { data: any }) {

    const [aboutData, setAboutData] = useState<any>([])

    useEffect(() => {
        setAboutData(props.data);
    }, [props.data])


    let aboutImage = "	https://stackoverflow.co/img/product/home/bg-header-mobile.png";
    let aboutImage2 = "	https://stackoverflow.co/img/product/teams/teams-integrations-spot.svg";
    return (
        <>
        <section className=" text-gray-600 body-font">
            <div className="bg-orange-200">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row">
                    <div className="sm:w-1/2 flex justify-center">
                        <img src={aboutImage2} alt="About Us" className="w-80 h-80  object-cover" />
                    </div>
                    <div className="sm:w-1/2 sm:pl-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">{aboutData.title}</h2>
                        <p className="text-gray-600 text-lg mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-gray-600 text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className=" text-gray-600 body-font  relative overflow-hidden ">
            <div className="bg-gray-900 ">
                <img className="absolute top-[-550px] z-0    left-[50%] h-[1500px] translate-x-[-50%]" src="	https://www.jetbrains.com/company/parts/about-page/svg/about_beam.svg" alt="" />
                <div className="max-w-7xl   mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row">
                    <div className="sm:w-1/2 flex justify-center">
                        <img src={aboutImage} alt="About Us" className="w-80 z-50 h-80 rounded-full object-cover" />
                    </div>
                    <div className="sm:w-1/2 z-[9] sm:pl-16">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">{aboutData.title}</h2>
                        <p className="text-white text-lg mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-white text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
