import React from "react";

const TravelChatBot = () => {
    
    return (
        <>
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
