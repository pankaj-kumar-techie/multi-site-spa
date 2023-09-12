import React, { useContext } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa'; // You can use a map icon
import { ThemeContext } from '../../../themes/ThemeProvider';
import { useDynamicTextColor } from '../../../themes/DynamicTextColor';

interface LocationButtonProps {
    locationName?: string; // Name of the location
    latitude?: number; // Latitude of the location
    longitude?: number; // Longitude of the location
}

const LocationButton: React.FC<LocationButtonProps> = ({ locationName, latitude, longitude }) => {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");

    const openLocationInGoogleMaps = () => {
        if (latitude !== undefined && longitude !== undefined) {
            const encodedLocationName = encodeURIComponent(locationName || ''); // Encode the location name
            const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&label=${encodedLocationName}`;
            window.open(mapUrl, '_blank');
        } else {
            console.error('Latitude and longitude are required to open Google Maps.');
        }
    };

    return (
        <button
            className={`fixed bottom-4 right-4 ${theme.buttons.primary} ${textColor} p-4 rounded-full shadow-md hover:bg-${theme.buttons.secondary} z-10`}
            onClick={openLocationInGoogleMaps}
            title={locationName || ''} // Set the title attribute to the location name
        >
            <FaMapMarkedAlt size={24} /> {/* Use a map icon */}
        </button>
    );
};

export default LocationButton;
