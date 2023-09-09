import React, { useContext } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { ThemeContext } from '../../../themes/ThemeProvider';

interface FloatingButtonProps {
    phoneNumber?: string;
    whatsappText?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ phoneNumber, whatsappText }) => {
    const { theme } = useContext(ThemeContext);
    const openWhatsApp = () => {
        const baseWhatsAppUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
        const whatsappUrl = whatsappText
            ? `${baseWhatsAppUrl}&text=${encodeURIComponent(whatsappText)}`
            : baseWhatsAppUrl;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            className={`fixed bottom-4 right-4 ${theme.colors.secondary} text-white p-4 rounded-full shadow-md hover:bg-blue-600 z-10`}
            onClick={openWhatsApp}
        >
            <FaWhatsapp size={24} />
        </button>
    );
};

export default FloatingButton;
