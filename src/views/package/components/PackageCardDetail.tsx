import React, { useContext, useEffect, useState } from "react";
import { Package } from "../../../modal/Section";
import { ThemeContext } from "../../../themes/ThemeProvider";
import Form from "../../../components/common/dynamic-form/DynamicForm";
import ItineraryCard from "./ItineraryCard";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";
import TitleCover from "../../../components/common/title-cover/TitleCover";

const PackageDetailCard = (packageDetailProps: Package) => {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const itinerary = [
        { id: 1, title: "Day 1: Arrival in Destination", description: "Explore the local surroundings and get settled." },
        { id: 2, title: "Day 2: Outdoor Adventure", description: "Embark on an exciting outdoor expedition." },
        { id: 3, title: "Day 3: Explore Local Attractions", description: "Discover the beauty of the area's attractions." },
        { id: 4, title: "Day 4: Cultural Experience", description: "Immerse yourself in the local culture and traditions." },
        { id: 5, title: "Day 5: Departure", description: "Bid farewell to an unforgettable journey." },
    ];

    const handleFormSubmit = (formData: Record<string, any>) => {
        // Handle form submission logic here
        // You can replace setStatus('success') with actual submission code
    };

    const [offset, setOffset] = useState(0);
    const percentage = 75;

    useEffect(() => {
        const progressOffset = 251.2 - (251.2 * percentage) / 100;
        setOffset(progressOffset);
    }, [percentage]);

    return (
        <section className={`bg-${theme.colors.primary} mx-auto mt-8`}>
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left side - Package Details */}
                <div className="col-span-2">
                    <img
                        src={packageDetailProps.imageSrc}
                        alt={packageDetailProps.imageAlt}
                        className="w-full h-64 object-cover object-center mb-4"
                    />
                    <div className="flex items-center justify-between">
                        <h1 className={`${textColor} text-3xl font-bold`}>
                            {packageDetailProps.name}
                        </h1>
                    </div>
                    <p className={`${textColor} text-lg leading-relaxed mb-4`}>
                        {packageDetailProps.description}
                    </p>
                    <div className="flex flex-row items-center">

                        <div className=" mt-5 basis-2/4">
                            <div className="inline-grid">
                                <div className={`${textColor} text-lg  mb-4`}>
                                    <span className={`${textColor} font-semibold`}>Duration:</span> {packageDetailProps.duration}
                                </div>
                                <div className={`${textColor} text-lg  mb-4`}>
                                    <span className={`${textColor} font-semibold`}>Price:</span> {packageDetailProps.price}
                                </div>
                                <div className={`${textColor} text-lg  mb-4`}>
                                    <span className={`${textColor} font-semibold`}>Destination:</span> {packageDetailProps.destination}
                                </div>
                            </div>
                        </div>
                        <div className="w-20 h-20 relative basis-2/4">
                            <p className={`${textColor} text-center text-sm font-medium mb-1`}>Difficulty </p>
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke={theme.colors.secondary || "#6ee7b7"}
                                    strokeWidth="10"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke={"#6ee7b7"}
                                    strokeWidth="10"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={offset}
                                    strokeLinecap="round"
                                    transform="rotate(-90 50 50)"
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    className={`text-lg font-bold`}
                                    fill="white"
                                >
                                    {percentage}%
                                </text>
                            </svg>
                        </div>
                    </div>

                    <div className={`${textColor} text-lg  mb-4 mt-13`}>
                        <span className={`${textColor} font-semibold`}>Itinerary:</span>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            {itinerary.map((item, index) => (
                                <ItineraryCard key={index} id={index} title={item.title} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right side - Booking Form */}
                <div className="col-span-1 p-4 rounded-lg shadow-md">
                    <TitleCover
                        title={"Unlock Exclusive Deals!"}
                        subtitle={`Provide your details below and plan your ${packageDetailProps.name} adventure.`}
                        titleColor={textColor}
                        subtitleColor={textColor}
                    ></TitleCover>
                    <Form
                        fields={[
                            { name: 'name', label: 'Full Name', type: 'text', required: true },
                            { name: 'mobile', label: 'Phone Number', type: 'tel', required: true },
                            {
                                name: 'participants', label: 'Number of Participants', type: 'number', required: true,
                            },
                            {
                                name: 'additionalInclusions', label: 'Additional Inclusions', type: 'checkbox',
                                options: [
                                    { label: 'Guided Tours or Excursions', value: 'guidedTours' },
                                    { label: 'Equipment Rental', value: 'equipmentRental' },
                                    { label: 'Photography Services', value: 'photographyServices' },
                                    { label: 'Cultural Experiences', value: 'culturalExperiences' },
                                ],
                            },
                            {
                                name: 'level', label: 'Level of Trekking Experience', type: 'radio', required: true,
                                options: [
                                    { label: 'Beginner', value: 'beginner' },
                                    { label: 'Intermediate', value: 'intermediate' },
                                    { label: 'Advanced', value: 'advanced' },
                                ],
                            },
                            {
                                name: 'accommodation', label: 'Accommodation Type', type: 'radio', required: true,
                                options: [
                                    { label: 'Teahouse', value: 'teahouse' },
                                    { label: 'Camping', value: 'camping' },
                                    { label: 'Lodge', value: 'lodge' },
                                ],
                            },

                            { name: 'comments', label: 'Additional Comments', type: 'textarea' },
                        ]}
                        level="Get Travel Quotation"
                        onSubmit={handleFormSubmit}
                    />

                </div>
            </div>
        </section>
    );
};

export default PackageDetailCard;
