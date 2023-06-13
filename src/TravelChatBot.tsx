import React from "react";
import HeroBanner from "./views/hero-banner/HeroBanner";
import AboutUs from "./views/about-us/AboutUs";
import Product from "./views/product/Product";
import Testimonials from "./views/testimonials/Testimonials";

const TravelChatBot = () => {
    const data = {
        "type": "HeroBanner",
        "id": null,
        "title": "Gayatri Lodge!",
        "subTitle": "Have a question or need help planning your trip? Contact us using the information below or fill out the form and we'll get back to you as soon as the form and we'll get back to you as soon as possiblethe",
        "description": "Inspirational designs illustrations",
        "version": "v1",
        "style": null,
        "tagline": "",
        "banner": null,
        "slides": null,
        "delay": 0
    }

    return (
        <>
            <HeroBanner data={data} version={"v1"}></HeroBanner>
            <AboutUs data={data} version={"v1"}></AboutUs>
            <Product data={data} version={"v1"}></Product>
            <Testimonials data={data} version={"v1"}></Testimonials>

            <div className="bg-gray-900">
                <div className="relative h-screen w-full overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cover bg-center"
                         style={{backgroundImage: "url('/images/robotic-hero-bg.jpg')"}}></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-60"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <h1 className="text-4xl font-bold text-white leading-tight mb-4">Discover the world with our
                            Robotic Travel Agents</h1>
                        <p className="text-lg text-white leading-tight mb-8">Experience the future of travel with our
                            cutting-edge robotic technology.</p>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default TravelChatBot;
