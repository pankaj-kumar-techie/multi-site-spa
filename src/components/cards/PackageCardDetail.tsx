import React, { useContext } from "react";
import { Package } from "../../modal/Section";
import { ThemeContext } from "../../themes/ThemeProvider";

export default function PackageDetailCard(packageDetailProps: Package) {
    const { theme } = useContext(ThemeContext);
    const itinerary = [
        "Day 1: Arrival in Destination",
        "Day 2: Explore Local Attractions",
        "Day 3: Outdoor Adventure",
        "Day 4: Cultural Experience",
        "Day 5: Departure",
    ];

    return (
        <div className={`bg-${theme.colors.secondary} container mx-auto px-4 py-8`}>
            <div className="relative">
                {/* Image Banner */}
                <img
                    src={packageDetailProps.imageSrc}
                    alt={packageDetailProps.imageAlt}
                    className="w-full h-64 object-cover object-center"
                />
            </div>
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        {packageDetailProps.name}
                    </h1>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {packageDetailProps.description}
                </p>
                <div className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">Duration:</span> {packageDetailProps.duration}
                </div>
                <div className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">Price:</span> {packageDetailProps.price}
                </div>
                <div className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">Destination:</span> {packageDetailProps.destination}
                </div>
                <div className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">Itinerary:</span>
                    <ul className="list-disc list-inside ml-6">
                        {itinerary.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
