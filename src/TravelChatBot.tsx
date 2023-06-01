import React from "react";
import HeroBanner from "./components/hero-banner/HeroBanner";
import AboutUs from "./components/about-us/AboutUs";
import ContactUs from "./components/contact-us/ContactUs";
import Gallery from "./components/gallery/Gallery";
import Testimonials from "./components/testimonials/Testimonials";
import Timeline from "./components/timeline/Timeline";
import Services from "./components/services/Services";

const TravelChatBot = () => {
    
    return (
        <>
        <AboutUs key={"1"} data={""} version={"v1"}></AboutUs>
        <ContactUs key={"1"} data={""} version={"v1"}></ContactUs>
        <HeroBanner key={"1"} data={""} version={"v1"}></HeroBanner>
        <Gallery key={"1"} data={""} version={"v1"}></Gallery>
        <Testimonials  key={"1"} data={""} version={"v1"} ></Testimonials>
        <Timeline  key={"1"} data={""} version={"v1"} ></Timeline>
        <Services key={"1"} data={""} version={"v1"} ></Services>
        
        
        
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
