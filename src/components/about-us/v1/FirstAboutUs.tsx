import React, {useEffect, useState} from "react";

export default function FirstAboutUs(props: { data: any }) {

    const [aboutData, setAboutData] = useState<any>([])

    useEffect(() => {
        setAboutData(props.data);
    }, [props.data])


    let aboutImage = "https://source.unsplash.com/random/1600x900";
    return (
        <section className="text-gray-600 body-font">
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row">
                    <div className="sm:w-1/2 flex justify-center">
                        <img src={aboutImage} alt="About Us" className="w-80 h-80 rounded-full object-cover" />
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
    )
}
