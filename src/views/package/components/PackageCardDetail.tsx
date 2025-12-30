import React, { useEffect, useState } from "react";
import { Itinerary, PackageDetail } from "../../../modal/Section";
import Form from "../../../components/common/dynamic-form/DynamicForm";
import ItineraryCard from "./ItineraryCard";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import calculateDifficultyPercentage from "../../../utils/difficultyCalculator";
import { FaClock, FaMapMarkerAlt, FaTag } from "react-icons/fa";

const PackageDetailCard = (packageDetailProps: PackageDetail) => {
    const itinerary = [
        { id: 1, title: "Day 1: Arrival & Briefing", description: "Arrive at the base camp, meet your guides, and undergo a comprehensive safety briefing. Gear check and local acclimatization walk." },
        { id: 2, title: "Day 2: The Ascent Begins", description: "Early start for the first major climb. Pass through scenic alpine forests and reach the first high-altitude camp by mid-afternoon." },
        { id: 3, title: "Day 3: Summit Push", description: "The most challenging day. A steep climb to the summit for sunrise, followed by a panoramic view of the Himalayan range." },
        { id: 4, title: "Day 4: Descent & Cultural Immersion", description: "Descend to a mountain village. Spend the evening with local families, learning about their traditions and enjoying local cuisine." },
        { id: 5, title: "Day 5: Return Journey", description: "Leisurely trek back to the trailhead. Transfer to the airport/station with unforgettable memories." },
    ];

    const createQuotationRequestMessage = (formData: Record<string, any>) => {
        const { name, mobile, participants, comments } = formData;
        const { id, name: packageName } = packageDetailProps;
        return `
🌟 *Travel Quotation Request* 🌟

Hi! I'm ${name}, interested in the "${packageName}" adventure.

🌄 Package: https://pahariyatri.com/packages/${id}
👤 Name: ${name}
📱 Mobile: ${mobile}
👥 Participants: ${participants}
💬 Comments: ${comments || 'None'}

Looking forward to the trip details!
        `.trim();
    };

    const handleFormSubmit = (formData: Record<string, any>) => {
        const message = createQuotationRequestMessage(formData);
        const baseWhatsAppUrl = `https://api.whatsapp.com/send?phone=9569576707`;
        window.open(`${baseWhatsAppUrl}&text=${encodeURIComponent(message)}`, '_blank');
    };

    const [offset, setOffset] = useState(0);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const calculatedPercentage = calculateDifficultyPercentage(packageDetailProps.difficulty);
        setPercentage(calculatedPercentage);
        setOffset(251.2 - (251.2 * calculatedPercentage) / 100);
    }, [packageDetailProps.difficulty]);

    return (
        <section className="bg-slate-50 py-12 md:py-20 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Header Image */}
                        <div className="relative group rounded-[2.5rem] overflow-hidden shadow-hard aspect-video">
                            <img
                                src={packageDetailProps.imageSrc}
                                alt={packageDetailProps.imageAlt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
                                    {packageDetailProps.name}
                                </h1>
                                <div className="flex flex-wrap gap-6 text-white/90">
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-primary-400" />
                                        <span className="font-medium">{packageDetailProps.destination}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-primary-400" />
                                        <span className="font-medium">{packageDetailProps.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaTag className="text-primary-400" />
                                        <span className="font-medium">{packageDetailProps.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-premium border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">About this Adventure</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {packageDetailProps.description}
                            </p>

                            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Difficulty</p>
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-12 h-12">
                                            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                                <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                                                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12"
                                                    strokeDasharray="251.2" strokeDashoffset={offset} strokeLinecap="round" className="text-primary-600" />
                                            </svg>
                                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">{percentage}%</span>
                                        </div>
                                        <span className="font-bold text-slate-900">{packageDetailProps.difficulty}</span>
                                    </div>
                                </div>
                                {/* Add more metadata cells if needed */}
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-display font-extrabold text-slate-900">Planned Itinerary</h2>
                                <span className="bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-bold">5 Days Breakdown</span>
                            </div>
                            <div className="space-y-4">
                                {itinerary.map((item: Itinerary, index) => (
                                    <ItineraryCard key={index} id={index} title={item.title} description={item.description} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Form */}
                    <div className="lg:col-span-4 sticky top-28">
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-hard border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/50 blur-3xl rounded-full -mr-16 -mt-16" />

                            <div className="relative z-10">
                                <TitleCover
                                    title={"Book Your Trip"}
                                    subtitle={`Get a personalized quote for your ${packageDetailProps.name} experience.`}
                                    titleColor="text-slate-900"
                                    subtitleColor="text-slate-500"
                                />

                                <div className="mt-8">
                                    <Form
                                        fields={[
                                            { name: 'name', label: 'Full Name', type: 'text', required: true },
                                            { name: 'mobile', label: 'Phone Number', type: 'tel', required: true },
                                            { name: 'participants', label: 'No. of Travelers', type: 'number', required: true },
                                            { name: 'comments', label: 'Special Requests', type: 'textarea' },
                                        ]}
                                        level="Travel Quotation Request"
                                        onSubmit={handleFormSubmit}
                                    />
                                </div>

                                <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                                    <p className="text-xs text-slate-500 text-center leading-relaxed">
                                        By submitting, you agree to our <strong>Terms of Service</strong> and will receive a quote via WhatsApp.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageDetailCard;
