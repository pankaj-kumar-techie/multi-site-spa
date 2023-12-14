import React, { useContext } from 'react';
import { ThemeContext } from '../../../themes/ThemeProvider';
import { useDynamicTextColor } from '../../../themes/DynamicTextColor';

interface ItineraryCardProps {
    title: string;
    description: string;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ title, description }) => {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.secondary || "");

    return (
        <div className={`bg-white p-4 rounded-lg shadow-md mb-4 ${textColor}`}>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ItineraryCard;
