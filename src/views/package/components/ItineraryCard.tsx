import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface ItineraryCardProps {
    id: number;
    title: string;
    description: string;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ id, title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md">
            <button
                className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${isOpen ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {id + 1}
                    </div>
                    <h3 className={`text-base font-bold transition-colors duration-300 ${isOpen ? 'text-primary-600' : 'text-slate-900 group-hover:text-primary-600'}`}>
                        {title}
                    </h3>
                </div>
                <FaChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-600' : ''}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="px-6 pb-6 pt-0 ml-12">
                    <p className="text-slate-600 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItineraryCard;
