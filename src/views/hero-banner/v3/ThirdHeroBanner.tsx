import {useEffect, useState} from "react";

export default function ThirdHeroBanner(props: { data :any}){
    const[bannerData,setBannerData] = useState<any>([])

    useEffect(() => {
        setBannerData(props.data);
    },[props.data])
    return(
        <section className="relative">
            <div className="bg-gray-100 min-h-screen py-10">
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        Explore the World on a Budget
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        The project aims to provide valuable insights and resources for budget travelers seeking to explore the world. Our focus is on helping travelers save money, plan their trips effectively, and experience memorable adventures without breaking the bank.
                    </p>
                    <div className="flex justify-center items-center">
                        <img
                            src="https://source.unsplash.com/600x600/?travel"
                            alt="Travel"
                            className="object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features:</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Tips and tricks for traveling like a pro</li>
                            <li>Guides on saving money while traveling</li>
                            <li>Best travel destinations on a budget</li>
                            <li>Planning tools and resources</li>
                            <li>Personalized recommendations for memorable experiences</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
