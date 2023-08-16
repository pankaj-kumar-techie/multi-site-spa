import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButton: React.FC = () => {
    const openWhatsApp = () => {
        const phoneNumber = '9569576707';
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600"
            onClick={openWhatsApp}
        >
            <FaWhatsapp size={24} />
        </button>
    );
};

export default FloatingButton;
