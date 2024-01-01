import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../themes/ThemeProvider';
import { useDynamicTextColor } from '../../../themes/DynamicTextColor';

interface ItineraryCardProps {
    id: number;
    title: string;
    description: string;
}


const ItineraryCard: React.FC<ItineraryCardProps> = ({ id, title, description }) => {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className={`${theme.colors.primary} rounded-lg shadow-md ${textColor}`}>
            {/* <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p>{description}</p> */}

            <div
                className="border rounded shadow mb-4"
            >
                <button
                    className={`w-full flex items-center justify-between px-4 py-3 focus:outline-none ${textColor}`} // Use dynamic text color
                    onClick={() => toggleAccordion(id)}
                >
                    <h3 className={`text-lg font-medium ${textColor}`}>{title}</h3>
                    <svg
                        className={`w-5 h-5 transition-transform ${activeIndex === id ? 'transform rotate-180' : ''
                            }`}
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M7 10l5 5 5-5z"
                        />
                    </svg>
                </button>
                {activeIndex === id && (
                    <div className={`px-4 py-3 ${textColor}`}>
                        <p>{description}</p>
                    </div>
                )}
            </div>
        </div>


    );
};

export default ItineraryCard;
